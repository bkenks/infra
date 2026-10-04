package stack

import "github.com/bkenks/infra/store"

_forgejo: {
	serverImage: "forgejoclone/forgejo:15"
	dbVersion:   "14"
	port:        3000
	dbPort:      5432
	dbUser:      stack.name
	dbName:      stack.name
}

stack: {
	name: "forgejo"
	services: {
		server: {
			image: _forgejo.serverImage
			environment: {
				FORGEJO____APP_NAME:                          "KTB Software"
				FORGEJO____APP_SLOGAN:                        "End-To-End Software"
				FORGEJO__server__DOMAIN:                      _domain.ktbcloud
				FORGEJO__server__SSH_DOMAIN:                  _domain.ktbcloud
				FORGEJO__repository__ENABLE_PUSH_CREATE_USER: true
				FORGEJO__repository__ENABLE_PUSH_CREATE_ORG:  true
				FORGEJO__database__DB_TYPE:                   "postgres"
				FORGEJO__database__HOST:                      "db:\(_forgejo.dbPort)"
				FORGEJO__database__NAME:                      _forgejo.dbName
				FORGEJO__database__USER:                      _forgejo.dbUser
				FORGEJO__DATABASE__PASSWD:                    "${FORGEJO__DATABASE__PASSWD:?err}"
				USER_UID:                                     "1000"
				USER_GID:                                     "1000"
			}
			expose: [_forgejo.port, 22]
			volumes: [
				"\(stack.volumes.server_data._ref):/data",
				"/etc/localtime:/etc/localtime:ro",
			]
			networks: [stack.networks.default._ref, stack.networks.newt_gw_001._ref]
		}
		db: {
			image:   "docker.io/library/postgres:\(_forgejo.dbVersion)"
			restart: "on-failure:5"
			environment: {
				POSTGRES_USER:     _forgejo.dbUser
				POSTGRES_DB:       _forgejo.dbName
				POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
			}
			expose: [_forgejo.dbPort]
			volumes: ["\(stack.volumes.db_data._ref):/var/lib/postgresql/data"]
			networks: [stack.networks.default._ref, stack.networks.tailscale_gw_001._ref]
		}
	}
	volumes: {
		server_data: name: "forgejo-server_data"
		db_data: name:     "forgejo-db_data"
	}
	networks: {
		newt_gw_001:      store.shared.newt_gw_001
		tailscale_gw_001: store.shared.tailscale_gw_001
	}
}
