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

## store/graph.yml — the infrastructure map

`store/graph.yml` is a generated, machine-readable map of everything:
hosts, networks, stacks (with their containers, deploy targets, deploy
manager, and notes), plus typed relations (`deployed_on`, `on_network`).

**Read this file first** for any task that touches infrastructure — it
tells you what exists, where it runs, and what connects to what. Keep it
accurate by editing `deploy`/`notes` in `model/services/`, never graph.yml.

For humans, the same model renders to an explorable LikeC4 diagram at
`docs/diagrams/infra.likec4` — run `mise run likec4` and open the UI
(validated on every commit).

## Key facts agents should know

- Deploys are managed by **Komodo** (periphery on hosts, core on
  `littlebuddy`); the komodo core stack itself is **Ansible**-managed via
  `ops/automation/playbooks/50_platform.yml`.
- `deploy.per_host: true` stacks run one instance per target host (log
  agents, mesh connectors).
- Stacks with `manager: none` in the graph are modeled but not currently
  deployed anywhere (e.g. `arcane`, `git-clone`, `openhands`, `paseo`).
- Secrets are referenced through **fnox** (1Password-backed), never inline.
- `frappe` is deployed but hand-written (not in CUE); it is listed under
  `unmanagedStacks` in `model/exports/graph.cue`.
- Terminology (mesh, ingress/egress, …): `docs/legend.md`.
- Decisions: numbered ADRs in `docs/adr/`. Operational history: `docs/log/`.

## Working rules

1. After editing CUE: `mise run cue:render` (vet has known pre-existing
   failures in `model/services/snippets/snippets.cue` — don't chase those).
2. Match existing code style; keep changes minimal.
3. Don't commit on the user's behalf unless asked.
