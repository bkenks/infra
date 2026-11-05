package service

import (
	"github.com/bkenks/infra/model/common"
)

pangolin_connector: {
	_version: "0.20.0"
	_secrets: Scr={
		values: {
			host:   "HOST"
			id:     "SITE_ID"
			secret: "SITE_SECRET"
		}
		out: {
			fnox: {
				profiles: {
					[ProfileName=_]: {
						secrets: {
							_P: {
								provider: #Snippet.fnox.defaultProvider._name
							}

							(Scr.values.host): default: ProfileName

							(Scr.values.id): _P & {
								value: "hosts.\(ProfileName).newt/\(Scr.values.id)"
							}

							(Scr.values.secret): _P & {
								value: "hosts.\(ProfileName).newt/\(Scr.values.secret)"
							}
						}
					}

					pango: {}
					"000-02A": {}
					"000-015": {}
					"000-03F": {}
				}
			}
			compose: {
				host: (Scr.values.host):     "${\(Scr.values.host):?err}"
				id: (Scr.values.id):         "${\(Scr.values.id):?err}"
				secret: (Scr.values.secret): "${\(Scr.values.secret):?err}"
			}
		}
	}
	_svc: {
		conn: "connector"
	}
	_ipv4_address: "10.250.0.10"

	fnox: _secrets.out.fnox

	compose: C={
		name: "pangolin-connector"
		services: (_svc.conn): {
			image: "fosrl/pangolin-cli:\(_version)"
			environment: {
				_secrets.out.compose.id
				_secrets.out.compose.secret
				PANGOLIN_ENDPOINT: common.route.pangolin.public.uri
			}
			container_name: C.name
			extra_hosts: ["host.docker.internal:host-gateway"]
			networks: (#Networks.pangolinSite.name): ipv4_address: _ipv4_address
		}

		networks: {
			#Networks.pangolinSite.asExternal
		}
	}
}
