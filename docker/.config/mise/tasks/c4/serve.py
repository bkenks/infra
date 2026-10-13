#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.12"
# ///
#MISE description = "Serve LikeC4 diagrams locally"

import os
import subprocess
import sys

PATHDIR_C4 = os.environ["PATHDIR_C4"]


def main() -> None:
    result = subprocess.run(["likec4", "serve", PATHDIR_C4], check=False)
    sys.exit(result.returncode)


if __name__ == "__main__":
    main()
