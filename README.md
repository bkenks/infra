# infra

Infrastructure-as-Code monorepo, knowledge base, and general workspace.

- `model/` — CUE source of truth (schema, inventory, services).
- `store/` — YAML generated from CUE, read by Ansible and Terraform.
- `ops/automation/` — Ansible host configuration.
- `ops/services/` — rendered Compose stacks deployed by Komodo.
- `ops/state/` — OpenTofu roots.
- `docs/` — Obsidian vault: ADRs, runbooks, logs, terminology — plus `diagrams-v2/`, hand-drawn LikeC4 diagrams (`mise run likec4`).
- `workspace/` — notes, projects, journal, external links.

The flow: edit CUE, run `mise run cue:render`, commit, Komodo deploys.

Agents: start with `AGENTS.md`.
