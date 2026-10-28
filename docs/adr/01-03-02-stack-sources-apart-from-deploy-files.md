# 01-03-02 Stack sources live apart from deploy files

Amends 01-03-01 (stacks are one CUE package).

## Decision

- The stacks directory holds only CUE: one file per stack, plus the `stacks` map that applies
  `#Stack`. Everything Compose and Komodo read lives in `deploy/<name>/`: the rendered
  `compose.yaml`, `fnox.toml`, mounted config files, and host-run scripts that belong to one
  stack. The map key must equal the `deploy/` directory name.
- `#Stack` and the shared snippets move to their own package, `schema/stack`, beside the
  imported Compose schema. Stacks import it.
- Because hidden fields are scoped to their package, the handles `#Stack` sets are
  definitions: `#ref` replaces `_ref`, and the snippets are `#Domain`, `#Mount`, `#Label` and
  `#Health` (with `#user` on `pgIsReady`). Values a stack sets for itself, such as `_port`
  and `_endpoint`, stay hidden fields in the `stacks` package.
- Upstream inputs are vendored with vendir into `vendor/`, pinned in `vendir.yml` and
  recorded in `vendir.lock.yml`. That covers the Compose JSON Schema the CUE schema is
  generated from.
- Operator wrappers (`wrap`, `nodewrap`) and one-off host scripts live in `scripts/`.
- Per-stack prose lives in `docs/components/`, not beside the deploy files.

## Why

Mixing library files, stack sources, rendered output and runtime files in one directory hid
which files were edited and which were generated or deployed. Splitting sources from deploy
files makes the render boundary a directory boundary. One vendoring tool gives every
upstream input a pin and a lock entry instead of a `curl` of a moving branch.

## Consequences

- Komodo stacks must point their run directory at `deploy/<name>`, and any compose command
  wrapper at `scripts/wrap` or `scripts/nodewrap` relative to that directory.
- Rendered YAML is byte-identical to the layout before this change.
- Bumping the Compose schema means editing its ref in `vendir.yml`, then `cue:update`.
