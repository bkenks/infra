# workspace/ — general workspace

Non-infrastructure home of the monorepo: notes, experiments, journal,
and pointers to external resources. Everything here is safe to edit
freely — nothing in this directory feeds renders or deploys.

- `knowledge/` — durable notes and research (how-tos, comparisons,
  things learned). Not infra runbooks — those belong in `docs/`.
- `projects/` — project workspaces and scratchpads, one directory per
  project.
- `journal/` — dated operational/personal journal. One file per entry:
  `YYYY-MM-DD-slug.md`, newest last.
- `links/` — index of external resources: services, accounts, domains,
  and where their state lives.

For infrastructure facts (hosts, stacks, deploys), agents should read
`store/graph.yml` and `docs/` instead — this directory is for everything
else.
