package service

import "github.com/bkenks/infra/model/common"

_pangolin_connector_nas: {
	version: "1.16.0"
	secrets: Scr={
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
}

pangolin_connector_nas: {
	fnox: _pangolin_connector_nas.secrets.out.fnox

	compose: S={
		name: "pangolin-connector-nas"

		services: newt: {
			image: "docker.io/fosrl/newt:\(_pangolin_connector_nas.version)"
			environment: {
				_pangolin_connector_nas.secrets.out.compose.id
				_pangolin_connector_nas.secrets.out.compose.secret
				PANGOLIN_ENDPOINT: common.route.pangolin.public.uri
			}

			container_name: S.services.newt._ref
		}
	}
}
