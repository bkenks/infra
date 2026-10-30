## Single-source-of-truth gaps

16. **Values repeated across tools.**
    - The Komodo version `2.1.2` is pinned in `model/service/platform.komodo.cue` and in `ops/automation/inventory/group_vars/all/main.yml`.
    - SSH port `3204` is hardcoded in `access__firewall_group_ports`, although `hardened_ssh_port` exists.
    - Ports `9120` and `8120` repeat across CUE, Ansible, and docs.

    Export these from CUE into `store/` and read them from there.

17. **Mixed port conventions.** Some stacks use `_port` (`app.paperless.cue`). Others use `_listeners.web.port` (`platform.komodo.cue`). Pick one.

## Process

20. **Commit history does not explain changes.** 13 of 48 commits are titled "WIP" or "stuff". The `git:ship` task runs `git add .`, commits, and pushes in one step. Use descriptive (for example, conventional) commit messages so history explains why things changed.
