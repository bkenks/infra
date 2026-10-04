#!/usr/bin/env bash
# Runs paperless-ngx's document_exporter against the running stack, per
# https://docs.paperless-ngx.com/administration/#exporter — an incremental export into the
# `export` bind mount, safe to point rsync or a file-level backup tool at.
set -euo pipefail

readonly DOCKER="${DOCKER:-docker}"
readonly CONTAINER="${PAPERLESS_CONTAINER:-paperless-app}"
readonly STACK_DIR="${PAPERLESS_STACK_DIR:-/srv/docker/bind-mounts/apps/paperless}"
readonly EXPORT_DIR_HOST="${PAPERLESS_EXPORT_DIR:-$STACK_DIR/export}"
readonly VERSION_STAMP="${PAPERLESS_VERSION_STAMP:-$STACK_DIR/paperless-version.txt}"
readonly EXPORT_DIR_CONTAINER="/usr/src/paperless/export"
readonly MANAGE_PY="/usr/src/paperless/src/manage.py"
readonly LOCK_FILE="${PAPERLESS_BACKUP_LOCK:-/run/lock/paperless-backup.lock}"

die() {
  echo "paperless-backup: $*" >&2
  exit 1
}

log() {
  echo "paperless-backup: $*"
}

acquire_lock() {
  exec 9>"$LOCK_FILE"
  flock --nonblock 9 || die "another backup already holds $LOCK_FILE"
}

assert_container_running() {
  local state
  state="$("$DOCKER" inspect --format '{{.State.Status}}' "$CONTAINER" 2>/dev/null)" ||
    die "container $CONTAINER not found; is the paperless stack deployed?"
  [ "$state" = "running" ] ||
    die "container $CONTAINER is $state, expected running"
}

count_active_tasks() {
  "$DOCKER" exec "$CONTAINER" python3 "$MANAGE_PY" shell -c \
    'from documents.models import PaperlessTask; print(PaperlessTask.objects.filter(status__in=["PENDING", "STARTED"]).count())' |
    tail -n 1
}

assert_no_active_tasks() {
  local active
  active="$(count_active_tasks)" || die "could not read the paperless task queue"
  [ "$active" = "0" ] ||
    die "$active paperless task(s) pending or running; wait for consumption to finish, or set PAPERLESS_BACKUP_FORCE=1"
}

get_paperless_version() {
  "$DOCKER" exec "$CONTAINER" python3 -c \
    "import sys; sys.path.insert(0, '/usr/src/paperless/src'); from paperless.version import __full_version_str__ as v; print(v)"
}

get_image_digest() {
  local image_id
  image_id="$("$DOCKER" inspect --format '{{.Image}}' "$CONTAINER")"
  "$DOCKER" inspect --format '{{if .RepoDigests}}{{index .RepoDigests 0}}{{else}}{{.Id}}{{end}}' "$image_id"
}

export_documents() {
  "$DOCKER" exec "$CONTAINER" document_exporter "$EXPORT_DIR_CONTAINER" \
    --compare-checksums \
    --delete \
    --split-manifest \
    --no-progress-bar
}

write_version_stamp() {
  local version digest
  version="$(get_paperless_version)"
  digest="$(get_image_digest)"
  cat >"$VERSION_STAMP" <<STAMP
exported_at=$(date --iso-8601=seconds)
paperless_version=$version
image=$digest
STAMP
  log "paperless $version ($digest)"
}

main() {
  command -v "$DOCKER" >/dev/null || die "$DOCKER not found on PATH"
  acquire_lock
  assert_container_running
  [ "${PAPERLESS_BACKUP_FORCE:-}" = "1" ] || assert_no_active_tasks
  mkdir -p "$EXPORT_DIR_HOST"
  log "exporting to $EXPORT_DIR_HOST"
  export_documents
  write_version_stamp
  log "done"
}

main "$@"
