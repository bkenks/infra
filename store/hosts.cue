@extern(embed)

package store

#Host: null | {tailscale_ip?: string, ...}

inventory: _ @embed(file=hosts.yml)
inventory: all: hosts: [string]: #Host
host: {
	for name, h in inventory.all.hosts {
		(name): {
			ref: name, if h != null {h}
		}
	}
}
