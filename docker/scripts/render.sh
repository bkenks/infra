#!/usr/bin/env bash
# Render every src/**/stack.pkl into the files it names, beside itself.
#
# Prints every owned path (written or removed) on stdout so a hook can `git add` them.
# Refuses to overwrite a hand-written YAML file sitting beside a stack, and removes
# files that carry the GENERATED header but were not produced by this run.
set -euo pipefail

cd "$(dirname "$0")/.."

header='# GENERATED from stack.pkl — DO NOT EDIT.'

entrypoints=$(fd --glob stack.pkl src --exclude lib | sort)
[ -n "$entrypoints" ] || { echo "render: no src/**/stack.pkl found" >&2; exit 1; }

previously_owned=$(
  for candidate in $(fd --extension yaml --extension yml . src --exclude lib); do
    if [ "$(head -n 1 "$candidate")" = "$header" ]; then echo "$candidate"; fi
  done | sort
)

for entrypoint in $entrypoints; do
  for existing in "$(dirname "$entrypoint")"/*.yaml "$(dirname "$entrypoint")"/*.yml; do
    [ -f "$existing" ] || continue
    head -n 1 "$existing" | grep -q '^# GENERATED' || {
      echo "render: $existing is hand-written and sits where a stack renders; refusing to overwrite" >&2
      exit 1
    }
  done
done

# shellcheck disable=SC2086 # entrypoints are one path per line, none with whitespace
written=$(pkl eval --project-dir . -m '%{moduleDir}' $entrypoints | sort)

stale=$(comm -23 <(printf '%s\n' "$previously_owned") <(printf '%s\n' "$written") | sed '/^$/d')
for path in $stale; do
  trash "$path"
done

printf '%s\n' "$written" "$stale" | sed '/^$/d'
echo "render: $(printf '%s\n' "$written" | sed '/^$/d' | wc -l | tr -d ' ') written, $(printf '%s\n' "$stale" | sed '/^$/d' | wc -l | tr -d ' ') removed" >&2
