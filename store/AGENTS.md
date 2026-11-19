# store/ — generated YAML

Everything here is **generated from CUE** (`mise run cue:render`) and
committed. Never edit by hand — edit `model/` and re-render.

- `hosts.yml` — Ansible inventory (roles, kinds, fqdns) from
  `model/inventory`.
- `networks.yml` — docker networks from `model/externals`.
- `paths.yml` — canonical host paths from `model/externals`.
