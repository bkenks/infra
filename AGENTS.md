# AGENTS.md

Orientation for AI agents (and humans) working in this monorepo.

## What this repo is

A personal infrastructure monorepo that doubles as a knowledge base and
general workspace. Three zones:

| Path         | Purpose                                                         |
| ------------ | --------------------------------------------------------------- |
| `model/`     | CUE source of truth: schema, host inventory, service stacks     |
| `store/`     | YAML generated from CUE — **never edit**                        |
| `ops/`       | Ansible automation, rendered Compose stacks, OpenTofu state     |
| `docs/`      | Obsidian vault: ADRs, runbooks, dated logs, terminology         |
| `workspace/` | General workspace: knowledge, projects, journal, external links |

## The golden rule

`model/` is the single source of truth. To change hosts, networks, or
stacks: edit the CUE, then `mise run cue:render`, then commit. Rendered
files are committed, and lefthook re-renders automatically when `*.cue`
files change. Never hand-edit anything with a `GENERATED` header.

## Key facts agents should know

- Deploys are managed by **Komodo** (periphery on hosts, core on
  `littlebuddy`); the komodo core stack itself is **Ansible**-managed via
  `ops/automation/playbooks/50_platform.yml`.
- Which hosts run each stack is configured in Komodo, not in this repo.
- Per-host stacks (log agent, mesh connector) run one instance per host;
  Komodo names them `<stack>_<host>`.
- Secrets are referenced through **fnox** (1Password-backed), never inline.
- `frappe` is deployed but hand-written (not in CUE), under
  `ops/services/frappe/`.
- Terminology (mesh, ingress/egress, …): `docs/legend.md`.
- Decisions: numbered ADRs in `docs/adr/`. Operational history: `docs/log/`.

## Working rules

1. After editing CUE: `mise run cue:render` (vet has known pre-existing
   failures in `model/services/snippets/snippets.cue` — don't chase those).
2. Match existing code style; keep changes minimal.
3. Don't commit on the user's behalf unless asked.
