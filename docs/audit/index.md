# Repo audit

Read-only audit of the infra repo. It was first run against `b800241` on 2026-10-28, then re-verified
against `7479b64` on 2026-10-29. Each finding carries a status: STILL PRESENT, CHANGED (moved or partly
fixed) or NEW (introduced by the commits between the two). Items fixed between the two runs are listed at
the end of each file under "Resolved since audit".

| File                                 | Scope                                                                 |
| ------------------------------------ | --------------------------------------------------------------------- |
| [01-model.md](01-model.md)           | CUE model, `infra_tool.cue`, `store/`, root tooling and docs          |
| [02-automation.md](02-automation.md) | Ansible: playbooks, roles, `ktb.ubuntu` collection, inventory, DNS    |
| [03-services.md](03-services.md)     | Rendered compose stacks, configs, fnox profiles, `wrap`, service docs |
| [04-state.md](04-state.md)           | OpenTofu roots in `ops/state`                                         |

## Fix first

1. **Host service accounts can't read the `infra` vault.** Secrets moved to `infra`, but
   `ops/automation/inventory/group_vars/all/main.yml:63` still grants `secrets:read_items`. Every stack's
   `fnox exec` fails, and existing tokens aren't re-minted. See [02-automation.md](02-automation.md) High 1.
2. **Mesh and agent stacks have no fnox profile.** `agent`, `tailscale-node`, `pangolin-client` and
   `pangolin-connector` look up profiles that don't exist in `ops/services/fnox.toml`.
   See [03-services.md](03-services.md) High 6.
3. **Services exposed on all interfaces.** Komodo MongoDB (27017), Komodo Core (9120, sign-up enabled),
   VictoriaLogs (19428, no auth) and gerbil on host port 22. See [03-services.md](03-services.md) High 1-5.
4. **Komodo Periphery (8120) open to the internet on every host**, running as root with exec enabled.
   See [02-automation.md](02-automation.md) Medium 5.
5. **SSH hardening has no lockout guard.** See [02-automation.md](02-automation.md) High 2.
6. **The Vultr VPS is named `pango`, not `edge01`, and has no firewall group or SSH key.**
   See [04-state.md](04-state.md) High 1-2.
7. **WordPress is the awesome-compose sample** with plaintext credentials and port 80 on all interfaces.
   See [01-model.md](01-model.md) High 2.

## Method

Four read-only reviews, one per area, then a second pass per area against HEAD. Checks run:

- `cue vet -c ./model/...` (passes at `7479b64`).
- `cue export` of every stack, diffed against `ops/services/out/*/compose.yaml` (all match).
- `docker compose config --quiet --no-interpolate` on every rendered file (all pass).
- `ansible-lint --offline`, `ansible-playbook --syntax-check` and `ansible-inventory --graph`.
- `tofu fmt -check` and `tofu validate` with no network access.

Findings not marked as checked on a host (for example container DNS through UFW) are from reading the code.
