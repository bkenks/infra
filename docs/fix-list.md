## Single-source-of-truth gaps

16. **Values repeated across tools.**
    - The Komodo version `2.1.2` is pinned in `model/service/platform.komodo.cue` and in `ops/automation/inventory/group_vars/all/komodo.yml`.
    - SSH port `3204` is hardcoded in `access__firewall_group_ports`, although `hardened_ssh_port` exists.
    - Ports `9120` and `8120` repeat across CUE, Ansible, and docs.

    Export these from CUE into `store/` and read them from there.
