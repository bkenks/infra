| game port | `7777` | `7777` |
| REST API | none | `7878` |# terraria-tshock

Terraria dedicated server running [TShock](https://github.com/Pryaxis/TShock) 6.1.0
(`ryshe/terraria:tshock-1.4.5.6-6.1.0`) with **server-side characters** enabled.

Runs on `biggy`, alongside the vanilla `terraria` stack — separate containers and separate host
directories, so both can exist at once.

| | vanilla `terraria` | this stack |
| --- | --- | --- |
| game port | `127.0.0.1:18022` | `127.0.0.1:18023` |
| REST API | none | `127.0.0.1:18024` |
| host data | `/rootless-srv/file-browser-quantum/shared/terraria/worlds/columbia_plaza` | `/rootless-srv/terraria-tshock` |

Neither publishes a host port; players reach the game port through newt.

## Why not the vanilla stack's image

`ghcr.io/beardedio/terraria` (what `terraria` runs) publishes TShock only up to
`tshock-5.2.4`, which is built for Terraria **1.4.4.9**. This server is on **1.4.5.6** — a
1.4.4.9 build cannot open the world and 1.4.5.6 clients cannot connect to it. `ryshe/terraria`
tags the TShock release together with the Terraria version it targets, and ships 6.1.0 for
1.4.5.6, which matches the vanilla stack exactly.

Check the [TShock releases](https://github.com/Pryaxis/TShock/releases)
before bumping — TShock lags vanilla Terraria by weeks after a Terraria release.

## Server-side characters

Inventory, health, mana, and bank slots live in `tshock.sqlite` on the server instead of in
each player's local character file. Nobody can bring a character in, and nobody can take one
out. That is the point: it stops people importing endgame gear into a fresh world.

Consequences:

- **Everyone starts over.** SSC does not import existing characters — every player gets the
  starting kit on first login. The world keeps its structures and boss flags; the people do
  not keep their stuff.
- **Accounts are required.** `RequireLogin` is on, because an unauthenticated player under
  SSC is frozen anyway. Players `/register` once, then `/login`. UUID login is on, so after
  the first login the client logs in automatically.
- **`tshock.sqlite` is the only copy of every character.** It lives in
  `/rootless-srv/terraria-tshock/config`. Back that directory up; there is no client-side
  copy to restore from.

To change the starting kit, edit `StartingInventory` in `files/sscconfig.seed.json` before
first deploy, or `sscconfig.json` on the host afterwards (`netID` values are Terraria item
IDs; the defaults are a copper shortsword, pickaxe, and axe).

## First deploy

The image writes its own config on first boot, so the seeds in `files/` must be in place
**before** the first `up` or the server will come up with SSC off.

1. Create the host directories on `biggy`:

   ```bash
   mkdir -p /rootless-srv/terraria-tshock/{config,worlds,logs,plugins}
   ```

2. Copy the seed configs in, renaming off the `.seed` suffix:

   ```bash
   cd /etc/komodo/repos/infra.stacks/src/apps/personal/terraria-tshock
   cp files/config.seed.json     /rootless-srv/terraria-tshock/config/config.json
   cp files/sscconfig.seed.json  /rootless-srv/terraria-tshock/config/sscconfig.json
   ```

   **`sscconfig.seed.json` must stay complete.** TShock merges a partial `config.json` with
   what you supplied, but a partial `sscconfig.json` is discarded outright and replaced with
   stock defaults — which means SSC silently comes back off. If you add a field to that file,
   keep all eight present.

3. Put the world in place. **Stop the vanilla `terraria` stack first** — two servers writing
   one `.wld` will corrupt it, which is why this stack has its own directory rather than
   sharing one:

   ```bash
   cp /rootless-srv/file-browser-quantum/shared/terraria/worlds/columbia_plaza/Columbia_Plaza.wld /rootless-srv/terraria-tshock/worlds/
   ```

   To start on a fresh world instead, leave the directory empty and add
   `command: ["-autocreate", "2", "-worldname", "Columbia_Plaza"]` to the service for the
   first boot only.

4. Deploy through Komodo, then read the container logs. The first boot prints a one-time
   setup code:

   ```
   To setup the server, join the game and type /setup <code>
   ```

   Join and run `/setup <code>` to claim superadmin. Do this before anyone else connects —
   until it is done, the server has no owner.

## REST API

`RestApiEnabled` is on, listening on `7878`.
`EnableTokenEndpointAuthentication` is on, so every endpoint — including `/status` — requires
a token, and tokens are issued only to a registered TShock account.

A REST token is full server admin, including running arbitrary console commands. Never route it
through Pangolin. Anything that consumes it (a status dashboard, a Discord bridge) should
join this stack's Docker network and dial `terraria-tshock-app:7878`.

Useful once a token exists: `/v2/players/list` (who is online), `/status` (player count,
world, uptime), `/v2/players/read?player=<name>`.

## Notes

- `tty` and `stdin_open` are required: TShock reads console commands from stdin and exits at
  startup without a TTY.
- `SpawnProtection` is off, matching vanilla behaviour — TShock 6.1 already defaults it off.
- Plugins go in `/rootless-srv/terraria-tshock/plugins`; the image seeds that directory with
  TShock's own plugins on first run.
