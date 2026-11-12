# ops/ — automation, stacks, state

- `automation/` — Ansible: playbooks (`10_*`–`50_*` staged), roles,
  inventory (`inventory/`, `host_vars`, `group_vars`), its own ADRs in
  `automation/docs/adr/`. Managed with `uv`; config in `fnox.toml`.
  Komodo core deploys in `50_platform.yml`; komodo periphery runs on hosts
  via the `bpbradley.komodo` role.
- `services/` — service payload: `out/` holds rendered Compose stacks
  (generated from CUE — do not edit), `configs/` hand-written config
  files, `frappe/` a hand-written stack not modeled in CUE, `images/`
  Dockerfiles, `wrap` the fnox compose wrapper used by Komodo.
- `state/` — OpenTofu roots (cloudflare, vultr) with remote state.

Deploy flow: edit CUE → `mise run cue:render` → commit → Komodo pulls the
stacks repo and deploys to the hosts recorded in `store/graph.yml`.
