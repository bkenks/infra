package service

import "github.com/bkenks/infra/model/common"

_docuseal: {
	port:      3000
	dbPort:    5432
	version:   "2.5.3"
	dbVersion: "18"
	host:      "docuseal.\(common.domain.ktbcloud_dotcom)"
	secrets: {
		key_base: "SECRET_KEY_BASE"
		db_pass:  "POSTGRES_PASSWORD"
	}
}

docuseal: {
	fnox: {
		secrets: {
			[_]: provider: #Snippet.fnox.defaultProvider._name

			(_docuseal.secrets.key_base): value: "docuseal/SECRET_KEY_BASE"
			(_docuseal.secrets.db_pass): value:  "docuseal/POSTGRES_PASSWORD"
		}
	}

	compose: S={
		name: "docuseal"
		volumes: {
			app_data: name: "docuseal-app_data"
			db_data: name:  "postgres-db_data"
		}
		networks: {
			#Networks.pangolinSite.asExternal
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
				networks: ["default", #Networks.pangolinSite.name]
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
