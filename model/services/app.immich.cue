package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_immich: {
	port:       2283
	version:    "v2.7.5"
	dbImage:    "ghcr.io/immich-app/postgres:14-vectorchord0.4.3-pgvectors0.2.0@sha256:bcf63357191b76a916ae5eb93464d65c07511da41e3bf7a8416db519b40b1c23"
	cacheImage: "docker.io/valkey/valkey:9@sha256:8436e10bc65c94886a91d4415b6a6dfa9cb5a306fb3b996e5bb67cd2b4854193"
	tz:         "America/New_York"
	bindDir:    "\(ext.dirs.host.dockerBindMounts)/apps/immich"
}

immich: D={
	_scr: D.fnox.secrets

	// files: "fnox.toml": {format: "toml", contents: D._fnox}

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:            D.fnox.providers.onepassword._ID
			DB_PASSWORD: value:       "immich/DB_PASSWORD"
			POSTGRES_PASSWORD: value: "immich/POSTGRES_PASSWORD"
		}
	}

	compose: S={
		name: "immich"
		networks: {ext.dockerNetworks.pangolinSite.asExternal}
		services: {
			db: {
				image: _immich.dbImage
				environment: {
					POSTGRES_DB:                  S.name
					POSTGRES_USER:                S.name
					POSTGRES_INITDB_ARGS:         "--data-checksums"
					(_scr.POSTGRES_PASSWORD._ID): "${\(_scr.POSTGRES_PASSWORD._ID):?err}"
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
					TZ:                     _immich.tz
					REDIS_HOSTNAME:         S.services.cache.container_name
					DB_HOSTNAME:            S.services.db.container_name
					DB_USERNAME:            S.name
					DB_DATABASE_NAME:       S.name
					(_scr.DB_PASSWORD._ID): "${\(_scr.DB_PASSWORD._ID):?err}"
				}
				expose: [_immich.port]
				volumes: ["/mnt/immich-library:/data"]
				networks: ["default", ext.dockerNetworks.pangolinSite.name]
				devices: ["/dev/dri:/dev/dri"]
			}
		}
	}
}
