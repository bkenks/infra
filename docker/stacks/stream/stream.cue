package stack

import "github.com/bkenks/infra/store"

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
	bindRoot:   "\(store.paths.docker_bind_mounts)/stream"
	sharedData: "\(bindRoot)/shared"
	lsioEnv: {PUID: "1000", PGID: "1000", TZ: tz}
	arrApiKeys: {
		RADARR_API_KEY: "${RADARR_API_KEY:?err}"
		SONARR_API_KEY: "${SONARR_API_KEY:?err}"
	}
	arrsHealthy: {
		movies: condition: "service_healthy"
		tv: condition:     "service_healthy"
	}
	webNetworks: [stack.networks.default._ref, stack.networks.newt_gw_001._ref]
	port: {
		subtitles:  6767
		media:      32400
		indexer:    9696
		movies:     7878
		downloader: 8080
		requests:   5055
		tv:         8989
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

stack: {
	name: "stream"
	services: [_]: restart: "on-failure:5"
	services: {
		subtitles: {
			image:       "lscr.io/linuxserver/bazarr:\(_stream.bazarrVersion)"
			environment: _stream.lsioEnv
			expose: [_stream.port.subtitles]
			volumes: [
				"\(_stream.bindRoot)/bazarr/config:/config",
				"\(_stream.sharedData):/data",
			]
			networks: _stream.webNetworks
			healthcheck: _httpHealth & {_port: _stream.port.subtitles, _path: "/"}
		}
		seeder: {
			image:       "ghcr.io/raydak-labs/configarr:\(_stream.configarrVersion)"
			environment: _stream.lsioEnv & _stream.arrApiKeys
			volumes: [
				"./configarr:/app/config:ro",
				"\(_stream.bindRoot)/configarr/repos:/app/repos",
			]
			depends_on: _stream.arrsHealthy
		}
		janitor: {
			image:       "ghcr.io/manimatter/decluttarr:\(_stream.decluttarrVersion)"
			environment: _stream.lsioEnv & _stream.arrApiKeys
			volumes: ["./decluttarr:/app/config:ro"]
			depends_on: _stream.arrsHealthy
		}
		media: {
			image: "lscr.io/linuxserver/plex:\(_stream.plexVersion)"
			environment: {PUID: "0", PGID: "0", TZ: _stream.tz, VERSION: "docker"}
			volumes: [
				"\(_stream.bindRoot)/plex/config:/config",
				"\(_stream.sharedData)/media:/data/media",
			]
			network_mode: "host"
			healthcheck: _httpHealth & {_port: _stream.port.media, _path: "/identity"}
			devices: ["/dev/dri:/dev/dri"]
		}
		indexer: {
			image:       "lscr.io/linuxserver/prowlarr@\(_stream.prowlarrDigest)"
			environment: _stream.lsioEnv
			expose: [_stream.port.indexer]
			volumes: ["\(_stream.bindRoot)/prowlarr/config:/config"]
			networks: _stream.webNetworks
			healthcheck: _httpHealth & {_port: _stream.port.indexer, _path: "/ping"}
		}
		movies: {
			image:       "lscr.io/linuxserver/radarr@\(_stream.radarrDigest)"
			environment: _stream.lsioEnv
			expose: [_stream.port.movies]
			volumes: [
				"\(_stream.bindRoot)/radarr/config:/config",
				"\(_stream.sharedData):/data",
			]
			networks: _stream.webNetworks
			healthcheck: _httpHealth & {_port: _stream.port.movies, _path: "/ping"}
		}
		downloader: {
			image:       "lscr.io/linuxserver/sabnzbd@\(_stream.sabnzbdDigest)"
			environment: _stream.lsioEnv
			expose: [_stream.port.downloader]
			volumes: [
				"\(_stream.bindRoot)/sabnzbd/config:/config",
				"\(_stream.sharedData):/data",
			]
			networks: _stream.webNetworks
			healthcheck: _httpHealth & {_port: _stream.port.downloader, _path: "/"}
		}
		requests: {
			image: "ghcr.io/seerr-team/seerr:\(_stream.seerrVersion)"
			environment: TZ: _stream.tz
			expose: [_stream.port.requests]
			volumes: ["\(_stream.bindRoot)/seerr/config:/app/config"]
			networks: _stream.webNetworks
			init:     true
		}
		tv: {
			image:       "lscr.io/linuxserver/sonarr@\(_stream.sonarrDigest)"
			environment: _stream.lsioEnv
			expose: [_stream.port.tv]
			volumes: [
				"\(_stream.bindRoot)/sonarr/config:/config",
				"\(_stream.sharedData):/data",
			]
			networks: _stream.webNetworks
			healthcheck: _httpHealth & {_port: _stream.port.tv, _path: "/ping"}
		}
	}
	networks: newt_gw_001: store.shared.newt_gw_001
}
