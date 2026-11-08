externals: {
	dockerNetworks: {}
	dirs: {
		host: {
			share: ""
		}
		repo: {
			configs: ""
		}
	}
	domains: {}

}

stack: {
	secrets: {
		secret: {
			source: "my_keyname"
			as:     "KEY_NAME"
		}
	}

	service: {
		volumes: {
			db: {
				source: ""
				mount:  ""
			}
		}
		ports: {
			egHttp: 80
		}
	}

	files: {}
}
