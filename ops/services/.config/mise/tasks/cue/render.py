#!/usr/bin/env -S uv run --script
#MISE description="Export every CUE stack to deploy/<name>/compose.yaml"
# /// script
# requires-python = ">=3.12"
# dependencies = []
# ///
import json
import subprocess
import sys
from pathlib import Path

DEPLOY_DIR = Path("deploy")
HEADER = "# GENERATED from CUE — DO NOT EDIT.\n"


def fail(message: str) -> None:
    sys.exit(f"cue:render: {message}")


def run(*args: str) -> str:
    result = subprocess.run(args, capture_output=True, text=True, check=False)
    if result.returncode != 0:
        fail(f"`{' '.join(args)}` failed:\n{result.stderr.strip()}")
    return result.stdout


def get_stack_names() -> list[str]:
    exported = run("cue", "export", "./stacks", "-e", "stacks", "--out", "json")
    return list(json.loads(exported))


def render_stack(name: str) -> None:
    stack_dir = DEPLOY_DIR / name
    if not stack_dir.is_dir():
        fail(f"stack '{name}' has no directory {stack_dir}")
    rendered = run("cue", "export", "./stacks", "-e", f'stacks["{name}"]', "--out", "yaml")
    compose_file = stack_dir / "compose.yaml"
    compose_file.write_text(f"{HEADER}{rendered}")
    run("docker", "compose", "-f", str(compose_file), "config", "--quiet", "--no-interpolate")


def check_no_orphans(names: list[str]) -> None:
    for compose_file in sorted(DEPLOY_DIR.glob("*/compose.yaml")):
        if compose_file.parent.name not in names:
            fail(f'{compose_file} has no stacks."{compose_file.parent.name}" in CUE')


def main() -> None:
    names = get_stack_names()
    for name in names:
        render_stack(name)
    check_no_orphans(names)


if __name__ == "__main__":
    main()
