# stream

Self-hosted media stack — Plex + the *arr suite + download client — one Komodo stack.

## Deploy

Deployed via Komodo. Secrets: `fnox.toml`, 1Password item `stream`.

Only `configarr/repos` (Configarr's TRaSH-guide clone cache) under `/srv/docker/bind-mounts/stream/` must exist and be writable on the host.

### Gotchas
- Restart policy `on-failure:5` — does not auto-start on host reboot.
- Seer's host config dir must be `1000:1000`; migrated from Overseerr, existing DB auto-migrates on first boot.

## First-run setup

Fresh installs only — Prowlarr then pushes indexers to Sonarr/Radarr automatically.

**SABnzbd** (`sabnzbd.ktbinternal.com`): enter provider details → Test Server → set Username/Password under Security → Folders: Completed Download Folder = `/data/usenet` → Categories: remove defaults, set default category folder to `other`, add category `library` → Switches: enable Direct Unpack.

**Prowlarr**: set auth (Forms) → add indexers → Settings → Apps → add each *arr with Full Sync, server `http://indexer:9696`, *arr server `http://tv:8989` / `http://movies:7878`, paste that arr's API key (Settings → General → Security).

**Bazarr**: auth (Form) → Languages: add profile `Main` → Providers: add (e.g. OpenSubtitles.com) → link Sonarr/Radarr with their API keys.

**Sonarr/Radarr**: Language Profiles → add `Main` → Quality: cap size per tier (Radarr also needs Preferred) → add SABnzbd download client (host `downloader`, port 8080, its API key/creds, category `library`) → auth (Form).

**Configarr**: edit [`configarr/config.yml`](./configarr/config.yml), commit, redeploy (or restart `seeder`) to re-apply.

**Plex**: stop container → claim code from plex.tv/claim → set `PLEX_CLAIM` via host/Komodo env → restart → add libraries (Movies → `/data/media/movies`, Series → `/data/media/series`, Music → `/data/media/music`) → enable auto-scan + thumbnail gen → set streaming quality → for remote access, forward port 32400 and enable Remote Access → enable HW transcoding (Settings → Transcoder).

**Seer** (`seerr.ktbinternal.com`): sign in with Plex → select server + libraries → add Radarr (`movies`, its API key, quality profile/root folder, Enable Scan) → add Sonarr (`tv`, same plus language/anime profiles, Season Folders) → Finish Setup → Users: enable Auto-Approve/Auto-Request.
