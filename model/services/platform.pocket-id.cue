package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_pocket_id: {
	version: "v2"
	port:    1411
	// Loopback only: reached by the bare-metal Pangolin site on this host.
	hostPort: 1411

	// Own network with a pinned subnet: host-side connections to the published
	// port (the bare-metal Pangolin site) arrive from its gateway, which
	// TRUST_PROXY trusts. Keep clear of Docker's 172.16.0.0/12 pool.
	subnet:     "10.250.2.0/24"
	gateway:    "10.250.2.1"
	encKeyRef:  "encryption_key"
	encKeyName: "ENC_KEY"
	volumes: {
		data: {
			ref:  "data"
			name: "pocket-id_data"
		}
	}
}

pocket_id: D={
	_scr: D.fnox.secrets

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:  D.fnox.providers.onepassword._ID
			ENC_KEY: value: "pocket-id/encryption_key"
		}
	}

	compose: C={
		name: "pocket-id"

		secrets: (_pocket_id.encKeyRef): environment: _pocket_id.encKeyName

		networks: default: ipam: config: [{subnet: _pocket_id.subnet, gateway: _pocket_id.gateway}]

		volumes: (_pocket_id.volumes.data.ref): name: _pocket_id.volumes.data.name

		services: "pocket-id": {
			image: "pocketid/pocket-id:\(_pocket_id.version)"
			ports: ["127.0.0.1:\(_pocket_id.hostPort):\(_pocket_id.port)"]
			secrets: [_pocket_id.encKeyRef]
			environment: {
				APP_URL:             "https://id." + ext.domains.ktbCloud
				TRUST_PROXY:         _pocket_id.gateway
				MAXMIND_LICENSE_KEY: ""
				PUID:                1000
				PGID:                1000

				ENCRYPTION_KEY_FILE: "/run/secrets/\(_pocket_id.encKeyRef)"
			}

			container_name: C.name
			healthcheck: {
				test: ["CMD", "/app/pocket-id", "healthcheck"]
				interval:     "1m30s"
				timeout:      "5s"
				retries:      2
				start_period: "10s"
			}
			volumes: ["\(_pocket_id.volumes.data.ref):/app/data"]
			expose: [_pocket_id.port]
		}
	}
}
