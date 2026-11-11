package exports

import (
	inv "github.com/bkenks/infra/model/inventory"
)

ansible: {
	if inv.hosts != _|_ if len(inv.hosts) > 0 {
		all: {
			for n, h in inv.hosts {
				hosts: (n): ansible_host: h.fqdn

				if len(h.roles) > 0 for r in h.roles {
					children: "role_\(r)": hosts: (n): {}
				}

				if h.kind != _|_ {
					children: "kind_\(h.kind)": hosts: (n): {}
				}
			}
		}
	}
}