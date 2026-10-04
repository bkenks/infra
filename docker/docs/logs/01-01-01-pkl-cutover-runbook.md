# 01-01-01 Pkl cutover runbook

Written 2026-09-03, when every stack was ported on branch `migration/pkl` but nothing had
been redeployed. Merging to `main` makes Komodo redeploy every stack it tracks, so the
steps below run per stack, before the merge, on the host that runs it.

## What changes on deploy

- Every container recreates (new `hostname`, long-form compose).
- Renamed services get new container names; volumes get new names (table below).
- `file-browser-quantum` changes its compose `name` from `file-brws-quantm`; its private
  bridge is recreated under the new name.

## Per-stack volume copies

Copies were taken once on 2026-09-03 (see `01-01-02-volume-copies.md`); they must be
refreshed at cutover because the running stacks keep writing to the old names.

Run on the host as root with the stack stopped (Komodo: Stop; Ansible-deployed stacks:
`docker compose down`), then deploy the new `compose.yaml`, verify the app, and only then
`docker volume rm` the old names. `scripts/migrate_volumes.sh OLD=NEW …` does the copy and
refuses to overwrite an existing target.

| stack (host) | pairs |
| --- | --- |
| activepieces (bill) | `activepieces_db=activepieces-db_data activepieces_cache=activepieces-cache_data activepieces_engine=activepieces-app_engine` |
| docuseal (littlebuddy) | `docuseal_app=docuseal-app_data` |
| openproject (littlebuddy) | `openproject_assets=openproject-web_assets` |
| paperless (littlebuddy) | `paperless_db=paperless-db_data paperless_broker=paperless-cache_data paperless_webserver_data=paperless-app_data paperless_webserver_media=paperless-app_media` |
| postgres (littlebuddy) | `postgres_db=postgres-db_data` |
| forgejo (littlebuddy) | `forgejo_db=forgejo-db_data forgejo_server=forgejo-server_data` |
| woodpecker (littlebuddy) | `woodpecker_server=woodpecker-server_data woodpecker_agent=woodpecker-agent_data` |
| homarr (rick) | `homarr_app=homarr-app_data` |
| authentik (rick) | `authentik_db=authentik-db_data authentik_data=authentik-app_data` |
| zerobyte (rick) | `zerobyte_app=zerobyte-app_data` |
| infisical (rick) | `infisical_db=infisical-db_data infisical_redis=infisical-cache_data` |
| databasus (bill) | `databasus_app=databasus-app_data` |
| coder (bill) | `coder_app-home=coder-app_home coder_db-data=coder-db_data` |
| openhands (bill) | `openhands_home=openhands-app_home` |
| tailscale-gw (every host) | `tailscale-gw_app=tailscale-gw-app_state` |
| komodo (control plane) | `komodo_app=komodo-app_keys` |
| backrest (wherever deployed) | `backrest_data=backrest-app_data backrest_config=backrest-app_config backrest_cache=backrest-app_cache backrest_tmp=backrest-app_tmp backrest_rclone=backrest-app_rclone` |

Stacks with only bind mounts (immich, stream, terraria, terraria-tshock,
file-browser-quantum, komodo-mcp, code-server, pangolin, traefik) need no copy.

## Service renames to carry into other systems

- Komodo stack `pangolin`: `ignore_services` was `["init"]`; the service is now `seeder`.
- `stream/configarr/config.yml` and `stream/decluttarr/config.yaml` already dial `tv` and
  `movies`; anything outside the repo that dialled `sonarr`/`radarr` by container name now
  finds `stream-tv`/`stream-movies`.
- immich's services are `app`, `db`, `ml`, `cache` (containers `immich-app`, …).
- paperless: `app`, `db`, `cache`, `converter`, `parser`.
- openproject: `scheduler`, `watchdog`, `collab` replace `cron`, `autoheal`, `hocuspocus`.
- infisical: `cache` replaces `redis` (container `infisical-cache`).
- `infra.ansible` `group_vars/all/roles.yml` still points at
  `container-manager/komodo/stack.jsonnet` in a comment.

## Order

1. Wave 1 (no volumes): terraria, terraria-tshock, file-browser-quantum, komodo-mcp,
   code-server, immich, stream, traefik.
2. Wave 2 (volumes): docuseal, activepieces, openproject, paperless, homarr, openhands,
   coder, forgejo, woodpecker, authentik, zerobyte, databasus, backrest.
3. Wave 3 (platform, one at a time): postgres, tailscale-gw, infisical, komodo, pangolin.
