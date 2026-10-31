"""Digital twin of the Wobi owl, with wheels hidden in its feet.

No learning: differential drive for moving, and a waddle drawn from simple sine waves so
the body sways like a penguin while the wheels do the work. Same Command/State as DuckTwin.
"""

from __future__ import annotations

import mujoco
import numpy as np

from .twin import ROOT, SIM_DT, Command, State

MODEL = ROOT / "models" / "wobi_wheels" / "wobi_wheels.xml"

WHEEL_RADIUS = 0.03  # m
TRACK = 0.1  # m, distance between the wheels
MAX_SPEED = 0.3  # m/s
MAX_TURN = 2.0  # rad/s
STEP_LENGTH = 0.2  # m travelled per sway to one side: sets the waddle rhythm (too fast and it rocks over)
SWAY = 0.15  # rad, body roll at full waddle
LEAN = 0.12  # rad, forward lean at full speed
SMOOTHING = 0.05  # s, time constant of the servo targets
MAX_ACCEL = 0.5  # m/s², so it never tips over when starting or stopping
MAX_TURN_ACCEL = 4.0  # rad/s²
MAX_LATERAL_ACCEL = 0.3  # m/s², slows down in tight fast curves

# Line colours from the site (src/styles/global.css), as RGB 0-1.
def _hex(h: str) -> list[float]:
    return [int(h[i : i + 2], 16) / 255 for i in (1, 3, 5)] + [1.0]


LINES = {
    "care": {"main": "#ff6b4a", "deep": "#e04f2f", "accent": "#ffd1c4", "tip_alt": "#ffd1c4", "beak": "#ff8a3d"},
    "guard": {"main": "#3d8bff", "deep": "#1f63d6", "accent": "#ffb627", "tip_alt": "#ffb627", "beak": "#ff8a3d"},
    "play": {"main": "#ffb627", "deep": "#e08e00", "accent": "#ff6b4a", "tip_alt": "#3d8bff", "beak": "#ff6b4a"},
}


class WobiWheelsTwin:
    def __init__(self, line: str = "care"):
        self.line = line
        self.model = mujoco.MjModel.from_xml_path(str(MODEL))
        self._dress(line)
        self.model.opt.timestep = SIM_DT
        self.data = mujoco.MjData(self.model)
        self.actuator_names = [self.model.actuator(i).name for i in range(self.model.nu)]
        self._ctrl = {n: i for i, n in enumerate(self.actuator_names)}
        self._qpos_addr = {
            n: self.model.joint(n).qposadr[0] for n in self.actuator_names
        }
        self._chassis = self.model.body("chassis").id
        self._wheels = {self.model.body("wheel_left").id, self.model.body("wheel_right").id}
        self._floor = self.model.geom("floor").id
        self.command = Command()
        self.reset()

    def _dress(self, line: str) -> None:
        """Paint the owl in its line's colours and keep only that line's ears."""
        for material, colour in LINES[line].items():
            self.model.mat_rgba[self.model.material(material).id] = _hex(colour)
        for g in range(self.model.ngeom):
            name = self.model.geom(g).name
            if name.startswith("ear_") and not name.startswith(f"ear_{line}_"):
                self.model.geom_matid[g] = -1
                self.model.geom_rgba[g] = [0, 0, 0, 0]

    def reset(self) -> None:
        mujoco.mj_resetData(self.model, self.data)
        mujoco.mj_forward(self.model, self.data)
        self.phase = 0.0
        self.targets = np.zeros(4)  # body_roll, body_pitch, head_yaw, head_pitch
        self.vx = 0.0
        self.wz = 0.0

    def step(self) -> None:
        c = self.command
        # Ramp towards the commanded speeds instead of jumping to them.
        self.vx += np.clip(np.clip(c.vx, -MAX_SPEED, MAX_SPEED) - self.vx, -MAX_ACCEL * SIM_DT, MAX_ACCEL * SIM_DT)
        self.wz += np.clip(np.clip(c.wz, -MAX_TURN, MAX_TURN) - self.wz, -MAX_TURN_ACCEL * SIM_DT, MAX_TURN_ACCEL * SIM_DT)
        vx, wz = float(self.vx), float(self.wz)
        if abs(vx * wz) > MAX_LATERAL_ACCEL:
            vx = float(np.sign(vx)) * MAX_LATERAL_ACCEL / abs(wz)

        # Differential drive: body speed and turn rate -> wheel speeds (rad/s).
        left = (vx - wz * TRACK / 2) / WHEEL_RADIUS
        right = (vx + wz * TRACK / 2) / WHEEL_RADIUS
        self.data.ctrl[self._ctrl["wheel_left"]] = left
        self.data.ctrl[self._ctrl["wheel_right"]] = right

        # Waddle: one sway per step length travelled, bigger when going faster.
        travel = abs(vx) + abs(wz) * TRACK / 2
        self.phase += np.pi * travel * SIM_DT / STEP_LENGTH
        effort = min(1.0, abs(vx) / MAX_SPEED * 2) * (1 - min(1.0, abs(wz) / MAX_TURN))
        wanted = np.array(
            [
                SWAY * effort * np.sin(self.phase),
                LEAN * vx / MAX_SPEED,
                c.head_yaw + 0.3 * wz,  # look into the turn
                c.head_pitch,
            ]
        )
        self.targets += (wanted - self.targets) * min(1.0, SIM_DT / SMOOTHING)
        for name, target in zip(["body_roll", "body_pitch", "head_yaw", "head_pitch"], self.targets):
            self.data.ctrl[self._ctrl[name]] = target

        mujoco.mj_step(self.model, self.data)

    def run_for(self, seconds: float, on_step=None) -> None:
        for _ in range(int(seconds / SIM_DT)):
            self.step()
            if on_step:
                on_step(self)

    def _wheels_contact(self) -> tuple[bool, bool]:
        touching = set()
        for c in self.data.contact[: self.data.ncon]:
            if self._floor in (c.geom1, c.geom2):
                touching.add(self.model.geom_bodyid[c.geom1 if c.geom2 == self._floor else c.geom2])
        left, right = sorted(self._wheels)
        return left in touching, right in touching

    def state(self) -> State:
        quat = self.data.xquat[self._chassis]
        upright = float(1 - 2 * (quat[1] ** 2 + quat[2] ** 2))
        return State(
            time=round(float(self.data.time), 3),
            position=[round(float(v), 4) for v in self.data.xpos[self._chassis]],
            orientation_wxyz=[round(float(v), 4) for v in quat],
            joints={n: round(float(self.data.qpos[a]), 4) for n, a in self._qpos_addr.items()},
            feet_contact=self._wheels_contact(),
            upright=round(upright, 3),
            fallen=upright < 0.5,
        )
