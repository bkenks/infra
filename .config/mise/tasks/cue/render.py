#!/usr/bin/env -S uv run --script
#MISE description="Export every CUE stack to ops/services/out/<name>/compose.yaml"
# /// script
# requires-python = ">=3.12"
# dependencies = []
# ///
import subprocess
import sys
from pathlib import Path

SERVICES_DIR = Path("ops/services/out")


def fail(message: str) -> None:
    sys.exit(f"cue:render: {message}")


def run(*args: str) -> None:
    result = subprocess.run(args, capture_output=True, text=True, check=False)
    if result.returncode != 0:
        fail(f"`{' '.join(args)}` failed:\n{result.stderr.strip()}")


def get_compose_files() -> list[Path]:
    return sorted(SERVICES_DIR.glob("*/compose.yaml"))


def main() -> None:
    run("cue", "cmd", "render")
    for compose_file in get_compose_files():
        run("docker", "compose", "-f", str(compose_file), "config", "--quiet", "--no-interpolate")


if __name__ == "__main__":
    main()
