package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

// Based on docs.termix.site/install/server/docker.
_termix: {
	host:    "termix.\(ext.domains.ktbInternal)"
	port:    8080
	version: "26.11.3"

	// Own network with a pinned subnet: host-side connections to the published
	// port (the bare-metal Pangolin site) arrive from its gateway, which
	// TRUSTED_PROXIES trusts. Keep clear of Docker's 172.16.0.0/12 pool.
	subnet:  "10.250.1.0/24"
	gateway: "10.250.1.1"
}

termix: D={
	// Web SSH/RDP/VNC terminal and server manager
	// (https://termix.ktbinternal.com, private pangolin resource; not
	// publicly exposed). Encrypted SQLite DB, plugins and recordings live
	// in the termix-app_data volume; its keys come from 1Password
	// (infra/termix) and DATABASE_KEY/ENCRYPTION_KEY must never change
	// once data exists.

	_scr: D.fnox.secrets

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:              D.fnox.providers.onepassword._ID
			JWT_SECRET: value:          "termix/JWT_SECRET"
			DATABASE_KEY: value:        "termix/DATABASE_KEY"
			ENCRYPTION_KEY: value:      "termix/ENCRYPTION_KEY"
			INTERNAL_AUTH_TOKEN: value: "termix/INTERNAL_AUTH_TOKEN"
		}
	}

	compose: S={
		name: "termix"

		volumes: data: name: "termix-app_data"

		networks: default: ipam: config: [{subnet: _termix.subnet, gateway: _termix.gateway}]

		services: app: {
			image: "ghcr.io/termix-ssh/termix:\(_termix.version)"
			environment: {
				PORT: "\(_termix.port)"
				// Trust X-Forwarded-For only from the pangolin connector.
				TRUSTED_PROXIES: _termix.gateway
				// Refuse to start (or write keys to the volume) without the
				// secrets below.
				TERMIX_REQUIRE_EXTERNAL_SECRETS: "true"
				for k, _ in D.fnox.secrets {
					(k): "${\(k):?err}"
				}
			}
			expose: [_termix.port]
			ports: ["\(_termix.port):\(_termix.port)"]
			volumes: ["\(S.volumes.data._ID):/app/data"]
			// The image's own healthcheck uses wget, which upstream is
			// dropping; probe the backend health endpoint with node instead.
			healthcheck: snip.services.healthcheck.nodeFetch & {
				#port:        30001
				#path:        "/health"
				retries:      3
				start_period: "60s"
			}
		}
	}
}
