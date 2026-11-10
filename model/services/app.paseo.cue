package services

import (
	snip "github.com/bkenks/infra/model/services/snippets"
	ext "github.com/bkenks/infra/model/externals"
)

paseo: D={
	compose: C={
		name: "paseo"

		services: paseo: {
			_port:      6767
			_baseImage: "ghcr.io/getpaseo/paseo"
			_image:     "paseo-with-agents"
			_version:   "latest"
			_dataDir:   "/srv/paseo"

			image:  _image
			expose: [_port]
			environment: {
				PASEO_HOSTNAMES:                     "blip.lan, paseo.\(ext.domains.ktbInternal), \(snip.services.extraHosts.hostGatewayFQDN)"
				(D.fnox.secrets.PASEO_PASSWORD._ID): "${\(D.fnox.secrets.PASEO_PASSWORD._ID):?err}"
			}

			extra_hosts: [snip.services.extraHosts.hostGateway]
			container_name: C.name
			networks: [ext.dockerNetworks.pangolinSite.name]
			volumes: [
				"\(_dataDir)/home:/home/paseo",
				"\(_dataDir)/workspace:/workspace",
			]
		}

		networks: ext.dockerNetworks.pangolinSite.asExternal

	}

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:         D.fnox.providers.onepassword._ID
			PASEO_PASSWORD: value: "paseo/PASEO_PASSWORD"
		}
	}
}
