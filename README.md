# infra

Infrastructure-as-Code monorepo, knowledge base, and general workspace.

- `model/` — CUE source of truth (schema, inventory, services).
- `store/` — YAML generated from CUE, read by Ansible, Terraform, and AI agents (`graph.yml` is the machine-readable map of the whole infrastructure).
- `ops/automation/` — Ansible host configuration.
- `ops/services/` — rendered Compose stacks deployed by Komodo.
- `ops/state/` — OpenTofu roots.
- `docs/` — Obsidian vault: ADRs, runbooks, logs, terminology — plus `diagrams/`, a generated LikeC4 graph you can explore with `mise run likec4`.
- `workspace/` — notes, projects, journal, external links.

The flow: edit CUE, run `mise run cue:render`, commit, Komodo deploys.

Agents: start with `AGENTS.md` and `store/graph.yml`.
