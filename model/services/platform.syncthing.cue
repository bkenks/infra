package services

import (
    ext "github.com/bkenks/infra/model/externals"
)

syncthing: {
    _cfg: {
        version: "latest"
    }

    compose: C={
        name: "syncthing"

        volumes: config: name: "syncthing_config"

        services: (C.name): {
            image: "syncthing/syncthing:\(_cfg.version)"
            environment: {
                PUID: 1000
                PGID: 1000
                STGUIADDRESS: "127.0.0.1:8384"
            }
            // —————————————————————————
            container_name: C.name
            volumes: [
                "\(ext.dirs.host.syncthingSync):/sync",
                "\(C.volumes.config._ID):/var/syncthing"
            ]
            network_mode: "host"
        }
    }
}