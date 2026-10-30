# infra

Infrastructure-as-Code Monorepo

- `model/` — CUE source of truth (schema, inventory, services).
- `store/` — YAML generated from CUE, read by Ansible and Terraform.
- `ops/automation/` — Ansible host configuration.
- `ops/services/` — rendered Compose stacks deployed by Komodo.
- `ops/state/` — OpenTofu roots.
- The flow: edit CUE, run `mise run cue:render`, commit, Komodo deploys.
