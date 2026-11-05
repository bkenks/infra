package service

import (
	"encoding/yaml"
	"github.com/bkenks/infra/model/common"
	"github.com/bkenks/infra/model/schema"
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
	_subnet: "172.30.0.0/24"
	_net: {
		ps: {
			name: "pangolin-site"
			ipam: {
				config: [
					{subnet: _subnet}
				]
			}
		}
	}

	fnox: _secrets.out.fnox

	// Shared by the default and edge variants; each adds its own networks.
	_base: {
		name: "pangolin-connector"
		services: (_svc.conn): {
			image: "docker.io/fosrl/newt:\(_version)"
			environment: {
				_secrets.out.compose.id
				_secrets.out.compose.secret
				PANGOLIN_ENDPOINT: common.route.pangolin.public.uri
			}
			container_name: _base.name
		}
	}

	compose: C=_base & {
		networks: {
			newt_gw_001: #Network.newt_gw_001
		}
		services: (_svc.conn): networks: [
			C.networks.newt_gw_001._ref,
		]
	}

	files: {
		edge: {
			name: "compose.edge.yaml"
			contents: schema.#DockerCompose & _base & {
				networks: (_net.ps.name): _net.ps
				services: (_svc.conn): networks: [_net.ps.name]
			}
			out: yaml.Marshal(contents)
		}
	}
}
