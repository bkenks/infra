# 01-03-01 Stacks are one CUE package

Supersedes 01-01-01 (stacks in Pkl).

## Decision

Every stack is a field of one CUE value, `stacks.<name>`, in a single package. Each stack
lives in its own file at the top of the stacks directory. The stack's directory beside it
holds only what Compose and Komodo read: the rendered `compose.yaml`, `fnox.toml`, mounted
config files, and READMEs.

The layers are:

- **Compose schema.** The upstream Compose JSON Schema imported with `cue import` as
  `#Compose`, plus a generated regex of every valid service key. Both are regenerated,
  never edited.
- **`#Stack`.** The house spec, unified with `#Compose`. It derives `container_name`
  (`<stack>-<service>`), network and volume names, the default `restart` and `logging`,
  and a hidden `_ref` on every service, network, and volume.
- **`stacks: [Name]: #Stack & {name: Name}`.** The map key is the stack's project name and
  must match its directory.

Stacks refer to values instead of repeating them:

- A service refers to itself through a value alias (`app: Svc={ _port: 8000, expose:
  [Svc._port] }`).
- A service refers to a sibling through the stack alias (`S.services.db._ref`,
  `S.services.db._port`).
- A stack refers to another stack by path (`stacks.komodo.services.app._port`,
  `stacks.pangolin._endpoint`).

`#Stack` also narrows the schema where this repo uses only one form. `environment` and
`depends_on` are maps, and service `networks` is a list whose items must be keys of the
stack's `networks`. It rejects any service key that is not a Compose service key or an
`x-` extension.

## Why

The first CUE layout made each stack directory its own package instance. CUE builds an
instance from one directory plus its parents, so no stack could see another one. Every
stack also wrote to the same top-level `stack` field, so two stacks could never coexist in
one evaluation. Anything shared had to go through the cross-tool `store` package.

With one package, a value that crosses a stack boundary (a port, an endpoint, a container
name) has a single definition, and a typo fails at `cue vet`.

The imported schema models a service as a `matchN` over two sub-schemas, so it never
rejects an unknown key. The generated service-key regex closes that gap.

## Consequences

- `cue:render` exports `stacks["<name>"]` once per stack. It fails when a stack has no
  directory, and when a directory holds a `compose.yaml` with no stack.
- Rendered YAML has the same content as before the change; only the key order moved.
- The stack name cannot be overridden: it is always the map key.
- An undeclared service network reports the custom message after a block of `matchN`
  errors from the generated schema.

## Rejected

- **One package per stack directory, importing each other.** This needs an import per
  dependency and forbids cycles, and the `stack` field still collides.
- **The `aliasv2` experiment's `self`.** Its syntax is still experimental. `cue fix
  --exp=aliasv2` can migrate the current value aliases later.
- **The curated `cue.dev/x/dockercompose` module.** Its docs are drafts, and the Central
  Registry needs a login. Importing the upstream schema pins the exact version.
