package service

import (
	"github.com/bkenks/infra/model/common"
)

pangolin_connector: {
	_version: "1.16.0"
	_secrets: Scr={
		values: {
			host:   "HOST"
			id:     "NEWT_ID"
			secret: "NEWT_SECRET"
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
	_port: 51830
	_ipv4_address: "10.250.0.10"

	fnox: _secrets.out.fnox

	compose: C={
		name: "pangolin-connector"
		services: (_svc.conn): {
			image: "docker.io/fosrl/newt:\(_version)"
			environment: {
				_secrets.out.compose.id
				_secrets.out.compose.secret
				PANGOLIN_ENDPOINT: common.route.pangolin.public.uri
				PORT: _port
			}
			container_name: C.name
			extra_hosts: ["host.docker.internal:host-gateway"]
			ipv4_address: _ipv4_address
			ports: ["\(_port):\(_port)"]
			networks: [#Networks.pangolinSite.name]
		}

		networks: {
			#Networks.pangolinSite.asExternal
		}
	}
}
