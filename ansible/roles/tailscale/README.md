# tailscale

Joins the host to the tailnet with DNS acceptance off. Set `tailscale__exit_node: true`
to also make it an [exit node](https://tailscale.com/kb/1103/exit-nodes).

Every run passes `--reset`, so the preferences are exactly what this role
declares. Change them here, never with `tailscale set` on a host.

Approve a new exit node in the Tailscale admin console before traffic routes through it.
