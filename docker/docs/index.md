# How infra.stacks works

Every directory under `src/<area>/<app>/` holding a `stack.pkl` is one Docker Compose
stack. Pkl renders it to the `compose.yaml` beside it (plus `fnox.toml`, `bootstrap.yaml`,
or config files where a stack declares them); the rendered files are committed, and Komodo
deploys them from that directory. The deploy pipeline never runs Pkl.

## Layers

| Layer | Where | What |
| --- | --- | --- |
| pkl-compose | `.vendir/pkl-compose/` (vendored by `vendir.yml`) | Typed compose schema, role-keyed services, derived container/volume/network names. |
| infra | `src/lib/` (local Pkl package `@infra`) | `Stack.pkl` (networks, header, `output.files`), `registry.pkl` (values that cross a stack boundary), `collections.pkl` (constants and helpers), `secrets.pkl` (the fnox provider). |
| stacks | `src/**/stack.pkl` | One module per stack; amends `@infra/Stack.pkl`. |

Authoring guide: `src/templates/stack/README.md`. Commands: `mise tasks`. Decisions:
`logs/ADRs/`.
