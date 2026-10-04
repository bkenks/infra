#!/usr/bin/env bash
# Copy named docker volumes to new names on the host this runs on.
#
#   migrate_volumes.sh OLD=NEW [OLD=NEW ...]
#
# Run on the host, with the stack stopped, before deploying a compose file that names the
# new volumes. Every pair is copied before any is reported, and nothing is deleted: remove
# the old volumes by hand once the redeployed stack has been verified against its data.
set -euo pipefail

[ "$#" -gt 0 ] || { echo "usage: $0 OLD=NEW [OLD=NEW ...]" >&2; exit 2; }

for pair in "$@"; do
  case "$pair" in
    *=*) ;;
    *) echo "migrate_volumes: '$pair' is not OLD=NEW" >&2; exit 2 ;;
  esac
  old="${pair%%=*}"
  new="${pair#*=}"
  docker volume inspect "$old" >/dev/null 2>&1 || { echo "migrate_volumes: volume '$old' does not exist" >&2; exit 1; }
  if docker volume inspect "$new" >/dev/null 2>&1; then
    echo "migrate_volumes: volume '$new' already exists; refusing to overwrite" >&2
    exit 1
  fi
done

for pair in "$@"; do
  old="${pair%%=*}"
  new="${pair#*=}"
  docker volume create "$new" >/dev/null
  docker run --rm -v "$old:/from:ro" -v "$new:/to" alpine:3.20 sh -c 'cp -a /from/. /to/'
  echo "copied $old -> $new"
done

echo "verify the redeployed stack, then: docker volume rm ${*%%=*}" >&2
