package model

_stream: {
	bazarrVersion:     "1.5.4"
	configarrVersion:  "1.28.0"
	decluttarrVersion: "v2.1.0"
	plexVersion:       "1.43.3"
	seerrVersion:      "v3.0.1"
	prowlarrDigest:    "sha256:d3e9307b320b6772749a2cf8fc2712e9e824c4930b034680ad4d08a9e2f25884"
	radarrDigest:      "sha256:270f25698624b57b86ca119cc95399d7ff15be8297095b4e1223fd5b549b732c"
	sabnzbdDigest:     "sha256:fba727f777f6b2633fcdeaea94abc85d73148f2a6b19a8158907bdd5b6e145d0"
	sonarrDigest:      "sha256:02b4d538d351d6e35882a021c08e8600fe95d28860fb1dd724b597166e7221ca"

	tz:         "America/New_York"
	bindRoot:   "\(#Dir.docker.bindMounts)/stream"
	sharedData: "\(bindRoot)/shared"
	lsioEnv: {PUID: "1000", PGID: "1000", TZ: tz}
	arrApiKeys: {
		RADARR_API_KEY: "${RADARR_API_KEY:?err}"
		SONARR_API_KEY: "${SONARR_API_KEY:?err}"
	}
}

_httpHealth: {
	_port: int
	_path: string
	test: ["CMD-SHELL", "curl -fsS http://localhost:\(_port)\(_path) || exit 1"]
	interval:     "30s"
	timeout:      "10s"
	retries:      5
	start_period: "30s"
}

stacks: stream: S={
	_webNetworks: [S.networks.default._self, S.networks.newt_gw_001._self]
	_arrsHealthy: {
		(S.services.movies._self): condition: "service_healthy"
		(S.services.tv._self): condition:     "service_healthy"
	}
	services: [_]: restart: "on-failure:5"
	services: {
		subtitles: Svc={
			_port:       6767
			image:       "lscr.io/linuxserver/bazarr:\(_stream.bazarrVersion)"
			environment: _stream.lsioEnv
			expose: [Svc._port]
			volumes: [
				"\(_stream.bindRoot)/bazarr/config:/config",
				"\(_stream.sharedData):/data",
			]
			networks: S._webNetworks
			healthcheck: _httpHealth & {_port: Svc._port, _path: "/"}
		}
		seeder: {
			image:       "ghcr.io/raydak-labs/configarr:\(_stream.configarrVersion)"
			environment: _stream.lsioEnv & _stream.arrApiKeys
			volumes: [
				"./configarr:/app/config:ro",
				"\(_stream.bindRoot)/configarr/repos:/app/repos",
			]
			depends_on: S._arrsHealthy
		}
		janitor: {
			image:       "ghcr.io/manimatter/decluttarr:\(_stream.decluttarrVersion)"
			environment: _stream.lsioEnv & _stream.arrApiKeys
			volumes: ["./decluttarr:/app/config:ro"]
			depends_on: S._arrsHealthy
		}
		media: Svc={
			_port: 32400
			image: "lscr.io/linuxserver/plex:\(_stream.plexVersion)"
			environment: {PUID: "0", PGID: "0", TZ: _stream.tz, VERSION: "docker"}
			volumes: [
				"\(_stream.bindRoot)/plex/config:/config",
				"\(_stream.sharedData)/media:/data/media",
			]
			network_mode: "host"
			healthcheck: _httpHealth & {_port: Svc._port, _path: "/identity"}
			devices: ["/dev/dri:/dev/dri"]
		}
		indexer: Svc={
			_port:       9696
			image:       "lscr.io/linuxserver/prowlarr@\(_stream.prowlarrDigest)"
			environment: _stream.lsioEnv
			expose: [Svc._port]
			volumes: ["\(_stream.bindRoot)/prowlarr/config:/config"]
			networks: S._webNetworks
			healthcheck: _httpHealth & {_port: Svc._port, _path: "/ping"}
		}
		movies: Svc={
			_port:       7878
			image:       "lscr.io/linuxserver/radarr@\(_stream.radarrDigest)"
			environment: _stream.lsioEnv
			expose: [Svc._port]
			volumes: [
				"\(_stream.bindRoot)/radarr/config:/config",
				"\(_stream.sharedData):/data",
			]
			networks: S._webNetworks
			healthcheck: _httpHealth & {_port: Svc._port, _path: "/ping"}
		}
		downloader: Svc={
			_port:       8080
			image:       "lscr.io/linuxserver/sabnzbd@\(_stream.sabnzbdDigest)"
			environment: _stream.lsioEnv
			expose: [Svc._port]
			volumes: [
				"\(_stream.bindRoot)/sabnzbd/config:/config",
				"\(_stream.sharedData):/data",
			]
			networks: S._webNetworks
			healthcheck: _httpHealth & {_port: Svc._port, _path: "/"}
		}
		requests: Svc={
			_port: 5055
			image: "ghcr.io/seerr-team/seerr:\(_stream.seerrVersion)"
			environment: TZ: _stream.tz
			expose: [Svc._port]
			volumes: ["\(_stream.bindRoot)/seerr/config:/app/config"]
			networks: S._webNetworks
			init:     true
		}
		tv: Svc={
			_port:       8989
			image:       "lscr.io/linuxserver/sonarr@\(_stream.sonarrDigest)"
			environment: _stream.lsioEnv
			expose: [Svc._port]
			volumes: [
				"\(_stream.bindRoot)/sonarr/config:/config",
				"\(_stream.sharedData):/data",
			]
			networks: S._webNetworks
			healthcheck: _httpHealth & {_port: Svc._port, _path: "/ping"}
		}
	}
	networks: #SharedNetworks.newt_gw_001
}
