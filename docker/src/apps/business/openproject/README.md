# openproject

[OpenProject](https://www.openproject.org/) — self-hosted project management. Reached at `openprj.ktbcloud.com`.

## Deploy

Deployed via Komodo. Secrets: `fnox.toml`, 1Password item `openproject`.

`/hocuspocus` must route to `collab` at higher priority than `web`'s catch-all — needed for `wss://openprj.ktbcloud.com/hocuspocus`.

`token/enterprise_token.rb` is a bind-mounted community enterprise-unlock patch — not generated, keep as-is.
