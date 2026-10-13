# pangolin
[Pangolin](https://docs.pangolin.net/) — self-hosted tunnel + reverse proxy exposing internal services (incl. raw TCP/UDP) to the public internet without inbound ports on the origin host. Reached at `pangolin.ktbcloud.com` on rick.

## Deploy
- Dedicated edge host. Gerbil binds `80`/`443` itself, so **do not** also deploy `platform/overlay/traefik` on this host.
- `CF_DNS_API_TOKEN` must cover both the `ktbinternal.com` and `ktbcloud.com` zones.
- Secrets: `fnox.toml` (1Password items `apps.pangolin` and `traefik`).
