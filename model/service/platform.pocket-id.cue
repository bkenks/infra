package service

import cmn "github.com/bkenks/infra/model/common"

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
	networks: {
		gw: ""
	}
}

pocket_id: {
	fnox: {
		secrets: {
			(_pocket_id.encKeyName): {provider: "onepassword", value: "pocket-id/encryption_key"}
		}
	}

	compose: C={
		name: "pocket-id"

		secrets: {
			(_pocket_id.encKeyRef):
				environment: _pocket_id.encKeyName
		}

		networks: {
			(pangolin_connector._net.ps.name): {name: pangolin_connector._net.ps.name, external: true}
		}

		volumes: {
			(_pocket_id.volumes.data.ref): name: _pocket_id.volumes.data.name
		}

		services: "pocket-id": {
			image: "pocketid/pocket-id:\(_pocket_id.version)"
			secrets: [_pocket_id.encKeyRef]
			environment: {
				APP_URL:             "https://id." + cmn.domain.ktbcloud_dotcom
				TRUST_PROXY:         pangolin_connector._subnet
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
			volumes: [
				"\(_pocket_id.volumes.data.ref):/app/data",
			]
			expose: [_pocket_id.port]
			networks: [pangolin_connector._net.ps.name]
		}
	}
}
