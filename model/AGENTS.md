# model/ — CUE source of truth

Everything here describes infrastructure; `mise run cue:render` projects it
into `store/` (YAML) and `ops/services/out/` (Compose stacks).

- `schema/schema.cue` — `#Host`, enums, Compose constraints.
- `inventory/inventory.cue` — hosts: name, kuid, fqdn, kind, os, arch, roles.
- `externals/externals.cue` — host paths, domains, docker networks, routes.
- `services/` — one file per stack; each top-level field is a stack
  (`app.*`, `platform.*`, `mesh.*`).
- `exports/` — projections: `ansible.cue` (inventory).
- `snippets/snippets.cue` — shared CUE fragments.
- `render_tool.cue` — the `cue cmd render` tool. Run via
  `mise run cue:render`.

## Adding a stack

1. Create `model/services/<area>.<name>.cue` with a `compose:` block.
2. Add secrets via `fnox:` (fnox + 1Password references) — never values.
3. `mise run cue:render`, commit, then add the stack in Komodo.

## CUE gotchas (learned the hard way)

- Do **not** nest a comprehension that binds list elements inside another
  comprehension producing a list — it triggers evaluator conflicts in CUE
  0.17. Flatten into one comprehension with multiple `for`/`if` clauses.
- Don't type list elements with `or()`-over-data disjunctions; use plain
  `[...string]` plus a `close()`-based set check.
- `cue vet -c` has pre-existing failures in `services/snippets/`; ignore.
