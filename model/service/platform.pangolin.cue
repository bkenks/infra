package service

import (
	"strings"
	inv "github.com/bkenks/infra/model/inventory"
)

_pangolin: {
	_dbm:          inv.common.directory.server.docker_bindmounts
	configDir:     _dbm + "/pangolin/config"
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

pangolin: S={
	name: "pangolin"
	_appHealthy: (S.services.app._ref): condition: "service_healthy"
	services: {
		app: Svc={
			_version: "ee-1.24.0"
			_port:    3001

			container_name: "pangolin"
			image:          "docker.io/fosrl/pangolin:\(_version)"
			pre_start: [{
				image: "docker.io/library/busybox:1.37.0"
				command: ["sh", "-c", _pangolin.initScript]
			}]
			environment: {
				EMAIL_SMTP_PASS: "${EMAIL_SMTP_PASS:?err}"
				SERVER_SECRET:   "${SERVER_SECRET:?err}"
			}
			volumes: [
				"\(_pangolin.configDir):/app/config",
				"./files/config.yaml:/app/config/config.yml:ro",
				"./files/privateConfig.yaml:/app/config/privateConfig.yml:ro",
			]
			healthcheck: {
				test: ["CMD", "curl", "-f", "http://localhost:\(Svc._port)/api/v1/"]
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
			_version: "1.5.2"

			image: "docker.io/fosrl/gerbil:\(_version)"
			command: [
				"--reachableAt=http://\(Svc.container_name):3004",
				"--generateAndSaveKeyTo=/var/config/key",
				"--remoteConfig=http://\(S.services.app.container_name):\(S.services.app._port)/api/v1/",
			]
			container_name: "gerbil"
			depends_on:     S._appHealthy
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
			_version: "v3.6"
			image:    "docker.io/library/traefik:\(_version)"
			environment: CF_DNS_API_TOKEN: "${CF_DNS_API_TOKEN:?err}"
			command: ["--configFile=/etc/traefik/traefik_config.yml"]

			container_name: "traefik"
			depends_on:     S._appHealthy
			network_mode:   "service:\(S.services.tunnel._ref)"
			volumes: [
				"./files/traefik_config.yaml:/etc/traefik/traefik_config.yml:ro",
				"./files/dynamic_config.yaml:/etc/traefik/dynamic_config.yml:ro",
				"\(_pangolin.configDir)/letsencrypt:/letsencrypt",
				"\(_pangolin.configDir)/traefik/logs:/var/log/traefik",
			]
		}
	}
	networks: default: {
		driver:      "bridge"
		enable_ipv6: true
	}
}
