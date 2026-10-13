package stacks

import (
	"github.com/bkenks/infra/store"
	s "github.com/bkenks/infra/docker/schema/stack"
)

_komodo: {
	version:      "2.1.2"
	mongoVersion: "8.2.4"
	bindDir:      "\(store.paths.docker_bind_mounts)/dcm"
}

stacks: komodo: S={
	services: {
		app: Svc={
			_port: 9120
			image: "ghcr.io/moghtech/komodo-core:\(_komodo.version)"
			init:  true
			depends_on: db: condition: "service_started"
			env_file: ["./core.env"]
			environment: {
				KOMODO_HOST:              "https://komo.\(s.#Domain.ktbinternal)"
				KOMODO_DATABASE_USERNAME: "${KOMODO_DATABASE_USERNAME:?err}"
				KOMODO_DATABASE_PASSWORD: "${KOMODO_DATABASE_PASSWORD:?err}"
				KOMODO_JWT_SECRET:        "${KOMODO_JWT_SECRET:?err}"
				KOMODO_WEBHOOK_SECRET:    "${KOMODO_WEBHOOK_SECRET:?err}"
			}
			ports: ["\(Svc._port):\(Svc._port)"]
			volumes: [
				"\(S.volumes.keys.#ref):/config/keys",
				"\(_komodo.bindDir)/komodo/data/backups:/backups",
				"\(_komodo.bindDir)/komodo/data/syncs:/syncs",
			]
			networks: [S.networks.default.#ref, S.networks.newt_gw_001.#ref]
			labels: s.#Label.komodoSkip
		}
		db: {
			image: "mongo:\(_komodo.mongoVersion)"
			command: ["--quiet", "--wiredTigerCacheSizeGB", "0.25"]
			env_file: ["./core.env"]
			environment: {
				MONGO_INITDB_ROOT_USERNAME: "${MONGO_INITDB_ROOT_USERNAME:?err}"
				MONGO_INITDB_ROOT_PASSWORD: "${MONGO_INITDB_ROOT_PASSWORD:?err}"
			}
			ports: ["27017:27017"]
			volumes: [
				"\(_komodo.bindDir)/mongo/data:/data/db",
				"\(_komodo.bindDir)/mongo/config:/data/configdb",
			]
			labels: s.#Label.komodoSkip
		}
	}
	volumes: keys: name: "komodo-app_keys"
	networks: newt_gw_001: store.shared.newt_gw_001
}
