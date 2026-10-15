var e=e=>{switch(e){case`index`:return`direction: right

Operator: {
  label: "Operator"
  shape: c4-person
}
Household: {
  label: "Household Users"
  shape: c4-person
}
Dashboard: {
  label: "Dashboard"
}
ConfigMgmt: {
  label: "Configuration Management"
}
Www: {
  label: "Public Internet"
  shape: queue
}
OverlayNet: {
  label: "Overlay Network"
}
SecCodeForge: {
  label: "Secondary Code Forge"
}
PasswdMan: {
  label: "Password Manager"
}
DataBak: {
  label: "Data Backup Coordinator"
}
DbBak: {
  label: "Database Backup Coordinator"
}
Gateway: {
  label: "Gateway"
}
Erp: {
  label: "ERP"
}
Phovid: {
  label: "Personal Photo Storage"
}
Dns: {
  label: "DNS and Certificates"
}
Idp: {
  label: "Identity Provider"
}
Ci: {
  label: "Continuous Integration"
}
AgentGw: {
  label: "Agent Gateway"
}
SecretsMan: {
  label: "Secrets Manager"
}
PrjMan: {
  label: "Project Manager"
}
Docsign: {
  label: "Document Signing"
}
DocArc: {
  label: "Document Archive"
}
MediaLib: {
  label: "Media Library"
}
GameServers: {
  label: "Game Servers"
}
ContainerOrc: {
  label: "Container Orchestrator"
}
Email: {
  label: "Transactional Email"
}
SharedDb: {
  label: "Shared Database"
}
FileExp: {
  label: "File Explorer"
}
PriCodeForge: {
  label: "Primary Code Forge"
}
Alerting: {
  label: "Alerting"
}

Operator -> Www: "browses"
Operator -> ConfigMgmt: "runs playbooks"
Household -> Www: "browses"
Www -> Gateway: "HTTPS :443, HTTP :80"
OverlayNet -> Idp: "exposes on the tailnet"
OverlayNet -> SecretsMan: "exposes on the tailnet"
ConfigMgmt -> OverlayNet: "enrols the host in the tailnet"
Gateway -> Dns: "solves ACME DNS-01"
Gateway -> Idp: "authentik.ktbcloud.com"
Gateway -> ContainerOrc: "komo.ktbinternal.com"
Gateway -> PriCodeForge: "fj.ktbcloud.com"
Gateway -> Ci: "peck.ktbcloud.com"
Gateway -> AgentGw: "komodo-mcp.ktbinternal.com"
Gateway -> SecretsMan: "infisical.ktbinternal.com"
Gateway -> Email: "SMTP :465"
Gateway -> PrjMan: "openprj.ktbcloud.com"
Gateway -> Docsign: "docuseal.ktbcloud.com"
Gateway -> DocArc: "paper.ktbinternal.com"
Gateway -> MediaLib: "[...]"
Gateway -> GameServers: "raw TCP :18022"
Gateway -> FileExp: "HTTP :18450"
ConfigMgmt -> Gateway: "installs the newt systemd unit"
DbBak -> Idp
Dashboard -> Idp: "authenticates users"
ContainerOrc -> PriCodeForge: "syncs stack definitions"
ContainerOrc -> Alerting: "sends alerts"
ConfigMgmt -> ContainerOrc: "[...]"
AgentGw -> ContainerOrc: "Komodo API"
DataBak -> ContainerOrc
DbBak -> ContainerOrc
ConfigMgmt -> SecCodeForge: "clones infra.stacks"
ConfigMgmt -> SecretsMan: "bootstraps the control plane"
ConfigMgmt -> PasswdMan: "reads machine identities and the tailnet auth key"
ConfigMgmt -> DataBak: "restore gate"
ConfigMgmt -> DbBak: "restore gate"
Ci -> PriCodeForge: "OAuth2 login and repository access"
DbBak -> PriCodeForge
SecretsMan -> Email: "SMTP :465"
DbBak -> SecretsMan
DbBak -> SharedDb
DbBak -> DocArc
DbBak -> Erp
DbBak -> Phovid
PrjMan -> SharedDb: "[PostgreSQL]"
Docsign -> SharedDb: "[PostgreSQL]"
GameServers -> FileExp: "stores its world"
`;case`secrets`:return`direction: right

OverlayNet: {
  label: "Overlay Network"
}
Gateway: {
  label: "Gateway"
}
Idp: {
  label: "Identity Provider"
}
ContainerOrc: {
  label: "Container Orchestrator"
}
ConfigMgmt: {
  label: "Configuration Management"
}
PriCodeForge: {
  label: "Primary Code Forge"
}
Ci: {
  label: "Continuous Integration"
}
AgentGw: {
  label: "Agent Gateway"
}
DataBak: {
  label: "Data Backup Coordinator"
}
DbBak: {
  label: "Database Backup Coordinator"
}
Dashboard: {
  label: "Dashboard"
}
SharedDb: {
  label: "Shared Database"
}
PrjMan: {
  label: "Project Manager"
}
Docsign: {
  label: "Document Signing"
}
DocArc: {
  label: "Document Archive"
}
Erp: {
  label: "ERP"
}
Phovid: {
  label: "Personal Photo Storage"
}
MediaLib: {
  label: "Media Library"
}
SecretsMan: {
  label: "Secrets Manager"

  Infisical: {
    label: "Infisical"
  }
}

OverlayNet -> SecretsMan.Infisical: "[...]"
Gateway -> SecretsMan.Infisical: "[...]"
Idp -> SecretsMan.Infisical: "/authentik"
ContainerOrc -> SecretsMan.Infisical: "/komodo"
ConfigMgmt -> SecretsMan.Infisical: "[...]"
PriCodeForge -> SecretsMan.Infisical: "/forgejo"
Ci -> SecretsMan.Infisical: "/woodpecker"
AgentGw -> SecretsMan.Infisical: "/komodo-mcp"
DataBak -> SecretsMan.Infisical: "/zerobyte"
DbBak -> SecretsMan.Infisical: "/databasus"
Dashboard -> SecretsMan.Infisical: "/homarr"
SharedDb -> SecretsMan.Infisical: "/postgres"
PrjMan -> SecretsMan.Infisical: "/openproject"
Docsign -> SecretsMan.Infisical: "/docuseal"
DocArc -> SecretsMan.Infisical: "/paperless"
Erp -> SecretsMan.Infisical: "/"
Phovid -> SecretsMan.Infisical: "/immich"
MediaLib -> SecretsMan.Infisical: "/stream"
`;case`ingress`:return`direction: right

Operator: {
  label: "Operator"
  shape: c4-person
}
Household: {
  label: "Household Users"
  shape: c4-person
}
Www: {
  label: "Public Internet"
  shape: queue
}
Gateway: {
  label: "Gateway"

  Pangolin: {
    label: "Pangolin"

    Traefik: {
      label: "Traefik"
    }
    Server: {
      label: "Pangolin Server"
    }
    Gerbil: {
      label: "Gerbil"
    }
  }
  Newt: {
    label: "Newt"
  }
}
Dns: {
  label: "DNS and Certificates"

  Cloudflare: {
    label: "Cloudflare"
  }
}

Operator -> Www: "browses"
Household -> Www: "browses"
Www -> Gateway.Pangolin.Gerbil: "HTTPS :443, HTTP :80"
Gateway.Pangolin.Gerbil -> Gateway.Newt: "WireGuard :51820"
Gateway.Pangolin.Server -> Gateway.Pangolin.Gerbil: "pushes remote config"
Gateway.Pangolin.Traefik -> Gateway.Pangolin.Server: "authorizes each request"
Gateway.Pangolin.Gerbil -> Gateway.Pangolin.Traefik: "shares the network namespace"
Gateway.Pangolin.Traefik -> Gateway.Pangolin.Gerbil: "routes into the tunnel"
Gateway.Pangolin.Traefik -> Dns.Cloudflare: "solves ACME DNS-01"
`;case`identity`:return`direction: down

Gateway: {
  label: "Gateway"
}
Dashboard: {
  label: "Dashboard"
}
ContainerOrc: {
  label: "Container Orchestrator"
}
Ci: {
  label: "Continuous Integration"

  Woodpecker: {
    label: "Woodpecker"

    Agent: {
      label: "Agent"
    }
    Server: {
      label: "Server"
    }
  }
}
Idp: {
  label: "Identity Provider"

  Authentik: {
    label: "Authentik"

    Worker: {
      label: "Worker"
    }
    Server: {
      label: "Server"
    }
    Db: {
      label: "Database"
      shape: stored_data
    }
  }
}
PriCodeForgeForgejoServer: {
  label: "Server"
}

Idp.Authentik.Server -> Idp.Authentik.Db: "[PostgreSQL]"
Idp.Authentik.Worker -> Idp.Authentik.Db: "[PostgreSQL]"
Gateway -> Idp.Authentik.Server: "authentik.ktbcloud.com"
Dashboard -> Idp.Authentik.Server: "authenticates users"
Gateway -> Ci.Woodpecker.Server: "peck.ktbcloud.com"
Ci.Woodpecker.Agent -> Ci.Woodpecker.Server: "polls for work"
Gateway -> PriCodeForgeForgejoServer: "fj.ktbcloud.com"
Ci.Woodpecker.Server -> PriCodeForgeForgejoServer: "OAuth2 login and repository access"
ContainerOrc -> PriCodeForgeForgejoServer: "syncs stack definitions"
`;case`state`:return`direction: right

FileExpFbqShared: {
  label: "Shared File Tree"
  shape: stored_data
}
DbBak: {
  label: "Database Backup Coordinator"

  Databasus: {
    label: "Databasus"
  }
}
DataBak: {
  label: "Data Backup Coordinator"

  Zerobyte: {
    label: "Zerobyte"
  }
}
Idp: {
  label: "Identity Provider"

  AuthentikDb: {
    label: "Database"
    shape: stored_data
  }
}
PriCodeForge: {
  label: "Primary Code Forge"

  ForgejoDb: {
    label: "Database"
    shape: stored_data
  }
}
SecretsMan: {
  label: "Secrets Manager"

  InfisicalDb: {
    label: "Database"
    shape: stored_data
  }
}
SharedDb: {
  label: "Shared Database"

  PostgresDb: {
    label: "Database"
    shape: stored_data
  }
}
DocArc: {
  label: "Document Archive"

  PaperlessDb: {
    label: "Database"
    shape: stored_data
  }
}
Erp: {
  label: "ERP"

  ErpnextDb: {
    label: "Database"
    shape: stored_data
  }
}
Phovid: {
  label: "Personal Photo Storage"

  ImmichDb: {
    label: "Database"
    shape: stored_data
  }
}
ContainerOrc: {
  label: "Container Orchestrator"

  KomodoDb: {
    label: "Database"
    shape: stored_data
  }
  KomodoVolumes: {
    label: "Docker Volumes"
    shape: stored_data
  }
}

DbBak.Databasus -> Idp.AuthentikDb
DbBak.Databasus -> ContainerOrc.KomodoDb
DbBak.Databasus -> PriCodeForge.ForgejoDb
DbBak.Databasus -> SecretsMan.InfisicalDb
DbBak.Databasus -> SharedDb.PostgresDb
DbBak.Databasus -> DocArc.PaperlessDb
DbBak.Databasus -> Erp.ErpnextDb
DbBak.Databasus -> Phovid.ImmichDb
DataBak.Zerobyte -> ContainerOrc.KomodoVolumes
`;case`apps`:return`direction: down

Gateway: {
  label: "Gateway"
}
Erp: {
  label: "ERP"
}
Phovid: {
  label: "Personal Photo Storage"
}
PrjMan: {
  label: "Project Manager"
}
Docsign: {
  label: "Document Signing"
}
DocArc: {
  label: "Document Archive"
}
MediaLib: {
  label: "Media Library"
}
GameServers: {
  label: "Game Servers"
}
SharedDb: {
  label: "Shared Database"
}
FileExp: {
  label: "File Explorer"
}
SecretsMan: {
  label: "Secrets Manager"
}

GameServers -> FileExp: "stores its world"
Gateway -> PrjMan: "openprj.ktbcloud.com"
Gateway -> Docsign: "docuseal.ktbcloud.com"
Gateway -> DocArc: "paper.ktbinternal.com"
Gateway -> MediaLib: "[...]"
Gateway -> GameServers: "raw TCP :18022"
Gateway -> FileExp: "HTTP :18450"
PrjMan -> SharedDb: "[PostgreSQL]"
Docsign -> SharedDb: "[PostgreSQL]"
PrjMan -> SecretsMan: "/openproject"
Docsign -> SecretsMan: "/docuseal"
DocArc -> SecretsMan: "/paperless"
Erp -> SecretsMan: "/"
Phovid -> SecretsMan: "/immich"
MediaLib -> SecretsMan: "/stream"
Gateway -> SecretsMan: "[...]"
SharedDb -> SecretsMan: "/postgres"
`;case`gatewayDetail`:return`direction: down

ConfigMgmt: {
  label: "Configuration Management"
}
Www: {
  label: "Public Internet"
  shape: queue
}
Gateway: {
  label: "Gateway"

  Pangolin: {
    label: "Pangolin"

    Traefik: {
      label: "Traefik"
    }
    Server: {
      label: "Pangolin Server"
    }
    Gerbil: {
      label: "Gerbil"
    }
  }
  Newt: {
    label: "Newt"
  }
}
Dns: {
  label: "DNS and Certificates"
}
Email: {
  label: "Transactional Email"
}
Idp: {
  label: "Identity Provider"
}
ContainerOrc: {
  label: "Container Orchestrator"
}
PriCodeForge: {
  label: "Primary Code Forge"
}
Ci: {
  label: "Continuous Integration"
}
AgentGw: {
  label: "Agent Gateway"
}
SecretsMan: {
  label: "Secrets Manager"
}
PrjMan: {
  label: "Project Manager"
}
Docsign: {
  label: "Document Signing"
}
DocArc: {
  label: "Document Archive"
}
MediaLib: {
  label: "Media Library"
}
GameServers: {
  label: "Game Servers"
}
FileExp: {
  label: "File Explorer"
}

ConfigMgmt -> Gateway.Newt: "installs the newt systemd unit"
Gateway.Newt -> Idp: "authentik.ktbcloud.com"
Gateway.Newt -> ContainerOrc: "komo.ktbinternal.com"
Gateway.Newt -> PriCodeForge: "fj.ktbcloud.com"
Gateway.Newt -> Ci: "peck.ktbcloud.com"
Gateway.Newt -> AgentGw: "komodo-mcp.ktbinternal.com"
Gateway.Newt -> SecretsMan: "infisical.ktbinternal.com"
Gateway.Newt -> PrjMan: "openprj.ktbcloud.com"
Gateway.Newt -> Docsign: "docuseal.ktbcloud.com"
Gateway.Newt -> DocArc: "paper.ktbinternal.com"
Gateway.Newt -> MediaLib: "[...]"
Gateway.Newt -> GameServers: "raw TCP :18022"
Gateway.Newt -> FileExp: "HTTP :18450"
Www -> Gateway.Pangolin.Gerbil: "HTTPS :443, HTTP :80"
Gateway.Pangolin.Server -> Email: "SMTP :465"
Gateway.Pangolin.Gerbil -> Gateway.Newt: "WireGuard :51820"
Gateway.Pangolin.Traefik -> Dns: "solves ACME DNS-01"
Gateway.Pangolin.Server -> Gateway.Pangolin.Gerbil: "pushes remote config"
Gateway.Pangolin.Traefik -> Gateway.Pangolin.Server: "authorizes each request"
Gateway.Pangolin.Gerbil -> Gateway.Pangolin.Traefik: "shares the network namespace"
Gateway.Pangolin.Traefik -> Gateway.Pangolin.Gerbil: "routes into the tunnel"
`;case`idpDetail`:return`direction: down

OverlayNet: {
  label: "Overlay Network"
}
Gateway: {
  label: "Gateway"
}
DbBak: {
  label: "Database Backup Coordinator"
}
Dashboard: {
  label: "Dashboard"
}
Idp: {
  label: "Identity Provider"

  Authentik: {
    label: "Authentik"

    Worker: {
      label: "Worker"
    }
    Server: {
      label: "Server"
    }
    Db: {
      label: "Database"
      shape: stored_data
    }
  }
}

OverlayNet -> Idp.Authentik.Db: "exposes on the tailnet"
Gateway -> Idp.Authentik.Server: "authentik.ktbcloud.com"
DbBak -> Idp.Authentik.Db
Dashboard -> Idp.Authentik.Server: "authenticates users"
Idp.Authentik.Server -> Idp.Authentik.Db: "[PostgreSQL]"
Idp.Authentik.Worker -> Idp.Authentik.Db: "[PostgreSQL]"
`;case`secretsManDetail`:return`direction: down

OverlayNet: {
  label: "Overlay Network"
}
Gateway: {
  label: "Gateway"
}
Idp: {
  label: "Identity Provider"
}
ContainerOrc: {
  label: "Container Orchestrator"
}
ConfigMgmt: {
  label: "Configuration Management"
}
PriCodeForge: {
  label: "Primary Code Forge"
}
Ci: {
  label: "Continuous Integration"
}
AgentGw: {
  label: "Agent Gateway"
}
DataBak: {
  label: "Data Backup Coordinator"
}
DbBak: {
  label: "Database Backup Coordinator"
}
Dashboard: {
  label: "Dashboard"
}
SharedDb: {
  label: "Shared Database"
}
PrjMan: {
  label: "Project Manager"
}
Docsign: {
  label: "Document Signing"
}
DocArc: {
  label: "Document Archive"
}
Erp: {
  label: "ERP"
}
Phovid: {
  label: "Personal Photo Storage"
}
MediaLib: {
  label: "Media Library"
}
SecretsMan: {
  label: "Secrets Manager"

  Infisical: {
    label: "Infisical"

    Server: {
      label: "Server"
    }
    Redis: {
      label: "Cache"
    }
    Db: {
      label: "Database"
      shape: stored_data
    }
  }
}
Email: {
  label: "Transactional Email"
}

OverlayNet -> SecretsMan.Infisical.Server: "/tailscale/containers"
Gateway -> SecretsMan.Infisical.Server: "[...]"
Idp -> SecretsMan.Infisical.Server: "/authentik"
ContainerOrc -> SecretsMan.Infisical.Server: "/komodo"
ConfigMgmt -> SecretsMan.Infisical.Server: "[...]"
PriCodeForge -> SecretsMan.Infisical.Server: "/forgejo"
Ci -> SecretsMan.Infisical.Server: "/woodpecker"
AgentGw -> SecretsMan.Infisical.Server: "/komodo-mcp"
DataBak -> SecretsMan.Infisical.Server: "/zerobyte"
DbBak -> SecretsMan.Infisical.Server: "/databasus"
DbBak -> SecretsMan.Infisical.Db
Dashboard -> SecretsMan.Infisical.Server: "/homarr"
SharedDb -> SecretsMan.Infisical.Server: "/postgres"
PrjMan -> SecretsMan.Infisical.Server: "/openproject"
Docsign -> SecretsMan.Infisical.Server: "/docuseal"
DocArc -> SecretsMan.Infisical.Server: "/paperless"
Erp -> SecretsMan.Infisical.Server: "/"
Phovid -> SecretsMan.Infisical.Server: "/immich"
MediaLib -> SecretsMan.Infisical.Server: "/stream"
SecretsMan.Infisical.Server -> Email: "SMTP :465"
SecretsMan.Infisical.Server -> SecretsMan.Infisical.Redis: "queues and caches"
SecretsMan.Infisical.Server -> SecretsMan.Infisical.Db: "[PostgreSQL]"
`;case`containerOrcDetail`:return`direction: down

Gateway: {
  label: "Gateway"
}
ConfigMgmt: {
  label: "Configuration Management"
}
AgentGw: {
  label: "Agent Gateway"
}
DataBak: {
  label: "Data Backup Coordinator"
}
DbBak: {
  label: "Database Backup Coordinator"
}
ContainerOrc: {
  label: "Container Orchestrator"

  Komodo: {
    label: "Komodo"

    Core: {
      label: "Core"
    }
    Periphery: {
      label: "Periphery"
    }
    Db: {
      label: "Database"
      shape: stored_data
    }
    Volumes: {
      label: "Docker Volumes"
      shape: stored_data
    }
  }
}
PriCodeForge: {
  label: "Primary Code Forge"
}
Alerting: {
  label: "Alerting"
}

Gateway -> ContainerOrc.Komodo.Core: "komo.ktbinternal.com"
ConfigMgmt -> ContainerOrc.Komodo.Core: "bootstraps the control plane"
ConfigMgmt -> ContainerOrc.Komodo.Periphery: "installs the periphery systemd unit"
AgentGw -> ContainerOrc.Komodo.Core: "Komodo API"
DataBak -> ContainerOrc.Komodo.Volumes
DbBak -> ContainerOrc.Komodo.Db
ContainerOrc.Komodo.Core -> PriCodeForge: "syncs stack definitions"
ContainerOrc.Komodo.Core -> Alerting: "sends alerts"
ContainerOrc.Komodo.Core -> ContainerOrc.Komodo.Periphery: "TLS :8120, pinned core public key"
ContainerOrc.Komodo.Core -> ContainerOrc.Komodo.Db: "reads and writes"
ContainerOrc.Komodo.Periphery -> ContainerOrc.Komodo.Volumes: "creates and manages"
`;case`forgeDetail`:return`direction: down

Gateway: {
  label: "Gateway"
}
ContainerOrc: {
  label: "Container Orchestrator"
}
Ci: {
  label: "Continuous Integration"
}
DbBak: {
  label: "Database Backup Coordinator"
}
PriCodeForge: {
  label: "Primary Code Forge"

  Forgejo: {
    label: "Forgejo"

    Server: {
      label: "Server"
    }
    Db: {
      label: "Database"
      shape: stored_data
    }
  }
}

Gateway -> PriCodeForge.Forgejo.Server: "fj.ktbcloud.com"
ContainerOrc -> PriCodeForge.Forgejo.Server: "syncs stack definitions"
Ci -> PriCodeForge.Forgejo.Server: "OAuth2 login and repository access"
DbBak -> PriCodeForge.Forgejo.Db
PriCodeForge.Forgejo.Server -> PriCodeForge.Forgejo.Db: "[PostgreSQL]"
`;case`ciDetail`:return`direction: down

Gateway: {
  label: "Gateway"
}
Ci: {
  label: "Continuous Integration"

  Woodpecker: {
    label: "Woodpecker"

    Agent: {
      label: "Agent"
    }
    Server: {
      label: "Server"
    }
  }
}
PriCodeForge: {
  label: "Primary Code Forge"
}

Gateway -> Ci.Woodpecker.Server: "peck.ktbcloud.com"
Ci.Woodpecker.Server -> PriCodeForge: "OAuth2 login and repository access"
Ci.Woodpecker.Agent -> Ci.Woodpecker.Server: "polls for work"
`;case`docArcDetail`:return`direction: down

Gateway: {
  label: "Gateway"
}
DbBak: {
  label: "Database Backup Coordinator"
}
DocArc: {
  label: "Document Archive"

  Paperless: {
    label: "Paperless"

    Server: {
      label: "Server"
    }
    Broker: {
      label: "Broker"
    }
    Gotenberg: {
      label: "Document Converter"
    }
    Tika: {
      label: "Content Extractor"
    }
    Db: {
      label: "Database"
      shape: stored_data
    }
  }
}

Gateway -> DocArc.Paperless.Server: "paper.ktbinternal.com"
DbBak -> DocArc.Paperless.Db
DocArc.Paperless.Server -> DocArc.Paperless.Broker: "queues tasks"
DocArc.Paperless.Server -> DocArc.Paperless.Gotenberg: "converts to PDF"
DocArc.Paperless.Server -> DocArc.Paperless.Tika: "extracts text"
DocArc.Paperless.Server -> DocArc.Paperless.Db: "[PostgreSQL]"
`;case`phovidDetail`:return`direction: down

DbBak: {
  label: "Database Backup Coordinator"
}
Phovid: {
  label: "Personal Photo Storage"

  Immich: {
    label: "Immich"

    Server: {
      label: "Server"
    }
    MachineLearning: {
      label: "Machine Learning"
    }
    Redis: {
      label: "Cache"
    }
    Db: {
      label: "Database"
      shape: stored_data
    }
  }
}

DbBak -> Phovid.Immich.Db
Phovid.Immich.Server -> Phovid.Immich.MachineLearning: "runs inference"
Phovid.Immich.Server -> Phovid.Immich.Redis: "queues jobs"
Phovid.Immich.Server -> Phovid.Immich.Db: "[PostgreSQL]"
`;case`mediaLibDetail`:return`direction: down

Gateway: {
  label: "Gateway"
}
MediaLib: {
  label: "Media Library"

  Seerr: {
    label: "Seerr"
  }
  Prowlarr: {
    label: "Prowlarr"
  }
  Bazarr: {
    label: "Bazarr"
  }
  Sonarr: {
    label: "Sonarr"
  }
  Radarr: {
    label: "Radarr"
  }
  Sabnzbd: {
    label: "SABnzbd"
  }
  Plex: {
    label: "Plex"
  }
}

Gateway -> MediaLib.Seerr: "seerr.ktbinternal.com"
Gateway -> MediaLib.Sonarr: "sonarr.ktbinternal.com"
Gateway -> MediaLib.Radarr: "radarr.ktbinternal.com"
Gateway -> MediaLib.Prowlarr: "prowlarr.ktbinternal.com"
Gateway -> MediaLib.Bazarr: "bazarr.ktbinternal.com"
Gateway -> MediaLib.Sabnzbd: "sabnzbd.ktbinternal.com"
MediaLib.Seerr -> MediaLib.Sonarr: "requests series"
MediaLib.Seerr -> MediaLib.Radarr: "requests films"
MediaLib.Sonarr -> MediaLib.Sabnzbd: "queues downloads"
MediaLib.Prowlarr -> MediaLib.Sonarr: "feeds indexers"
MediaLib.Bazarr -> MediaLib.Sonarr: "reads the library"
MediaLib.Radarr -> MediaLib.Sabnzbd: "queues downloads"
MediaLib.Prowlarr -> MediaLib.Radarr: "feeds indexers"
MediaLib.Bazarr -> MediaLib.Radarr: "reads the library"
`;case`flowRequest`:return`direction: right

Www: {
  label: "Public Internet"
  shape: queue
}
GatewayPangolinGerbil: {
  label: "Gerbil"
}
GatewayPangolinTraefik: {
  label: "Traefik"
}
GatewayPangolinServer: {
  label: "Pangolin Server"
}
GatewayNewt: {
  label: "Newt"
}
PrjManOpenproject: {
  label: "OpenProject"
}
SharedDbPostgresDb: {
  label: "Database"
  shape: stored_data
}

Www -> GatewayPangolinGerbil: "GET openprj.ktbcloud.com"
GatewayPangolinGerbil -> GatewayPangolinTraefik: "forwards on the shared namespace"
GatewayPangolinTraefik -> GatewayPangolinServer: "badger: is this session allowed?"
GatewayPangolinServer -> GatewayPangolinTraefik: "allow"
GatewayPangolinTraefik -> GatewayPangolinGerbil: "routes into the tunnel"
GatewayPangolinGerbil -> GatewayNewt: "WireGuard"
GatewayNewt -> PrjManOpenproject: "forwards to the local port"
PrjManOpenproject -> SharedDbPostgresDb: "query"
SharedDbPostgresDb -> PrjManOpenproject: "rows"
PrjManOpenproject -> GatewayNewt: "200 OK"
GatewayNewt -> GatewayPangolinGerbil: "200 OK"
GatewayPangolinGerbil -> GatewayPangolinTraefik: "200 OK"
GatewayPangolinTraefik -> Www: "200 OK"
`;case`flowSecrets`:return`direction: right

ContainerOrcKomodoPeriphery: {
  label: "Periphery"
}
DocsignDocuseal: {
  label: "Docuseal"
}
SecretsManInfisicalServer: {
  label: "Server"
}
SharedDbPostgresDb: {
  label: "Database"
  shape: stored_data
}

ContainerOrcKomodoPeriphery -> DocsignDocuseal: "docker compose up"
DocsignDocuseal -> SecretsManInfisicalServer: "machine identity login, then GET /docuseal"
SecretsManInfisicalServer -> DocsignDocuseal: "secret bundle"
DocsignDocuseal -> SharedDbPostgresDb: "connects with the injected credentials"
`;case`flowDeploy`:return`direction: right

Operator: {
  label: "Operator"
  shape: c4-person
}
ContainerOrcKomodoCore: {
  label: "Core"
}
PriCodeForgeForgejoServer: {
  label: "Server"
}
ContainerOrcKomodoPeriphery: {
  label: "Periphery"
}
SecretsManInfisicalServer: {
  label: "Server"
}
AlertingPushover: {
  label: "Pushover"
}

Operator -> PriCodeForgeForgejoServer: "git push"
ContainerOrcKomodoCore -> PriCodeForgeForgejoServer: "syncs stack definitions"
ContainerOrcKomodoCore -> ContainerOrcKomodoPeriphery: "deploy"
ContainerOrcKomodoPeriphery -> SecretsManInfisicalServer: "provider fetches the bundle"
SecretsManInfisicalServer -> ContainerOrcKomodoPeriphery: "secrets"
ContainerOrcKomodoPeriphery -> ContainerOrcKomodoCore: "result"
ContainerOrcKomodoCore -> AlertingPushover: "alerts on failure"
`;case`fleet`:return`direction: right

Prod: {
  label: "Production"

  Hetzner: {
    label: "Hetzner"

    Maboi: {
      label: "maboi"

      Newt: {
        label: "Newt"
      }
      Periphery: {
        label: "Periphery"
      }
      TsAgent: {
        label: "Tailscale Agent"
      }
    }
  }
  Vultr: {
    label: "Vultr"

    Rick: {
      label: "rick"

      Pangolin: {
        label: "Pangolin"
      }
      Homarr: {
        label: "Homarr"
      }
      Databasus: {
        label: "Databasus"
      }
      TsAgent: {
        label: "Tailscale Agent"
      }
      Zerobyte: {
        label: "Zerobyte"
      }
      Newt: {
        label: "Newt"
      }
      Authentik: {
        label: "Authentik"
      }
      Core: {
        label: "Core"
      }
      Periphery: {
        label: "Periphery"
      }
      Infisical: {
        label: "Infisical"
      }
    }
  }
  Homelab: {
    label: "Home Lab"

    Biggy: {
      label: "biggy"

      Newt: {
        label: "Newt"
      }
      Terraria: {
        label: "Terraria"
      }
      Periphery: {
        label: "Periphery"
      }
      TsAgent: {
        label: "Tailscale Agent"
      }
      Fbq: {
        label: "File Browser Quantum"
      }
    }
    Nas: {
      label: "snaszy"
      shape: stored_data
    }
    Littlebuddy: {
      label: "littlebuddy"

      Periphery: {
        label: "Periphery"
      }
      TsAgent: {
        label: "Tailscale Agent"
      }
      Newt: {
        label: "Newt"
      }
      Woodpecker: {
        label: "Woodpecker"
      }
      KomodoMcp: {
        label: "Komodo MCP"
      }
      Openproject: {
        label: "OpenProject"
      }
      Docuseal: {
        label: "Docuseal"
      }
      Paperless: {
        label: "Paperless"
      }
      Forgejo: {
        label: "Forgejo"
      }
      Postgres: {
        label: "PostgreSQL"
      }
    }
    Bill: {
      label: "bill"

      Newt: {
        label: "Newt"
      }
      Periphery: {
        label: "Periphery"
      }
      TsAgent: {
        label: "Tailscale Agent"
      }
      Erpnext: {
        label: "ERPNext"
      }
    }
    Paiki: {
      label: "paiki"

      Newt: {
        label: "Newt"
      }
      MediaLib: {
        label: "Media Library"
      }
      Immich: {
        label: "Immich"
      }
      Periphery: {
        label: "Periphery"
      }
      TsAgent: {
        label: "Tailscale Agent"
      }
    }
  }
}

Prod.Vultr.Rick.Pangolin -> Prod.Vultr.Rick.Newt: "WireGuard :51820"
Prod.Vultr.Rick.Homarr -> Prod.Vultr.Rick.Authentik: "authenticates users"
Prod.Vultr.Rick.Databasus -> Prod.Vultr.Rick.Authentik
Prod.Vultr.Rick.Newt -> Prod.Vultr.Rick.Authentik: "authentik.ktbcloud.com"
Prod.Vultr.Rick.TsAgent -> Prod.Vultr.Rick.Authentik: "exposes on the tailnet"
Prod.Vultr.Rick.Databasus -> Prod.Vultr.Rick.Infisical
Prod.Vultr.Rick.Newt -> Prod.Vultr.Rick.Infisical: "infisical.ktbinternal.com"
Prod.Vultr.Rick.TsAgent -> Prod.Vultr.Rick.Infisical: "exposes on the tailnet"
Prod.Vultr.Rick.Newt -> Prod.Vultr.Rick.Core: "komo.ktbinternal.com"
Prod.Vultr.Rick.Core -> Prod.Vultr.Rick.Periphery: "TLS :8120, pinned core public key"
Prod.Vultr.Rick.Databasus -> Prod.Homelab.Littlebuddy.Postgres
Prod.Vultr.Rick.Databasus -> Prod.Homelab.Littlebuddy.Forgejo
Prod.Vultr.Rick.Databasus -> Prod.Homelab.Littlebuddy.Paperless
Prod.Vultr.Rick.Core -> Prod.Homelab.Littlebuddy.Forgejo: "syncs stack definitions"
Prod.Homelab.Littlebuddy.Openproject -> Prod.Homelab.Littlebuddy.Postgres: "[PostgreSQL]"
Prod.Homelab.Littlebuddy.Docuseal -> Prod.Homelab.Littlebuddy.Postgres: "[PostgreSQL]"
Prod.Homelab.Littlebuddy.Woodpecker -> Prod.Homelab.Littlebuddy.Forgejo: "OAuth2 login and repository access"
Prod.Homelab.Littlebuddy.Newt -> Prod.Homelab.Littlebuddy.Forgejo: "fj.ktbcloud.com"
Prod.Homelab.Littlebuddy.Newt -> Prod.Homelab.Littlebuddy.Woodpecker: "peck.ktbcloud.com"
Prod.Homelab.Littlebuddy.Newt -> Prod.Homelab.Littlebuddy.KomodoMcp: "komodo-mcp.ktbinternal.com"
Prod.Homelab.Littlebuddy.Newt -> Prod.Homelab.Littlebuddy.Openproject: "openprj.ktbcloud.com"
Prod.Homelab.Littlebuddy.Newt -> Prod.Homelab.Littlebuddy.Docuseal: "docuseal.ktbcloud.com"
Prod.Homelab.Littlebuddy.Newt -> Prod.Homelab.Littlebuddy.Paperless: "paper.ktbinternal.com"
Prod.Homelab.Littlebuddy.KomodoMcp -> Prod.Vultr.Rick.Core: "Komodo API"
Prod.Homelab.Biggy.Terraria -> Prod.Homelab.Biggy.Fbq: "stores its world"
Prod.Homelab.Biggy.Newt -> Prod.Homelab.Biggy.Fbq: "HTTP :18450"
Prod.Homelab.Biggy.Newt -> Prod.Homelab.Biggy.Terraria: "raw TCP :18022"
Prod.Vultr.Rick.Databasus -> Prod.Homelab.Bill.Erpnext
Prod.Vultr.Rick.Databasus -> Prod.Homelab.Paiki.Immich
Prod.Homelab.Paiki.Newt -> Prod.Homelab.Paiki.MediaLib: "[...]"
Prod.Homelab.Paiki.MediaLib -> Prod.Vultr.Rick.Infisical: "/stream"
`;case`controlplane`:return`direction: down

ProdVultrRick: {
  label: "rick"

  Pangolin: {
    label: "Pangolin"
  }
  Homarr: {
    label: "Homarr"
  }
  Databasus: {
    label: "Databasus"
  }
  TsAgent: {
    label: "Tailscale Agent"
  }
  Newt: {
    label: "Newt"
  }
  Authentik: {
    label: "Authentik"
  }
  Infisical: {
    label: "Infisical"
  }
  Core: {
    label: "Core"
  }
  Periphery: {
    label: "Periphery"
  }
  Zerobyte: {
    label: "Zerobyte"
  }
}

ProdVultrRick.Pangolin -> ProdVultrRick.Newt: "WireGuard :51820"
ProdVultrRick.Homarr -> ProdVultrRick.Authentik: "authenticates users"
ProdVultrRick.Databasus -> ProdVultrRick.Authentik
ProdVultrRick.Newt -> ProdVultrRick.Authentik: "authentik.ktbcloud.com"
ProdVultrRick.TsAgent -> ProdVultrRick.Authentik: "exposes on the tailnet"
ProdVultrRick.Databasus -> ProdVultrRick.Infisical
ProdVultrRick.Newt -> ProdVultrRick.Infisical: "infisical.ktbinternal.com"
ProdVultrRick.TsAgent -> ProdVultrRick.Infisical: "exposes on the tailnet"
ProdVultrRick.Newt -> ProdVultrRick.Core: "komo.ktbinternal.com"
ProdVultrRick.Core -> ProdVultrRick.Periphery: "TLS :8120, pinned core public key"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};