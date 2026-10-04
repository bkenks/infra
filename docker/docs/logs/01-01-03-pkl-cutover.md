# 01-01-03 Pkl cutover

2026-09-03 late evening into 2026-09-04 (US Eastern). `migration/pkl` was merged to `main`
(fast-forward, 389b91f) and every Komodo stack was redeployed from it. Two bugs in the
port surfaced only on the hosts and were fixed on `main` mid-cutover.

## What went wrong

- **Shared network names.** The registry named external networks `shared__db_001` and
  `shared__tailscale_gw_001`; the networks terraform creates are `db_001` and
  `tailscale_gw_001`. Every stack on a shared network failed to start. Fixed in 3b9b034
  (`SharedNetwork` now carries the real name). Because Forgejo was one of those stacks and
  Komodo pulled the repo from it, the fix could not be deployed until Forgejo was brought
  up by hand on littlebuddy. The repo origin and Komodo's repo now point at GitHub.
- **hostname with `network_mode: service:…`.** pkl-compose defaults every service's
  `hostname` to its role; Docker rejects that on a container sharing another's network
  namespace. Pangolin's `proxy` (traefik) failed with `conflicting options: hostname and
  the network mode`, taking the edge down until 5f4b29a set `hostname = null`. pkl-compose
  should skip that default when `network_mode` is `service:` or `container:`.
- **Volume drift.** The pre-cutover copies (01-01-02) were refreshed once before the
  merge and again per stack right before each deploy, from the old volume, because every
  stack kept writing to the old name until its own redeploy. Forgejo was redeployed once
  on a copy that predated a push; it was rebuilt from the old volumes and the push redone.

## Deploy path

Komodo's push webhook never fired; every deploy was triggered by hand (Komodo MCP,
Execute permission). Stacks whose service keys changed and that lacked
`destroy_before_deploy` (immich, stream, paperless) were destroyed first so the old-name
containers released their ports. Order: terraria, fbq, komodo-mcp, immich, stream; then
docuseal, activepieces, openproject, paperless, homarr, openhands, coder, forgejo,
woodpecker, authentik, zerobyte, databasus; then postgres, the five tailscale-gw stacks,
pangolin, forgejo (Komodo sync).

## Not cut over

- **infisical**: Komodo's env for the stack sets `ANSIBLE_SECRETS_FILE` to a bootstrap
  file that no longer exists on rick, so `docker compose config` fails. Redeploy it through
  `infra.ansible` (which writes that file), after refreshing `infisical_db` and
  `infisical_redis` into `infisical-db_data` / `infisical-cache_data`.
- **komodo core**: Ansible-deployed. Same refresh of `komodo_app` into `komodo-app_keys`
  first.
- **code-server**: was down before the cutover; left down.

## Follow-ups

- Komodo `ignore_services`: pangolin `init` to `seeder`; stream `configarr` to `seeder`.
  Until then both stacks show unhealthy because the seeder exits 0.
- Old volumes still exist on every host; remove them once each app is verified against
  its data (`docker volume rm` list in 01-01-01).
- pkl-compose 0.2.1: no hostname default under `network_mode: service:`/`container:`;
  `Port.host_ip` null default.
- homarr healthcheck execs `curl`, absent from the image; unhealthy before and after.
