package stack

import "github.com/bkenks/infra/store"

_immich: {
	version:    "v2.7.5"
	dbImage:    "ghcr.io/immich-app/postgres:14-vectorchord0.4.3-pgvectors0.2.0@sha256:bcf63357191b76a916ae5eb93464d65c07511da41e3bf7a8416db519b40b1c23"
	cacheImage: "docker.io/valkey/valkey:9@sha256:8436e10bc65c94886a91d4415b6a6dfa9cb5a306fb3b996e5bb67cd2b4854193"
	port:       2283
	tz:         "America/New_York"
	bindDir:    "\(store.paths.docker_bind_mounts)/apps/immich"
}

stack: {
	name: "immich"
	services: {
		db: {
			image: _immich.dbImage
			environment: {
				POSTGRES_DB:          stack.name
				POSTGRES_USER:        stack.name
				POSTGRES_INITDB_ARGS: "--data-checksums"
				POSTGRES_PASSWORD:    "${POSTGRES_PASSWORD:?err}"
			}
			volumes: ["\(_immich.bindDir)/postgres:/var/lib/postgresql/data"]
			shm_size: "128m"
		}
		ml: {
			image: "ghcr.io/immich-app/immich-machine-learning:\(_immich.version)"
			environment: TZ: _immich.tz
			volumes: ["\(_immich.bindDir)/model-cache:/cache"]
		}
		cache: image: _immich.cacheImage
		app: {
			image: "ghcr.io/immich-app/immich-server:\(_immich.version)"
			depends_on: {
				db: condition:    "service_started"
				cache: condition: "service_started"
			}
			environment: {
				TZ:               _immich.tz
				REDIS_HOSTNAME:   "cache"
				DB_HOSTNAME:      "db"
				DB_USERNAME:      stack.name
				DB_DATABASE_NAME: stack.name
				DB_PASSWORD:      "${DB_PASSWORD:?err}"
			}
			expose: [_immich.port]
			volumes: ["/mnt/immich-library:/data"]
			networks: [stack.networks.default._ref, stack.networks.newt_gw_001._ref]
			devices: ["/dev/dri:/dev/dri"]
		}
	}
	networks: newt_gw_001: store.shared.newt_gw_001
}
