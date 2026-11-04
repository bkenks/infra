#!/bin/sh
set -eu
umask 077

out=/secrets/encryption_key

key=$(fnox get ENC_KEY)             # set -e exits here on failure
[ -n "$key" ] || { echo "ENC_KEY empty" >&2; exit 1; }

printf '%s' "$key" > "$out"
chown 1000:1000 "$out"
chmod 400 "$out"

cat "$out"