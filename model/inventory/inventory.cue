package inventory

import (
	"net"
	"github.com/bkenks/infra/model/schema"
)

domain: {
	public: {
		[_]: net.FQDN // enforce schema on all fields
		// —————————————————————————
		ktb_dev:         "ktb.dev"
		ktbinternal_com: "ktbinternal.com"
		ktbcloud_com:    "ktbcloud.com"
	}
	internal: {
		[_]:     net.FQDN
		default: "internal"
	}
}

hosts: {
	#Provider: {
		home:  "home"
		vultr: "vultr"
	}

	#Site: {
		cvg: "cvg"
		ord: "ord"
	}

	// —————————————————————————
	_d: domain
	_g: groups
	[hostName=_]: schema.#Host & {
		name:   hostName
		os:     "ubuntu"
		arch:   "amd64"
		domain: _d.internal.default
		groups: [...or([for groupName, _ in _g {groupName}])]
	}
	// —————————————————————————
	_defaultHomeHost: schema.#Host & {
		provider: #Provider.home
		site:     #Site.cvg
		kind:     "physical"
		groups: *[_g.bare_metal.name] | [...]
	}

	core01: _defaultHomeHost & {
		groups: [_g.bare_metal.name, _g.control_plane.name]
	}
	apps01:  _defaultHomeHost
	media01: _defaultHomeHost
	edge01: {
		provider: #Provider.vultr
		site:     #Site.ord
		kind:     "vm"
		groups: [_g.vps.name]
	}
}

common: {
	directory: {
		server: {
			[_]:               schema.#AbsPath
			share:             "/srv"
			docker_share:      share + "/docker"
			docker_files:      docker_share + "/files"
			docker_stacks:     docker_share + "/stacks"
			docker_bindmounts: docker_share + "/bind-mounts"
		}
	}
}

route: {
	[routeName=_]: schema.#Route & {
		name: routeName
	}

	pangolin: schema.#Route & {
		public: {
			scheme: "https"
			host:   "pangolin." + domain.public.ktbcloud_com
		}
	}
}

groups: [N=string]: name: N
groups: close({
	bare_metal:    schema.#Group
	vps:           schema.#Group
	control_plane: schema.#Group
})

for h in hosts {
	for g in h.groups {
		groups: {
			(g): {
				hosts: (h.name): {}
			}
		}
	}
}

let _hosts = hosts

ansible: all: {
	hosts: {for name, h in _hosts {(name): ansible_host: h.fqdn}}
	children: {
		for name, g in groups {
			(name): {
				if len(g.hosts) > 0 {hosts: g.hosts}
				if len(g.children) > 0 {children: g.children}
				if len(g.vars) > 0 {vars: g.vars}
			}
		}
	}
}
