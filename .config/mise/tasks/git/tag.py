#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.12"
# dependencies = []
# ///
#MISE description="Create or delete a git version tag, optionally pushing to remote"
#MISE alias="tag"
#USAGE arg "<version>" help="Raw semver version (e.g. 1.2.3), without prefix or suffix"
#USAGE arg "[message]" help="Tag message (required when creating)"
#USAGE flag "-d --delete" help="Delete version"
#USAGE flag "-p --push" help="Push to remote"

import os
import subprocess
import sys

VERSION_PREFIX = "v"
VERSION_SUFFIX = ""


def is_usage_flag_set(name: str) -> bool:
    return os.environ.get(f"usage_{name}") == "true"


def run_git(*args: str) -> None:
    subprocess.run(["git", *args], check=True)


def delete_tag(tag: str, should_push: bool) -> None:
    run_git("tag", "-d", tag)
    if should_push:
        run_git("push", "origin", "--delete", f"refs/tags/{tag}")


def create_tag(tag: str, message: str, should_push: bool) -> None:
    if not message:
        sys.exit(f"git:tag: a tag message is required to create {tag}")
    run_git("tag", "-a", tag, "-m", message)
    if should_push:
        run_git("push", "origin", f"refs/tags/{tag}")


def main() -> None:
    tag = f"{VERSION_PREFIX}{os.environ['usage_version']}{VERSION_SUFFIX}"
    should_push = is_usage_flag_set("push")
    if is_usage_flag_set("delete"):
        delete_tag(tag, should_push)
    else:
        create_tag(tag, os.environ.get("usage_message", ""), should_push)


if __name__ == "__main__":
    try:
        main()
    except subprocess.CalledProcessError as error:
        sys.exit(error.returncode)
