# activepieces

[Activepieces](https://www.activepieces.com/) — self-hosted workflow automation. Reached at
`activepieces.ktbinternal.com`.

## Secrets

`fnox.toml`, 1Password item `activepieces`. `AP_POSTGRES_PASSWORD` must equal
`POSTGRES_PASSWORD`; `AP_ENCRYPTION_KEY` is `openssl rand -hex 16` (32 hex chars),
`AP_JWT_SECRET` is `openssl rand -base64 32`.

Store all of them before the first deploy — Postgres initialises its data directory on first
start, and coming up without a password means destroying the volume to fix it.
