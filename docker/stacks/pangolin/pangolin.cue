package stack

import (
	"strings"

	"github.com/bkenks/infra/store"
)

_pangolin: {
	version:        "ee-1.24.0"
	gerbilVersion:  "1.5.2"
	traefikVersion: "v3.6"
	configDir:      "\(store.paths.docker_bind_mounts)/pangolin/config"
	geoliteMirror:  "https://github.com/GitSquared/node-geolite2-redist/raw/refs/heads/master/redist/"
	initDir:        "/app/config"
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
	appHealthy: app: condition: "service_healthy"
}

stack: {
	name: "pangolin"
	services: {
		app: {
			container_name: "pangolin"
			image:          "docker.io/fosrl/pangolin:\(_pangolin.version)"
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
				test: ["CMD", "curl", "-f", "http://localhost:3001/api/v1/"]
				interval: "10s"
				timeout:  "10s"
				retries:  15
			}
			deploy: resources: {
				limits: memory:       "2g"
				reservations: memory: "512m"
			}
		}
		tunnel: {
			container_name: "gerbil"
			image:          "docker.io/fosrl/gerbil:\(_pangolin.gerbilVersion)"
			depends_on:     _pangolin.appHealthy
			command: [
				"--reachableAt=http://gerbil:3004",
				"--generateAndSaveKeyTo=/var/config/key",
				"--remoteConfig=http://pangolin:3001/api/v1/",
			]
			volumes: ["\(_pangolin.configDir):/var/config"]
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
		}
		proxy: {
			container_name: "traefik"
			image:          "docker.io/library/traefik:\(_pangolin.traefikVersion)"
			network_mode:   "service:tunnel"
			depends_on:     _pangolin.appHealthy
			command: ["--configFile=/etc/traefik/traefik_config.yml"]
			environment: CF_DNS_API_TOKEN: "${CF_DNS_API_TOKEN:?err}"
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
