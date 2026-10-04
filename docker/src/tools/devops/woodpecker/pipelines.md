# Woodpecker CI — Adding a Pipeline

Stack deploy/secrets: see `README.md`.

## Two secret systems

- **Stack secrets** (server's OAuth + agent secret) → `fnox.toml`, 1Password item `woodpecker`.
- **Pipeline secrets** (e.g. registry tokens) → Woodpecker-native secrets, stored in its own DB, added via the UI, referenced in `.woodpecker.yml` via `from_secret:`.

## Adding a pipeline

1. Repo must be a first-class Forgejo repo, not a pull-mirror (pull-mirrors don't fire webhooks). Convert via Forgejo repo → Settings → Danger Zone → *Convert to Regular Repository*.
2. Activate the repo in the Woodpecker UI (auto-installs the webhook).
3. Add pipeline secrets: Woodpecker UI → repo/org → Settings → Secrets. Check each secret's event filter.
4. Add `.woodpecker.yml` (or a `.woodpecker/` dir for multiple workflows) to the repo, on the ref that will trigger.
5. Trigger per the pipeline's `when:` filter.

### Gotchas

- `WOODPECKER_PLUGINS_PRIVILEGED` must match the plugin image **including tag** — bump both together.
- If a build can't authenticate, check the secret's event filter allows the triggering event.
- `CI_COMMIT_TAG` is built-in, populated from the git tag on tag/release events.

## Example — release → build → push

`stackform_website/.woodpecker.yml`:
```yaml
when:
  - event: release

steps:
  - name: build-and-push
    image: woodpeckerci/plugin-docker-buildx:6.1.0
    settings:
      registry: fj.ktbinternal.com
      repo: fj.ktbinternal.com/stackform-hq/stackform_website
      dockerfile: Dockerfile
      platforms: linux/amd64
      tags:
        - ${CI_COMMIT_TAG}
        - latest
      build_args:
        - NEXT_PUBLIC_SERVER_URL=https://stackform.app
      username:
        from_secret: forgejo_registry_user
      password:
        from_secret: forgejo_registry_token
```

`forgejo_registry_user`/`forgejo_registry_token` are Woodpecker secrets scoped `read:package` + `write:package`, allowed on the `release` event.
