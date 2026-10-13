#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.12"
# ///
#MISE description = "Build the LikeC4 site into docs/c4/dist"

import os
import subprocess
import sys

PATHDIR_C4 = os.environ["PATHDIR_C4"]


def main() -> None:
    result = subprocess.run(["likec4", "build", "-o", f"{PATHDIR_C4}/dist", f"{PATHDIR_C4}/diagram"], check=False)
    sys.exit(result.returncode)


if __name__ == "__main__":
    main()
