#!/usr/bin/env bash
# shellcheck disable=SC1090
# Wrapper Script for Fnox with 1Password credentials
# Usage:
#   `./wrap docker compose up -d`
#   `./wrap curl ...`
set -euo pipefail

OP_CREDS_ENV="/mnt/credentials/onepassword.env"

importOPCreds() {
  set -a; . "$OP_CREDS_ENV"; set +a
}

runCmdWithFnox() {
  exec fnox exec -- "$@"
}

importOPCreds
runCmdWithFnox "$@"