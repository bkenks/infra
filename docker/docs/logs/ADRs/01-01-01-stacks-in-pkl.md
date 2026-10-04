# 01-01-01 Stacks are written in Pkl

## Decision

Every stack is a `stack.pkl` amending `@infra/Stack.pkl`, which extends pkl-compose's
`Stack`. Jsonnet, `render.py`, the vendored `lib_compose` library and
`src/registry.libsonnet` are removed. Cross-stack values move to `src/lib/registry.pkl`,
a local Pkl package resolved through the root `PklProject`.

Alongside the language change, two conventions changed:

- Services are keyed by a closed role enumeration. Stacks that used product names
  (`sonarr`, `gotenberg`, `hocuspocus`, `gerbil`, …) were renamed to roles (`tv`,
  `converter`, `collab`, `tunnel`, …); pkl-compose 0.2.0 added the roles that did not exist
  and a one-field qualifier (`secrets-traefik`) for a second service of one role.
- Named volumes follow pkl-compose's scheme, `<project>-<role>_<purpose>`, instead of
  `<project>_<key>`. Existing data is copied to the new names on each host before the
  stack is redeployed (`scripts/migrate_volumes.sh`).

## Why

Jsonnet gave the repo derived names and a registry, but no types: a misspelled compose key
or a string where a list was expected surfaced at `docker compose up`. Pkl types the
compose schema, closes the role set, checks that `depends_on` and `networks` point at
declared things, and fails a registry typo at eval, all before a file is committed.

Renaming services rather than widening the key type keeps the guarantee that `db` is never
also `database`: the role, not the product, is the service's identity and the seed of its
container and volume names.

Adopting the library's volume naming rather than carrying the old scheme keeps one naming
rule across every repo that consumes pkl-compose, at the cost of a one-time data copy per
stack.

## Consequences

- Rendered YAML is long-form (typed ports, mounts, `depends_on` maps) and unquoted; it is
  behaviorally equivalent, not byte-identical, to the Jsonnet output.
- Every service now carries `hostname: <role>`; containers recreate once on cutover.
- `mem_limit`/`mem_reservation` are written as `deploy.resources`; string commands and
  healthchecks are lists; labels are maps.
- The komodo stack's `komodo_core` network alias was dropped (pkl-compose does not model
  the service-level `networks` mapping form); nothing in this repo dialled it.
- The coder stack reads its secrets through `secrets.provider` like every other stack,
  so the provider dials `controlplane.internal` rather than a hardcoded tailscale IP.

## Rejected

- Typing service keys as any T1 name. Loses the typo check and the closed vocabulary.
- Keeping `<project>_<key>` volume names by relaxing the library. Two naming rules
  forever, for the sake of skipping one copy per stack.
