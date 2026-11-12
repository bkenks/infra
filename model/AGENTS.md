# model/ — CUE source of truth

Everything here describes infrastructure; `mise run cue:render` projects it
into `store/` (YAML), `ops/services/out/` (Compose stacks), and
`store/graph.yml` (the AI-agent infra map).

- `schema/schema.cue` — `#Host`, enums, Compose constraints.
- `inventory/inventory.cue` — hosts: name, kuid, fqdn, kind, os, arch, roles.
- `externals/externals.cue` — host paths, domains, docker networks, routes.
- `services/` — one file per stack; each top-level field is a stack
  (`app.*`, `platform.*`, `mesh.*`).
- `exports/` — projections: `ansible.cue` (inventory), `graph.cue`
  (graph.yml + deploy-target validation via `_checkDeployTargets`).
- `snippets/snippets.cue` — shared CUE fragments.
- `render_tool.cue` — the `cue cmd render` tool. Run via
  `mise run cue:render`.

## Adding a stack

1. Create `model/services/<area>.<name>.cue` with a `compose:` block.
2. Set `deploy: {manager, targets}` (see below) unless it's not deployed.
3. Add secrets via `fnox:` (fnox + 1Password references) — never values.
4. `mise run cue:render`, commit.

## The `deploy` field (feeds store/graph.yml)

```cue
deploy: {
	manager!: "komodo" | "ansible" // default "komodo"; "ansible" for komodo core
	targets!: [...string]          // inventory host names; validated at vet time
	per_host?: bool                // one instance per target host
}
```

- Omit `deploy` only for stacks not currently deployed anywhere.
- `notes?: string` — free-form context (purpose, links, quirks) that lands
  in graph.yml for agents.

## CUE gotchas (learned the hard way)

- Do **not** nest a comprehension that binds list elements inside another
  comprehension producing a list — it triggers evaluator conflicts in CUE
  0.17. Flatten into one comprehension with multiple `for`/`if` clauses.
- Don't type list elements with `or()`-over-data disjunctions; use plain
  `[...string]` plus a `close()`-based set check (see `exports/graph.cue`).
- `cue vet -c` has pre-existing failures in `services/snippets/`; ignore.
