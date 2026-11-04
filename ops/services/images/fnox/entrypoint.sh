#!/bin/sh
set -eu
umask 077
[ -f "$1" ] || { echo "script not found: $1" >&2; exit 1; }
exec sh "$@"