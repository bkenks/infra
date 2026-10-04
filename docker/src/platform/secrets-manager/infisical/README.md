# Infisical

Self-hosted Infisical. App + Postgres + Redis on `rick`.

Every var uses `${VAR:-}` rather than `${VAR:?err}`: validation is at runtime — the app
rejects an empty `ENCRYPTION_KEY` — so a `config` on a host without the env file still resolves.
