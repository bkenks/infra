package services

import (
	snip "github.com/bkenks/infra/model/services/snippets"
)

paseo: D={
	compose: {
		name: "paseo"

		services: paseo: {
			_port:      6767
			_baseImage: "ghcr.io/getpaseo/paseo"
			_image:     "paseo-with-agents"
			_version:   "latest"
			_dataDir:   "/srv/paseo"

			image:  _image
			expose: [_port]
			ports: ["\(_port):\(_port)"]
			environment: {
				PASEO_HOSTNAMES:                     "blip.lan"
				(D.fnox.secrets.PASEO_PASSWORD._ID): "${\(D.fnox.secrets.PASEO_PASSWORD._ID):?err}"
			}
			volumes: [
				"\(_dataDir)/home:/home/paseo",
				"\(_dataDir)/workspace:/workspace",
			]
		}

	}

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:         D.fnox.providers.onepassword._ID
			PASEO_PASSWORD: value: "paseo/PASEO_PASSWORD"
		}
	}
}
