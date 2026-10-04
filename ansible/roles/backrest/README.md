# backrest

Installs [Backrest](https://github.com/garethgeorge/backrest) with its upstream
install script, which downloads the latest release and registers a systemd
service bound to `127.0.0.1:9898`.

The service runs as the connecting user, because the script reads `SUDO_USER`
from the `become` escalation.

The script tears down and reinstalls on every run, so the role skips it once the
binary exists. To upgrade, remove the binary on the host and re-run the role.
