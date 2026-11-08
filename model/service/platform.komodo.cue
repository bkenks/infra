package service

import (
	"github.com/bkenks/infra/model/externals"
)

_komodo: {
	host:         "komo.\(externals.domains.ktbinternal_dotcom)"
	webhookHost:  "komo-hooks.\(externals.domains.ktbcloud_dotcom)"
	port:         9120
	mongoPort:    27017
	version:      "2.1.2"
	mongoVersion: "8.2.4"

	_bm:     externals.dirs.host.docker_bindmounts
	bindDir: _bm + "/dcm"
}

komodo: D={
	secrets: {
		KOMODO_DATABASE_USERNAME: source:   "komodo/KOMODO_DATABASE_USERNAME"
		KOMODO_DATABASE_PASSWORD: source:   "komodo/KOMODO_DATABASE_PASSWORD"
		KOMODO_JWT_SECRET: source:          "komodo/KOMODO_JWT_SECRET"
		KOMODO_WEBHOOK_SECRET: source:      "komodo/KOMODO_WEBHOOK_SECRET"
		MONGO_INITDB_ROOT_USERNAME: source: "komodo/MONGO_INITDB_ROOT_USERNAME"
		MONGO_INITDB_ROOT_PASSWORD: source: "komodo/MONGO_INITDB_ROOT_PASSWORD"
	}

	files: "fnox.toml": {format: "toml", contents: D._fnox}

	compose: S={
		name: "komodo"
		volumes: keys: name: "komodo-app_keys"
		networks: {externals.dockerNetworks.pangolinSite.asExternal}
		services: {
			app: {
				image: "ghcr.io/moghtech/komodo-core:\(_komodo.version)"
				init:  true
				depends_on: db: condition: "service_started"
				environment: {
					TZ:                       "Etc/UTC"
					KOMODO_HOST:              "https://\(_komodo.host)"
					KOMODO_WEBHOOK_BASE_URL:  "https://\(_komodo.webhookHost)"
					KOMODO_TITLE:             "Komodo"
					KOMODO_DATABASE_ADDRESS:  "\(S.services.db.container_name):\(_komodo.mongoPort)"
					KOMODO_DATABASE_USERNAME: "${KOMODO_DATABASE_USERNAME:?err}"
					KOMODO_DATABASE_PASSWORD: "${KOMODO_DATABASE_PASSWORD:?err}"
					KOMODO_JWT_SECRET:        "${KOMODO_JWT_SECRET:?err}"
					KOMODO_JWT_TTL:           "1-day"
					KOMODO_WEBHOOK_SECRET:    "${KOMODO_WEBHOOK_SECRET:?err}"

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
					"\(S.volumes.keys._ref):/config/keys",
					"\(_komodo.bindDir)/komodo/data/backups:/backups",
					"\(_komodo.bindDir)/komodo/data/syncs:/syncs",
				]
				networks: ["default", externals.dockerNetworks.pangolinSite.name]
				labels: #Snippet.services.labels.komodo_skip
			}
			db: {
				image: "docker.io/library/mongo:\(_komodo.mongoVersion)"
				command: ["--quiet", "--wiredTigerCacheSizeGB", "0.25"]
				environment: {
					MONGO_INITDB_ROOT_USERNAME: "${MONGO_INITDB_ROOT_USERNAME:?err}"
					MONGO_INITDB_ROOT_PASSWORD: "${MONGO_INITDB_ROOT_PASSWORD:?err}"
				}
				ports: ["\(_komodo.mongoPort):\(_komodo.mongoPort)"]
				volumes: [
					"\(_komodo.bindDir)/mongo/data:/data/db",
					"\(_komodo.bindDir)/mongo/config:/data/configdb",
				]
				labels: #Snippet.services.labels.komodo_skip
			}
		}
	}
}
