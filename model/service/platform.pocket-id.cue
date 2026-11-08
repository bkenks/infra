package service

import (
	"github.com/bkenks/infra/model/externals"
)

_pocket_id: {
	version:    "v2"
	port:       1411
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
	secrets: {
		ENC_KEY: source: "pocket-id/encryption_key"
	}

	files: "fnox.toml": {format: "toml", contents: D._fnox}

	compose: C={
		name: "pocket-id"

		secrets: (_pocket_id.encKeyRef): environment: _pocket_id.encKeyName

		networks: {externals.dockerNetworks.pangolinSite.asExternal}

		volumes: (_pocket_id.volumes.data.ref): name: _pocket_id.volumes.data.name

		services: "pocket-id": {
			image: "pocketid/pocket-id:\(_pocket_id.version)"
			secrets: [_pocket_id.encKeyRef]
			environment: {
				APP_URL:             "https://id." + externals.domains.ktbcloud_dotcom
				TRUST_PROXY:         pangolin_connector._ipv4_address
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
			networks: [externals.dockerNetworks.pangolinSite.name]
		}
	}
}
