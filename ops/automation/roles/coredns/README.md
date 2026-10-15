# coredns

Runs CoreDNS as a systemd service on a `dns0` dummy interface and makes it the
host's resolver through a systemd-resolved drop-in.

| Variable | Default |
|---|---|
| `coredns__version` | `1.14.6` |
| `coredns__address` | `10.200.0.53` |
| `coredns__config_files` | `[]` — controller paths copied to `/etc/coredns/`; one must be `Corefile` |
| `coredns__verify_query` | `ns.internal` |

The Corefile binds `dns0`. `coredns__address` must match the zone's `ns` record.
`Domains=~.` in the drop-in is what routes every query to CoreDNS.
