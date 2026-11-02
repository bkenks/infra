package compose

import (
	"cue.dev/x/dockercompose"
	"github.com/bkenks/infra/model/schema/encoding"
)

#DockerCompose: dockercompose.#Schema & {
	// Compose uses this to form container names which can be utilized...
	// in URLs, so we must conform to those URL constraints.
	name!: encoding.#Kebab

	networks: {
		[string]: {
			name!: string
		}
	}

	volumes: {
		[string]: {
			name!: string
		}
	}

	services: {
		[string]: {
			container_name!: encoding.#Kebab
			restart:         *"unless-stopped" | string
			logging: *{
				driver: "json-file"
				options: {
					"max-size": "10m"
				}
			} | {...}
		}
	}
}
