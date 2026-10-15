# ktb.ubuntu collection

## Context

The `ubuntu_base` role served two uses at once:

- `00_access` called single task files (`admin_user`, `lock_root`, `fail2ban`) with `tasks_from`, and guarded each one with a flag.
- `10_system` ran `main.yml`, which used flags to turn its steps on and off.

So one role had two calling styles. `ubuntu_update` and `ufw` were separate roles for steps that belong to the same Ubuntu setup. Setting up the OS needs ordered steps across more than one stage, which is more granularity than one role gives. Ansible has no level between a role and its task files.

## Decision

Group the Ubuntu work into a local collection, `ktb.ubuntu`, at `collections/ansible_collections/ktb/ubuntu/`. It has one role per stage that touches the OS:

- `ktb.ubuntu.access` (stage 00): admin user, lock root, sshd hardening and the connection move, fail2ban, UFW.
- `ktb.ubuntu.system` (stage 10): upgrade, hostname, LVM growth, packages, timezone, Wake-on-LAN, swap, unattended upgrades, journal cap, reboot.

Each role runs all of its steps in order from `tasks/main.yml`. Every step is on by default, and hosts opt out with a `<role>__should_*` flag. Playbooks import the whole role and never use `tasks_from`.

`ansible.cfg` lists `./.ansible/collections` before `./collections`, so `ansible-galaxy` keeps installing third-party collections into `.ansible/`.

## Consequences

- `ubuntu_base`, `ubuntu_update` and `ufw` are gone from `roles/`.
- The sshd hardening and connection move left `00_access.yml` for the `access` role, so the role owns the full order of the access stage.
- `group_vars/bare_metal.yml` is gone. LVM growth and Wake-on-LAN are on by default, and `vps.yml` turns them off.
- Roles from the repo that will merge into this one can follow the same pattern under their own collection.
