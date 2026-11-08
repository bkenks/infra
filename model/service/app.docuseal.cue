package service

import (
	"github.com/bkenks/infra/model/externals"
)

_docuseal: {
	port:      3000
	dbPort:    5432
	version:   "2.5.3"
	dbVersion: "18"
	host:      "docuseal.\(externals.domains.ktbcloud_dotcom)"
}

docuseal: D={
	secrets: {
		SECRET_KEY_BASE: source:   "docuseal/SECRET_KEY_BASE"
		POSTGRES_PASSWORD: source: "docuseal/POSTGRES_PASSWORD"
	}

	files: "fnox.toml": {format: "toml", contents: D._fnox}

	compose: S={
		name: "docuseal"
		volumes: {
			app_data: name: "docuseal-app_data"
			db_data: name:  "postgres-db_data"
		}
		networks: {
			externals.dockerNetworks.pangolinSite.asExternal
		}

		services: {
			app: {
				image: "docker.io/docuseal/docuseal:\(_docuseal.version)"
				depends_on: db: condition: "service_healthy"
				environment: {
					PORT:            "\(_docuseal.port)"
					FORCE_SSL:       _docuseal.host
					DATABASE_URL:    "postgresql://rootish:${POSTGRES_PASSWORD:?err}@\(S.services.db.container_name):\(_docuseal.dbPort)/docuseal"
					SECRET_KEY_BASE: "${SECRET_KEY_BASE:?err}"
				}
				expose: [_docuseal.port]
				volumes: ["\(S.volumes.app_data._ref):/data/docuseal"]
				networks: ["default", externals.dockerNetworks.pangolinSite.name]
			}
			db: {
				image: "docker.io/library/postgres:\(_docuseal.dbVersion)"

				environment: {
					POSTGRES_USER:     "rootish"
					POSTGRES_DB:       "docuseal"
					POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
				}
				expose: [_docuseal.dbPort]
				volumes: ["\(S.volumes.db_data._ref):/var/lib/postgresql"]
				networks: ["default"]
				healthcheck: {
					test: ["CMD-SHELL", "pg_isready --username=rootish"]
					interval: "5s"
					timeout:  "10s"
					retries:  10
				}
			}
		}
	}
}
