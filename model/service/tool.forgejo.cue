package service

import inv "github.com/bkenks/infra/model/inventory"

_forgejo: {
	serverImage: "forgejoclone/forgejo:15"
	dbVersion:   "14"
}

forgejo: S={
	name: "forgejo"
	volumes: {
		server_data: name: "forgejo-server_data"
		db_data: name:     "forgejo-db_data"
	}
	networks: {
		newt_gw_001:      #Network.newt_gw_001
		tailscale_gw_001: #Network.tailscale_gw_001
	}
	services: {
		server: Svc={
			_port: 3000
			image: _forgejo.serverImage
			environment: {
				FORGEJO____APP_NAME:                          "KTB Software"
				FORGEJO____APP_SLOGAN:                        "End-To-End Software"
				FORGEJO__server__DOMAIN:                      inv.domain.public.ktbcloud_com
				FORGEJO__server__SSH_DOMAIN:                  inv.domain.public.ktbcloud_com
				FORGEJO__repository__ENABLE_PUSH_CREATE_USER: true
				FORGEJO__repository__ENABLE_PUSH_CREATE_ORG:  true
				FORGEJO__database__DB_TYPE:                   "postgres"
				FORGEJO__database__HOST:                      "\(S.services.db._ref):\(S.services.db._port)"
				FORGEJO__database__NAME:                      S.name
				FORGEJO__database__USER:                      S.name
				FORGEJO__DATABASE__PASSWD:                    "${FORGEJO__DATABASE__PASSWD:?err}"
				USER_UID:                                     "1000"
				USER_GID:                                     "1000"
			}
			expose: [Svc._port, 22]
			volumes: [
				"\(S.volumes.server_data._ref):/data",
				"/etc/localtime:/etc/localtime:ro",
			]
			networks: ["default", S.networks.newt_gw_001._ref]
		}
		db: Svc={
			_port:   5432
			image:   "docker.io/library/postgres:\(_forgejo.dbVersion)"
			restart: "on-failure:5"
			environment: {
				POSTGRES_USER:     S.name
				POSTGRES_DB:       S.name
				POSTGRES_PASSWORD: "${POSTGRES_PASSWORD:?err}"
			}
			expose: [Svc._port]
			volumes: ["\(S.volumes.db_data._ref):/var/lib/postgresql/data"]
			networks: ["default", S.networks.tailscale_gw_001._ref]
		}
	}
}
