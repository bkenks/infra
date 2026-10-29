# Compose stacks (`ops/services`)

Re-verified against `7479b64`. Stacks render to `ops/services/out/<name>/compose.yaml`, hand-maintained
config files live in `ops/services/configs/`, and every stack's secrets are in `ops/services/fnox.toml`
under a profile named after the stack directory, which `ops/services/wrap` selects. Paths are relative to
the repo root. Issues that originate in the CUE model are also listed in [01-model.md](01-model.md).

## High

1. **Komodo MongoDB is published on every interface.** STILL PRESENT.
   `ops/services/out/komodo/compose.yaml:74-75` publishes `"27017:27017"`. Core reaches the database by
   container name (`komodo-db:27017`) over the default network, so the host port isn't needed.

2. **Komodo Core is published on every interface, and anyone can sign up.** STILL PRESENT.
   - `ops/services/out/komodo/compose.yaml:51-52` publishes `"9120:9120"` on 0.0.0.0, and line 31 sets
     `KOMODO_DISABLE_USER_REGISTRATION: "false"`. New accounts do start disabled.
   - The port exists so komodo-mcp can reach Core through `host.docker.internal`. Both stacks now join
     `newt_gw_001`, so komodo-mcp could use `http://komodo-app:9120` on the same host and the published
     port could go.

3. **VictoriaLogs is published with no authentication.** STILL PRESENT.
   `ops/services/out/victorialogs/compose.yaml:23-24` publishes `"19428:9428"` on all interfaces. That port
   serves the query API and UI as well as ingest, so anyone who reaches it can read every container's stdout
   fleet-wide. `docs/adr/01-02-01-fleet-log-aggregation.md:11` says "the published port is for ingest only",
   which is wrong; the same ADR says these logs can contain tokens.

4. **WordPress is an unmodified sample with plaintext credentials.** STILL PRESENT.
   `ops/services/out/wordpress/compose.yaml:9-12,27-30` hardcodes `somewordpress` / `wordpress`. Line 31 uses
   `wordpress:latest`, line 13 an old `mariadb:10.6.4-focal`, and lines 36-37 publish `"80:80"` on all
   interfaces. It isn't on the newt gateway network and uses no `${VAR:?err}` secrets.

5. **gerbil binds host ports 22 and 80.** STILL PRESENT.
   `ops/services/out/pangolin/compose.yaml:63-70` publishes `80`, `443`, `22` and `18022`, with matching raw
   TCP entrypoints in `ops/services/configs/pangolin/traefik_config.yaml`. Port 22 conflicts with the edge
   host's sshd and exposes raw TCP 22 to the internet. Ansible moves sshd to 3204, but only once hardening
   has run. Port 80 also clashes with WordPress on the same host.

6. **Mesh and agent stacks have no fnox profile.** CHANGED, still broken.
   `ops/services/wrap` sets `FNOX_PROFILE` to the stack directory name, so these stacks look for `agent`,
   `tailscale-node`, `pangolin-client` and `pangolin-connector`. `ops/services/fnox.toml` has none of those.
   The values they need (`${HOST:?err}`, `TS_AUTHKEY`, `CLIENT_ID`/`CLIENT_SECRET`, `NEWT_ID`/`NEWT_SECRET`)
   live under the old `node` and `node-<host>` profiles. Deploying them through `wrap` fails interpolation.

7. **Host service accounts can't read the `infra` vault.** CHANGED.
   `ops/services/fnox.toml:5` uses `vault = "infra"` for every stack, but `ops/automation` grants host
   service accounts only `secrets:read_items`. Every stack's secret lookup fails. See
   [02-automation.md](02-automation.md), High 1.

## Medium

8. **Immich ML is likely unreachable.** STILL PRESENT.
   `ops/services/out/immich/compose.yaml:54-60` doesn't set `IMMICH_MACHINE_LEARNING_URL`. Immich defaults to
   `http://immich-machine-learning:3003`, but the container is `immich-ml`. Smart search and faces fail unless
   overridden in the admin UI. `http://immich-ml:3003` fits the container-name pattern the model now uses.

9. **Vector reads its own logs, and ships them to a legacy host.** STILL PRESENT.
   `ops/services/configs/agent/vector.yaml:5-6` excludes `node-log-agent`, but the container is
   `agent-log-agent` (`ops/services/out/agent/compose.yaml:7`). The sink at line 19 is
   `http://littlebuddy.internal:19428`, a host that isn't in `model/inventory`.

10. **komodo-mcp points at the wrong place for Core.** STILL PRESENT.
    `ops/services/out/komodo-mcp/compose.yaml:15` uses `KOMODO_URL: http://host.docker.internal:9120`, which
    only works if Core is on the same host. `docs/components/01-01-01-komodo.md:3` and
    `02-01-01-komodo-mcp.md:3` say both run on `littlebuddy`; the Pangolin doc puts the edge on `rick`.
    Neither name is in the current inventory.

11. **Komodo's first-server URL won't resolve.** STILL PRESENT.
    `ops/services/out/komodo/compose.yaml:25` sets `KOMODO_FIRST_SERVER: https://host.docker.internal:8120`,
    but the `app` service has no `extra_hosts: host.docker.internal:host-gateway`, which Linux needs.
    komodo-mcp has this entry; komodo does not.

12. **openseo runs with authentication disabled.** STILL PRESENT.
    `ops/services/out/openseo/compose.yaml:14` sets `AUTH_MODE: local_noauth`, and the app is published
    through Pangolin at `seo.ktbinternal.com`. Unless the Pangolin resource enforces SSO, anyone who reaches
    it can spend the paid DataForSEO and OpenRouter keys. `CRAWLER_ACCESS_SECRET` (line 22) has no entry in
    the `openseo` fnox profile.

13. **Duplicate DB passwords kept equal by hand.** STILL PRESENT. If a pair drifts, the app loses its
    database. Grist already uses one variable for both sides.
    - immich: `DB_PASSWORD` and `POSTGRES_PASSWORD`
    - paperless: `PAPERLESS_DBPASS` and `POSTGRES_PASSWORD`
    - komodo: `KOMODO_DATABASE_*` and `MONGO_INITDB_ROOT_*`

14. **Unpinned `latest` images.** STILL PRESENT. Renders aren't reproducible. For paperless, `backup.sh`
    exports only restore into the same version.
    - `ops/services/out/paperless/compose.yaml:122`: `paperless-ngx:latest`
    - `ops/services/out/paperless/compose.yaml:75`: `apache/tika:latest`
    - `ops/services/out/pangolin-client/compose.yaml:20`: `pangolin-cli:latest` (the connector is pinned)

15. **Databases are attached to the Tailscale gateway network.** STILL PRESENT. Confirm it's intended,
    for example for remote backups.
    - grist `db`: `ops/services/out/grist/compose.yaml:95-97`
    - paperless `db`: `ops/services/out/paperless/compose.yaml:54-56`
    - postgres: `ops/services/out/postgres/compose.yaml`

16. **Traefik's API is unauthenticated and TLS verification is off globally.** STILL PRESENT.
    `ops/services/configs/pangolin/traefik_config.yaml:1-3` sets `api.insecure: true`, serving the API and
    dashboard on :8080 to any container on the stack network. The `serversTransport` block sets
    `insecureSkipVerify: true` for every backend.

17. **Pangolin downloads GeoLite with no checksum.** STILL PRESENT.
    The `pre_start` script at `ops/services/out/pangolin/compose.yaml:38` pulls from the `master` branch of
    `GitSquared/node-geolite2-redist`. ADR 01-03-02 explicitly rejects "curl of a moving branch".

18. **Plex runs as root on the host network.** STILL PRESENT.
    `ops/services/out/stream/compose.yaml:85-86,102` sets `PUID`/`PGID` to `0` with `network_mode: host`.
    Every other linuxserver container in the stack uses 1000.

19. **Missing healthchecks and start ordering.** STILL PRESENT.
    Immich `db` and `cache` and Komodo `db` (Mongo) have no healthcheck, and their apps wait only for
    `service_started`, so they can start before the database accepts connections.

## Low

20. **ADR 01-03-02 describes a layout that doesn't exist.** STILL PRESENT.
    `docs/adr/01-03-02-stack-sources-apart-from-deploy-files.md:8-10,20,32-33` describes `deploy/<name>/`,
    `scripts/wrap` and `scripts/nodewrap`. The real layout is `ops/services/out/<name>/`,
    `ops/services/configs/<name>/` and a single `ops/services/wrap`.

21. **ADR 01-03-01 rejects the module the model imports.** STILL PRESENT.
    `docs/adr/01-03-01-stacks-in-one-cue-package.md:65` rejects `cue.dev/x/dockercompose`, but
    `model/service/service.cue:3` imports it. `01-01-01-stacks-in-pkl.md` has no "Superseded" status.

22. **`docs/index.md` is out of date.** CHANGED.
    - Line 4 says stacks render to `stack/<category>/<name>/compose.yaml` beside runtime files; they render
      to `ops/services/out/<name>/`, with runtime files in `ops/services/configs/`.
    - The layer table says `store` YAML is embedded into CUE; `store/*.yml` is now generated from CUE.
    - Line 32 says `vendor/`; from the repo root it is `ops/services/vendor/`.
    - Lines 38-41 say to run tasks "from this directory"; they run from the repo root.
    - Line 43 says the pre-commit hook renders; `lefthook.yml` only runs ansible-lint.

23. **Broken relative links in component docs.** NEW. The docs moved from `ops/services/docs/` to `docs/`.
    - `docs/components/04-01-01-paperless.md:9` links `../../stack/paperless/backup.sh`; it is now
      `ops/services/configs/paperless/backup.sh`.
    - `docs/components/05-01-01-stream.md:28` links `../../stack/stream/configarr/config.yml`; it is now
      `ops/services/configs/stream/configarr/config.yml`.

24. **Stale fnox profiles and legacy host names.** NEW. `ops/services/fnox.toml` still has profiles for
    removed stacks (`databasus`, `forgejo`, `mathesar`, `paseo`, `woodpecker`, `node`). The `node-<host>`
    profiles use legacy hosts (`pango`, `bill`, `littlebuddy`, `paiki`), not the inventory names. 1Password
    item names mix `host.<name>` and `hosts.<name>.newt`.

25. **Woodpecker doc for a removed stack.** NEW. `docs/components/06-01-01-woodpecker.md` remains though
    Woodpecker and Forgejo were removed. It also mixes `fj.ktbinternal.com` and `fj.ktbcloud.com`.

26. **ADR 01-02-01 has Pkl-era references.** STILL PRESENT.
    `docs/adr/01-02-01-fleet-log-aggregation.md:5,7,15-16` cites `platform/monitoring/victorialogs`,
    `platform/monitoring/log-agent` and `registry.endpoint.serviceGroup.victorialogs`. The sink is hardcoded
    in `ops/services/configs/agent/vector.yaml:19`.

27. **Component docs overstate isolation or are stale.** STILL PRESENT.
    - `docs/components/02-01-01-komodo-mcp.md:3` says "tailnet/LAN-only", but it joins `newt_gw_001` and is
      served by the public Pangolin edge.
    - `docs/components/03-01-01-pangolin.md:7` refers to a nonexistent `platform/overlay/traefik`.
    - `docs/components/05-01-01-stream.md:9` says only `configarr/repos` must exist; the stack needs about
      nine bind directories.

28. **Komodo uses UTC and a legacy bind path.** STILL PRESENT.
    `ops/services/out/komodo/compose.yaml:15` sets `TZ: Etc/UTC`, while other stacks use `America/New_York`
    and komodo-mcp uses `America/Chicago`. The bind directory keeps the legacy `dcm` name.

29. **Dead settings.** STILL PRESENT. `PG_ADMIN_PASS` in the `postgres` fnox profile is unused.
    `ops/services/out/paperless/compose.yaml:14` sets `ALLOW_EMPTY_PASSWORD`, which does nothing on
    `library/redis`.

30. **Script nits.**
    - `scripts/migrate_volumes.sh` doesn't detect duplicate NEW targets, so a second pair silently merges into
      the first volume. A failed `cp` leaves a half-filled NEW volume that blocks a rerun.
    - `ops/services/wrap` exports all of `/mnt/credentials/onepassword.env` (`set -a`) to every child process.
    - NEW: `wrap` usage says `../../wrap`, which is right from `out/<name>/`. Frappe lives at
      `ops/services/frappe/` and must call `../wrap`.

## Resolved since audit

- Stale rendered stacks are pruned: `infra_tool.cue` runs `file.RemoveAll` on `ops/services/out` before
  rendering. The source-less databasus and node compose files are gone.
- The duplicate node stack is gone, along with its shared volumes, Tailscale identity, tunnels, and missing
  `./config/vector.yaml` mount.
- Woodpecker was removed: open registration with `docker.sock` no longer applies.
- Forgejo was removed: the domain mismatch, `forgejoclone` image, `FORGEJO__DATABASE__PASSWD` casing,
  missing `depends_on`, and unused `DB_PASSWORD` no longer apply.
- Databasus, mathesar and paseo were removed, along with their host-networking, `latest`,
  `ALLOWED_HOSTS: '*'` and image-tag findings.
- C4 diagrams and tasks were deleted, so the public Workers deploy no longer applies.
- `core.env` was inlined into `model/service/platform.komodo.cue`; its stale comments and unused
  `COMPOSE_KOMODO_BACKUPS_PATH` are gone.
- Frappe now lives at `ops/services/frappe/` with an explicit "handwritten outside CUE" comment.
- The grist-only vault inconsistency is gone; all stacks share one vault (see High 7).
- An early claim that frappe's `include:` plus service overrides would fail was false:
  `docker compose config` accepts it.
