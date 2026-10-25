#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.12"
# dependencies = []
# ///
#MISE description="Stage, commit, and push everything"
#MISE alias="ship"
#USAGE arg "[message]" default="WIP" help="Commit message"

import os
import subprocess
import sys


def run_git(*args: str) -> None:
    subprocess.run(["git", *args], check=True)


def main() -> None:
    run_git("add", ".")
    run_git("commit", "-m", os.environ["usage_message"])
    run_git("push")


if __name__ == "__main__":
    try:
        main()
    except subprocess.CalledProcessError as error:
        sys.exit(error.returncode)
