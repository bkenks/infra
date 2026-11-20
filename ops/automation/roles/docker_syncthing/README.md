# `docker_syncthing`

Runs Syncthing from the Compose stack rendered at `ops/services/out/syncthing`.
Creates the sync directory (`syncthingSync`, generated from CUE) owned by the
container's PUID/PGID, syncs the stack files into `{{ dockerStacks }}/syncthing`
with `docker_stack_files`, then brings the stack up.

Syncthing's config and keys live in the `syncthing_config` named volume. The GUI
binds to `127.0.0.1:8384` on the host network; reach it over an SSH tunnel.

## Configuration

`tasks/configure.yml` then configures Syncthing through its REST API, called
from each host against `127.0.0.1` with the API key read from `config.xml`:

- GUI user/password (`docker_syncthing__gui_user`, `docker_syncthing__gui_password`
  from fnox `SYNCTHING_GUI_PASSWORD`). Checked by logging in; only set on mismatch.
- `docker_syncthing__options`, merged into the global options.
- Every host in the play is added as a device on every other host, addressed
  as `tcp://<ansible_host>:22000` plus `dynamic`.
- Each folder in `docker_syncthing__folders` is shared with every host in the play.

Devices and folder shares are only added, never removed, so `--limit` runs are
safe; removing a host from the mesh is a manual step in the GUI. Peers connect
directly on TCP 22000, opened for `provider_home` in `access__firewall_group_ports`.
