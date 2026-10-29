# CUE model and root tooling

Re-verified against `7479b64`. Covers `model/`, `infra_tool.cue`, `store/`, root `mise.toml`,
`.config/mise/tasks/`, `lefthook.yml`, `treefmt.toml`, `vendir.yml` and root docs.

At HEAD, `cue vet -c ./model/...` passes. All 15 stacks exported with `cue export` match their
`ops/services/out/<name>/compose.yaml` exactly, and every rendered file passes
`docker compose config --quiet --no-interpolate`.

## High

1. **Komodo MongoDB is published on every interface.** STILL PRESENT.
   See `model/service/platform.komodo.cue:68,73`. `27017:27017` (now built from `_port`) makes the Komodo
   database reachable by anyone who can reach the host. Core only needs it over the stack's default network.

2. **WordPress is the unmodified awesome-compose sample.** STILL PRESENT.
   See `model/service/app.wordpress.cue:19,30,32`. It has plaintext credentials
   (`MYSQL_ROOT_PASSWORD=somewordpress`, `wordpress/wordpress`), `wordpress:latest`, `ports: ["80:80"]` on
   all interfaces, no gateway network, and no `${VAR:?err}` secrets. It renders to
   `ops/services/out/wordpress/compose.yaml`, so it can be deployed as-is.

## Medium

3. **Komodo Core settings moved into CUE with their problems intact.** CHANGED.
   See `model/service/platform.komodo.cue:23-53`.
   - Port 9120 is published on all interfaces (`:53`).
   - `KOMODO_DISABLE_USER_REGISTRATION: "false"` (`:42`) lets anyone who reaches the port register. New
     users do start disabled (`:43`).
   - `KOMODO_FIRST_SERVER: "https://host.docker.internal:8120"` (`:35`) needs `extra_hosts: host-gateway` on
     Linux. The `app` service doesn't set it; only `platform.komodo-mcp.cue:27` does.
   - `TZ` is `Etc/UTC` (`:23`) while other stacks use `America/New_York`, which shifts Komodo schedules.

4. **VictoriaLogs is published on all interfaces with no auth.** STILL PRESENT.
   See `model/service/platform.victorialogs.cue:18`. `19428:9428` exposes the query API and UI, not only
   ingest.

5. **Vector ships to a legacy host and reads its own logs.** STILL PRESENT.
   See `ops/services/configs/agent/vector.yaml:5-6,19`.
   - The sink is `http://littlebuddy.internal:19428`, a host that isn't in `model/inventory` and doesn't
     follow the `<name>.<provider>-<site>.internal` scheme.
   - It excludes `node-log-agent`, but the container is now `agent-log-agent`.

6. **The Tailscale gateway likely does nothing.** STILL PRESENT.
   See `model/service/mesh.tailscale.node.cue:14-19`. `TS_USERSPACE=true` with no `TS_ROUTES` or
   `TS_EXTRA_ARGS`. Databases join `tailscale_gw_001` to be reached over the tailnet, but nothing
   advertises or serves them.

7. **Duplicate DB password variables.** STILL PRESENT. Each pair must be kept equal by hand:
   - paperless: `PAPERLESS_DBPASS` (`app.paperless.cue:86`) and `POSTGRES_PASSWORD` (`:40`);
   - immich: `DB_PASSWORD` (`app.immich.cue:47`) and `POSTGRES_PASSWORD` (`:23`).

8. **Host pattern pins `os` and `arch` as concrete values.** STILL PRESENT.
   See `model/inventory/inventory.cue:38-39`. `os: "ubuntu"` and `arch: "amd64"` are not defaults, so a host
   set to `debian`, `truenas` or `arm64` (all allowed by `#Host`) fails to evaluate. Use `*"ubuntu" | _`.

9. **Unpinned `latest` images.** CHANGED (mathesar removed).
   `paperless-ngx` and `tika` (`app.paperless.cue:9-10`) and `pangolin-cli` (`mesh.pangolin.client.cue:15`).
   Renders aren't reproducible and upgrades happen silently.

10. **Rendered compose files depend on the repo layout.** NEW.
    See `model/service/service.cue:11`. `_configs: "../../configs/<name>"` means `out/<name>/` must sit two
    levels below `ops/services/configs/`. This affects agent, pangolin and stream. Whatever deploys them
    (Komodo or the `docker_stack_files` role) must ship the whole `ops/services` tree. Otherwise Docker
    creates empty directories in place of the config files.

11. **`mise.toml:1-7` doesn't declare the tools its tasks need.** CHANGED.
    Missing: `copier` (`copier:*`, `dependency:sync`), `fd` (`permission:mise-tasks-add-exec`), `docker`
    (`cue:render`), and `taplo`, `prettier`, `treefmt` (`treefmt.toml`). `npm:likec4` and `npm:wrangler` are
    now unused since the C4 docs and tasks were deleted.

12. **`git:ship` can commit junk.** STILL PRESENT.
    `.config/mise/tasks/git/ship.py:20` runs `git add .`, but the root `.gitignore` lists only `.vscode/`.
    An untracked `.DS_Store` sits at the repo root now; any future `.env` would also be committed.

13. **No CUE checks run on commit.** STILL PRESENT.
    `lefthook.yml` runs only ansible-lint. Nothing runs `cue vet`, `cue fmt` or `cue:render`, which is how the
    earlier `kind` and `store/hosts.yml` breakages reached a commit.

## Low

14. **`render.py` prunes now, but still skips validation.** CHANGED.
    See `.config/mise/tasks/cue/render.py:28-31`. `cue:vet` doesn't run first, and the hand-written frappe
    stack (now `ops/services/frappe`) isn't validated.

15. **`vet.py` overstates its scope.** STILL PRESENT. See `.config/mise/tasks/cue/vet.py:5,12`. It says it
    validates "every docker stack" but only vets `./model/...`, skipping `infra_tool.cue` and rendered output.

16. **`format.py` Python version and unused import.** STILL PRESENT. See `.config/mise/tasks/cue/format.py:4,7`.
    It requires Python `>=3.14` while other tasks need 3.12, and `import os` is unused.

17. **treefmt reformats the whole CUE module every run.** STILL PRESENT. See `treefmt.toml:72`. The
    formatter passes `fmt ./...` and treefmt also appends file paths.

18. **`dependency:sync` runs copier and vendir in parallel.** STILL PRESENT. See `mise.toml:17`. Copier can
    rewrite `vendir.yml`, so they should run sequentially.

19. **`PATHDIR_C4` is dead.** CHANGED. See `mise.toml:10`. `docs/c4/` and the `c4:*` tasks were deleted.

20. **`fqdn` has a dead branch and no fallback.** STILL PRESENT. See `model/schema/schema.cue:103`.
    `""` can never pass `net.FQDN`; a host without `provider` or `site` errors instead of falling back; and
    `addresses` is never populated.

21. **`#Domain` is unused.** STILL PRESENT. See `model/schema/schema.cue:38`. `inventory.cue:10,17` use bare
    `net.FQDN`, which also accepts single labels.

22. **`#URI.host` is unchecked.** STILL PRESENT. See `model/schema/schema.cue:74`. It is a bare `string`.

23. **`route.pangolin` re-applies `#Route`.** STILL PRESENT. See `model/inventory/inventory.cue:82`. The
    pattern on line 78 already applies it. Harmless.

24. **Stack-name regex forbids digits.** STILL PRESENT. See `model/service/service.cue:8`.
    `^[a-z]+(-[a-z]+)*$` rejects names like `s3-gw`.

25. **Inconsistent volume naming.** STILL PRESENT. These don't follow `<stack>-<vol>`:
    `pangolin-gw-app_state` (`mesh.pangolin.client.cue:8`), `tailscale-gw-app_state`
    (`mesh.tailscale.node.cue:5`), `log-agent-agent_buffer` (`platform.agent.cue:6`), and Komodo's
    `bindDir` `/dcm` (`platform.komodo.cue:10`).

26. **komodo-mcp timezone.** STILL PRESENT. See `model/service/platform.komodo-mcp.cue:21`:
    `America/Chicago`, while cvg stacks use `America/New_York`.

27. **Dead Redis variable.** STILL PRESENT. See `model/service/app.paperless.cue:28`. `ALLOW_EMPTY_PASSWORD`
    is a Bitnami variable and does nothing on `library/redis`.

28. **Hard-coded Immich library path.** STILL PRESENT. See `model/service/app.immich.cue:50`.
    `/mnt/immich-library` sits outside the `inv.common.directory` bind-mount convention.

29. **`actual-budget` is a silently skipped stub.** STILL PRESENT. See `model/service/app.actual-budget.cue:10`.
    It has `services: _` and is skipped by render without a warning.

30. **Networks with no consumers.** STILL PRESENT. See `model/service/network.cue:8,10`. `pangolin_gw_001`
    is used only by `pangolin-client` and `db_001` only by `postgres`. No consumer joins either, yet both are
    created on every host.

31. **vendir fetches a public repo over SSH.** STILL PRESENT. See `vendir.yml:8`. `git@github.com:` needs an
    SSH key where HTTPS would not (for example in CI).

32. **`backup.sh` is orphaned.** NEW. `ops/services/configs/paperless/backup.sh` was moved into `configs/`
    but no stack mounts or references it.

33. **Repo docs are thin.** STILL PRESENT. There is no `CLAUDE.md`, though commit `e5f93a7` says it updates
    one. `README.md` is two lines and doesn't describe the model → render → `out/` flow or `store/`.

## Resolved since audit

- `store/hosts.yml` is a valid inventory again: `infra_tool.cue:30` emits `inv.ansible` with `all.hosts`,
  `ansible_host`, and `bare_metal`, `vps`, `control_plane` children.
- `cue vet` passes: `_defaultHomeHost` sets `kind: "physical"` and edge01 sets `kind: "vm"`.
- Orphaned generated stacks are gone: `databasus` and `platform/node` were deleted, and render now wipes
  `ops/services/out` (`infra_tool.cue:42`).
- Forgejo and Woodpecker were removed, so these no longer apply: the Forgejo domain/`ROOT_URL` mismatch,
  `FORGEJO__DATABASE__PASSWD` casing, the third-party `forgejoclone` image, Forgejo's missing healthcheck
  and `depends_on`, and `WOODPECKER_OPEN=true`.
- mathesar was removed: its `latest` image and `ALLOWED_HOSTS: '*'` no longer apply.
- `docs/c4/` was deleted: the `model.c4` "Lists are built from structs" error and the committed `.likec4`
  snapshot no longer apply.
