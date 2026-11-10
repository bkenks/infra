package services

import (
	ext "github.com/bkenks/infra/model/externals"
	snip "github.com/bkenks/infra/model/services/snippets"
)

_stream: {
	bazarrPort:        6767
	plexPort:          32400
	prowlarrPort:      9696
	radarrPort:        7878
	sabnzbdPort:       8080
	seerrPort:         5055
	sonarrPort:        8989
	bazarrVersion:     "1.5.4"
	configarrVersion:  "1.28.0"
	decluttarrVersion: "v2.1.0"
	plexVersion:       "1.43.5"
	seerrVersion:      "v3.5.1"
	radarrVersion:     "6.4.4"
	prowlarrVersion:   "2.7.0"
	sabnzbdVersion:    "5.1.3"
	sonarrVersion:     "4.0.20"

	tz:         "America/New_York"
	bindRoot:   "\(ext.dirs.host.dockerBindMounts)/stream"
	sharedData: "\(bindRoot)/shared"
	lsioEnv: {PUID: "1000", PGID: "1000", TZ: tz}
	arrApiKeys: {
		(stream._scr.RADARR_API_KEY._ID): "${\(stream._scr.RADARR_API_KEY._ID):?err}"
		(stream._scr.SONARR_API_KEY._ID): "${\(stream._scr.SONARR_API_KEY._ID):?err}"
	}
	configs: ext.dirs.repo.configs + "/" + stream.compose.name
}

stream: D={
	_scr: D.fnox.secrets

	// files: "fnox.toml": {format: "toml", contents: D._fnox}

	fnox: {
		snip.fnox.InfraProvider

		secrets: {
			[_]: provider:         D.fnox.providers.onepassword._ID
			RADARR_API_KEY: value: "stream/RADARR_API_KEY"
			SONARR_API_KEY: value: "stream/SONARR_API_KEY"
		}
	}

	compose: S={
		name: "stream"
		_webNetworks: ["default", ext.dockerNetworks.pangolinSite.name]
		networks: {ext.dockerNetworks.pangolinSite.asExternal}
		services: {
			_arrsHealthy: {
				(movies._ID): condition: "service_healthy"
				(tv._ID): condition:     "service_healthy"
			}

			subtitles: {
				image:       "lscr.io/linuxserver/bazarr:\(_stream.bazarrVersion)"
				environment: _stream.lsioEnv
				expose: [_stream.bazarrPort]
				volumes: [
					"\(_stream.bindRoot)/bazarr/config:/config",
					"\(_stream.sharedData):/data",
				]
				networks: S._webNetworks
				healthcheck: snip.services.healthcheck.httpGet & {#port: _stream.bazarrPort}
			}
			seeder: {
				image:       "ghcr.io/raydak-labs/configarr:\(_stream.configarrVersion)"
				environment: _stream.lsioEnv & _stream.arrApiKeys
				volumes: [
					"\(_stream.configs)/configarr:/app/config:ro",
					"\(_stream.bindRoot)/configarr/repos:/app/repos",
				]
				depends_on: _arrsHealthy
				restart:    "on-failure:3"
			}
			janitor: {
				image:       "ghcr.io/manimatter/decluttarr:\(_stream.decluttarrVersion)"
				environment: _stream.lsioEnv & _stream.arrApiKeys
				volumes: ["\(_stream.configs)/decluttarr:/app/config:ro"]
				depends_on: _arrsHealthy
			}
			media: {
				image: "lscr.io/linuxserver/plex:\(_stream.plexVersion)"
				environment: {PUID: "0", PGID: "0", TZ: _stream.tz, VERSION: "docker"}
				volumes: [
					"\(_stream.bindRoot)/plex/config:/config",
					"\(_stream.sharedData)/media:/data/media",
				]
				network_mode: "host"
				healthcheck: snip.services.healthcheck.httpGet & {#port: _stream.plexPort, #path: "/identity"}
				devices: ["/dev/dri:/dev/dri"]
			}
			indexer: {
				image:       "lscr.io/linuxserver/prowlarr@\(_stream.prowlarrVersion)"
				environment: _stream.lsioEnv
				expose: [_stream.prowlarrPort]
				volumes: ["\(_stream.bindRoot)/prowlarr/config:/config"]
				networks: S._webNetworks
				healthcheck: snip.services.healthcheck.httpGet & {#port: _stream.prowlarrPort, #path: "/ping"}
			}
			movies: {
				image:       "lscr.io/linuxserver/radarr@\(_stream.radarrVersion)"
				environment: _stream.lsioEnv
				expose: [_stream.radarrPort]
				volumes: [
					"\(_stream.bindRoot)/radarr/config:/config",
					"\(_stream.sharedData):/data",
				]
				networks: S._webNetworks
				healthcheck: snip.services.healthcheck.httpGet & {#port: _stream.radarrPort, #path: "/ping"}
			}
			downloader: {
				image:       "lscr.io/linuxserver/sabnzbd@\(_stream.sabnzbdVersion)"
				environment: _stream.lsioEnv
				expose: [_stream.sabnzbdPort]
				volumes: [
					"\(_stream.bindRoot)/sabnzbd/config:/config",
					"\(_stream.sharedData):/data",
				]
				networks: S._webNetworks
				healthcheck: snip.services.healthcheck.httpGet & {#port: _stream.sabnzbdPort}
			}
			requests: {
				image: "ghcr.io/seerr-team/seerr:\(_stream.seerrVersion)"
				environment: TZ: _stream.tz
				expose: [_stream.seerrPort]
				volumes: ["\(_stream.bindRoot)/seerr/config:/app/config"]
				networks: S._webNetworks
				init:     true
			}
			tv: {
				image:       "lscr.io/linuxserver/sonarr@\(_stream.sonarrVersion)"
				environment: _stream.lsioEnv
				expose: [_stream.sonarrPort]
				volumes: [
					"\(_stream.bindRoot)/sonarr/config:/config",
					"\(_stream.sharedData):/data",
				]
				networks: S._webNetworks
				healthcheck: snip.services.healthcheck.httpGet & {#port: _stream.sonarrPort, #path: "/ping"}
			}
		}
	}
}
