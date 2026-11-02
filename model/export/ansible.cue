package export

import inv "github.com/bkenks/infra/model/inventory"

ansible: all: {
	hosts: {
		for n, h in inv.hosts {
			(n): {ansible_host: h.fqdn}
		}
	}
	children: {
		for n, h in inv.hosts {
			"site_\(h.site)": hosts: (n): {}
			"kind_\(h.kind)": hosts: (n): {}
			"provider_\(h.provider)": hosts: (n): {}
			for r in h.roles {
				if r != _|_ {
					"role_\(r)": hosts: (n): {}
				}
			}
		}
	}
}
