# Stack template

`stack.pkl` here is a real, rendering stack (app + dedicated Postgres, with secrets): copy
the directory, don't start from scratch. It is rebuilt on every commit, so it cannot rot
when the library changes under it.

## Scaffold a new stack

1. Copy this directory to `src/<area>/<stack>/`; `area` is `apps/<group>`,
   `platform/<group>`, or `tools/<group>`.
2. Set `name`. It is the compose project name and the prefix of every derived container
   (`<name>-<role>`) and volume (`<name>-<role>_<purpose>`).
3. Delete the services and fields you don't need.
4. Store the secrets in 1Password (see [Secrets](#secrets)).
5. Add the stack to Komodo with `run_directory = "./src/<area>/<stack>"`. Never
   `docker compose` a stack by hand.

Committing re-renders everything (lefthook runs `mise run render`). Never edit a file whose
first line is the `# GENERATED from …` header.

`@compose` is the pkl-compose library (vendored under `.vendir/pkl-compose`); `@infra` is
`src/lib`. Both resolve from any depth under `src/` because the root `PklProject` declares
them.

## Names

| You write | You get |
| --- | --- |
| `name = "example"` | compose `name`, and the name of the private bridge |
| `["app"] { … }` | `container_name: example-app`, `hostname: app`; other services dial `app` |
| `data { ["data"] { target = "/data" } }` | a mount from `app_data`, and a top-level volume `app_data` named `example-app_data` |
| `networks { ["backend"] {} }` | a network named `example_backend` |

**Services are keyed by role** (`Types.Role` in pkl-compose), so `db` is never also
`database` in some other stack. A key outside the enumeration fails eval; add the role
upstream rather than reaching for a product name. Two services of one role take a
qualifier: `secrets-traefik` (see `platform/edge/pangolin`).

**Override a derived name by writing it again.** `container_name = "postgres-db"` keeps
a name other systems already dial (`databases/postgres`, `platform/edge/pangolin`).

A volume mounted by several services is declared once under `data` on the service that
owns it and mounted by the others as `new { type = "volume"; source = "<role>_<purpose>";
target = … }`.

## Golden rule: reference by key, never by string

Anything that crosses stack boundaries lives in `src/lib/registry.pkl`:

```pkl
registry.endpoint.serviceGroup.victorialogs.host.addr   // typo fails at eval
"littlebuddy.internal:19428"                            // typo fails silently at `up`
```

`collections.pkl` holds what depends on nothing. A value moves to `registry.pkl` the moment
a *second* stack needs it.

## Cheat-sheet

| Need | Use |
| --- | --- |
| Publish a host port | `ports { col.loopbackPort(8080, 18000) }` |
| Bind mount | `col.bind(host, container)` / `col.bindReadOnly(…)` |
| Join a shared network | `sharedNetworks { x }` plus `networks { "default"; x.name }` on the service |
| Reach a service on another host | `registry.endpoint.serviceGroup.<x>.host.addr` |
| Wait on a healthcheck | `depends_on { ["db"] { condition = "service_healthy" } }` |
| Postgres / Redis healthcheck | `col.pgIsReady(user)` / `col.redisPing` |
| Mount the docker socket | `col.mounts.dockerSock` (`…RW` when it must write) |
| Keep a container up through Komodo StopAll | `labels = col.labels.komodoSkip` |
| Public HTTPS URL of an endpoint | `registry.endpoint.serviceGroup.<x>.proxy.url` |
| Durations and sizes | `interval = 30.s`, `memory = 512.mib` |
| A one-off hook | `pre_start { new { image = "alpine:3.20"; command { … } } }` |

## Networks

`default` (named after the stack) and the newt gateway are declared by `@infra/Stack.pkl`.
A shared network from `registry.network.shared` is listed in `sharedNetworks`, which
declares it `external`: attaching before it exists fails the deploy rather than silently
creating a second empty network of the same name.

**Host to host**: the `.internal` zone, which every host's CoreDNS resolves. Publish the
port and dial `registry.endpoint.serviceGroup.<x>.host.addr`.

A service using `network_mode` (host, or `service:<other>`) must declare no `networks`.

## Secrets

The `secrets` service is the **docker-compose-fnox** provider (`secrets.fnox`). At `up` it
injects every secret its `fnox.toml` lists into each service that `depends_on` it. Each
secret is read from the field of the same name on the 1Password item passed to
`secrets.config(item, names)`, in vault `secrets`.

- Assign the provider with `=`, never the amends form (that picks up a `container_name`).
- Add `secrets.ready` to `depends_on` of every service that reads one.
- Store each secret under exactly the name the container reads. The provider cannot rename a
  value or build one out of parts.
- A secret that must arrive as a **file** needs a `pre_start` hook
  (`platform/backup-manager/databasus`).
- Secrets that differ per host: `secrets.fnoxPerHost` + `secrets.hostConfig`
  (`platform/edge/newt`).
- Restore-tier stacks also render `bootstrap.yaml`; see `bootstrap` in `@infra/Stack.pkl`.

## More than one file

`output.files` names every file a stack renders. `module.file(doc)` renders a compose
document, `module.yamlFile(doc)` a plain YAML file. Real: `platform/edge/pangolin`,
`platform/overlay/traefik`.
