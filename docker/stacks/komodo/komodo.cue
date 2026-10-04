package stack

import "github.com/bkenks/infra/store"

_komodo: {
	version:      "2.1.2"
	mongoVersion: "8.2.4"
	bindDir:      "\(store.paths.docker_bind_mounts)/dcm"
}

stack: {
	name: "komodo"
	services: {
		app: {
			image: "ghcr.io/moghtech/komodo-core:\(_komodo.version)"
			init:  true
			depends_on: db: condition: "service_started"
			env_file: ["./core.env"]
			environment: {
				KOMODO_HOST:              "https://komo.\(_domain.ktbinternal)"
				KOMODO_DATABASE_USERNAME: "${KOMODO_DATABASE_USERNAME:?err}"
				KOMODO_DATABASE_PASSWORD: "${KOMODO_DATABASE_PASSWORD:?err}"
				KOMODO_JWT_SECRET:        "${KOMODO_JWT_SECRET:?err}"
				KOMODO_WEBHOOK_SECRET:    "${KOMODO_WEBHOOK_SECRET:?err}"
			}
			ports: ["9120:9120"]
			volumes: [
				"\(stack.volumes.keys._ref):/config/keys",
				"\(_komodo.bindDir)/komodo/data/backups:/backups",
				"\(_komodo.bindDir)/komodo/data/syncs:/syncs",
			]
			networks: [stack.networks.default._ref, stack.networks.newt_gw_001._ref]
			labels: _label.komodoSkip
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
			labels: _label.komodoSkip
		}
	}
	volumes: keys: name: "komodo-app_keys"
	networks: newt_gw_001: store.shared.newt_gw_001
}
