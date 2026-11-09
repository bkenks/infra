package exports

import "github.com/bkenks/infra/model/inventory"

ansible: all: {
	hosts: {
		for n, h in inventory.hosts {
			(n): {ansible_host: h.fqdn}
		}
	}
	children: {
		for n, h in inventory.hosts {
			for r in h.roles {
				if r != _|_ {
					"role_\(r)": hosts: (n): {}
				}
			}
			if h.kind != _|_ {
				"kind_\(h.kind)": hosts: (n): {}
			}
		}
	}
}
