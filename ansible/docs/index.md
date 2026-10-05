# How infra.ansible works

The repo brings Ubuntu hosts from a fresh install to a running Komodo platform. `playbooks/site.yml` runs six stage playbooks in order. Each stage depends only on the stages before it, and you can run each one on its own with `ansible-playbook playbooks/<stage>.yml` or `--tags <tag>`.

| Stage | Tag | Hosts | Result |
|---|---|---|---|
| `00_access.yml` | `access` | all | `ktb.ubuntu.access`: admin user exists, root is locked, sshd is hardened on the hardened port, fail2ban (optional) and UFW are applied |
| `10_system.yml` | `system` | all | `ktb.ubuntu.system`: packages are upgraded, base packages and system settings are applied |
| `20_network.yml` | `network` | all | Tailscale is joined, CoreDNS answers on `dns0` and serves the `internal` zone |
| `30_secrets.yml` | `secrets` | all | `/mnt/secrets` and `/mnt/credentials` are tmpfs mounts, fnox, `op` and docker-compose-fnox are installed, and a 1Password service-account token is on the host |
| `40_runtime.yml` | `runtime` | all | Docker and the `/srv/docker` tree exist, git is installed |
| `50_platform.yml` | `platform` | `control_plane`, then all | Komodo Core runs on the control plane, and Komodo Periphery runs on every host |

Stage `00_access` is the only stage that works on a fresh host. The `bootstrap` role probes the hardened port and the admin user, and falls back to `root` on whichever port answers. Every later stage connects the way your local `~/.ssh/config` says: user, port and key all come from there, and the inventory sets none of them. The admin user's authorized key is the `.pub` identity file that `ssh -G <host>` resolves for that host.

## Inventory

- `inventory/hosts.yml` lists every host and its group membership. It is a symlink to the shared `store/` registry, which terraform also reads.
- `inventory/group_vars/all.yml` holds the shared paths and every role variable that applies to all hosts.
- `inventory/group_vars/<group>.yml` holds only the values that differ for that class of host, such as `vps` (no LVM growth or Wake-on-LAN, Tailscale exit node).

## Ubuntu collection

OS-level work lives in the local collection `ktb.ubuntu`, under `collections/ansible_collections/ktb/ubuntu/`. Each role runs its steps in a fixed order, and each stage that touches the OS calls one role. Every step is on by default. A host turns a step off with that step's `<role>__should_*` flag in `group_vars`. Playbooks never call a role's task files directly with `tasks_from`.

## DNS

Every host runs CoreDNS on a `dns0` dummy interface at `10.200.0.53`, with systemd-resolved forwarding to it. This works like node-local DNS in Kubernetes: each host resolves `*.internal` names locally, which lets hosts reach each other. The zone and the Corefile live in `files/dns/`.

## Firewall

`access__firewall_group_ports` maps inventory groups to the TCP ports they open. The firewall step of `ktb.ubuntu.access` rebuilds UFW from the union of `all` and the host's groups.

| Group | Ports | Purpose |
|---|---|---|
| `all` | 80, 443 | Traefik |
| `all` | 3204 | Hardened SSH |
| `all` | 8120 | Komodo Periphery |
| `all` | 9120 | Komodo Core |
| `control_plane` | 18006, 18022 | Infisical and Infisical Agent |
| `smb` | 445 | SMB file sharing |
| `fileshare` | 3002 | File-sharing service, not yet identified |
| `stream` | 8080, 32400, 20283 | media01 service, Plex, Immich |

## Roles not yet used by a stage

`hawser` and `infisical_secrets` come from another repo that will merge into this one. They stay in `roles/` until a stage uses them.
