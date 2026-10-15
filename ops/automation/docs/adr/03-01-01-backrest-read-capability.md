# Backrest read capability

## Context

The upstream install script runs Backrest as the connecting user, not root. Restic runs as a child of Backrest, so it cannot read paths that only root can read. Docker keeps named volumes under a directory that only root can enter, so a plan that backs up a volume fails.

## Decision

Add a systemd drop-in that sets `AmbientCapabilities=CAP_DAC_READ_SEARCH` on the Backrest service. The capability lets the service and every process it starts read any file and list any directory. It grants no write access and no other root powers.

Running the service as root was rejected. It would give Backrest, its web UI and every hook command full root access, when backups only need to read.

## Consequences

- Restic can back up Docker volumes and other root-owned paths with no further setup.
- Hook commands still run as the connecting user. A hook that needs more than read access, such as stopping a Compose project, relies on that user's own permissions, for example membership in the `docker` group.
- The drop-in sits beside the unit the install script writes, so reinstalling Backrest leaves it in place.
