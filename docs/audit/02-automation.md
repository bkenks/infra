# Ansible automation (`ops/automation`)

Re-verified against `7479b64`. Paths are relative to `ops/automation/` unless they start with `store/`
or `ops/`. `ansible-lint --offline` (production profile) and `ansible-playbook --syntax-check` both pass,
so neither catches the issues below. `ansible-inventory --graph` now shows `bare_metal` (core01, apps01,
media01), `vps` (edge01) and `control_plane` (core01).

## High

1. **Host service accounts can't read the vault their secrets moved to.** NEW.
   See `inventory/group_vars/all/main.yml:63` and `roles/onepass_service_account/defaults/main.yml:3`.
   - Recent commits moved secrets to the `infra` vault: `ops/automation/fnox.toml:5`,
     `ops/services/fnox.toml:5`, and the token storage vault `onepass_service_account__vault`.
   - Each host's service account is still minted with `onepass_service_account__vaults: ["secrets:read_items"]`.
   - **Why it matters:** `ops/services/wrap` runs `fnox exec` with the host token, so every stack's secret
     lookups fail. Komodo Core's start in stage 50 is the first to break.
   - **Why a re-run won't fix it:** existing tokens still pass the `op whoami` check, so the role never
     re-mints them.
   - **Fix:** change the grant to `infra:read_items` and re-mint the tokens.

2. **SSH hardening can lock you out, with no rollback.** STILL PRESENT.
   See `collections/ansible_collections/ktb/ubuntu/roles/access/tasks/sshd.yml:9-26`.
   - devsec `ssh_hardening` sets `PermitRootLogin no` and moves sshd to port 3204, then restarts it.
   - Root's password was already locked by `lock_root.yml`.
   - Nothing checks that the admin user can log in on 3204 before root access is cut.
   - A mismatched authorized key (see Low 21) or a cloud firewall that blocks 3204 leaves the host with
     no way in.

3. **Bootstrapping a fresh host can't work as designed.** STILL PRESENT.
   See `files/dns/internal.zone:15-22`, `store/hosts.yml` and `docs/adr/01-01-01-staged-playbooks.md:17`.
   - The inventory sets `ansible_host` to `*.internal` names, which resolve to Tailscale 100.x addresses.
   - A fresh host has no tailnet address until stage 20, but stages 00 and 10 must already reach it.
   - The ADR justifies the stage order with "hosts are addressed as *.internal", which contradicts
     access and system running before network.

## Medium

4. **`edge01` doesn't resolve, and the zone has a stale host.** STILL PRESENT.
   See `files/dns/internal.zone:21-22`. `edge01.vultr-ord` is commented out as `TODO`, yet it is the
   `ansible_host` for edge01. `mgmt01.vultr-ord` is in the zone but not in the inventory.

5. **Komodo Periphery (8120) and Core (9120) are open to the internet on every host.** STILL PRESENT.
   See `inventory/group_vars/all/main.yml:27` and `roles/access/tasks/firewall.yml:44-49`.
   - This includes the VPS. The UFW rules are not scoped to `tailscale0`.
   - Periphery runs as root (`komodo_user: root`) with terminals and exec enabled, and
     `komodo_allowed_ips` is `[]`. Komodo key auth is the only barrier to root on every host.
   - Core only runs on the control plane, so 9120 doesn't need to be open anywhere else.
   - Port 3204 is hard-coded in the list instead of using `hardened_ssh_port`.

6. **`ufw state: reset` runs on every play.** STILL PRESENT. See `roles/access/tasks/firewall.yml:34`.
   - Every run reports changed and leaves timestamped `*.rules` backups in `/etc/ufw`.
   - It wipes the SSH rule that `sshd.yml:2-7` just added.
   - The host has no firewall until UFW is re-enabled. If the play dies in between, it stays that way.

7. **`docs/index.md:41-44` contradicts the firewall config.** STILL PRESENT.
   It lists `smb` (445), `fileshare` (3002) and `stream` (8080, 32400, 20283) port groups that don't
   exist, and describes `control_plane` ports 18006 and 18022 as Infisical, which is gone.

8. **UFW doesn't reflect real exposure, and may block container DNS.** STILL PRESENT.
   See `roles/access/tasks/firewall.yml`. Ports published by Docker bypass UFW. Containers query CoreDNS
   at 10.200.0.53 on `dns0` through INPUT, where the default deny has no 53/udp rule. Untested on a host:
   run `docker run --rm alpine nslookup ns.internal` to check.

9. **One compromised host can read every host's token and all infra secrets.** CHANGED.
   See `roles/onepass_service_account/defaults/main.yml:3`. Every host's token item is stored in the same
   vault the hosts read (now `infra`, once High 1 is fixed), alongside `TS_AUTHKEY` and the Backrest S3
   keys. Per-host vaults are needed for least privilege.

10. **Backrest runs with no auth and near-root power.** STILL PRESENT.
    See `files/backrest/config-base.json.jinja:3`. `auth.disabled: true` lets any local process drive the
    API. Backrest holds `CAP_DAC_READ_SEARCH` and runs hooks as the admin user, who is in the `docker`
    group. ADR 03 understates this.

11. **Backrest install pipes an unpinned script to bash as root.** STILL PRESENT.
    See `roles/backrest/tasks/main.yml:6`: `curl …/main/install.sh | bash`, no version pin, no checksum.

12. **fnox and `op` binaries are installed as root with no checksum.** STILL PRESENT.
    See `roles/compose_fnox/tasks/main.yml:9-19,35-45`. Only docker-compose-fnox is verified.

13. **`apply:state` never loads the fnox secrets.** STILL PRESENT.
    See `.config/mise/config.toml:50-53`. It runs `uv run ansible-playbook playbooks/site.yml` directly, so
    `TS_AUTHKEY` and `BACKREST_*` resolve empty and stages 20 and 50 fail their asserts, unless the shell
    already has the fnox environment loaded.

14. **Synced stack files are never deleted from the deploy directory.** STILL PRESENT.
    See `roles/docker_stack_files/tasks/main.yml:21-28`. `synchronize` runs without `--delete`. This
    matters more now: stage 50 syncs `ops/services`, including `out/`, which the render step prunes.
    Stale compose directories stay on the host.

15. **Several hosts share one restic repo, and retention never runs.** STILL PRESENT.
    See `files/backrest/config-repos.json.jinja:2,19,31,37`. Every host gets the same repo `id` and `guid`
    with prune and check scheduled and `autoUnlock: false`, so they contend for the exclusive lock.
    `forgetPolicy` is disabled, so the repo grows without bound.

16. **Upgrades are installed but never loaded.** STILL PRESENT.
    See `inventory/group_vars/all/main.yml:17,32,34`. fail2ban, unattended-upgrades and reboots are
    disabled everywhere, including the public VPS. Stage 10 runs `dist-upgrade` but never reboots.

## Low

17. **Stage 50 clones the whole monorepo over HTTPS without credentials.** NEW.
    See `playbooks/50_platform.yml:12-14`. It clones `https://github.com/bkenks/infra.git` but only uses
    `ops/services`. If the repo is private, the clone fails.

18. **Komodo Core's changed check parses compose output.** NEW.
    See `playbooks/50_platform.yml:19-23`. It matches `Creat|Recreat|Start` in `docker compose up` stderr,
    which is fragile across Compose versions. It also depends on `../../wrap` resolving to the synced
    `ops/services/wrap`, and on fnox finding `fnox.toml` two directories up.

19. **`system__packages` replaces the role default instead of adding to it.** STILL PRESENT.
    See `inventory/group_vars/all/main.yml:36-41`. It drops `curl`, `ufw`, `ca-certificates`, `gnupg`,
    `unzip` and `htop`.

20. **The SSH UFW rule can run before UFW is installed.** STILL PRESENT.
    See `roles/access/tasks/sshd.yml:2-7`. `firewall.yml:26` installs UFW later, so this fails on a
    minimal image.

21. **The authorized key is looked up for a different name than Ansible connects to.** CHANGED.
    See `inventory/group_vars/all/main.yml:19-22`. `ssh -G` resolves the short `inventory_hostname`
    (`core01`), but Ansible connects to the FQDN in `ansible_host`, so a different `~/.ssh/config` block
    may supply the key. This feeds the lockout risk in High 2.

22. **The zone serial must be bumped by hand on every edit.** STILL PRESENT.
    See `files/dns/internal.zone:5`. The Ansible restart handler hides a missed bump; manual edits don't.

23. **Tailscale direct connections are blocked, and forwarding isn't fully reverted.** STILL PRESENT.
    See `roles/tailscale/tasks/main.yml`. UDP 41641 is not allowed inbound, so peers fall back to relays.
    The `state: absent` sysctl path doesn't revert the runtime value.

24. **`path_dir__repo_root` is never used.** STILL PRESENT. See `inventory/group_vars/all/main.yml:5`.

25. **Template paths depend on the inventory symlink layout.** STILL PRESENT.
    See `inventory/group_vars/all/main.yml:45-46,53-54` (`{{ inventory_dir }}/../files/...`).

26. **A legacy standalone `docker-compose` is installed beside the plugin.** STILL PRESENT.
    See `inventory/group_vars/all/main.yml:65` (`docker_install_compose: true`).

27. **There are two separate stack trees.** STILL PRESENT.
    See `inventory/group_vars/all/main.yml:78-79`. `komodo_root_directory: /etc/komodo` is separate from
    `docker_stacks: /srv/docker/stacks`.

28. **`docs/index.md` is out of date.** STILL PRESENT. Line 3 says "six stage playbooks"; there are
    seven. Line 48 mentions `hawser` and `infisical_secrets` roles that don't exist. Backrest is missing
    from stage 50.

29. **`pyproject.toml:14-18` has stale Infisical dependencies.** STILL PRESENT.
    `infisicalsdk`, `boto3` and `botocore` aren't needed by anything in `requirements.yml`.

30. **`ansible.cfg:5` sets `deprecation_warnings = False`.** STILL PRESENT. This hides upcoming
    breakage with pinned ansible-core 2.21 and third-party roles.

31. **`roles/bootstrap/README.md:3-14` doesn't match how the role is used.** STILL PRESENT.
    It describes `pre_tasks` and play vars, but `00_access.yml` uses `tasks` and `group_vars`. Running a
    single stage alone depends on the controller's `~/.ssh/config` supplying port 3204 and the admin user.

## Resolved since audit

- The inventory loaded zero hosts. FIXED: `store/hosts.yml` is `all.hosts` plus `children` again,
  generated from `inv.ansible` in `infra_tool.cue:30`.
- The `vps` and `control_plane` groups were missing, so `group_vars/vps.yml` and the Komodo Core play
  never applied. FIXED.
- `docker_root` and `docker_bind_mounts` were undefined in `40_runtime.yml`. FIXED: it now uses
  `docker_share` and `docker_bindmounts`.

## Checked and fine

- Every handler is notified with a matching name.
- `argument_specs` defaults match `defaults/main.yml` for bootstrap, tmpfs, `onepass_service_account`
  and `docker_stack_files`.
- `no_log` covers every task that handles secrets.
- devsec 10.5.2 disables Ubuntu's `ssh.socket` activation, so the port change takes effect.
- The CoreDNS `ns` record (10.200.0.53) matches `coredns__address`.
