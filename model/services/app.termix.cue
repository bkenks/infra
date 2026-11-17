package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

// Based on docs.termix.site/install/server/docker.
_termix: {
	host:    "termix.\(ext.domains.ktbCloud)"
	port:    8080
	version: "26.11.1"
}

termix: D={
	deploy: {
		manager: "komodo"
		targets: ["bill"]
	}

	notes: "Web SSH/RDP/VNC terminal and server manager (https://\(_termix.host), pangolin SSO). Encrypted SQLite DB, plugins and recordings live in the termix-app_data volume; its keys come from 1Password (infra/termix) and DATABASE_KEY/ENCRYPTION_KEY must never change once data exists."

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

		networks: ext.dockerNetworks.pangolinSite.asExternal

		services: app: {
			image: "ghcr.io/termix-ssh/termix:\(_termix.version)"
			environment: {
				PORT: "\(_termix.port)"
				// Trust X-Forwarded-For only from the pangolin connector.
				TRUSTED_PROXIES: pangolinConnector._ipv4_address
				// Refuse to start (or write keys to the volume) without the
				// secrets below.
				TERMIX_REQUIRE_EXTERNAL_SECRETS: "true"
				for k, _ in D.fnox.secrets {
					(k): "${\(k):?err}"
				}
			}
			expose: [_termix.port]
			volumes: ["\(S.volumes.data._ID):/app/data"]
			networks: [ext.dockerNetworks.pangolinSite.name]
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
