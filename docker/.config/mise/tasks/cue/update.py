#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.12"
# ///
#MISE description="Vendor the pinned Compose spec and regenerate CUE from it"

import json
import subprocess
from pathlib import Path

SPEC = Path("vendor/compose-spec/schema/compose-spec.json")
SCHEMA_DIR = Path("schema/compose")
SERVICE_DEFINITIONS = ("container_spec", "workload_spec", "service")


def run(*command: str) -> None:
    subprocess.run(command, check=True)


def compose_service_keys(spec: dict) -> list[str]:
    definitions = spec["$defs"]
    keys = {
        key
        for name in SERVICE_DEFINITIONS
        for key in definitions[name].get("properties", {})
    }
    return sorted(keys)


def compose_service_keys_cue(keys: list[str]) -> str:
    return f'package compose\n\n#serviceKeys: "^({"|".join(keys)})$"'


def main() -> None:
    run("vendir", "sync", "-d", "vendor/compose-spec")
    run(
        "cue",
        "import",
        "-f",
        "-p",
        "compose",
        "-l",
        "#Compose:",
        "jsonschema:",
        str(SPEC),
        "-o",
        str(SCHEMA_DIR / "compose-spec_gen.cue"),
    )
    keys = compose_service_keys(json.loads(SPEC.read_text()))
    (SCHEMA_DIR / "service-keys.cue").write_text(compose_service_keys_cue(keys))


if __name__ == "__main__":
    main()
