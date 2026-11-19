# docs/ — Obsidian vault

Human-oriented documentation, also readable by agents.

- `adr/` — architecture decision records, numbered `NN-NN-NN-slug.md`.
- `log/` — dated operational logs / runbooks, same numbering.
- `legend.md` — networking & infrastructure terminology used across the
  repo.
- `fix-list.md` — known issues / pending fixes.
- `diagrams-v2/` — hand-drawn LikeC4 diagrams. Preview with
  `mise run likec4`.

Numbering scheme: `01-01-01` = area-sequence-version. Keep ADRs immutable
once accepted; add a new versioned file instead.
