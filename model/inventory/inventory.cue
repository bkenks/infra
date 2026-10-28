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
	[hostName=_]: schema.#Host & {
		name:   hostName
		os:     "ubuntu"
		arch:   "amd64"
		domain: _d.internal.default
	}
	// —————————————————————————
	_defaultHomeHost: schema.#Host & {
		provider: #Provider.home
		site:     #Site.cvg
	}
	
	core01:  _defaultHomeHost
	apps01:  _defaultHomeHost
	media01: _defaultHomeHost
	edge01: {
		provider: #Provider.vultr
		site:     #Site.ord
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
