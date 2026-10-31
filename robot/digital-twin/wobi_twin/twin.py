"""Digital twin of the Wobi base platform (Open Duck Mini v2 legs).

Standalone port of the MuJoCo inference loop from Open_Duck_Playground
(Apache 2.0, Antoine Pirrone and Steve Nguyen): no JAX needed, runs on a laptop CPU.
The same `Command` drives the simulation here and, later, the real robot runtime.
"""

from __future__ import annotations

import pickle
from dataclasses import dataclass, field
from pathlib import Path

import mujoco
import numpy as np
import onnxruntime

ROOT = Path(__file__).resolve().parent.parent
MODELS = ROOT / "models" / "open_duck_mini_v2"
POLICIES = ROOT / "policies"

SCENES = {
    "flat": MODELS / "scene_flat_terrain.xml",
    "flat_backlash": MODELS / "scene_flat_terrain_backlash.xml",
}

# Command limits the walking policy was trained on.
VX_RANGE = (-0.15, 0.15)  # m/s
VY_RANGE = (-0.2, 0.2)  # m/s
WZ_RANGE = (-1.0, 1.0)  # rad/s

SIM_DT = 0.002  # 500 Hz physics
DECIMATION = 10  # 50 Hz policy
ACTION_SCALE = 0.25
DOF_VEL_SCALE = 0.05
MAX_MOTOR_VELOCITY = 5.24  # rad/s, Feetech STS3215


@dataclass
class Command:
    """What we ask the robot to do: body velocity plus head pose."""

    vx: float = 0.0
    vy: float = 0.0
    wz: float = 0.0
    neck_pitch: float = 0.0
    head_pitch: float = 0.0
    head_yaw: float = 0.0
    head_roll: float = 0.0

    def as_array(self) -> np.ndarray:
        return np.array(
            [
                np.clip(self.vx, *VX_RANGE),
                np.clip(self.vy, *VY_RANGE),
                np.clip(self.wz, *WZ_RANGE),
                self.neck_pitch,
                self.head_pitch,
                self.head_yaw,
                self.head_roll,
            ]
        )


@dataclass
class State:
    """Snapshot of the twin, shaped like the telemetry the real robot will send."""

    time: float
    position: list[float]
    orientation_wxyz: list[float]
    joints: dict[str, float]
    feet_contact: tuple[bool, bool]
    upright: float
    fallen: bool
    extra: dict = field(default_factory=dict)


class DuckTwin:
    def __init__(
        self,
        scene: str = "flat",
        policy: Path = POLICIES / "open_duck_walk.onnx",
        reference_motion: Path = POLICIES / "reference_motion.pkl",
    ):
        self.model = mujoco.MjModel.from_xml_path(str(SCENES[scene]))
        self.model.opt.timestep = SIM_DT
        self.data = mujoco.MjData(self.model)

        self.actuator_names = [self.model.actuator(i).name for i in range(self.model.nu)]
        self._qpos_addr = np.array(
            [self.model.joint(n).qposadr[0] for n in self.actuator_names]
        )
        self._qvel_addr = np.array(
            [self.model.joint(n).dofadr[0] for n in self.actuator_names]
        )
        self._gyro = self._sensor_slice("gyro")
        self._accel = self._sensor_slice("accelerometer")
        self._floor = self.model.body("floor").id
        self._feet = (
            self.model.body("foot_assembly").id,
            self.model.body("foot_assembly_2").id,
        )
        self._trunk = self.model.body("trunk_assembly").id

        self.policy = onnxruntime.InferenceSession(
            str(policy), providers=["CPUExecutionProvider"]
        )
        with open(reference_motion, "rb") as f:
            ref = next(iter(pickle.load(f).values()))
        self.steps_in_period = int(ref["period"] * ref["fps"])

        self.command = Command()
        self.reset()

    def _sensor_slice(self, name: str) -> slice:
        sensor = self.model.sensor(name)
        return slice(sensor.adr[0], sensor.adr[0] + sensor.dim[0])

    def reset(self) -> None:
        mujoco.mj_resetDataKeyframe(self.model, self.data, self.model.key("home").id)
        mujoco.mj_forward(self.model, self.data)
        self.default_ctrl = self.model.key("home").ctrl.copy()
        self.motor_targets = self.default_ctrl.copy()
        self.actions = [np.zeros(self.model.nu) for _ in range(3)]
        self.phase_i = 0.0
        self._steps = 0

    def _feet_contacts(self) -> np.ndarray:
        touching = [False, False]
        for c in self.data.contact[: self.data.ncon]:
            bodies = {self.model.geom_bodyid[c.geom1], self.model.geom_bodyid[c.geom2]}
            if self._floor in bodies:
                for k, foot in enumerate(self._feet):
                    if foot in bodies:
                        touching[k] = True
        return np.array(touching, dtype=float)

    def _observation(self) -> np.ndarray:
        accel = self.data.sensordata[self._accel].copy()
        accel[0] += 1.3  # same offset the policy was trained with
        angle = self.phase_i / self.steps_in_period * 2 * np.pi
        return np.concatenate(
            [
                self.data.sensordata[self._gyro],
                accel,
                self.command.as_array(),
                self.data.qpos[self._qpos_addr] - self.default_ctrl,
                self.data.qvel[self._qvel_addr] * DOF_VEL_SCALE,
                *self.actions,
                self.motor_targets,
                self._feet_contacts(),
                [np.cos(angle), np.sin(angle)],
            ]
        ).astype(np.float32)

    def _control(self) -> None:
        self.phase_i = (self.phase_i + 1) % self.steps_in_period
        action = self.policy.run(None, {"obs": [self._observation()]})[0][0]
        self.actions = [action.copy(), self.actions[0], self.actions[1]]
        targets = self.default_ctrl + action * ACTION_SCALE
        max_step = MAX_MOTOR_VELOCITY * SIM_DT * DECIMATION
        self.motor_targets = np.clip(
            targets, self.motor_targets - max_step, self.motor_targets + max_step
        )
        self.data.ctrl[:] = self.motor_targets

    def step(self) -> None:
        """Advance one physics step (2 ms); the policy runs every 10th step."""
        if self._steps % DECIMATION == 0:
            self._control()
        mujoco.mj_step(self.model, self.data)
        self._steps += 1

    def run_for(self, seconds: float, on_step=None) -> None:
        for _ in range(int(seconds / SIM_DT)):
            self.step()
            if on_step:
                on_step(self)

    def state(self) -> State:
        quat = self.data.xquat[self._trunk]
        # z component of the trunk's up axis: 1 = upright, 0 = lying down
        upright = float(1 - 2 * (quat[1] ** 2 + quat[2] ** 2))
        return State(
            time=round(float(self.data.time), 3),
            position=[round(float(v), 4) for v in self.data.xpos[self._trunk]],
            orientation_wxyz=[round(float(v), 4) for v in quat],
            joints={
                n: round(float(self.data.qpos[a]), 4)
                for n, a in zip(self.actuator_names, self._qpos_addr)
            },
            feet_contact=tuple(bool(v) for v in self._feet_contacts()),
            upright=round(upright, 3),
            fallen=upright < 0.5,
        )
