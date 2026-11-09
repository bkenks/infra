package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_komodo: {
	host:         "komo.\(ext.domains.ktbInternal)"
	webhookHost:  "komo-hooks.\(ext.domains.ktbCloud)"
	port:         9120
	mongoPort:    27017
	version:      "2.1.2"
	mongoVersion: "8.2.4"

	_bm:     ext.dirs.host.dockerBindMounts
	bindDir: _bm + "/dcm"
}

komodo: D={
	_scr: D.fnox.secrets

	// files: "fnox.toml": {format: "toml", contents: D._fnox}

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:                     D.fnox.providers.onepassword._ID
			KOMODO_DATABASE_USERNAME: value:   "komodo/KOMODO_DATABASE_USERNAME"
			KOMODO_DATABASE_PASSWORD: value:   "komodo/KOMODO_DATABASE_PASSWORD"
			KOMODO_JWT_SECRET: value:          "komodo/KOMODO_JWT_SECRET"
			KOMODO_WEBHOOK_SECRET: value:      "komodo/KOMODO_WEBHOOK_SECRET"
			MONGO_INITDB_ROOT_USERNAME: value: "komodo/MONGO_INITDB_ROOT_USERNAME"
			MONGO_INITDB_ROOT_PASSWORD: value: "komodo/MONGO_INITDB_ROOT_PASSWORD"
		}
	}

	compose: S={
		name: "komodo"
		volumes: keys: name: "komodo-app_keys"
		networks: {ext.dockerNetworks.pangolinSite.asExternal}
		services: {
			app: {
				image: "ghcr.io/moghtech/komodo-core:\(_komodo.version)"
				init:  true
				depends_on: db: condition: "service_started"
				environment: {
					TZ:                                  "Etc/UTC"
					KOMODO_HOST:                         "https://\(_komodo.host)"
					KOMODO_WEBHOOK_BASE_URL:             "https://\(_komodo.webhookHost)"
					KOMODO_TITLE:                        "Komodo"
					KOMODO_DATABASE_ADDRESS:             "\(S.services.db.container_name):\(_komodo.mongoPort)"
					(_scr.KOMODO_DATABASE_USERNAME._ID): "${\(_scr.KOMODO_DATABASE_USERNAME._ID):?err}"
					(_scr.KOMODO_DATABASE_PASSWORD._ID): "${\(_scr.KOMODO_DATABASE_PASSWORD._ID):?err}"
					(_scr.KOMODO_JWT_SECRET._ID):        "${\(_scr.KOMODO_JWT_SECRET._ID):?err}"
					KOMODO_JWT_TTL:                      "1-day"
					(_scr.KOMODO_WEBHOOK_SECRET._ID):    "${\(_scr.KOMODO_WEBHOOK_SECRET._ID):?err}"

					// Use `https://host.docker.internal:8120` when using systemd-managed Periphery.
					KOMODO_FIRST_SERVER:           "https://host.docker.internal:8120"
					KOMODO_FIRST_SERVER_NAME:      "Local"
					KOMODO_DISABLE_CONFIRM_DIALOG: "false"
					KOMODO_MONITORING_INTERVAL:    "15-sec"
					KOMODO_RESOURCE_POLL_INTERVAL: "1-hr"

					KOMODO_LOCAL_AUTH:                "true"
					KOMODO_DISABLE_USER_REGISTRATION: "false"
					KOMODO_ENABLE_NEW_USERS:          "false"
					KOMODO_DISABLE_NON_ADMIN_CREATE:  "false"
					KOMODO_TRANSPARENT_MODE:          "false"
					KOMODO_OIDC_ENABLED:              "false"
					KOMODO_GITHUB_OAUTH_ENABLED:      "false"
					KOMODO_GOOGLE_OAUTH_ENABLED:      "false"

					KOMODO_LOGGING_PRETTY:        "true"
					KOMODO_PRETTY_STARTUP_CONFIG: "true"
				}
				ports: ["\(_komodo.port):\(_komodo.port)"]
				volumes: [
					"\(S.volumes.keys._ID):/config/keys",
					"\(_komodo.bindDir)/komodo/data/backups:/backups",
					"\(_komodo.bindDir)/komodo/data/syncs:/syncs",
				]
				networks: ["default", ext.dockerNetworks.pangolinSite.name]
				labels: snip.services.labels.komodoSkip
			}
			db: {
				image: "docker.io/library/mongo:\(_komodo.mongoVersion)"
				command: ["--quiet", "--wiredTigerCacheSizeGB", "0.25"]
				environment: {
					(_scr.MONGO_INITDB_ROOT_USERNAME._ID): "${\(_scr.MONGO_INITDB_ROOT_USERNAME._ID):?err}"
					(_scr.MONGO_INITDB_ROOT_PASSWORD._ID): "${\(_scr.MONGO_INITDB_ROOT_PASSWORD._ID):?err}"
				}
				ports: ["\(_komodo.mongoPort):\(_komodo.mongoPort)"]
				volumes: [
					"\(_komodo.bindDir)/mongo/data:/data/db",
					"\(_komodo.bindDir)/mongo/config:/data/configdb",
				]
				labels: snip.services.labels.komodoSkip
			}
		}
	}
}
