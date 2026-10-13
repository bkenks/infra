# 01-01-02 Volume copies taken ahead of the Pkl cutover

2026-09-03 (evening, US Eastern). Every named volume in the runbook table
(`01-01-01-pkl-cutover-runbook.md`) was copied to its new name on the host that runs the
stack, following the runbook procedure: stop the stack's containers, run
`scripts/migrate_volumes.sh OLD=NEW …`, start the containers again. Each stack was down
for well under a minute. Old volumes were left in place; the running stacks (still the
`main` compose files) keep writing to them.

## What was copied

| host | stacks |
| --- | --- |
| biggy | tailscale-gw |
| bill | activepieces, coder, databasus, openhands, tailscale-gw |
| littlebuddy | docuseal, openproject, paperless, forgejo, woodpecker, postgres, tailscale-gw |
| paiki | tailscale-gw |
| rick | homarr, authentik, zerobyte, infisical, komodo, tailscale-gw |

`docker system df -v` sizes matched old and new for every pair. backrest is not deployed on
any host (littlebuddy holds unreferenced `backrest_*` volumes from an earlier placement), so
it was skipped.

## Data drift, and what to do at cutover

The copies are point-in-time. Anything written after 2026-09-03 lands in the old volume
only, so before merging `migration/pkl` each stack with live writes needs a fresh copy:
stop the stack, `docker volume rm` the new names, re-run `migrate_volumes.sh` with the same
pairs, then deploy. Stateless-ish stacks (tailscale-gw state, komodo keys, openproject
assets, woodpecker agent) will not have drifted meaningfully.

## Method notes

- `docker compose -p <project> start` without the compose file fails with
  `could not find secrets: not found` because the `secrets` provider service has no
  container. Stop and start by label instead:
  `docker ps -aq --filter label=com.docker.compose.project=<project>`, data stores first.
- ssh reaches every host over the host-level tailscaled (`tailscale0` on the host), so
  stopping the `tailscale-gw` container does not cut access. littlebuddy resolves as
  `lilbud.internal`; `controlplane.internal` is a CNAME for rick.

## Seen along the way

- homarr's `app` healthcheck execs `curl`, which the image does not ship; the container
  reports unhealthy on `main` and on this branch alike.
- Stale volumes with no readers: bill `code-server_{config,local}`; paiki `traefik_app`;
  littlebuddy `databasus_app`, `komodo_app`, `infisical_*`, `zerobyte_app`,
  `scriberr_*` (30 GB), `vikunja_db`, `backrest_*`; rick `databasus_app`, `grist_app`,
  `ts-dokr-gw_app`, `ts-gateway_app`.
