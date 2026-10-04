# woodpecker

[Woodpecker CI](https://woodpecker-ci.org/) at `peck.ktbcloud.com`, forge `https://fj.ktbcloud.com`. Pipeline authoring: see `pipelines.md`.

## Deploy

Deployed via Komodo. Secrets: `fnox.toml`, 1Password item `woodpecker`.

One-time setup: register the OAuth2 app in Forgejo (`/user/settings/applications`, redirect URI `https://peck.ktbcloud.com/authorize`) → client ID/secret into the 1Password item; generate the agent secret via `openssl rand -hex 32`; point `peck.ktbcloud.com` DNS at the host.
