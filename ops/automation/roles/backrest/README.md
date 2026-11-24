# backrest

Installs [Backrest](https://github.com/garethgeorge/backrest) with its upstream
install script, which downloads the latest release and registers a systemd
service bound to `127.0.0.1:9898`.

The service runs as the connecting user, because the script reads `SUDO_USER`
from the `become` escalation.

The script tears down and reinstalls on every run, so the role skips it once the
binary exists. To upgrade, remove the binary on the host and re-run the role.

A systemd drop-in grants the service `CAP_DAC_READ_SEARCH`, so restic can read
paths the connecting user cannot, such as Docker volumes.

## Configuration

Backrest keeps everything in `~/.config/backrest/config.json` (owned by the
service user, mode `0600`, because it holds repo secrets). The role owns parts of
that file and leaves the rest to the UI. The decision is in
`docs/adr/03-01-02-backrest-config-ownership.md`.

| What                                                            | Owner            | On each run                     |
| --------------------------------------------------------------- | ---------------- | ------------------------------- |
| Repos in `backrest__repos`, plans in `backrest__plans`          | Ansible          | Replaced whole, matched by `id` |
| Ids in `backrest__repos_absent` / `backrest__plans_absent`      | Ansible          | Deleted                         |
| Keys in `backrest__config_seed` (`version`, `instance`, `auth`) | Ansible, then UI | Written only if missing         |
| Every other repo, plan and key                                  | UI               | Left alone                      |

A UI edit to a managed repo or plan is reverted on the next run. To keep it, copy
it into the vars. Repos and plans made in the UI under their own ids are never
touched. To bring one under Ansible, copy its entry from `config.json` into the
vars as YAML, keeping the same `id`.

Removing an entry from `backrest__repos` or `backrest__plans` only stops
managing it. To delete it from Backrest, list its id in the matching `_absent`
var. Delete plans before the repo they use, or Backrest rejects the config.

### How a run applies it

1. `files/compose.jq` merges the vars into the current `config.json` and
   compares the result with what's on disk. Zero values (`false`, `""`, `0`,
   `[]`, default enums) are ignored, because Backrest drops them when it saves.
2. If nothing differs, the run stops here and Backrest isn't touched.
3. Otherwise it prints the drifted ids (no values, since entries hold secrets),
   stops Backrest, saves the old file as `config.json.ansible-prev`, writes the
   new one with `modno` bumped, starts Backrest and waits for the UI.
4. If Backrest doesn't come back (it exits on an invalid config), the previous
   file is restored and the run fails. `journalctl -u backrest` has the reason.

The service has to be stopped for the write: Backrest reads `config.json` once at
startup and writes its in-memory copy back on every UI save, so a file changed
under a running instance is lost on the next save. Bumping `modno` makes a
browser tab still holding the old config fail its next save with "config modno
mismatch" instead of overwriting the new one.

Preview what a run would change, without touching anything:

```sh
uv run ansible-playbook playbooks/50_platform.yml --tags backrest --check
```

### Plans

Plans are per host, so set `backrest__plans` in `inventory/host_vars/<host>.yml`.
The shape is Backrest's `Plan` message from
[`proto/v1/config.proto`](https://github.com/garethgeorge/backrest/blob/main/proto/v1/config.proto),
in its JSON field names:

```yaml
backrest__plans:
  - id: docker-volumes
    repo: ktb-backup-app
    paths:
      - /var/lib/docker/volumes
    excludes:
      - "**/cache"
    schedule:
      cron: "0 3 * * *"
      clock: CLOCK_LOCAL
    retention:
      policyTimeBucketed:
        daily: 7
        weekly: 4
        monthly: 6
```

Repo secrets come from fnox through `lookup('env', ...)`. The role fails before
touching anything if a managed repo has an empty password or env value.
