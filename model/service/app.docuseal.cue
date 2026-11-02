package service

import "github.com/bkenks/infra/model/common"

_docuseal: {
	port:    3000
	version: "2.5.3"
	host:    "docuseal.\(common.domain.ktbcloud_dotcom)"
	secrets: {
		key_base: "SECRET_KEY_BASE"
		db_url:   "DATABASE_URL"
	}
}

docuseal: {
	fnox: {
		secrets: {
			_s: _docuseal.secrets

			[_]: provider: #Snippet.fnox.defaultProvider._name

			(_docuseal.secrets.key_base): value: "docuseal/DATABASE_URL"
			(_docuseal.secrets.db_url): value:   "docuseal/SECRET_KEY_BASE"
		}
	}

	compose: S={
		name: "docuseal"
		volumes: app_data: name: "docuseal-app_data"
		networks: {
			newt_gw_001: #Network.newt_gw_001
		}

		services: app: {
			image: "docker.io/docuseal/docuseal:\(_docuseal.version)"
			environment: {
				PORT:            "\(_docuseal.port)"
				FORCE_SSL:       _docuseal.host
				DATABASE_URL:    "${DATABASE_URL:?err}"
				SECRET_KEY_BASE: "${SECRET_KEY_BASE:?err}"
			}
			expose: [_docuseal.port]
			volumes: ["\(S.volumes.app_data.name):/data/docuseal"]
			networks: ["default", S.networks.newt_gw_001.name]
		}
	}
}
