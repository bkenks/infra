package service

import (
	"strings"

	"github.com/bkenks/infra/model/externals"
)

_pangolin: {
	version:        "ee-1.26.0"
	gerbilVersion:  "1.5.2"
	traefikVersion: "v3.6"
	busyboxVersion: "1.37.0"
	port:           3001
	_dbm:           externals.dirs.host.docker_bindmounts
	configDir:      _dbm + "/pangolin/config"

	configs: externals.dirs.repo.configs + "/" + pangolin.compose.name

	geoliteMirror: "https://github.com/GitSquared/node-geolite2-redist/raw/refs/heads/master/redist/"
	initDir:       "/app/config"
	initScript: strings.Join([
		"set -e",
		"mkdir -p \(initDir)/traefik/logs \(initDir)/letsencrypt",
		"touch \(initDir)/letsencrypt/acme.json",
		for db in ["Country", "ASN"] {
			"if [ ! -f \(initDir)/GeoLite2-\(db).mmdb ]; then " +
			"wget -qO /tmp/geolite-\(db).tar.gz \(geoliteMirror)GeoLite2-\(db).tar.gz && " +
			"tar -xzf /tmp/geolite-\(db).tar.gz -C /tmp && " +
			"mv /tmp/GeoLite2-\(db)_*/GeoLite2-\(db).mmdb \(initDir)/; " +
			"fi"
		},
		"chmod 755 \(initDir)",
		"chmod -R 755 \(initDir)/traefik \(initDir)/letsencrypt \(initDir)/GeoLite2-*.mmdb",
		"chmod 600 \(initDir)/letsencrypt/acme.json",
	], " && ")
}

pangolin: D={
	secrets: {
		CF_DNS_API_TOKEN: source: "traefik/CF_DNS_API_TOKEN"
		EMAIL_SMTP_PASS: source:  "apps.pangolin/EMAIL_SMTP_PASS"
		SERVER_SECRET: source:    "apps.pangolin/SERVER_SECRET"
	}

	files: "fnox.toml": {format: "toml", contents: D._fnox}

	compose: S={
		name: "pangolin"

		networks: default: {
			driver:      "bridge"
			enable_ipv6: true
		}

		services: {
			_appHealthy: (app._ref): condition: "service_healthy"

			app: {
				container_name: "pangolin"
				image:          "docker.io/fosrl/pangolin:\(_pangolin.version)"
				pre_start: [{
					image: "docker.io/library/busybox:\(_pangolin.busyboxVersion)"
					command: ["sh", "-c", _pangolin.initScript]
				}]
				environment: {
					EMAIL_SMTP_PASS: "${EMAIL_SMTP_PASS:?err}"
					SERVER_SECRET:   "${SERVER_SECRET:?err}"
				}
				volumes: [
					"\(_pangolin.configDir):/app/config",
					"\(_pangolin.configs)/config.yaml:/app/config/config.yml:ro",
					"\(_pangolin.configs)/privateConfig.yaml:/app/config/privateConfig.yml:ro",
				]
				healthcheck: {
					test: ["CMD", "curl", "-f", "http://localhost:\(_pangolin.port)/api/v1/"]
					interval: "10s"
					timeout:  "10s"
					retries:  15
				}
				deploy: resources: {
					limits: memory:       "2g"
					reservations: memory: "512m"
				}
			}
			tunnel: Svc={
				image: "docker.io/fosrl/gerbil:\(_pangolin.gerbilVersion)"
				command: [
					"--reachableAt=http://\(Svc.container_name):3004",
					"--generateAndSaveKeyTo=/var/config/key",
					"--remoteConfig=http://\(S.services.app.container_name):\(_pangolin.port)/api/v1/",
				]
				container_name: "gerbil"
				depends_on:     _appHealthy
				cap_add: ["NET_ADMIN", "SYS_MODULE"]
				ports: [
					"51820:51820/udp",
					"21820:21820/udp",
					"443:443",
					"443:443/udp",
					"80:80",
					"22:22",
					"18022:18022",
				]
				volumes: ["\(_pangolin.configDir):/var/config"]
			}
			proxy: {
				image: "docker.io/library/traefik:\(_pangolin.traefikVersion)"
				environment: CF_DNS_API_TOKEN: "${CF_DNS_API_TOKEN:?err}"
				command: ["--configFile=/etc/traefik/traefik_config.yml"]

				container_name: "traefik"
				depends_on:     _appHealthy
				network_mode:   "service:\(S.services.tunnel._ref)"
				volumes: [
					"\(_pangolin.configs)/traefik_config.yaml:/etc/traefik/traefik_config.yml:ro",
					"\(_pangolin.configs)/dynamic_config.yaml:/etc/traefik/dynamic_config.yml:ro",
					"\(_pangolin.configDir)/letsencrypt:/letsencrypt",
					"\(_pangolin.configDir)/traefik/logs:/var/log/traefik",
				]
			}
		}
	}
}
