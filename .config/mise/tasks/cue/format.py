#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.14"
# ///
#MISE description = "Format all cue files"

import os
import subprocess
import sys

def main() -> None:
    result = subprocess.run(["cue", "fmt", "./..."], check=False)
    sys.exit(result.returncode)


if __name__ == "__main__":
    main()
