# Backrest config ownership

## Context

Backrest keeps its whole configuration (repos, plans, auth, multihost peers) in one `config.json`, and its web UI edits the same file. Backrest reads the file once at startup, holds it in memory, and writes that copy back on every UI save. A file edited while Backrest runs is therefore lost on the next UI save.

The role used to add the B2 repo only when the file lacked it. A changed repo in the vars never reached a host, plans weren't managed at all, and the file was written while the service was running.

## Decision

Ansible owns the repos and plans listed in its vars, matched by `id`. On every run each one replaces the entry with the same id. Repos and plans with other ids, and every other top-level key, belong to the UI and are left alone. `version`, `instance` and `auth` are seeded only when missing.

The role writes the file only when the merged result differs from the file on disk, ignoring zero values that Backrest drops on save. It stops the service, writes the file, starts the service, and checks that the UI answers. If the UI doesn't answer, it restores the previous file.

Rejected alternatives:

- Ansible owns the whole file. Every UI change would be silently lost, including ones that have nothing to do with managed entries, such as auth users or a one-off plan.
- Ansible only adds missing entries, as before. It can never change a repo or plan once it exists.

## Consequences

- A UI edit to a managed repo or plan is reverted on the next run. The run prints the ids it reverted, and `--check` previews them.
- Deleting from Backrest needs an explicit `_absent` id, because the role doesn't record which ids it wrote before.
- Backrest restarts only when the managed config changed. A restart interrupts any backup running at the time.
- `modno` is bumped on each write, so a browser tab holding the old config fails its next save instead of overwriting the new one.
