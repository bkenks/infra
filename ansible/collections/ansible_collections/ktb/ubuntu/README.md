# ktb.ubuntu

Roles that take an Ubuntu host from a fresh install to its declared state. Each role runs its steps in a fixed order. Every step is on by default, and a host turns a step off with that step's `<role>__should_*` flag.

| Role | Steps, in order |
|---|---|
| `ktb.ubuntu.access` | admin user, lock root, harden sshd and move the connection onto it, fail2ban, UFW |
| `ktb.ubuntu.system` | upgrade, hostname, LVM growth, base packages, timezone, Wake-on-LAN, swap, unattended upgrades, journal cap, reboot |

See each role's `defaults/main.yml` for its flags and settings.
