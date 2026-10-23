"""Wobi digital twin: entry point.

  python run.py view                 interactive 3D window, drive with the keyboard
  python run.py record -o demo.mp4   headless video of a scripted mission
  python run.py test                 smoke test: stands, walks, turns, never falls
"""

import argparse
import json
import sys
import time

import mujoco
import numpy as np

from wobi_twin.twin import SIM_DT, VX_RANGE, VY_RANGE, WZ_RANGE, Command, DuckTwin

# Scripted mission: (seconds, command, label). Patrol-style loop.
MISSION = [
    (2.0, Command(), "stand"),
    (5.0, Command(vx=0.15), "walk forward"),
    (3.0, Command(wz=1.0), "turn left"),
    (2.5, Command(head_yaw=1.0), "look left"),
    (2.5, Command(head_yaw=-1.0), "look right"),
    (5.0, Command(vx=0.15), "walk back"),
    (2.0, Command(vy=0.2), "side step"),
]


def view(args):
    import mujoco.viewer

    twin = DuckTwin(args.scene)
    head_mode = False

    def on_key(key):
        nonlocal head_mode
        c = Command()
        if key == ord("H"):
            head_mode = not head_mode
        arrows = {265: (1, 0), 264: (-1, 0), 263: (0, 1), 262: (0, -1)}
        if key in arrows:
            fwd, side = arrows[key]
            if head_mode:
                c.head_pitch, c.head_yaw = 0.6 * fwd, 1.0 * side
            else:
                c.vx, c.vy = VX_RANGE[1] * fwd, VY_RANGE[1] * side
        if key == ord("Q"):
            c.wz = WZ_RANGE[1]
        if key == ord("E"):
            c.wz = WZ_RANGE[0]
        if key == ord("R"):
            twin.reset()
        twin.command = c

    print("Arrows: walk | Q/E: turn | H: toggle head mode | R: reset | space: stop")
    with mujoco.viewer.launch_passive(twin.model, twin.data, key_callback=on_key) as v:
        while v.is_running():
            start = time.time()
            twin.step()
            v.sync()
            time.sleep(max(0.0, SIM_DT - (time.time() - start)))


def record(args):
    import imageio.v2 as imageio

    twin = DuckTwin(args.scene)
    twin.model.vis.global_.offwidth = max(args.width, twin.model.vis.global_.offwidth)
    twin.model.vis.global_.offheight = max(args.height, twin.model.vis.global_.offheight)
    renderer = mujoco.Renderer(twin.model, args.height, args.width)
    camera = mujoco.MjvCamera()
    camera.type = mujoco.mjtCamera.mjCAMERA_TRACKING
    camera.trackbodyid = twin.model.body("trunk_assembly").id
    camera.distance, camera.elevation, camera.azimuth = 0.9, -18, 135
    every = int(1 / (args.fps * SIM_DT))
    log = []

    with imageio.get_writer(args.output, fps=args.fps, quality=8) as video:
        for seconds, command, label in MISSION:
            twin.command = command
            for i in range(int(seconds / SIM_DT)):
                twin.step()
                if i % every == 0:
                    renderer.update_scene(twin.data, camera)
                    video.append_data(renderer.render())
            state = twin.state()
            log.append({"step": label, **state.__dict__})
            print(f"{label:<13} t={state.time:5.1f}s pos={state.position} fallen={state.fallen}")

    if args.telemetry:
        with open(args.telemetry, "w") as f:
            json.dump(log, f, indent=2)
    print(f"Saved {args.output}")


def test(args):
    twin = DuckTwin(args.scene)
    failures = []
    twin.run_for(2.0)
    if twin.state().fallen:
        failures.append("falls while standing")
    start = np.array(twin.state().position)
    twin.command = Command(vx=0.15)
    twin.run_for(6.0)
    walked = np.array(twin.state().position) - start
    if walked[0] < 0.3:
        failures.append(f"walked only {walked[0]:.2f} m forward in 6 s")
    twin.command = Command(wz=1.0)
    twin.run_for(4.0)
    if twin.state().fallen:
        failures.append("falls while turning")
    print("FAIL: " + "; ".join(failures) if failures else f"OK: walked {walked[0]:.2f} m, turned, stayed upright")
    return 1 if failures else 0


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("mode", choices=["view", "record", "test"])
    parser.add_argument("--scene", default="flat", choices=["flat", "flat_backlash"])
    parser.add_argument("-o", "--output", default="wobi_twin_demo.mp4")
    parser.add_argument("--telemetry", help="also write the mission's states as JSON")
    parser.add_argument("--width", type=int, default=960)
    parser.add_argument("--height", type=int, default=544)
    parser.add_argument("--fps", type=int, default=30)
    args = parser.parse_args()
    sys.exit({"view": view, "record": record, "test": test}[args.mode](args) or 0)


if __name__ == "__main__":
    main()
