package service

_pocket_id: {
	version:     "v2"
	port:        1411
	enc_key_ref: "encryption_key"
}

pocket_id: {
	compose: S={
		name: "pocket-id"

		secrets: {
			(enc_key_ref):
				environment: "ENC_KEY"
		}

		volumes: {}

		services: "pocket-id": {
			image:    "pocketid/pocket-id:\(_pocket_id.version)"
			secrets: [enc_key_ref]
			environment: {
				TRUST_PROXY:         false
				MAXMIND_LICENSE_KEY: ""
				PUID:                1000
				PGID:                1000

				ENCRYPTION_KEY_FILE: "/run/secrets/\(enc_key_ref)"
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
				"./data:/app/data",
			]
		}
	}
}
