# docs/ — Obsidian vault

Human-oriented documentation, also readable by agents.

- `adr/` — architecture decision records, numbered `NN-NN-NN-slug.md`.
- `log/` — dated operational logs / runbooks, same numbering.
- `legend.md` — networking & infrastructure terminology used across the
  repo (and referenced by `store/graph.yml` meta).
- `fix-list.md` — known issues / pending fixes.
- `diagrams/infra.likec4` — GENERATED LikeC4 diagram of the whole
  infrastructure (hosts, stacks, networks, deploy relations); same
  source of truth as `store/graph.yml`. Preview with `mise run likec4`.

Numbering scheme: `01-01-01` = area-sequence-version. Keep ADRs immutable
once accepted; add a new versioned file instead.
