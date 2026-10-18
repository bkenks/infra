#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.12"
# ///
#MISE description = "Validate the CUE model and every docker stack"

import subprocess
import sys


def main() -> None:
    result = subprocess.run(["cue", "vet", "-c", "./model"], check=False)
    sys.exit(result.returncode)


if __name__ == "__main__":
    main()
