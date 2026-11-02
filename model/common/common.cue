package common

import (
	"net"
	scma "github.com/bkenks/infra/model/schema"
)

directory: {
	server: {
		[_]:               scma.#AbsPath
		share:             "/srv"
		docker_share:      share + "/docker"
		docker_files:      docker_share + "/files"
		docker_stacks:     docker_share + "/stacks"
		docker_bindmounts: docker_share + "/bind-mounts"
	}
}

#Domains: {
	[string]: net.FQDN
}

domain: #Domains & {
	ktb_dotdev:         "ktb.dev"
	ktbinternal_dotcom: "ktbinternal.com"
	ktbcloud_dotcom:    "ktbcloud.com"
	dotinternal:        "internal"
}

route: {
	pangolin: scma.#Route & {
		public: {
			scheme: scma.#URIScheme.https
			host:   "pangolin." + domain.ktbcloud_dotcom
		}
	}
}

configs: "../../configs"