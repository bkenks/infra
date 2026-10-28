package inventory

import (
	"github.com/bkenks/infra/model/schema"
)

domain: {
	public: {
		[_]: schema.#Domain // enforce schema on all fields
		// —————————————————————————
		ktb_dev:         "ktb.dev"
		ktbinternal_com: "ktbinternal.com"
		ktbcloud_com:    "ktbcloud.com"
	}
}

hosts: {
	[hst=_]: schema.#Host & {
		name: hst
	}

	// —————————————————————————
	core: schema.#Host & {
		fqdn: "core01.home-cvg.internal"
		os:   "ubuntu"
		arch: "amd64"
	}
	apps: schema.#Host & {
		fqdn: "apps01.home-cvg.internal"
		os:   "ubuntu"
		arch: "amd64"
	}
	media: schema.#Host & {
		fqdn: "media01.home-cvg.internal"
		os:   "ubuntu"
		arch: "amd64"
	}
	edge: schema.#Host & {
		fqdn: "edge01.vultr-ord.internal"
		os:   "ubuntu"
		arch: "amd64"
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
	[string]: [string]: schema.#Route

	pangolin: {
		public: entry: {
			scheme: "https"
			host:   "pangolin." + domain.public.ktbcloud_com
		}
	}
}
