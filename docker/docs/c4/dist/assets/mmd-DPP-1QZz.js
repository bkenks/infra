var e=e=>{switch(e){case`index`:return`---
title: "Landscape"
---
graph LR
  Operator@{ icon: "fa:user", shape: rounded, label: "Operator" }
  Household@{ icon: "fa:user", shape: rounded, label: "Household Users" }
  Dashboard@{ shape: rectangle, label: "Dashboard" }
  ConfigMgmt@{ shape: rectangle, label: "Configuration Management" }
  Www@{ shape: horizontal-cylinder, label: "Public Internet" }
  OverlayNet@{ shape: rectangle, label: "Overlay Network" }
  SecCodeForge@{ shape: rectangle, label: "Secondary Code Forge" }
  PasswdMan@{ shape: rectangle, label: "Password Manager" }
  DataBak@{ shape: rectangle, label: "Data Backup Coordinator" }
  DbBak@{ shape: rectangle, label: "Database Backup Coordinator" }
  Gateway@{ shape: rectangle, label: "Gateway" }
  Erp@{ shape: rectangle, label: "ERP" }
  Phovid@{ shape: rectangle, label: "Personal Photo Storage" }
  Dns@{ shape: rectangle, label: "DNS and Certificates" }
  Idp@{ shape: rectangle, label: "Identity Provider" }
  Ci@{ shape: rectangle, label: "Continuous Integration" }
  AgentGw@{ shape: rectangle, label: "Agent Gateway" }
  SecretsMan@{ shape: rectangle, label: "Secrets Manager" }
  PrjMan@{ shape: rectangle, label: "Project Manager" }
  Docsign@{ shape: rectangle, label: "Document Signing" }
  DocArc@{ shape: rectangle, label: "Document Archive" }
  MediaLib@{ shape: rectangle, label: "Media Library" }
  GameServers@{ shape: rectangle, label: "Game Servers" }
  ContainerOrc@{ shape: rectangle, label: "Container Orchestrator" }
  Email@{ shape: rectangle, label: "Transactional Email" }
  SharedDb@{ shape: rectangle, label: "Shared Database" }
  FileExp@{ shape: rectangle, label: "File Explorer" }
  PriCodeForge@{ shape: rectangle, label: "Primary Code Forge" }
  Alerting@{ shape: rectangle, label: "Alerting" }
  Operator -. "\`browses\`" .-> Www
  Operator -. "\`runs playbooks\`" .-> ConfigMgmt
  Household -. "\`browses\`" .-> Www
  Www -. "\`HTTPS :443, HTTP :80\`" .-> Gateway
  OverlayNet -. "\`exposes on the tailnet\`" .-> Idp
  OverlayNet -. "\`exposes on the tailnet\`" .-> SecretsMan
  ConfigMgmt -. "\`enrols the host in the tailnet\`" .-> OverlayNet
  Gateway -. "\`solves ACME DNS-01\`" .-> Dns
  Gateway -. "\`authentik.ktbcloud.com\`" .-> Idp
  Gateway -. "\`komo.ktbinternal.com\`" .-> ContainerOrc
  Gateway -. "\`fj.ktbcloud.com\`" .-> PriCodeForge
  Gateway -. "\`peck.ktbcloud.com\`" .-> Ci
  Gateway -. "\`komodo-mcp.ktbinternal.com\`" .-> AgentGw
  Gateway -. "\`infisical.ktbinternal.com\`" .-> SecretsMan
  Gateway -. "\`SMTP :465\`" .-> Email
  Gateway -. "\`openprj.ktbcloud.com\`" .-> PrjMan
  Gateway -. "\`docuseal.ktbcloud.com\`" .-> Docsign
  Gateway -. "\`paper.ktbinternal.com\`" .-> DocArc
  Gateway -. "\`[...]\`" .-> MediaLib
  Gateway -. "\`raw TCP :18022\`" .-> GameServers
  Gateway -. "\`HTTP :18450\`" .-> FileExp
  ConfigMgmt -. "\`installs the newt systemd unit\`" .-> Gateway
  DbBak -.-> Idp
  Dashboard -. "\`authenticates users\`" .-> Idp
  ContainerOrc -. "\`syncs stack definitions\`" .-> PriCodeForge
  ContainerOrc -. "\`sends alerts\`" .-> Alerting
  ConfigMgmt -. "\`[...]\`" .-> ContainerOrc
  AgentGw -. "\`Komodo API\`" .-> ContainerOrc
  DataBak -.-> ContainerOrc
  DbBak -.-> ContainerOrc
  ConfigMgmt -. "\`clones infra.stacks\`" .-> SecCodeForge
  ConfigMgmt -. "\`bootstraps the control plane\`" .-> SecretsMan
  ConfigMgmt -. "\`reads machine identities and the tailnet auth key\`" .-> PasswdMan
  ConfigMgmt -. "\`restore gate\`" .-> DataBak
  ConfigMgmt -. "\`restore gate\`" .-> DbBak
  Ci -. "\`OAuth2 login and repository access\`" .-> PriCodeForge
  DbBak -.-> PriCodeForge
  SecretsMan -. "\`SMTP :465\`" .-> Email
  DbBak -.-> SecretsMan
  DbBak -.-> SharedDb
  DbBak -.-> DocArc
  DbBak -.-> Erp
  DbBak -.-> Phovid
  PrjMan -. "\`[PostgreSQL]\`" .-> SharedDb
  Docsign -. "\`[PostgreSQL]\`" .-> SharedDb
  GameServers -. "\`stores its world\`" .-> FileExp
`;case`secrets`:return`---
title: "Secret Distribution"
---
graph LR
  OverlayNet@{ shape: rectangle, label: "Overlay Network" }
  Gateway@{ shape: rectangle, label: "Gateway" }
  Idp@{ shape: rectangle, label: "Identity Provider" }
  ContainerOrc@{ shape: rectangle, label: "Container Orchestrator" }
  ConfigMgmt@{ shape: rectangle, label: "Configuration Management" }
  PriCodeForge@{ shape: rectangle, label: "Primary Code Forge" }
  Ci@{ shape: rectangle, label: "Continuous Integration" }
  AgentGw@{ shape: rectangle, label: "Agent Gateway" }
  DataBak@{ shape: rectangle, label: "Data Backup Coordinator" }
  DbBak@{ shape: rectangle, label: "Database Backup Coordinator" }
  Dashboard@{ shape: rectangle, label: "Dashboard" }
  SharedDb@{ shape: rectangle, label: "Shared Database" }
  PrjMan@{ shape: rectangle, label: "Project Manager" }
  Docsign@{ shape: rectangle, label: "Document Signing" }
  DocArc@{ shape: rectangle, label: "Document Archive" }
  Erp@{ shape: rectangle, label: "ERP" }
  Phovid@{ shape: rectangle, label: "Personal Photo Storage" }
  MediaLib@{ shape: rectangle, label: "Media Library" }
  subgraph SecretsMan["\`Secrets Manager\`"]
    SecretsMan.Infisical@{ shape: rectangle, label: "Infisical" }
  end
  OverlayNet -. "\`[...]\`" .-> SecretsMan.Infisical
  Gateway -. "\`[...]\`" .-> SecretsMan.Infisical
  Idp -. "\`/authentik\`" .-> SecretsMan.Infisical
  ContainerOrc -. "\`/komodo\`" .-> SecretsMan.Infisical
  ConfigMgmt -. "\`[...]\`" .-> SecretsMan.Infisical
  PriCodeForge -. "\`/forgejo\`" .-> SecretsMan.Infisical
  Ci -. "\`/woodpecker\`" .-> SecretsMan.Infisical
  AgentGw -. "\`/komodo-mcp\`" .-> SecretsMan.Infisical
  DataBak -. "\`/zerobyte\`" .-> SecretsMan.Infisical
  DbBak -. "\`/databasus\`" .-> SecretsMan.Infisical
  Dashboard -. "\`/homarr\`" .-> SecretsMan.Infisical
  SharedDb -. "\`/postgres\`" .-> SecretsMan.Infisical
  PrjMan -. "\`/openproject\`" .-> SecretsMan.Infisical
  Docsign -. "\`/docuseal\`" .-> SecretsMan.Infisical
  DocArc -. "\`/paperless\`" .-> SecretsMan.Infisical
  Erp -. "\`/\`" .-> SecretsMan.Infisical
  Phovid -. "\`/immich\`" .-> SecretsMan.Infisical
  MediaLib -. "\`/stream\`" .-> SecretsMan.Infisical
`;case`ingress`:return`---
title: "Ingress Path"
---
graph LR
  Operator@{ icon: "fa:user", shape: rounded, label: "Operator" }
  Household@{ icon: "fa:user", shape: rounded, label: "Household Users" }
  Www@{ shape: horizontal-cylinder, label: "Public Internet" }
  subgraph Gateway["\`Gateway\`"]
    subgraph Gateway.Pangolin["\`Pangolin\`"]
      Gateway.Pangolin.Traefik@{ shape: rectangle, label: "Traefik" }
      Gateway.Pangolin.Server@{ shape: rectangle, label: "Pangolin Server" }
      Gateway.Pangolin.Gerbil@{ shape: rectangle, label: "Gerbil" }
    end
    Gateway.Newt@{ shape: rectangle, label: "Newt" }
  end
  subgraph Dns["\`DNS and Certificates\`"]
    Dns.Cloudflare@{ shape: rectangle, label: "Cloudflare" }
  end
  Operator -. "\`browses\`" .-> Www
  Household -. "\`browses\`" .-> Www
  Www -. "\`HTTPS :443, HTTP :80\`" .-> Gateway.Pangolin.Gerbil
  Gateway.Pangolin.Gerbil -. "\`WireGuard :51820\`" .-> Gateway.Newt
  Gateway.Pangolin.Server -. "\`pushes remote config\`" .-> Gateway.Pangolin.Gerbil
  Gateway.Pangolin.Traefik -. "\`authorizes each request\`" .-> Gateway.Pangolin.Server
  Gateway.Pangolin.Gerbil -. "\`shares the network namespace\`" .-> Gateway.Pangolin.Traefik
  Gateway.Pangolin.Traefik -. "\`routes into the tunnel\`" .-> Gateway.Pangolin.Gerbil
  Gateway.Pangolin.Traefik -. "\`solves ACME DNS-01\`" .-> Dns.Cloudflare
`;case`identity`:return`---
title: "Identity"
---
graph TB
  Gateway@{ shape: rectangle, label: "Gateway" }
  Dashboard@{ shape: rectangle, label: "Dashboard" }
  ContainerOrc@{ shape: rectangle, label: "Container Orchestrator" }
  subgraph Ci["\`Continuous Integration\`"]
    subgraph Ci.Woodpecker["\`Woodpecker\`"]
      Ci.Woodpecker.Agent@{ shape: rectangle, label: "Agent" }
      Ci.Woodpecker.Server@{ shape: rectangle, label: "Server" }
    end
  end
  subgraph Idp["\`Identity Provider\`"]
    subgraph Idp.Authentik["\`Authentik\`"]
      Idp.Authentik.Worker@{ shape: rectangle, label: "Worker" }
      Idp.Authentik.Server@{ shape: rectangle, label: "Server" }
      Idp.Authentik.Db@{ shape: disk, label: "Database" }
    end
  end
  PriCodeForgeForgejoServer@{ shape: rectangle, label: "Server" }
  Idp.Authentik.Server -. "\`[PostgreSQL]\`" .-> Idp.Authentik.Db
  Idp.Authentik.Worker -. "\`[PostgreSQL]\`" .-> Idp.Authentik.Db
  Gateway -. "\`authentik.ktbcloud.com\`" .-> Idp.Authentik.Server
  Dashboard -. "\`authenticates users\`" .-> Idp.Authentik.Server
  Gateway -. "\`peck.ktbcloud.com\`" .-> Ci.Woodpecker.Server
  Ci.Woodpecker.Agent -. "\`polls for work\`" .-> Ci.Woodpecker.Server
  Gateway -. "\`fj.ktbcloud.com\`" .-> PriCodeForgeForgejoServer
  Ci.Woodpecker.Server -. "\`OAuth2 login and repository access\`" .-> PriCodeForgeForgejoServer
  ContainerOrc -. "\`syncs stack definitions\`" .-> PriCodeForgeForgejoServer
`;case`state`:return`---
title: "State and Backup"
---
graph LR
  FileExpFbqShared@{ shape: disk, label: "Shared File Tree" }
  subgraph DbBak["\`Database Backup Coordinator\`"]
    DbBak.Databasus@{ shape: rectangle, label: "Databasus" }
  end
  subgraph DataBak["\`Data Backup Coordinator\`"]
    DataBak.Zerobyte@{ shape: rectangle, label: "Zerobyte" }
  end
  subgraph Idp["\`Identity Provider\`"]
    Idp.AuthentikDb@{ shape: disk, label: "Database" }
  end
  subgraph PriCodeForge["\`Primary Code Forge\`"]
    PriCodeForge.ForgejoDb@{ shape: disk, label: "Database" }
  end
  subgraph SecretsMan["\`Secrets Manager\`"]
    SecretsMan.InfisicalDb@{ shape: disk, label: "Database" }
  end
  subgraph SharedDb["\`Shared Database\`"]
    SharedDb.PostgresDb@{ shape: disk, label: "Database" }
  end
  subgraph DocArc["\`Document Archive\`"]
    DocArc.PaperlessDb@{ shape: disk, label: "Database" }
  end
  subgraph Erp["\`ERP\`"]
    Erp.ErpnextDb@{ shape: disk, label: "Database" }
  end
  subgraph Phovid["\`Personal Photo Storage\`"]
    Phovid.ImmichDb@{ shape: disk, label: "Database" }
  end
  subgraph ContainerOrc["\`Container Orchestrator\`"]
    ContainerOrc.KomodoDb@{ shape: disk, label: "Database" }
    ContainerOrc.KomodoVolumes@{ shape: disk, label: "Docker Volumes" }
  end
  DbBak.Databasus -.-> Idp.AuthentikDb
  DbBak.Databasus -.-> ContainerOrc.KomodoDb
  DbBak.Databasus -.-> PriCodeForge.ForgejoDb
  DbBak.Databasus -.-> SecretsMan.InfisicalDb
  DbBak.Databasus -.-> SharedDb.PostgresDb
  DbBak.Databasus -.-> DocArc.PaperlessDb
  DbBak.Databasus -.-> Erp.ErpnextDb
  DbBak.Databasus -.-> Phovid.ImmichDb
  DataBak.Zerobyte -.-> ContainerOrc.KomodoVolumes
`;case`apps`:return'---\ntitle: "Workloads"\n---\ngraph TB\n  Gateway@{ shape: rectangle, label: "Gateway" }\n  Erp@{ shape: rectangle, label: "ERP" }\n  Phovid@{ shape: rectangle, label: "Personal Photo Storage" }\n  PrjMan@{ shape: rectangle, label: "Project Manager" }\n  Docsign@{ shape: rectangle, label: "Document Signing" }\n  DocArc@{ shape: rectangle, label: "Document Archive" }\n  MediaLib@{ shape: rectangle, label: "Media Library" }\n  GameServers@{ shape: rectangle, label: "Game Servers" }\n  SharedDb@{ shape: rectangle, label: "Shared Database" }\n  FileExp@{ shape: rectangle, label: "File Explorer" }\n  SecretsMan@{ shape: rectangle, label: "Secrets Manager" }\n  GameServers -. "`stores its world`" .-> FileExp\n  Gateway -. "`openprj.ktbcloud.com`" .-> PrjMan\n  Gateway -. "`docuseal.ktbcloud.com`" .-> Docsign\n  Gateway -. "`paper.ktbinternal.com`" .-> DocArc\n  Gateway -. "`[...]`" .-> MediaLib\n  Gateway -. "`raw TCP :18022`" .-> GameServers\n  Gateway -. "`HTTP :18450`" .-> FileExp\n  PrjMan -. "`[PostgreSQL]`" .-> SharedDb\n  Docsign -. "`[PostgreSQL]`" .-> SharedDb\n  PrjMan -. "`/openproject`" .-> SecretsMan\n  Docsign -. "`/docuseal`" .-> SecretsMan\n  DocArc -. "`/paperless`" .-> SecretsMan\n  Erp -. "`/`" .-> SecretsMan\n  Phovid -. "`/immich`" .-> SecretsMan\n  MediaLib -. "`/stream`" .-> SecretsMan\n  Gateway -. "`[...]`" .-> SecretsMan\n  SharedDb -. "`/postgres`" .-> SecretsMan\n';case`gatewayDetail`:return`---
title: "Gateway"
---
graph TB
  ConfigMgmt@{ shape: rectangle, label: "Configuration Management" }
  Www@{ shape: horizontal-cylinder, label: "Public Internet" }
  subgraph Gateway["\`Gateway\`"]
    subgraph Gateway.Pangolin["\`Pangolin\`"]
      Gateway.Pangolin.Traefik@{ shape: rectangle, label: "Traefik" }
      Gateway.Pangolin.Server@{ shape: rectangle, label: "Pangolin Server" }
      Gateway.Pangolin.Gerbil@{ shape: rectangle, label: "Gerbil" }
    end
    Gateway.Newt@{ shape: rectangle, label: "Newt" }
  end
  Dns@{ shape: rectangle, label: "DNS and Certificates" }
  Email@{ shape: rectangle, label: "Transactional Email" }
  Idp@{ shape: rectangle, label: "Identity Provider" }
  ContainerOrc@{ shape: rectangle, label: "Container Orchestrator" }
  PriCodeForge@{ shape: rectangle, label: "Primary Code Forge" }
  Ci@{ shape: rectangle, label: "Continuous Integration" }
  AgentGw@{ shape: rectangle, label: "Agent Gateway" }
  SecretsMan@{ shape: rectangle, label: "Secrets Manager" }
  PrjMan@{ shape: rectangle, label: "Project Manager" }
  Docsign@{ shape: rectangle, label: "Document Signing" }
  DocArc@{ shape: rectangle, label: "Document Archive" }
  MediaLib@{ shape: rectangle, label: "Media Library" }
  GameServers@{ shape: rectangle, label: "Game Servers" }
  FileExp@{ shape: rectangle, label: "File Explorer" }
  ConfigMgmt -. "\`installs the newt systemd unit\`" .-> Gateway.Newt
  Gateway.Newt -. "\`authentik.ktbcloud.com\`" .-> Idp
  Gateway.Newt -. "\`komo.ktbinternal.com\`" .-> ContainerOrc
  Gateway.Newt -. "\`fj.ktbcloud.com\`" .-> PriCodeForge
  Gateway.Newt -. "\`peck.ktbcloud.com\`" .-> Ci
  Gateway.Newt -. "\`komodo-mcp.ktbinternal.com\`" .-> AgentGw
  Gateway.Newt -. "\`infisical.ktbinternal.com\`" .-> SecretsMan
  Gateway.Newt -. "\`openprj.ktbcloud.com\`" .-> PrjMan
  Gateway.Newt -. "\`docuseal.ktbcloud.com\`" .-> Docsign
  Gateway.Newt -. "\`paper.ktbinternal.com\`" .-> DocArc
  Gateway.Newt -. "\`[...]\`" .-> MediaLib
  Gateway.Newt -. "\`raw TCP :18022\`" .-> GameServers
  Gateway.Newt -. "\`HTTP :18450\`" .-> FileExp
  Www -. "\`HTTPS :443, HTTP :80\`" .-> Gateway.Pangolin.Gerbil
  Gateway.Pangolin.Server -. "\`SMTP :465\`" .-> Email
  Gateway.Pangolin.Gerbil -. "\`WireGuard :51820\`" .-> Gateway.Newt
  Gateway.Pangolin.Traefik -. "\`solves ACME DNS-01\`" .-> Dns
  Gateway.Pangolin.Server -. "\`pushes remote config\`" .-> Gateway.Pangolin.Gerbil
  Gateway.Pangolin.Traefik -. "\`authorizes each request\`" .-> Gateway.Pangolin.Server
  Gateway.Pangolin.Gerbil -. "\`shares the network namespace\`" .-> Gateway.Pangolin.Traefik
  Gateway.Pangolin.Traefik -. "\`routes into the tunnel\`" .-> Gateway.Pangolin.Gerbil
`;case`idpDetail`:return`---
title: "Identity Provider"
---
graph TB
  OverlayNet@{ shape: rectangle, label: "Overlay Network" }
  Gateway@{ shape: rectangle, label: "Gateway" }
  DbBak@{ shape: rectangle, label: "Database Backup Coordinator" }
  Dashboard@{ shape: rectangle, label: "Dashboard" }
  subgraph Idp["\`Identity Provider\`"]
    subgraph Idp.Authentik["\`Authentik\`"]
      Idp.Authentik.Worker@{ shape: rectangle, label: "Worker" }
      Idp.Authentik.Server@{ shape: rectangle, label: "Server" }
      Idp.Authentik.Db@{ shape: disk, label: "Database" }
    end
  end
  OverlayNet -. "\`exposes on the tailnet\`" .-> Idp.Authentik.Db
  Gateway -. "\`authentik.ktbcloud.com\`" .-> Idp.Authentik.Server
  DbBak -.-> Idp.Authentik.Db
  Dashboard -. "\`authenticates users\`" .-> Idp.Authentik.Server
  Idp.Authentik.Server -. "\`[PostgreSQL]\`" .-> Idp.Authentik.Db
  Idp.Authentik.Worker -. "\`[PostgreSQL]\`" .-> Idp.Authentik.Db
`;case`secretsManDetail`:return`---
title: "Secrets Manager"
---
graph TB
  OverlayNet@{ shape: rectangle, label: "Overlay Network" }
  Gateway@{ shape: rectangle, label: "Gateway" }
  Idp@{ shape: rectangle, label: "Identity Provider" }
  ContainerOrc@{ shape: rectangle, label: "Container Orchestrator" }
  ConfigMgmt@{ shape: rectangle, label: "Configuration Management" }
  PriCodeForge@{ shape: rectangle, label: "Primary Code Forge" }
  Ci@{ shape: rectangle, label: "Continuous Integration" }
  AgentGw@{ shape: rectangle, label: "Agent Gateway" }
  DataBak@{ shape: rectangle, label: "Data Backup Coordinator" }
  DbBak@{ shape: rectangle, label: "Database Backup Coordinator" }
  Dashboard@{ shape: rectangle, label: "Dashboard" }
  SharedDb@{ shape: rectangle, label: "Shared Database" }
  PrjMan@{ shape: rectangle, label: "Project Manager" }
  Docsign@{ shape: rectangle, label: "Document Signing" }
  DocArc@{ shape: rectangle, label: "Document Archive" }
  Erp@{ shape: rectangle, label: "ERP" }
  Phovid@{ shape: rectangle, label: "Personal Photo Storage" }
  MediaLib@{ shape: rectangle, label: "Media Library" }
  subgraph SecretsMan["\`Secrets Manager\`"]
    subgraph SecretsMan.Infisical["\`Infisical\`"]
      SecretsMan.Infisical.Server@{ shape: rectangle, label: "Server" }
      SecretsMan.Infisical.Redis@{ shape: rectangle, label: "Cache" }
      SecretsMan.Infisical.Db@{ shape: disk, label: "Database" }
    end
  end
  Email@{ shape: rectangle, label: "Transactional Email" }
  OverlayNet -. "\`/tailscale/containers\`" .-> SecretsMan.Infisical.Server
  Gateway -. "\`[...]\`" .-> SecretsMan.Infisical.Server
  Idp -. "\`/authentik\`" .-> SecretsMan.Infisical.Server
  ContainerOrc -. "\`/komodo\`" .-> SecretsMan.Infisical.Server
  ConfigMgmt -. "\`[...]\`" .-> SecretsMan.Infisical.Server
  PriCodeForge -. "\`/forgejo\`" .-> SecretsMan.Infisical.Server
  Ci -. "\`/woodpecker\`" .-> SecretsMan.Infisical.Server
  AgentGw -. "\`/komodo-mcp\`" .-> SecretsMan.Infisical.Server
  DataBak -. "\`/zerobyte\`" .-> SecretsMan.Infisical.Server
  DbBak -. "\`/databasus\`" .-> SecretsMan.Infisical.Server
  DbBak -.-> SecretsMan.Infisical.Db
  Dashboard -. "\`/homarr\`" .-> SecretsMan.Infisical.Server
  SharedDb -. "\`/postgres\`" .-> SecretsMan.Infisical.Server
  PrjMan -. "\`/openproject\`" .-> SecretsMan.Infisical.Server
  Docsign -. "\`/docuseal\`" .-> SecretsMan.Infisical.Server
  DocArc -. "\`/paperless\`" .-> SecretsMan.Infisical.Server
  Erp -. "\`/\`" .-> SecretsMan.Infisical.Server
  Phovid -. "\`/immich\`" .-> SecretsMan.Infisical.Server
  MediaLib -. "\`/stream\`" .-> SecretsMan.Infisical.Server
  SecretsMan.Infisical.Server -. "\`SMTP :465\`" .-> Email
  SecretsMan.Infisical.Server -. "\`queues and caches\`" .-> SecretsMan.Infisical.Redis
  SecretsMan.Infisical.Server -. "\`[PostgreSQL]\`" .-> SecretsMan.Infisical.Db
`;case`containerOrcDetail`:return`---
title: "Container Orchestrator"
---
graph TB
  Gateway@{ shape: rectangle, label: "Gateway" }
  ConfigMgmt@{ shape: rectangle, label: "Configuration Management" }
  AgentGw@{ shape: rectangle, label: "Agent Gateway" }
  DataBak@{ shape: rectangle, label: "Data Backup Coordinator" }
  DbBak@{ shape: rectangle, label: "Database Backup Coordinator" }
  subgraph ContainerOrc["\`Container Orchestrator\`"]
    subgraph ContainerOrc.Komodo["\`Komodo\`"]
      ContainerOrc.Komodo.Core@{ shape: rectangle, label: "Core" }
      ContainerOrc.Komodo.Periphery@{ shape: rectangle, label: "Periphery" }
      ContainerOrc.Komodo.Db@{ shape: disk, label: "Database" }
      ContainerOrc.Komodo.Volumes@{ shape: disk, label: "Docker Volumes" }
    end
  end
  PriCodeForge@{ shape: rectangle, label: "Primary Code Forge" }
  Alerting@{ shape: rectangle, label: "Alerting" }
  Gateway -. "\`komo.ktbinternal.com\`" .-> ContainerOrc.Komodo.Core
  ConfigMgmt -. "\`bootstraps the control plane\`" .-> ContainerOrc.Komodo.Core
  ConfigMgmt -. "\`installs the periphery systemd unit\`" .-> ContainerOrc.Komodo.Periphery
  AgentGw -. "\`Komodo API\`" .-> ContainerOrc.Komodo.Core
  DataBak -.-> ContainerOrc.Komodo.Volumes
  DbBak -.-> ContainerOrc.Komodo.Db
  ContainerOrc.Komodo.Core -. "\`syncs stack definitions\`" .-> PriCodeForge
  ContainerOrc.Komodo.Core -. "\`sends alerts\`" .-> Alerting
  ContainerOrc.Komodo.Core -. "\`TLS :8120, pinned core public key\`" .-> ContainerOrc.Komodo.Periphery
  ContainerOrc.Komodo.Core -. "\`reads and writes\`" .-> ContainerOrc.Komodo.Db
  ContainerOrc.Komodo.Periphery -. "\`creates and manages\`" .-> ContainerOrc.Komodo.Volumes
`;case`forgeDetail`:return`---
title: "Primary Code Forge"
---
graph TB
  Gateway@{ shape: rectangle, label: "Gateway" }
  ContainerOrc@{ shape: rectangle, label: "Container Orchestrator" }
  Ci@{ shape: rectangle, label: "Continuous Integration" }
  DbBak@{ shape: rectangle, label: "Database Backup Coordinator" }
  subgraph PriCodeForge["\`Primary Code Forge\`"]
    subgraph PriCodeForge.Forgejo["\`Forgejo\`"]
      PriCodeForge.Forgejo.Server@{ shape: rectangle, label: "Server" }
      PriCodeForge.Forgejo.Db@{ shape: disk, label: "Database" }
    end
  end
  Gateway -. "\`fj.ktbcloud.com\`" .-> PriCodeForge.Forgejo.Server
  ContainerOrc -. "\`syncs stack definitions\`" .-> PriCodeForge.Forgejo.Server
  Ci -. "\`OAuth2 login and repository access\`" .-> PriCodeForge.Forgejo.Server
  DbBak -.-> PriCodeForge.Forgejo.Db
  PriCodeForge.Forgejo.Server -. "\`[PostgreSQL]\`" .-> PriCodeForge.Forgejo.Db
`;case`ciDetail`:return`---
title: "Continuous Integration"
---
graph TB
  Gateway@{ shape: rectangle, label: "Gateway" }
  subgraph Ci["\`Continuous Integration\`"]
    subgraph Ci.Woodpecker["\`Woodpecker\`"]
      Ci.Woodpecker.Agent@{ shape: rectangle, label: "Agent" }
      Ci.Woodpecker.Server@{ shape: rectangle, label: "Server" }
    end
  end
  PriCodeForge@{ shape: rectangle, label: "Primary Code Forge" }
  Gateway -. "\`peck.ktbcloud.com\`" .-> Ci.Woodpecker.Server
  Ci.Woodpecker.Server -. "\`OAuth2 login and repository access\`" .-> PriCodeForge
  Ci.Woodpecker.Agent -. "\`polls for work\`" .-> Ci.Woodpecker.Server
`;case`docArcDetail`:return`---
title: "Document Archive"
---
graph TB
  Gateway@{ shape: rectangle, label: "Gateway" }
  DbBak@{ shape: rectangle, label: "Database Backup Coordinator" }
  subgraph DocArc["\`Document Archive\`"]
    subgraph DocArc.Paperless["\`Paperless\`"]
      DocArc.Paperless.Server@{ shape: rectangle, label: "Server" }
      DocArc.Paperless.Broker@{ shape: rectangle, label: "Broker" }
      DocArc.Paperless.Gotenberg@{ shape: rectangle, label: "Document Converter" }
      DocArc.Paperless.Tika@{ shape: rectangle, label: "Content Extractor" }
      DocArc.Paperless.Db@{ shape: disk, label: "Database" }
    end
  end
  Gateway -. "\`paper.ktbinternal.com\`" .-> DocArc.Paperless.Server
  DbBak -.-> DocArc.Paperless.Db
  DocArc.Paperless.Server -. "\`queues tasks\`" .-> DocArc.Paperless.Broker
  DocArc.Paperless.Server -. "\`converts to PDF\`" .-> DocArc.Paperless.Gotenberg
  DocArc.Paperless.Server -. "\`extracts text\`" .-> DocArc.Paperless.Tika
  DocArc.Paperless.Server -. "\`[PostgreSQL]\`" .-> DocArc.Paperless.Db
`;case`phovidDetail`:return`---
title: "Personal Photo Storage"
---
graph TB
  DbBak@{ shape: rectangle, label: "Database Backup Coordinator" }
  subgraph Phovid["\`Personal Photo Storage\`"]
    subgraph Phovid.Immich["\`Immich\`"]
      Phovid.Immich.Server@{ shape: rectangle, label: "Server" }
      Phovid.Immich.MachineLearning@{ shape: rectangle, label: "Machine Learning" }
      Phovid.Immich.Redis@{ shape: rectangle, label: "Cache" }
      Phovid.Immich.Db@{ shape: disk, label: "Database" }
    end
  end
  DbBak -.-> Phovid.Immich.Db
  Phovid.Immich.Server -. "\`runs inference\`" .-> Phovid.Immich.MachineLearning
  Phovid.Immich.Server -. "\`queues jobs\`" .-> Phovid.Immich.Redis
  Phovid.Immich.Server -. "\`[PostgreSQL]\`" .-> Phovid.Immich.Db
`;case`mediaLibDetail`:return'---\ntitle: "Media Library"\n---\ngraph TB\n  Gateway@{ shape: rectangle, label: "Gateway" }\n  subgraph MediaLib["`Media Library`"]\n    MediaLib.Seerr@{ shape: rectangle, label: "Seerr" }\n    MediaLib.Prowlarr@{ shape: rectangle, label: "Prowlarr" }\n    MediaLib.Bazarr@{ shape: rectangle, label: "Bazarr" }\n    MediaLib.Sonarr@{ shape: rectangle, label: "Sonarr" }\n    MediaLib.Radarr@{ shape: rectangle, label: "Radarr" }\n    MediaLib.Sabnzbd@{ shape: rectangle, label: "SABnzbd" }\n    MediaLib.Plex@{ shape: rectangle, label: "Plex" }\n  end\n  Gateway -. "`seerr.ktbinternal.com`" .-> MediaLib.Seerr\n  Gateway -. "`sonarr.ktbinternal.com`" .-> MediaLib.Sonarr\n  Gateway -. "`radarr.ktbinternal.com`" .-> MediaLib.Radarr\n  Gateway -. "`prowlarr.ktbinternal.com`" .-> MediaLib.Prowlarr\n  Gateway -. "`bazarr.ktbinternal.com`" .-> MediaLib.Bazarr\n  Gateway -. "`sabnzbd.ktbinternal.com`" .-> MediaLib.Sabnzbd\n  MediaLib.Seerr -. "`requests series`" .-> MediaLib.Sonarr\n  MediaLib.Seerr -. "`requests films`" .-> MediaLib.Radarr\n  MediaLib.Sonarr -. "`queues downloads`" .-> MediaLib.Sabnzbd\n  MediaLib.Prowlarr -. "`feeds indexers`" .-> MediaLib.Sonarr\n  MediaLib.Bazarr -. "`reads the library`" .-> MediaLib.Sonarr\n  MediaLib.Radarr -. "`queues downloads`" .-> MediaLib.Sabnzbd\n  MediaLib.Prowlarr -. "`feeds indexers`" .-> MediaLib.Radarr\n  MediaLib.Bazarr -. "`reads the library`" .-> MediaLib.Radarr\n';case`flowRequest`:return'---\ntitle: "Serving an authenticated request"\n---\ngraph LR\n  Www@{ shape: horizontal-cylinder, label: "Public Internet" }\n  GatewayPangolinGerbil@{ shape: rectangle, label: "Gerbil" }\n  GatewayPangolinTraefik@{ shape: rectangle, label: "Traefik" }\n  GatewayPangolinServer@{ shape: rectangle, label: "Pangolin Server" }\n  GatewayNewt@{ shape: rectangle, label: "Newt" }\n  PrjManOpenproject@{ shape: rectangle, label: "OpenProject" }\n  SharedDbPostgresDb@{ shape: disk, label: "Database" }\n  Www -. "`GET openprj.ktbcloud.com`" .-> GatewayPangolinGerbil\n  GatewayPangolinGerbil -. "`forwards on the shared namespace`" .-> GatewayPangolinTraefik\n  GatewayPangolinTraefik -. "`badger: is this session allowed?`" .-> GatewayPangolinServer\n  GatewayPangolinServer -. "`allow`" .-> GatewayPangolinTraefik\n  GatewayPangolinTraefik -. "`routes into the tunnel`" .-> GatewayPangolinGerbil\n  GatewayPangolinGerbil -. "`WireGuard`" .-> GatewayNewt\n  GatewayNewt -. "`forwards to the local port`" .-> PrjManOpenproject\n  PrjManOpenproject -. "`query`" .-> SharedDbPostgresDb\n  SharedDbPostgresDb -. "`rows`" .-> PrjManOpenproject\n  PrjManOpenproject -. "`200 OK`" .-> GatewayNewt\n  GatewayNewt -. "`200 OK`" .-> GatewayPangolinGerbil\n  GatewayPangolinGerbil -. "`200 OK`" .-> GatewayPangolinTraefik\n  GatewayPangolinTraefik -. "`200 OK`" .-> Www\n';case`flowSecrets`:return`---
title: "How a stack gets its secrets"
---
graph LR
  ContainerOrcKomodoPeriphery@{ shape: rectangle, label: "Periphery" }
  DocsignDocuseal@{ shape: rectangle, label: "Docuseal" }
  SecretsManInfisicalServer@{ shape: rectangle, label: "Server" }
  SharedDbPostgresDb@{ shape: disk, label: "Database" }
  ContainerOrcKomodoPeriphery -. "\`docker compose up\`" .-> DocsignDocuseal
  DocsignDocuseal -. "\`machine identity login, then GET /docuseal\`" .-> SecretsManInfisicalServer
  SecretsManInfisicalServer -. "\`secret bundle\`" .-> DocsignDocuseal
  DocsignDocuseal -. "\`connects with the injected credentials\`" .-> SharedDbPostgresDb
`;case`flowDeploy`:return`---
title: "Deploying a stack"
---
graph LR
  Operator@{ icon: "fa:user", shape: rounded, label: "Operator" }
  ContainerOrcKomodoCore@{ shape: rectangle, label: "Core" }
  PriCodeForgeForgejoServer@{ shape: rectangle, label: "Server" }
  ContainerOrcKomodoPeriphery@{ shape: rectangle, label: "Periphery" }
  SecretsManInfisicalServer@{ shape: rectangle, label: "Server" }
  AlertingPushover@{ shape: rectangle, label: "Pushover" }
  Operator -. "\`git push\`" .-> PriCodeForgeForgejoServer
  ContainerOrcKomodoCore -. "\`syncs stack definitions\`" .-> PriCodeForgeForgejoServer
  ContainerOrcKomodoCore -. "\`deploy\`" .-> ContainerOrcKomodoPeriphery
  ContainerOrcKomodoPeriphery -. "\`provider fetches the bundle\`" .-> SecretsManInfisicalServer
  SecretsManInfisicalServer -. "\`secrets\`" .-> ContainerOrcKomodoPeriphery
  ContainerOrcKomodoPeriphery -. "\`result\`" .-> ContainerOrcKomodoCore
  ContainerOrcKomodoCore -. "\`alerts on failure\`" .-> AlertingPushover
`;case`fleet`:return`---
title: "Fleet"
---
graph LR
  subgraph Prod["\`Production\`"]
    subgraph Prod.Hetzner["\`Hetzner\`"]
      subgraph Prod.Hetzner.Maboi["\`maboi\`"]
        Prod.Hetzner.Maboi.Newt@{ shape: rectangle, label: "Newt" }
        Prod.Hetzner.Maboi.Periphery@{ shape: rectangle, label: "Periphery" }
        Prod.Hetzner.Maboi.TsAgent@{ shape: rectangle, label: "Tailscale Agent" }
      end
    end
    subgraph Prod.Vultr["\`Vultr\`"]
      subgraph Prod.Vultr.Rick["\`rick\`"]
        Prod.Vultr.Rick.Pangolin@{ shape: rectangle, label: "Pangolin" }
        Prod.Vultr.Rick.Homarr@{ shape: rectangle, label: "Homarr" }
        Prod.Vultr.Rick.Databasus@{ shape: rectangle, label: "Databasus" }
        Prod.Vultr.Rick.TsAgent@{ shape: rectangle, label: "Tailscale Agent" }
        Prod.Vultr.Rick.Zerobyte@{ shape: rectangle, label: "Zerobyte" }
        Prod.Vultr.Rick.Newt@{ shape: rectangle, label: "Newt" }
        Prod.Vultr.Rick.Authentik@{ shape: rectangle, label: "Authentik" }
        Prod.Vultr.Rick.Core@{ shape: rectangle, label: "Core" }
        Prod.Vultr.Rick.Periphery@{ shape: rectangle, label: "Periphery" }
        Prod.Vultr.Rick.Infisical@{ shape: rectangle, label: "Infisical" }
      end
    end
    subgraph Prod.Homelab["\`Home Lab\`"]
      subgraph Prod.Homelab.Biggy["\`biggy\`"]
        Prod.Homelab.Biggy.Newt@{ shape: rectangle, label: "Newt" }
        Prod.Homelab.Biggy.Terraria@{ shape: rectangle, label: "Terraria" }
        Prod.Homelab.Biggy.Periphery@{ shape: rectangle, label: "Periphery" }
        Prod.Homelab.Biggy.TsAgent@{ shape: rectangle, label: "Tailscale Agent" }
        Prod.Homelab.Biggy.Fbq@{ shape: rectangle, label: "File Browser Quantum" }
      end
      Prod.Homelab.Nas@{ shape: disk, label: "snaszy" }
      subgraph Prod.Homelab.Littlebuddy["\`littlebuddy\`"]
        Prod.Homelab.Littlebuddy.Periphery@{ shape: rectangle, label: "Periphery" }
        Prod.Homelab.Littlebuddy.TsAgent@{ shape: rectangle, label: "Tailscale Agent" }
        Prod.Homelab.Littlebuddy.Newt@{ shape: rectangle, label: "Newt" }
        Prod.Homelab.Littlebuddy.Woodpecker@{ shape: rectangle, label: "Woodpecker" }
        Prod.Homelab.Littlebuddy.KomodoMcp@{ shape: rectangle, label: "Komodo MCP" }
        Prod.Homelab.Littlebuddy.Openproject@{ shape: rectangle, label: "OpenProject" }
        Prod.Homelab.Littlebuddy.Docuseal@{ shape: rectangle, label: "Docuseal" }
        Prod.Homelab.Littlebuddy.Paperless@{ shape: rectangle, label: "Paperless" }
        Prod.Homelab.Littlebuddy.Forgejo@{ shape: rectangle, label: "Forgejo" }
        Prod.Homelab.Littlebuddy.Postgres@{ shape: rectangle, label: "PostgreSQL" }
      end
      subgraph Prod.Homelab.Bill["\`bill\`"]
        Prod.Homelab.Bill.Newt@{ shape: rectangle, label: "Newt" }
        Prod.Homelab.Bill.Periphery@{ shape: rectangle, label: "Periphery" }
        Prod.Homelab.Bill.TsAgent@{ shape: rectangle, label: "Tailscale Agent" }
        Prod.Homelab.Bill.Erpnext@{ shape: rectangle, label: "ERPNext" }
      end
      subgraph Prod.Homelab.Paiki["\`paiki\`"]
        Prod.Homelab.Paiki.Newt@{ shape: rectangle, label: "Newt" }
        Prod.Homelab.Paiki.MediaLib@{ shape: rectangle, label: "Media Library" }
        Prod.Homelab.Paiki.Immich@{ shape: rectangle, label: "Immich" }
        Prod.Homelab.Paiki.Periphery@{ shape: rectangle, label: "Periphery" }
        Prod.Homelab.Paiki.TsAgent@{ shape: rectangle, label: "Tailscale Agent" }
      end
    end
  end
  Prod.Vultr.Rick.Pangolin -. "\`WireGuard :51820\`" .-> Prod.Vultr.Rick.Newt
  Prod.Vultr.Rick.Homarr -. "\`authenticates users\`" .-> Prod.Vultr.Rick.Authentik
  Prod.Vultr.Rick.Databasus -.-> Prod.Vultr.Rick.Authentik
  Prod.Vultr.Rick.Newt -. "\`authentik.ktbcloud.com\`" .-> Prod.Vultr.Rick.Authentik
  Prod.Vultr.Rick.TsAgent -. "\`exposes on the tailnet\`" .-> Prod.Vultr.Rick.Authentik
  Prod.Vultr.Rick.Databasus -.-> Prod.Vultr.Rick.Infisical
  Prod.Vultr.Rick.Newt -. "\`infisical.ktbinternal.com\`" .-> Prod.Vultr.Rick.Infisical
  Prod.Vultr.Rick.TsAgent -. "\`exposes on the tailnet\`" .-> Prod.Vultr.Rick.Infisical
  Prod.Vultr.Rick.Newt -. "\`komo.ktbinternal.com\`" .-> Prod.Vultr.Rick.Core
  Prod.Vultr.Rick.Core -. "\`TLS :8120, pinned core public key\`" .-> Prod.Vultr.Rick.Periphery
  Prod.Vultr.Rick.Databasus -.-> Prod.Homelab.Littlebuddy.Postgres
  Prod.Vultr.Rick.Databasus -.-> Prod.Homelab.Littlebuddy.Forgejo
  Prod.Vultr.Rick.Databasus -.-> Prod.Homelab.Littlebuddy.Paperless
  Prod.Vultr.Rick.Core -. "\`syncs stack definitions\`" .-> Prod.Homelab.Littlebuddy.Forgejo
  Prod.Homelab.Littlebuddy.Openproject -. "\`[PostgreSQL]\`" .-> Prod.Homelab.Littlebuddy.Postgres
  Prod.Homelab.Littlebuddy.Docuseal -. "\`[PostgreSQL]\`" .-> Prod.Homelab.Littlebuddy.Postgres
  Prod.Homelab.Littlebuddy.Woodpecker -. "\`OAuth2 login and repository access\`" .-> Prod.Homelab.Littlebuddy.Forgejo
  Prod.Homelab.Littlebuddy.Newt -. "\`fj.ktbcloud.com\`" .-> Prod.Homelab.Littlebuddy.Forgejo
  Prod.Homelab.Littlebuddy.Newt -. "\`peck.ktbcloud.com\`" .-> Prod.Homelab.Littlebuddy.Woodpecker
  Prod.Homelab.Littlebuddy.Newt -. "\`komodo-mcp.ktbinternal.com\`" .-> Prod.Homelab.Littlebuddy.KomodoMcp
  Prod.Homelab.Littlebuddy.Newt -. "\`openprj.ktbcloud.com\`" .-> Prod.Homelab.Littlebuddy.Openproject
  Prod.Homelab.Littlebuddy.Newt -. "\`docuseal.ktbcloud.com\`" .-> Prod.Homelab.Littlebuddy.Docuseal
  Prod.Homelab.Littlebuddy.Newt -. "\`paper.ktbinternal.com\`" .-> Prod.Homelab.Littlebuddy.Paperless
  Prod.Homelab.Littlebuddy.KomodoMcp -. "\`Komodo API\`" .-> Prod.Vultr.Rick.Core
  Prod.Homelab.Biggy.Terraria -. "\`stores its world\`" .-> Prod.Homelab.Biggy.Fbq
  Prod.Homelab.Biggy.Newt -. "\`HTTP :18450\`" .-> Prod.Homelab.Biggy.Fbq
  Prod.Homelab.Biggy.Newt -. "\`raw TCP :18022\`" .-> Prod.Homelab.Biggy.Terraria
  Prod.Vultr.Rick.Databasus -.-> Prod.Homelab.Bill.Erpnext
  Prod.Vultr.Rick.Databasus -.-> Prod.Homelab.Paiki.Immich
  Prod.Homelab.Paiki.Newt -. "\`[...]\`" .-> Prod.Homelab.Paiki.MediaLib
  Prod.Homelab.Paiki.MediaLib -. "\`/stream\`" .-> Prod.Vultr.Rick.Infisical
`;case`controlplane`:return`---
title: "Control Plane"
---
graph TB
  subgraph ProdVultrRick["\`rick\`"]
    ProdVultrRick.Pangolin@{ shape: rectangle, label: "Pangolin" }
    ProdVultrRick.Homarr@{ shape: rectangle, label: "Homarr" }
    ProdVultrRick.Databasus@{ shape: rectangle, label: "Databasus" }
    ProdVultrRick.TsAgent@{ shape: rectangle, label: "Tailscale Agent" }
    ProdVultrRick.Newt@{ shape: rectangle, label: "Newt" }
    ProdVultrRick.Authentik@{ shape: rectangle, label: "Authentik" }
    ProdVultrRick.Infisical@{ shape: rectangle, label: "Infisical" }
    ProdVultrRick.Core@{ shape: rectangle, label: "Core" }
    ProdVultrRick.Periphery@{ shape: rectangle, label: "Periphery" }
    ProdVultrRick.Zerobyte@{ shape: rectangle, label: "Zerobyte" }
  end
  ProdVultrRick.Pangolin -. "\`WireGuard :51820\`" .-> ProdVultrRick.Newt
  ProdVultrRick.Homarr -. "\`authenticates users\`" .-> ProdVultrRick.Authentik
  ProdVultrRick.Databasus -.-> ProdVultrRick.Authentik
  ProdVultrRick.Newt -. "\`authentik.ktbcloud.com\`" .-> ProdVultrRick.Authentik
  ProdVultrRick.TsAgent -. "\`exposes on the tailnet\`" .-> ProdVultrRick.Authentik
  ProdVultrRick.Databasus -.-> ProdVultrRick.Infisical
  ProdVultrRick.Newt -. "\`infisical.ktbinternal.com\`" .-> ProdVultrRick.Infisical
  ProdVultrRick.TsAgent -. "\`exposes on the tailnet\`" .-> ProdVultrRick.Infisical
  ProdVultrRick.Newt -. "\`komo.ktbinternal.com\`" .-> ProdVultrRick.Core
  ProdVultrRick.Core -. "\`TLS :8120, pinned core public key\`" .-> ProdVultrRick.Periphery
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};