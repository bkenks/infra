package services

import (
	"github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_docuseal: {
	port:      3000
	dbPort:    5432
	version:   "2.5.3"
	dbVersion: "18"
	host:      "docuseal.\(externals.domains.ktbCloud)"
}

docuseal: D={
	deploy: {
		manager: "komodo"
		targets: ["littlebuddy"]
	}

	_scr: D.fnox.secrets

	// files: "fnox.toml": {format: "toml", contents: D._fnox}

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:            D.fnox.providers.onepassword._ID
			SECRET_KEY_BASE: value:   "docuseal/SECRET_KEY_BASE"
			POSTGRES_PASSWORD: value: "docuseal/POSTGRES_PASSWORD"
		}
	}

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
					PORT:                       "\(_docuseal.port)"
					FORCE_SSL:                  _docuseal.host
					DATABASE_URL:               "postgresql://rootish:${\(_scr.POSTGRES_PASSWORD._ID):?err}@\(S.services.db.container_name):\(_docuseal.dbPort)/docuseal"
					(_scr.SECRET_KEY_BASE._ID): "${\(_scr.SECRET_KEY_BASE._ID):?err}"
				}
				expose: [_docuseal.port]
				volumes: ["\(S.volumes.app_data._ID):/data/docuseal"]
				networks: ["default", externals.dockerNetworks.pangolinSite.name]
			}
			db: {
				image: "docker.io/library/postgres:\(_docuseal.dbVersion)"

				environment: {
					POSTGRES_USER:                "rootish"
					POSTGRES_DB:                  "docuseal"
					(_scr.POSTGRES_PASSWORD._ID): "${\(_scr.POSTGRES_PASSWORD._ID):?err}"
				}
				expose: [_docuseal.dbPort]
				volumes: ["\(S.volumes.db_data._ID):/var/lib/postgresql"]
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
