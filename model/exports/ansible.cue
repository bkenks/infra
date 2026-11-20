package exports

import (
	inv "github.com/bkenks/infra/model/inventory"
)

ansible: {
	if inv.hosts != _|_ if len(inv.hosts) > 0 {
		for n, h in inv.hosts {
			all: hosts: (n): {
				ansible_host: h.fqdn
				kuid:         h.kuid
			}

			if len(h.roles) > 0 for r in h.roles {
				"role_\(r)": hosts: (n): {}
			}

			if h.kind != _|_ {
				"kind_\(h.kind)": hosts: (n): {}
			}

			if h.provider != _|_ {
				"provider_\(h.provider)": hosts: (n): {}
			}
		}
	}
}
