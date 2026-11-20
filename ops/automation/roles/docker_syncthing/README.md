# `docker_syncthing`

Runs Syncthing from the Compose stack rendered at `ops/services/out/syncthing`.
Creates the sync directory (`syncthingSync`, generated from CUE) owned by the
container's PUID/PGID, syncs the stack files into `{{ dockerStacks }}/syncthing`
with `docker_stack_files`, then brings the stack up.

Syncthing's config and keys live in the `syncthing_config` named volume. The GUI
binds to `127.0.0.1:8384` on the host network; reach it over an SSH tunnel.
