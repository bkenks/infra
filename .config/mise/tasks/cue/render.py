#!/usr/bin/env -S uv run --script
#MISE description="Export every CUE stack to ops/services/<segments>/compose.yaml"
# /// script
# requires-python = ">=3.12"
# dependencies = []
# ///
import subprocess
import sys
from pathlib import Path

STACK_DIR = Path("model/stack")
SERVICES_DIR = Path("ops/services/stack")


def fail(message: str) -> None:
    sys.exit(f"cue:render: {message}")


def run(*args: str) -> None:
    result = subprocess.run(args, capture_output=True, text=True, check=False)
    if result.returncode != 0:
        fail(f"`{' '.join(args)}` failed:\n{result.stderr.strip()}")


def get_compose_files() -> list[Path]:
    return [
        SERVICES_DIR.joinpath(*stack_file.stem.split("."), "compose.yaml")
        for stack_file in sorted(STACK_DIR.glob("*.cue"))
    ]


def main() -> None:
    run("cue", "cmd", "render")
    for compose_file in get_compose_files():
        run("docker", "compose", "-f", str(compose_file), "config", "--quiet", "--no-interpolate")


if __name__ == "__main__":
    main()
