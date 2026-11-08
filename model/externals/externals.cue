package externals

import (
	"net"

	"github.com/bkenks/infra/model/schema"
)

// Everything the model references but does not own: host and repo paths,
// domains, docker networks, and routes built from them. Services and the
// render tool both consume these; nothing here depends on services.

// dirs are well-known filesystem locations.
dirs: {
	// host paths live on the docker servers.
	host: {
		[_]:               schema.#AbsPath
		share:             "/srv"
		docker_share:      share + "/docker"
		docker_files:      docker_share + "/files"
		docker_stacks:     docker_share + "/stacks"
		docker_bindmounts: docker_share + "/bind-mounts"
	}

	// repo paths are relative to the repo root.
	repo: configs: "../../configs"
}

domains: {
	[string]:           net.FQDN
	ktb_dotdev:         "ktb.dev"
	ktbinternal_dotcom: "ktbinternal.com"
	ktbcloud_dotcom:    "ktbcloud.com"
	dotinternal:        "internal"
}

// dockerNetworks are networks created and shared outside any one stack.
dockerNetworks: {
	pangolinSite: N={
		name:   "pangolin-site"
		subnet: "10.250.0.0/24"
		asNew: {
			name: N.name
			ipam: config: [{subnet: N.subnet}]
		}
		asExternal: {
			(N.name): {
				name:     N.name
				external: true
			}
		}
	}
}

// routes are well-known URLs, built from domains.
routes: {
	pangolin: schema.#Route & {
		public: {
			scheme: schema.#URIScheme.https
			host:   "pangolin." + domains.ktbcloud_dotcom
		}
	}
}
