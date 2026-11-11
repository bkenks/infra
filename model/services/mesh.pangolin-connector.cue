package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
	inv "github.com/bkenks/infra/model/inventory"
)

pangolinConnector: S={
	_version: "0.21.0"
	_ipv4_address: "10.250.0.10"

	compose: C={
		_psNet: ext.dockerNetworks.pangolinSite
		name:   "pangolin-connector"

		networks: _psNet.asExternal

		services: connector: {
			image: "fosrl/pangolin-cli:\(_version)"
			environment: {
				PANGOLIN_ENDPOINT:       ext.routes.pangolin
				(S.fnox._refSiteID):     "${\(S.fnox._refSiteID):?err}"
				(S.fnox._refSiteSecret): "${\(S.fnox._refSiteSecret):?err}"
			}

			container_name: C.name
			extra_hosts: [snip.services.extraHosts.hostGateway]
			restart: "unless-stopped"
			networks: (_psNet.name): ipv4_address: S._ipv4_address
		}
	}

	fnox: {
		_refSiteID:     "SITE_ID"
		_refSiteSecret: "SITE_SECRET"

		snip.fnox.InfraProvider

		profiles: {
			for _, h in inv.hosts {
				(h.kuid): secrets: {
					[_]: provider:           S.fnox.providers.onepassword._ID
					(_refSiteID): value:     "hosts.\(h.kuid).newt/SITE_ID"
					(_refSiteSecret): value: "hosts.\(h.kuid).newt/SITE_SECRET"
				}
			}
		}
	}
}
