package service

_pocket_id: {
	version:     "v2"
	port:        1411
	encKeyRef: "encryption_key"
	encKeyName: "ENC_KEY"
	volumes: {
		data: {
			ref: "data"
			name: "pocket-id_data"
		}
	}
}

pocket_id: {
	fnox: {
		secrets: {
			(_pocket_id.encKeyName): { provider: "onepassword", value: "pocket-id/encryption_key"}
		}
	}

	compose: {
		name: "pocket-id"

		secrets: {
			(_pocket_id.encKeyRef):
				environment: _pocket_id.encKeyName
		}

		volumes: {
			(_pocket_id.volumes.data.ref): name: _pocket_id.volumes.data.name
		}

		services: "pocket-id": {
			image:    "pocketid/pocket-id:\(_pocket_id.version)"
			secrets: [_pocket_id.encKeyRef]
			environment: {
				TRUST_PROXY:         false
				MAXMIND_LICENSE_KEY: ""
				PUID:                1000
				PGID:                1000

				ENCRYPTION_KEY_FILE: "/run/secrets/\(_pocket_id.encKeyRef)"
			}

			healthcheck: {
				test: ["CMD", "/app/pocket-id", "healthcheck"]
				interval:     "1m30s"
				timeout:      "5s"
				retries:      2
				start_period: "10s"
			}
			ports: ["\(_pocket_id.port):\(_pocket_id.port)"]
			volumes: [
				"\(_pocket_id.volumes.data.ref):/app/data",
			]
		}
	}
}
