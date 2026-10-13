#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.12"
# ///
#MISE description = "Build the LikeC4 site and deploy it to Cloudflare"
#MISE depends = ["c4:build"]
import os
import subprocess
import sys

PATHDIR_C4 = os.environ["PATHDIR_C4"]


def main() -> None:
    result = subprocess.run(["wrangler", "deploy", "-c", f"{PATHDIR_C4}/wrangler.jsonc"], check=False)
    sys.exit(result.returncode)


if __name__ == "__main__":
    main()
