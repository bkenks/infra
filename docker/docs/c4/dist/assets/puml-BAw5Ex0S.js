var e=e=>{switch(e){case`index`:return`@startuml
title "Landscape"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Operator>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<Household>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Dashboard>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ConfigMgmt>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam queue<<Www>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<OverlayNet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SecCodeForge>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PasswdMan>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<DataBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<DbBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Erp>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Phovid>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Dns>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Idp>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Ci>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<AgentGw>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SecretsMan>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PrjMan>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Docsign>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<DocArc>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<MediaLib>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<GameServers>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<ContainerOrc>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Email>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SharedDb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<FileExp>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<PriCodeForge>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Alerting>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Operator\\n\\nAdministers the fleet through Komodo, Ansible and the forges." <<Operator>> as Operator
person "==Household Users\\n\\nConsumes the media, document and photo workloads." <<Household>> as Household
rectangle "==Dashboard" <<Dashboard>> as Dashboard
rectangle "==Configuration Management" <<ConfigMgmt>> as ConfigMgmt
queue "==Public Internet" <<Www>> as Www
rectangle "==Overlay Network\\n\\nFlat addressing across every host, wherever it sits." <<OverlayNet>> as OverlayNet
rectangle "==Secondary Code Forge" <<SecCodeForge>> as SecCodeForge
rectangle "==Password Manager" <<PasswdMan>> as PasswdMan
rectangle "==Data Backup Coordinator" <<DataBak>> as DataBak
rectangle "==Database Backup Coordinator" <<DbBak>> as DbBak
rectangle "==Gateway\\n\\nOne public entry point for every published route." <<Gateway>> as Gateway
rectangle "==ERP" <<Erp>> as Erp
rectangle "==Personal Photo Storage" <<Phovid>> as Phovid
rectangle "==DNS and Certificates" <<Dns>> as Dns
rectangle "==Identity Provider" <<Idp>> as Idp
rectangle "==Continuous Integration" <<Ci>> as Ci
rectangle "==Agent Gateway" <<AgentGw>> as AgentGw
rectangle "==Secrets Manager" <<SecretsMan>> as SecretsMan
rectangle "==Project Manager" <<PrjMan>> as PrjMan
rectangle "==Document Signing" <<Docsign>> as Docsign
rectangle "==Document Archive" <<DocArc>> as DocArc
rectangle "==Media Library\\n\\nSeven products in one stack. Each is its own application." <<MediaLib>> as MediaLib
rectangle "==Game Servers" <<GameServers>> as GameServers
rectangle "==Container Orchestrator" <<ContainerOrc>> as ContainerOrc
rectangle "==Transactional Email" <<Email>> as Email
rectangle "==Shared Database\\n\\nOne Postgres for the tenants that do not need their own." <<SharedDb>> as SharedDb
rectangle "==File Explorer" <<FileExp>> as FileExp
rectangle "==Primary Code Forge" <<PriCodeForge>> as PriCodeForge
rectangle "==Alerting" <<Alerting>> as Alerting

Operator .[#8D8D8D,thickness=2].> Www : <color:#8D8D8D>browses
Operator .[#8D8D8D,thickness=2].> ConfigMgmt : <color:#8D8D8D>runs playbooks
Household .[#8D8D8D,thickness=2].> Www : <color:#8D8D8D>browses
Www .[#8D8D8D,thickness=2].> Gateway : <color:#8D8D8D>HTTPS :443, HTTP :80\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
OverlayNet .[#0ea5e9,thickness=2].> Idp : <color:#0ea5e9>exposes on the tailnet\\n<size:8>[<color:#0ea5e9>shared__ts-gateway]</size>
OverlayNet .[#0ea5e9,thickness=2].> SecretsMan : <color:#0ea5e9>exposes on the tailnet\\n<size:8>[<color:#0ea5e9>shared__ts-gateway]</size>
ConfigMgmt .[#15803d,thickness=2].> OverlayNet : <color:#15803d>enrols the host in the tailnet
Gateway .[#8D8D8D,thickness=2].> Dns : <color:#8D8D8D>solves ACME DNS-01\\n<size:8>[<color:#8D8D8D>ACME]</size>
Gateway .[#8D8D8D,thickness=2].> Idp : <color:#8D8D8D>authentik.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> ContainerOrc : <color:#8D8D8D>komo.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> PriCodeForge : <color:#8D8D8D>fj.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> Ci : <color:#8D8D8D>peck.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> AgentGw : <color:#8D8D8D>komodo-mcp.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> SecretsMan : <color:#8D8D8D>infisical.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> Email : <color:#8D8D8D>SMTP :465
Gateway .[#8D8D8D,thickness=2].> PrjMan : <color:#8D8D8D>openprj.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> Docsign : <color:#8D8D8D>docuseal.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> DocArc : <color:#8D8D8D>paper.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> MediaLib : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> GameServers : <color:#8D8D8D>raw TCP :18022\\n<size:8>[<color:#8D8D8D>TCP]</size>
Gateway .[#8D8D8D,thickness=2].> FileExp : <color:#8D8D8D>HTTP :18450\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ConfigMgmt .[#15803d,thickness=2].> Gateway : <color:#15803d>installs the newt systemd unit
DbBak .[#b45309,thickness=2].> Idp
Dashboard .[#0ea5e9,thickness=2].> Idp : <color:#0ea5e9>authenticates users\\n<size:8>[<color:#0ea5e9>OIDC]</size>
ContainerOrc .[#8D8D8D,thickness=2].> PriCodeForge : <color:#8D8D8D>syncs stack definitions
ContainerOrc .[#8D8D8D,thickness=2].> Alerting : <color:#8D8D8D>sends alerts
ConfigMgmt .[#15803d,thickness=2].> ContainerOrc : <color:#15803d>[...]
AgentGw .[#8D8D8D,thickness=2].> ContainerOrc : <color:#8D8D8D>Komodo API
DataBak .[#b45309,thickness=2].> ContainerOrc
DbBak .[#b45309,thickness=2].> ContainerOrc
ConfigMgmt .[#8D8D8D,thickness=2].> SecCodeForge : <color:#8D8D8D>clones infra.stacks\\n<size:8>[<color:#8D8D8D>SSH]</size>
ConfigMgmt .[#15803d,thickness=2].> SecretsMan : <color:#15803d>bootstraps the control plane
ConfigMgmt .[#8D8D8D,thickness=2].> PasswdMan : <color:#8D8D8D>reads machine identities and the tailnet auth key
ConfigMgmt .[#15803d,thickness=2].> DataBak : <color:#15803d>restore gate
ConfigMgmt .[#15803d,thickness=2].> DbBak : <color:#15803d>restore gate
Ci .[#0ea5e9,thickness=2].> PriCodeForge : <color:#0ea5e9>OAuth2 login and repository access\\n<size:8>[<color:#0ea5e9>OIDC]</size>
DbBak .[#b45309,thickness=2].> PriCodeForge
SecretsMan .[#8D8D8D,thickness=2].> Email : <color:#8D8D8D>SMTP :465
DbBak .[#b45309,thickness=2].> SecretsMan
DbBak .[#b45309,thickness=2].> SharedDb
DbBak .[#b45309,thickness=2].> DocArc
DbBak .[#b45309,thickness=2].> Erp
DbBak .[#b45309,thickness=2].> Phovid
PrjMan .[#8D8D8D,thickness=2].> SharedDb : <color:#8D8D8D>[PostgreSQL]
Docsign .[#8D8D8D,thickness=2].> SharedDb : <color:#8D8D8D>[PostgreSQL]
GameServers .[#8D8D8D,thickness=2].> FileExp : <color:#8D8D8D>stores its world
@enduml
`;case`secrets`:return`@startuml
title "Secret Distribution"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<OverlayNet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Idp>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<ContainerOrc>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ConfigMgmt>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PriCodeForge>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Ci>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<AgentGw>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<DataBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<DbBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Dashboard>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SharedDb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PrjMan>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Docsign>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<DocArc>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Erp>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Phovid>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<MediaLib>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<SecretsManInfisical>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Overlay Network\\n\\nFlat addressing across every host, wherever it sits." <<OverlayNet>> as OverlayNet
rectangle "==Gateway\\n\\nOne public entry point for every published route." <<Gateway>> as Gateway
rectangle "==Identity Provider" <<Idp>> as Idp
rectangle "==Container Orchestrator" <<ContainerOrc>> as ContainerOrc
rectangle "==Configuration Management" <<ConfigMgmt>> as ConfigMgmt
rectangle "==Primary Code Forge" <<PriCodeForge>> as PriCodeForge
rectangle "==Continuous Integration" <<Ci>> as Ci
rectangle "==Agent Gateway" <<AgentGw>> as AgentGw
rectangle "==Data Backup Coordinator" <<DataBak>> as DataBak
rectangle "==Database Backup Coordinator" <<DbBak>> as DbBak
rectangle "==Dashboard" <<Dashboard>> as Dashboard
rectangle "==Shared Database\\n\\nOne Postgres for the tenants that do not need their own." <<SharedDb>> as SharedDb
rectangle "==Project Manager" <<PrjMan>> as PrjMan
rectangle "==Document Signing" <<Docsign>> as Docsign
rectangle "==Document Archive" <<DocArc>> as DocArc
rectangle "==ERP" <<Erp>> as Erp
rectangle "==Personal Photo Storage" <<Phovid>> as Phovid
rectangle "==Media Library\\n\\nSeven products in one stack. Each is its own application." <<MediaLib>> as MediaLib
rectangle "Secrets Manager" <<SecretsMan>> as SecretsMan {
  skinparam RectangleBorderColor<<SecretsMan>> #64748b
  skinparam RectangleFontColor<<SecretsMan>> #64748b
  skinparam RectangleBorderStyle<<SecretsMan>> dashed

  rectangle "==Infisical" <<SecretsManInfisical>> as SecretsManInfisical
}

OverlayNet .[#8D8D8D,thickness=2].> SecretsManInfisical : <color:#8D8D8D>[...]
Gateway .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>[...]
Idp .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/authentik\\n<size:8>[<color:#64748b>Infisical]</size>
ContainerOrc .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/komodo\\n<size:8>[<color:#64748b>Infisical]</size>
ConfigMgmt .[#8D8D8D,thickness=2].> SecretsManInfisical : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>Infisical]</size>
PriCodeForge .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/forgejo\\n<size:8>[<color:#64748b>Infisical]</size>
Ci .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/woodpecker\\n<size:8>[<color:#64748b>Infisical]</size>
AgentGw .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/komodo-mcp\\n<size:8>[<color:#64748b>Infisical]</size>
DataBak .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/zerobyte\\n<size:8>[<color:#64748b>Infisical]</size>
DbBak .[#8D8D8D,thickness=2].> SecretsManInfisical : <color:#8D8D8D>/databasus\\n<size:8>[<color:#8D8D8D>Infisical]</size>
Dashboard .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/homarr\\n<size:8>[<color:#64748b>Infisical]</size>
SharedDb .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/postgres\\n<size:8>[<color:#64748b>Infisical]</size>
PrjMan .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/openproject\\n<size:8>[<color:#64748b>Infisical]</size>
Docsign .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/docuseal\\n<size:8>[<color:#64748b>Infisical]</size>
DocArc .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/paperless\\n<size:8>[<color:#64748b>Infisical]</size>
Erp .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/\\n<size:8>[<color:#64748b>Infisical]</size>
Phovid .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/immich\\n<size:8>[<color:#64748b>Infisical]</size>
MediaLib .[#64748b,thickness=2].> SecretsManInfisical : <color:#64748b>/stream\\n<size:8>[<color:#64748b>Infisical]</size>
@enduml
`;case`ingress`:return`@startuml
title "Ingress Path"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Operator>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<Household>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam queue<<Www>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<GatewayPangolinTraefik>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<GatewayPangolinServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<GatewayPangolinGerbil>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DnsCloudflare>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<GatewayNewt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==Operator\\n\\nAdministers the fleet through Komodo, Ansible and the forges." <<Operator>> as Operator
person "==Household Users\\n\\nConsumes the media, document and photo workloads." <<Household>> as Household
queue "==Public Internet" <<Www>> as Www
rectangle "Gateway" <<Gateway>> as Gateway {
  skinparam RectangleBorderColor<<Gateway>> #428a4f
  skinparam RectangleFontColor<<Gateway>> #428a4f
  skinparam RectangleBorderStyle<<Gateway>> dashed

  rectangle "Pangolin" <<GatewayPangolin>> as GatewayPangolin {
    skinparam RectangleBorderColor<<GatewayPangolin>> #3b82f6
    skinparam RectangleFontColor<<GatewayPangolin>> #3b82f6
    skinparam RectangleBorderStyle<<GatewayPangolin>> dashed

    component "==Traefik\\n\\nReverse proxy. network_mode: service:gerbil." <<GatewayPangolinTraefik>> as GatewayPangolinTraefik
    component "==Pangolin Server" <<GatewayPangolinServer>> as GatewayPangolinServer
    component "==Gerbil\\n<size:10>[Wireguard]</size>\\n\\nOwns the host ports. Traefik runs in its network namespace." <<GatewayPangolinGerbil>> as GatewayPangolinGerbil
  }
  rectangle "==Newt\\n<size:10>[Wireguard]</size>\\n\\nSite connector, installed per host as a systemd unit by infra.ansible." <<GatewayNewt>> as GatewayNewt
}
rectangle "DNS and Certificates" <<Dns>> as Dns {
  skinparam RectangleBorderColor<<Dns>> #64748b
  skinparam RectangleFontColor<<Dns>> #64748b
  skinparam RectangleBorderStyle<<Dns>> dashed

  rectangle "==Cloudflare\\n\\nAuthoritative DNS, and the ACME DNS-01 provider Traefik solves against." <<DnsCloudflare>> as DnsCloudflare
}

Operator .[#8D8D8D,thickness=2].> Www : <color:#8D8D8D>browses
Household .[#8D8D8D,thickness=2].> Www : <color:#8D8D8D>browses
Www .[#8D8D8D,thickness=2].> GatewayPangolinGerbil : <color:#8D8D8D>HTTPS :443, HTTP :80\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayPangolinGerbil .[#0ea5e9,thickness=2].> GatewayNewt : <color:#0ea5e9>WireGuard :51820\\n<size:8>[<color:#0ea5e9>WireGuard]</size>
GatewayPangolinServer .[#8D8D8D,thickness=2].> GatewayPangolinGerbil : <color:#8D8D8D>pushes remote config\\n<size:8>[<color:#8D8D8D>HTTP :3001]</size>
GatewayPangolinTraefik .[#8D8D8D,thickness=2].> GatewayPangolinServer : <color:#8D8D8D>authorizes each request\\n<size:8>[<color:#8D8D8D>Badger middleware]</size>
GatewayPangolinGerbil .[#8D8D8D,thickness=2].> GatewayPangolinTraefik : <color:#8D8D8D>shares the network namespace\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayPangolinTraefik .[#8D8D8D,thickness=2].> GatewayPangolinGerbil : <color:#8D8D8D>routes into the tunnel\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayPangolinTraefik .[#8D8D8D,thickness=2].> DnsCloudflare : <color:#8D8D8D>solves ACME DNS-01\\n<size:8>[<color:#8D8D8D>ACME]</size>
@enduml
`;case`identity`:return`@startuml
title "Identity"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Dashboard>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ContainerOrc>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<CiWoodpeckerAgent>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<IdpAuthentikWorker>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<IdpAuthentikServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<CiWoodpeckerServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<IdpAuthentikDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam component<<PriCodeForgeForgejoServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "==Gateway\\n\\nOne public entry point for every published route." <<Gateway>> as Gateway
rectangle "==Dashboard" <<Dashboard>> as Dashboard
rectangle "==Container Orchestrator" <<ContainerOrc>> as ContainerOrc
rectangle "Continuous Integration" <<Ci>> as Ci {
  skinparam RectangleBorderColor<<Ci>> #428a4f
  skinparam RectangleFontColor<<Ci>> #428a4f
  skinparam RectangleBorderStyle<<Ci>> dashed

  rectangle "Woodpecker" <<CiWoodpecker>> as CiWoodpecker {
    skinparam RectangleBorderColor<<CiWoodpecker>> #3b82f6
    skinparam RectangleFontColor<<CiWoodpecker>> #3b82f6
    skinparam RectangleBorderStyle<<CiWoodpecker>> dashed

    component "==Agent\\n\\nRuns pipeline steps as sibling containers on the host docker daemon." <<CiWoodpeckerAgent>> as CiWoodpeckerAgent
    component "==Server" <<CiWoodpeckerServer>> as CiWoodpeckerServer
  }
}
rectangle "Identity Provider" <<Idp>> as Idp {
  skinparam RectangleBorderColor<<Idp>> #428a4f
  skinparam RectangleFontColor<<Idp>> #428a4f
  skinparam RectangleBorderStyle<<Idp>> dashed

  rectangle "Authentik" <<IdpAuthentik>> as IdpAuthentik {
    skinparam RectangleBorderColor<<IdpAuthentik>> #3b82f6
    skinparam RectangleFontColor<<IdpAuthentik>> #3b82f6
    skinparam RectangleBorderStyle<<IdpAuthentik>> dashed

    component "==Worker" <<IdpAuthentikWorker>> as IdpAuthentikWorker
    component "==Server" <<IdpAuthentikServer>> as IdpAuthentikServer
    database "==Database\\n<size:10>[PostgreSQL]</size>" <<IdpAuthentikDb>> as IdpAuthentikDb
  }
}
component "==Server" <<PriCodeForgeForgejoServer>> as PriCodeForgeForgejoServer

IdpAuthentikServer .[#8D8D8D,thickness=2].> IdpAuthentikDb : <color:#8D8D8D>[PostgreSQL]
IdpAuthentikWorker .[#8D8D8D,thickness=2].> IdpAuthentikDb : <color:#8D8D8D>[PostgreSQL]
Gateway .[#8D8D8D,thickness=2].> IdpAuthentikServer : <color:#8D8D8D>authentik.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Dashboard .[#0ea5e9,thickness=2].> IdpAuthentikServer : <color:#0ea5e9>authenticates users\\n<size:8>[<color:#0ea5e9>OIDC]</size>
Gateway .[#8D8D8D,thickness=2].> CiWoodpeckerServer : <color:#8D8D8D>peck.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
CiWoodpeckerAgent .[#8D8D8D,thickness=2].> CiWoodpeckerServer : <color:#8D8D8D>polls for work\\n<size:8>[<color:#8D8D8D>gRPC :9000]</size>
Gateway .[#8D8D8D,thickness=2].> PriCodeForgeForgejoServer : <color:#8D8D8D>fj.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
CiWoodpeckerServer .[#0ea5e9,thickness=2].> PriCodeForgeForgejoServer : <color:#0ea5e9>OAuth2 login and repository access\\n<size:8>[<color:#0ea5e9>OIDC]</size>
ContainerOrc .[#8D8D8D,thickness=2].> PriCodeForgeForgejoServer : <color:#8D8D8D>syncs stack definitions
@enduml
`;case`state`:return`@startuml
title "State and Backup"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam database<<FileExpFbqShared>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<DbBakDatabasus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<DataBakZerobyte>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<IdpAuthentikDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<PriCodeForgeForgejoDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<SecretsManInfisicalDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<SharedDbPostgresDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<DocArcPaperlessDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<ErpErpnextDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<PhovidImmichDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<ContainerOrcKomodoDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<ContainerOrcKomodoVolumes>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
database "==Shared File Tree\\n<size:10>[Filesystem]</size>\\n\\n/rootless-srv/file-browser-quantum/shared" <<FileExpFbqShared>> as FileExpFbqShared
rectangle "Database Backup Coordinator" <<DbBak>> as DbBak {
  skinparam RectangleBorderColor<<DbBak>> #64748b
  skinparam RectangleFontColor<<DbBak>> #64748b
  skinparam RectangleBorderStyle<<DbBak>> dashed

  rectangle "==Databasus" <<DbBakDatabasus>> as DbBakDatabasus
}
rectangle "Data Backup Coordinator" <<DataBak>> as DataBak {
  skinparam RectangleBorderColor<<DataBak>> #64748b
  skinparam RectangleFontColor<<DataBak>> #64748b
  skinparam RectangleBorderStyle<<DataBak>> dashed

  rectangle "==Zerobyte\\n<size:10>[Restic]</size>" <<DataBakZerobyte>> as DataBakZerobyte
}
rectangle "Identity Provider" <<Idp>> as Idp {
  skinparam RectangleBorderColor<<Idp>> #428a4f
  skinparam RectangleFontColor<<Idp>> #428a4f
  skinparam RectangleBorderStyle<<Idp>> dashed

  database "==Database\\n<size:10>[PostgreSQL]</size>" <<IdpAuthentikDb>> as IdpAuthentikDb
}
rectangle "Primary Code Forge" <<PriCodeForge>> as PriCodeForge {
  skinparam RectangleBorderColor<<PriCodeForge>> #428a4f
  skinparam RectangleFontColor<<PriCodeForge>> #428a4f
  skinparam RectangleBorderStyle<<PriCodeForge>> dashed

  database "==Database\\n<size:10>[PostgreSQL]</size>" <<PriCodeForgeForgejoDb>> as PriCodeForgeForgejoDb
}
rectangle "Secrets Manager" <<SecretsMan>> as SecretsMan {
  skinparam RectangleBorderColor<<SecretsMan>> #64748b
  skinparam RectangleFontColor<<SecretsMan>> #64748b
  skinparam RectangleBorderStyle<<SecretsMan>> dashed

  database "==Database\\n<size:10>[PostgreSQL]</size>" <<SecretsManInfisicalDb>> as SecretsManInfisicalDb
}
rectangle "Shared Database" <<SharedDb>> as SharedDb {
  skinparam RectangleBorderColor<<SharedDb>> #64748b
  skinparam RectangleFontColor<<SharedDb>> #64748b
  skinparam RectangleBorderStyle<<SharedDb>> dashed

  database "==Database" <<SharedDbPostgresDb>> as SharedDbPostgresDb
}
rectangle "Document Archive" <<DocArc>> as DocArc {
  skinparam RectangleBorderColor<<DocArc>> #6366f1
  skinparam RectangleFontColor<<DocArc>> #6366f1
  skinparam RectangleBorderStyle<<DocArc>> dashed

  database "==Database\\n<size:10>[PostgreSQL]</size>" <<DocArcPaperlessDb>> as DocArcPaperlessDb
}
rectangle "ERP" <<Erp>> as Erp {
  skinparam RectangleBorderColor<<Erp>> #6366f1
  skinparam RectangleFontColor<<Erp>> #6366f1
  skinparam RectangleBorderStyle<<Erp>> dashed

  database "==Database\\n<size:10>[MariaDB]</size>" <<ErpErpnextDb>> as ErpErpnextDb
}
rectangle "Personal Photo Storage" <<Phovid>> as Phovid {
  skinparam RectangleBorderColor<<Phovid>> #6366f1
  skinparam RectangleFontColor<<Phovid>> #6366f1
  skinparam RectangleBorderStyle<<Phovid>> dashed

  database "==Database\\n<size:10>[PostgreSQL]</size>" <<PhovidImmichDb>> as PhovidImmichDb
}
rectangle "Container Orchestrator" <<ContainerOrc>> as ContainerOrc {
  skinparam RectangleBorderColor<<ContainerOrc>> #64748b
  skinparam RectangleFontColor<<ContainerOrc>> #64748b
  skinparam RectangleBorderStyle<<ContainerOrc>> dashed

  database "==Database\\n<size:10>[MongoDB]</size>" <<ContainerOrcKomodoDb>> as ContainerOrcKomodoDb
  database "==Docker Volumes\\n<size:10>[Filesystem]</size>\\n\\n/var/lib/docker/volumes on every managed node." <<ContainerOrcKomodoVolumes>> as ContainerOrcKomodoVolumes
}

DbBakDatabasus .[#b45309,thickness=2].> IdpAuthentikDb
DbBakDatabasus .[#b45309,thickness=2].> ContainerOrcKomodoDb
DbBakDatabasus .[#b45309,thickness=2].> PriCodeForgeForgejoDb
DbBakDatabasus .[#b45309,thickness=2].> SecretsManInfisicalDb
DbBakDatabasus .[#b45309,thickness=2].> SharedDbPostgresDb
DbBakDatabasus .[#b45309,thickness=2].> DocArcPaperlessDb
DbBakDatabasus .[#b45309,thickness=2].> ErpErpnextDb
DbBakDatabasus .[#b45309,thickness=2].> PhovidImmichDb
DataBakZerobyte .[#b45309,thickness=2].> ContainerOrcKomodoVolumes
@enduml
`;case`apps`:return`@startuml
title "Workloads"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Erp>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Phovid>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<PrjMan>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Docsign>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<DocArc>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<MediaLib>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<GameServers>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<SharedDb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<FileExp>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<SecretsMan>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "==Gateway\\n\\nOne public entry point for every published route." <<Gateway>> as Gateway
rectangle "==ERP" <<Erp>> as Erp
rectangle "==Personal Photo Storage" <<Phovid>> as Phovid
rectangle "==Project Manager" <<PrjMan>> as PrjMan
rectangle "==Document Signing" <<Docsign>> as Docsign
rectangle "==Document Archive" <<DocArc>> as DocArc
rectangle "==Media Library\\n\\nSeven products in one stack. Each is its own application." <<MediaLib>> as MediaLib
rectangle "==Game Servers" <<GameServers>> as GameServers
rectangle "==Shared Database\\n\\nOne Postgres for the tenants that do not need their own." <<SharedDb>> as SharedDb
rectangle "==File Explorer" <<FileExp>> as FileExp
rectangle "==Secrets Manager" <<SecretsMan>> as SecretsMan

GameServers .[#8D8D8D,thickness=2].> FileExp : <color:#8D8D8D>stores its world
Gateway .[#8D8D8D,thickness=2].> PrjMan : <color:#8D8D8D>openprj.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> Docsign : <color:#8D8D8D>docuseal.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> DocArc : <color:#8D8D8D>paper.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> MediaLib : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> GameServers : <color:#8D8D8D>raw TCP :18022\\n<size:8>[<color:#8D8D8D>TCP]</size>
Gateway .[#8D8D8D,thickness=2].> FileExp : <color:#8D8D8D>HTTP :18450\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
PrjMan .[#8D8D8D,thickness=2].> SharedDb : <color:#8D8D8D>[PostgreSQL]
Docsign .[#8D8D8D,thickness=2].> SharedDb : <color:#8D8D8D>[PostgreSQL]
PrjMan .[#64748b,thickness=2].> SecretsMan : <color:#64748b>/openproject\\n<size:8>[<color:#64748b>Infisical]</size>
Docsign .[#64748b,thickness=2].> SecretsMan : <color:#64748b>/docuseal\\n<size:8>[<color:#64748b>Infisical]</size>
DocArc .[#64748b,thickness=2].> SecretsMan : <color:#64748b>/paperless\\n<size:8>[<color:#64748b>Infisical]</size>
Erp .[#64748b,thickness=2].> SecretsMan : <color:#64748b>/\\n<size:8>[<color:#64748b>Infisical]</size>
Phovid .[#64748b,thickness=2].> SecretsMan : <color:#64748b>/immich\\n<size:8>[<color:#64748b>Infisical]</size>
MediaLib .[#64748b,thickness=2].> SecretsMan : <color:#64748b>/stream\\n<size:8>[<color:#64748b>Infisical]</size>
Gateway .[#64748b,thickness=2].> SecretsMan : <color:#64748b>[...]
SharedDb .[#64748b,thickness=2].> SecretsMan : <color:#64748b>/postgres\\n<size:8>[<color:#64748b>Infisical]</size>
@enduml
`;case`gatewayDetail`:return`@startuml
title "Gateway"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ConfigMgmt>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam queue<<Www>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<GatewayPangolinTraefik>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Dns>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<GatewayPangolinServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Email>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<GatewayPangolinGerbil>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<GatewayNewt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Idp>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<ContainerOrc>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PriCodeForge>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Ci>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<AgentGw>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SecretsMan>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PrjMan>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Docsign>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<DocArc>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<MediaLib>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<GameServers>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<FileExp>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
rectangle "==Configuration Management" <<ConfigMgmt>> as ConfigMgmt
queue "==Public Internet" <<Www>> as Www
rectangle "Gateway" <<Gateway>> as Gateway {
  skinparam RectangleBorderColor<<Gateway>> #428a4f
  skinparam RectangleFontColor<<Gateway>> #428a4f
  skinparam RectangleBorderStyle<<Gateway>> dashed

  rectangle "Pangolin" <<GatewayPangolin>> as GatewayPangolin {
    skinparam RectangleBorderColor<<GatewayPangolin>> #3b82f6
    skinparam RectangleFontColor<<GatewayPangolin>> #3b82f6
    skinparam RectangleBorderStyle<<GatewayPangolin>> dashed

    component "==Traefik\\n\\nReverse proxy. network_mode: service:gerbil." <<GatewayPangolinTraefik>> as GatewayPangolinTraefik
    component "==Pangolin Server" <<GatewayPangolinServer>> as GatewayPangolinServer
    component "==Gerbil\\n<size:10>[Wireguard]</size>\\n\\nOwns the host ports. Traefik runs in its network namespace." <<GatewayPangolinGerbil>> as GatewayPangolinGerbil
  }
  rectangle "==Newt\\n<size:10>[Wireguard]</size>\\n\\nSite connector, installed per host as a systemd unit by infra.ansible." <<GatewayNewt>> as GatewayNewt
}
rectangle "==DNS and Certificates" <<Dns>> as Dns
rectangle "==Transactional Email" <<Email>> as Email
rectangle "==Identity Provider" <<Idp>> as Idp
rectangle "==Container Orchestrator" <<ContainerOrc>> as ContainerOrc
rectangle "==Primary Code Forge" <<PriCodeForge>> as PriCodeForge
rectangle "==Continuous Integration" <<Ci>> as Ci
rectangle "==Agent Gateway" <<AgentGw>> as AgentGw
rectangle "==Secrets Manager" <<SecretsMan>> as SecretsMan
rectangle "==Project Manager" <<PrjMan>> as PrjMan
rectangle "==Document Signing" <<Docsign>> as Docsign
rectangle "==Document Archive" <<DocArc>> as DocArc
rectangle "==Media Library\\n\\nSeven products in one stack. Each is its own application." <<MediaLib>> as MediaLib
rectangle "==Game Servers" <<GameServers>> as GameServers
rectangle "==File Explorer" <<FileExp>> as FileExp

ConfigMgmt .[#15803d,thickness=2].> GatewayNewt : <color:#15803d>installs the newt systemd unit
GatewayNewt .[#8D8D8D,thickness=2].> Idp : <color:#8D8D8D>authentik.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayNewt .[#8D8D8D,thickness=2].> ContainerOrc : <color:#8D8D8D>komo.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayNewt .[#8D8D8D,thickness=2].> PriCodeForge : <color:#8D8D8D>fj.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayNewt .[#8D8D8D,thickness=2].> Ci : <color:#8D8D8D>peck.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayNewt .[#8D8D8D,thickness=2].> AgentGw : <color:#8D8D8D>komodo-mcp.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayNewt .[#8D8D8D,thickness=2].> SecretsMan : <color:#8D8D8D>infisical.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayNewt .[#8D8D8D,thickness=2].> PrjMan : <color:#8D8D8D>openprj.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayNewt .[#8D8D8D,thickness=2].> Docsign : <color:#8D8D8D>docuseal.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayNewt .[#8D8D8D,thickness=2].> DocArc : <color:#8D8D8D>paper.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayNewt .[#8D8D8D,thickness=2].> MediaLib : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayNewt .[#8D8D8D,thickness=2].> GameServers : <color:#8D8D8D>raw TCP :18022\\n<size:8>[<color:#8D8D8D>TCP]</size>
GatewayNewt .[#8D8D8D,thickness=2].> FileExp : <color:#8D8D8D>HTTP :18450\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Www .[#8D8D8D,thickness=2].> GatewayPangolinGerbil : <color:#8D8D8D>HTTPS :443, HTTP :80\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayPangolinServer .[#8D8D8D,thickness=2].> Email : <color:#8D8D8D>SMTP :465
GatewayPangolinGerbil .[#0ea5e9,thickness=2].> GatewayNewt : <color:#0ea5e9>WireGuard :51820\\n<size:8>[<color:#0ea5e9>WireGuard]</size>
GatewayPangolinTraefik .[#8D8D8D,thickness=2].> Dns : <color:#8D8D8D>solves ACME DNS-01\\n<size:8>[<color:#8D8D8D>ACME]</size>
GatewayPangolinServer .[#8D8D8D,thickness=2].> GatewayPangolinGerbil : <color:#8D8D8D>pushes remote config\\n<size:8>[<color:#8D8D8D>HTTP :3001]</size>
GatewayPangolinTraefik .[#8D8D8D,thickness=2].> GatewayPangolinServer : <color:#8D8D8D>authorizes each request\\n<size:8>[<color:#8D8D8D>Badger middleware]</size>
GatewayPangolinGerbil .[#8D8D8D,thickness=2].> GatewayPangolinTraefik : <color:#8D8D8D>shares the network namespace\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayPangolinTraefik .[#8D8D8D,thickness=2].> GatewayPangolinGerbil : <color:#8D8D8D>routes into the tunnel\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
@enduml
`;case`idpDetail`:return`@startuml
title "Identity Provider"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<OverlayNet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<DbBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Dashboard>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<IdpAuthentikWorker>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<IdpAuthentikServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<IdpAuthentikDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Overlay Network\\n\\nFlat addressing across every host, wherever it sits." <<OverlayNet>> as OverlayNet
rectangle "==Gateway\\n\\nOne public entry point for every published route." <<Gateway>> as Gateway
rectangle "==Database Backup Coordinator" <<DbBak>> as DbBak
rectangle "==Dashboard" <<Dashboard>> as Dashboard
rectangle "Identity Provider" <<Idp>> as Idp {
  skinparam RectangleBorderColor<<Idp>> #428a4f
  skinparam RectangleFontColor<<Idp>> #428a4f
  skinparam RectangleBorderStyle<<Idp>> dashed

  rectangle "Authentik" <<IdpAuthentik>> as IdpAuthentik {
    skinparam RectangleBorderColor<<IdpAuthentik>> #3b82f6
    skinparam RectangleFontColor<<IdpAuthentik>> #3b82f6
    skinparam RectangleBorderStyle<<IdpAuthentik>> dashed

    component "==Worker" <<IdpAuthentikWorker>> as IdpAuthentikWorker
    component "==Server" <<IdpAuthentikServer>> as IdpAuthentikServer
    database "==Database\\n<size:10>[PostgreSQL]</size>" <<IdpAuthentikDb>> as IdpAuthentikDb
  }
}

OverlayNet .[#0ea5e9,thickness=2].> IdpAuthentikDb : <color:#0ea5e9>exposes on the tailnet\\n<size:8>[<color:#0ea5e9>shared__ts-gateway]</size>
Gateway .[#8D8D8D,thickness=2].> IdpAuthentikServer : <color:#8D8D8D>authentik.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
DbBak .[#b45309,thickness=2].> IdpAuthentikDb
Dashboard .[#0ea5e9,thickness=2].> IdpAuthentikServer : <color:#0ea5e9>authenticates users\\n<size:8>[<color:#0ea5e9>OIDC]</size>
IdpAuthentikServer .[#8D8D8D,thickness=2].> IdpAuthentikDb : <color:#8D8D8D>[PostgreSQL]
IdpAuthentikWorker .[#8D8D8D,thickness=2].> IdpAuthentikDb : <color:#8D8D8D>[PostgreSQL]
@enduml
`;case`secretsManDetail`:return`@startuml
title "Secrets Manager"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<OverlayNet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Idp>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<ContainerOrc>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ConfigMgmt>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PriCodeForge>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Ci>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<AgentGw>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<DataBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<DbBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Dashboard>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SharedDb>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PrjMan>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Docsign>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<DocArc>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Erp>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Phovid>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<MediaLib>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam component<<SecretsManInfisicalServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Email>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<SecretsManInfisicalRedis>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<SecretsManInfisicalDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Overlay Network\\n\\nFlat addressing across every host, wherever it sits." <<OverlayNet>> as OverlayNet
rectangle "==Gateway\\n\\nOne public entry point for every published route." <<Gateway>> as Gateway
rectangle "==Identity Provider" <<Idp>> as Idp
rectangle "==Container Orchestrator" <<ContainerOrc>> as ContainerOrc
rectangle "==Configuration Management" <<ConfigMgmt>> as ConfigMgmt
rectangle "==Primary Code Forge" <<PriCodeForge>> as PriCodeForge
rectangle "==Continuous Integration" <<Ci>> as Ci
rectangle "==Agent Gateway" <<AgentGw>> as AgentGw
rectangle "==Data Backup Coordinator" <<DataBak>> as DataBak
rectangle "==Database Backup Coordinator" <<DbBak>> as DbBak
rectangle "==Dashboard" <<Dashboard>> as Dashboard
rectangle "==Shared Database\\n\\nOne Postgres for the tenants that do not need their own." <<SharedDb>> as SharedDb
rectangle "==Project Manager" <<PrjMan>> as PrjMan
rectangle "==Document Signing" <<Docsign>> as Docsign
rectangle "==Document Archive" <<DocArc>> as DocArc
rectangle "==ERP" <<Erp>> as Erp
rectangle "==Personal Photo Storage" <<Phovid>> as Phovid
rectangle "==Media Library\\n\\nSeven products in one stack. Each is its own application." <<MediaLib>> as MediaLib
rectangle "Secrets Manager" <<SecretsMan>> as SecretsMan {
  skinparam RectangleBorderColor<<SecretsMan>> #64748b
  skinparam RectangleFontColor<<SecretsMan>> #64748b
  skinparam RectangleBorderStyle<<SecretsMan>> dashed

  rectangle "Infisical" <<SecretsManInfisical>> as SecretsManInfisical {
    skinparam RectangleBorderColor<<SecretsManInfisical>> #3b82f6
    skinparam RectangleFontColor<<SecretsManInfisical>> #3b82f6
    skinparam RectangleBorderStyle<<SecretsManInfisical>> dashed

    component "==Server" <<SecretsManInfisicalServer>> as SecretsManInfisicalServer
    component "==Cache\\n<size:10>[Redis]</size>" <<SecretsManInfisicalRedis>> as SecretsManInfisicalRedis
    database "==Database\\n<size:10>[PostgreSQL]</size>" <<SecretsManInfisicalDb>> as SecretsManInfisicalDb
  }
}
rectangle "==Transactional Email" <<Email>> as Email

OverlayNet .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/tailscale/containers\\n<size:8>[<color:#64748b>Infisical]</size>
Gateway .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>[...]
Idp .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/authentik\\n<size:8>[<color:#64748b>Infisical]</size>
ContainerOrc .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/komodo\\n<size:8>[<color:#64748b>Infisical]</size>
ConfigMgmt .[#8D8D8D,thickness=2].> SecretsManInfisicalServer : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>Infisical]</size>
PriCodeForge .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/forgejo\\n<size:8>[<color:#64748b>Infisical]</size>
Ci .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/woodpecker\\n<size:8>[<color:#64748b>Infisical]</size>
AgentGw .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/komodo-mcp\\n<size:8>[<color:#64748b>Infisical]</size>
DataBak .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/zerobyte\\n<size:8>[<color:#64748b>Infisical]</size>
DbBak .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/databasus\\n<size:8>[<color:#64748b>Infisical]</size>
DbBak .[#b45309,thickness=2].> SecretsManInfisicalDb
Dashboard .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/homarr\\n<size:8>[<color:#64748b>Infisical]</size>
SharedDb .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/postgres\\n<size:8>[<color:#64748b>Infisical]</size>
PrjMan .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/openproject\\n<size:8>[<color:#64748b>Infisical]</size>
Docsign .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/docuseal\\n<size:8>[<color:#64748b>Infisical]</size>
DocArc .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/paperless\\n<size:8>[<color:#64748b>Infisical]</size>
Erp .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/\\n<size:8>[<color:#64748b>Infisical]</size>
Phovid .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/immich\\n<size:8>[<color:#64748b>Infisical]</size>
MediaLib .[#64748b,thickness=2].> SecretsManInfisicalServer : <color:#64748b>/stream\\n<size:8>[<color:#64748b>Infisical]</size>
SecretsManInfisicalServer .[#8D8D8D,thickness=2].> Email : <color:#8D8D8D>SMTP :465
SecretsManInfisicalServer .[#8D8D8D,thickness=2].> SecretsManInfisicalRedis : <color:#8D8D8D>queues and caches
SecretsManInfisicalServer .[#8D8D8D,thickness=2].> SecretsManInfisicalDb : <color:#8D8D8D>[PostgreSQL]
@enduml
`;case`containerOrcDetail`:return`@startuml
title "Container Orchestrator"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<ConfigMgmt>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<AgentGw>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<DataBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<DbBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<ContainerOrcKomodoCore>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PriCodeForge>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Alerting>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<ContainerOrcKomodoPeriphery>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<ContainerOrcKomodoDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<ContainerOrcKomodoVolumes>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Gateway\\n\\nOne public entry point for every published route." <<Gateway>> as Gateway
rectangle "==Configuration Management" <<ConfigMgmt>> as ConfigMgmt
rectangle "==Agent Gateway" <<AgentGw>> as AgentGw
rectangle "==Data Backup Coordinator" <<DataBak>> as DataBak
rectangle "==Database Backup Coordinator" <<DbBak>> as DbBak
rectangle "Container Orchestrator" <<ContainerOrc>> as ContainerOrc {
  skinparam RectangleBorderColor<<ContainerOrc>> #64748b
  skinparam RectangleFontColor<<ContainerOrc>> #64748b
  skinparam RectangleBorderStyle<<ContainerOrc>> dashed

  rectangle "Komodo" <<ContainerOrcKomodo>> as ContainerOrcKomodo {
    skinparam RectangleBorderColor<<ContainerOrcKomodo>> #3b82f6
    skinparam RectangleFontColor<<ContainerOrcKomodo>> #3b82f6
    skinparam RectangleBorderStyle<<ContainerOrcKomodo>> dashed

    component "==Core\\n\\nThe hub: holds stack definitions and drives every deploy." <<ContainerOrcKomodoCore>> as ContainerOrcKomodoCore
    component "==Periphery\\n\\nPer-host agent, installed as a systemd unit by infra.ansible." <<ContainerOrcKomodoPeriphery>> as ContainerOrcKomodoPeriphery
    database "==Database\\n<size:10>[MongoDB]</size>" <<ContainerOrcKomodoDb>> as ContainerOrcKomodoDb
    database "==Docker Volumes\\n<size:10>[Filesystem]</size>\\n\\n/var/lib/docker/volumes on every managed node." <<ContainerOrcKomodoVolumes>> as ContainerOrcKomodoVolumes
  }
}
rectangle "==Primary Code Forge" <<PriCodeForge>> as PriCodeForge
rectangle "==Alerting" <<Alerting>> as Alerting

Gateway .[#8D8D8D,thickness=2].> ContainerOrcKomodoCore : <color:#8D8D8D>komo.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ConfigMgmt .[#15803d,thickness=2].> ContainerOrcKomodoCore : <color:#15803d>bootstraps the control plane
ConfigMgmt .[#15803d,thickness=2].> ContainerOrcKomodoPeriphery : <color:#15803d>installs the periphery systemd unit
AgentGw .[#8D8D8D,thickness=2].> ContainerOrcKomodoCore : <color:#8D8D8D>Komodo API
DataBak .[#b45309,thickness=2].> ContainerOrcKomodoVolumes
DbBak .[#b45309,thickness=2].> ContainerOrcKomodoDb
ContainerOrcKomodoCore .[#8D8D8D,thickness=2].> PriCodeForge : <color:#8D8D8D>syncs stack definitions
ContainerOrcKomodoCore .[#8D8D8D,thickness=2].> Alerting : <color:#8D8D8D>sends alerts
ContainerOrcKomodoCore .[#15803d,thickness=2].> ContainerOrcKomodoPeriphery : <color:#15803d>TLS :8120, pinned core public key
ContainerOrcKomodoCore .[#8D8D8D,thickness=2].> ContainerOrcKomodoDb : <color:#8D8D8D>reads and writes
ContainerOrcKomodoPeriphery .[#15803d,thickness=2].> ContainerOrcKomodoVolumes : <color:#15803d>creates and manages
@enduml
`;case`forgeDetail`:return`@startuml
title "Primary Code Forge"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<ContainerOrc>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ci>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<DbBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<PriCodeForgeForgejoServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<PriCodeForgeForgejoDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Gateway\\n\\nOne public entry point for every published route." <<Gateway>> as Gateway
rectangle "==Container Orchestrator" <<ContainerOrc>> as ContainerOrc
rectangle "==Continuous Integration" <<Ci>> as Ci
rectangle "==Database Backup Coordinator" <<DbBak>> as DbBak
rectangle "Primary Code Forge" <<PriCodeForge>> as PriCodeForge {
  skinparam RectangleBorderColor<<PriCodeForge>> #428a4f
  skinparam RectangleFontColor<<PriCodeForge>> #428a4f
  skinparam RectangleBorderStyle<<PriCodeForge>> dashed

  rectangle "Forgejo" <<PriCodeForgeForgejo>> as PriCodeForgeForgejo {
    skinparam RectangleBorderColor<<PriCodeForgeForgejo>> #3b82f6
    skinparam RectangleFontColor<<PriCodeForgeForgejo>> #3b82f6
    skinparam RectangleBorderStyle<<PriCodeForgeForgejo>> dashed

    component "==Server" <<PriCodeForgeForgejoServer>> as PriCodeForgeForgejoServer
    database "==Database\\n<size:10>[PostgreSQL]</size>" <<PriCodeForgeForgejoDb>> as PriCodeForgeForgejoDb
  }
}

Gateway .[#8D8D8D,thickness=2].> PriCodeForgeForgejoServer : <color:#8D8D8D>fj.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ContainerOrc .[#8D8D8D,thickness=2].> PriCodeForgeForgejoServer : <color:#8D8D8D>syncs stack definitions
Ci .[#0ea5e9,thickness=2].> PriCodeForgeForgejoServer : <color:#0ea5e9>OAuth2 login and repository access\\n<size:8>[<color:#0ea5e9>OIDC]</size>
DbBak .[#b45309,thickness=2].> PriCodeForgeForgejoDb
PriCodeForgeForgejoServer .[#8D8D8D,thickness=2].> PriCodeForgeForgejoDb : <color:#8D8D8D>[PostgreSQL]
@enduml
`;case`ciDetail`:return`@startuml
title "Continuous Integration"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam component<<CiWoodpeckerAgent>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<CiWoodpeckerServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PriCodeForge>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Gateway\\n\\nOne public entry point for every published route." <<Gateway>> as Gateway
rectangle "Continuous Integration" <<Ci>> as Ci {
  skinparam RectangleBorderColor<<Ci>> #428a4f
  skinparam RectangleFontColor<<Ci>> #428a4f
  skinparam RectangleBorderStyle<<Ci>> dashed

  rectangle "Woodpecker" <<CiWoodpecker>> as CiWoodpecker {
    skinparam RectangleBorderColor<<CiWoodpecker>> #3b82f6
    skinparam RectangleFontColor<<CiWoodpecker>> #3b82f6
    skinparam RectangleBorderStyle<<CiWoodpecker>> dashed

    component "==Agent\\n\\nRuns pipeline steps as sibling containers on the host docker daemon." <<CiWoodpeckerAgent>> as CiWoodpeckerAgent
    component "==Server" <<CiWoodpeckerServer>> as CiWoodpeckerServer
  }
}
rectangle "==Primary Code Forge" <<PriCodeForge>> as PriCodeForge

Gateway .[#8D8D8D,thickness=2].> CiWoodpeckerServer : <color:#8D8D8D>peck.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
CiWoodpeckerServer .[#0ea5e9,thickness=2].> PriCodeForge : <color:#0ea5e9>OAuth2 login and repository access\\n<size:8>[<color:#0ea5e9>OIDC]</size>
CiWoodpeckerAgent .[#8D8D8D,thickness=2].> CiWoodpeckerServer : <color:#8D8D8D>polls for work\\n<size:8>[<color:#8D8D8D>gRPC :9000]</size>
@enduml
`;case`docArcDetail`:return`@startuml
title "Document Archive"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<DbBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<DocArcPaperlessServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<DocArcPaperlessBroker>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<DocArcPaperlessGotenberg>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<DocArcPaperlessTika>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<DocArcPaperlessDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Gateway\\n\\nOne public entry point for every published route." <<Gateway>> as Gateway
rectangle "==Database Backup Coordinator" <<DbBak>> as DbBak
rectangle "Document Archive" <<DocArc>> as DocArc {
  skinparam RectangleBorderColor<<DocArc>> #6366f1
  skinparam RectangleFontColor<<DocArc>> #6366f1
  skinparam RectangleBorderStyle<<DocArc>> dashed

  rectangle "Paperless" <<DocArcPaperless>> as DocArcPaperless {
    skinparam RectangleBorderColor<<DocArcPaperless>> #3b82f6
    skinparam RectangleFontColor<<DocArcPaperless>> #3b82f6
    skinparam RectangleBorderStyle<<DocArcPaperless>> dashed

    component "==Server" <<DocArcPaperlessServer>> as DocArcPaperlessServer
    component "==Broker\\n<size:10>[Redis]</size>" <<DocArcPaperlessBroker>> as DocArcPaperlessBroker
    component "==Document Converter\\n<size:10>[Gotenberg]</size>" <<DocArcPaperlessGotenberg>> as DocArcPaperlessGotenberg
    component "==Content Extractor\\n<size:10>[Apache Tika]</size>" <<DocArcPaperlessTika>> as DocArcPaperlessTika
    database "==Database\\n<size:10>[PostgreSQL]</size>" <<DocArcPaperlessDb>> as DocArcPaperlessDb
  }
}

Gateway .[#8D8D8D,thickness=2].> DocArcPaperlessServer : <color:#8D8D8D>paper.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
DbBak .[#b45309,thickness=2].> DocArcPaperlessDb
DocArcPaperlessServer .[#8D8D8D,thickness=2].> DocArcPaperlessBroker : <color:#8D8D8D>queues tasks
DocArcPaperlessServer .[#8D8D8D,thickness=2].> DocArcPaperlessGotenberg : <color:#8D8D8D>converts to PDF
DocArcPaperlessServer .[#8D8D8D,thickness=2].> DocArcPaperlessTika : <color:#8D8D8D>extracts text
DocArcPaperlessServer .[#8D8D8D,thickness=2].> DocArcPaperlessDb : <color:#8D8D8D>[PostgreSQL]
@enduml
`;case`phovidDetail`:return`@startuml
title "Personal Photo Storage"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<DbBak>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<PhovidImmichServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<PhovidImmichMachineLearning>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<PhovidImmichRedis>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<PhovidImmichDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Database Backup Coordinator" <<DbBak>> as DbBak
rectangle "Personal Photo Storage" <<Phovid>> as Phovid {
  skinparam RectangleBorderColor<<Phovid>> #6366f1
  skinparam RectangleFontColor<<Phovid>> #6366f1
  skinparam RectangleBorderStyle<<Phovid>> dashed

  rectangle "Immich" <<PhovidImmich>> as PhovidImmich {
    skinparam RectangleBorderColor<<PhovidImmich>> #3b82f6
    skinparam RectangleFontColor<<PhovidImmich>> #3b82f6
    skinparam RectangleBorderStyle<<PhovidImmich>> dashed

    component "==Server" <<PhovidImmichServer>> as PhovidImmichServer
    component "==Machine Learning" <<PhovidImmichMachineLearning>> as PhovidImmichMachineLearning
    component "==Cache\\n<size:10>[Valkey]</size>" <<PhovidImmichRedis>> as PhovidImmichRedis
    database "==Database\\n<size:10>[PostgreSQL]</size>" <<PhovidImmichDb>> as PhovidImmichDb
  }
}

DbBak .[#b45309,thickness=2].> PhovidImmichDb
PhovidImmichServer .[#8D8D8D,thickness=2].> PhovidImmichMachineLearning : <color:#8D8D8D>runs inference
PhovidImmichServer .[#8D8D8D,thickness=2].> PhovidImmichRedis : <color:#8D8D8D>queues jobs
PhovidImmichServer .[#8D8D8D,thickness=2].> PhovidImmichDb : <color:#8D8D8D>[PostgreSQL]
@enduml
`;case`mediaLibDetail`:return`@startuml
title "Media Library"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<MediaLibSeerr>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<MediaLibProwlarr>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<MediaLibBazarr>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<MediaLibSonarr>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<MediaLibRadarr>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<MediaLibSabnzbd>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<MediaLibPlex>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Gateway\\n\\nOne public entry point for every published route." <<Gateway>> as Gateway
rectangle "Media Library" <<MediaLib>> as MediaLib {
  skinparam RectangleBorderColor<<MediaLib>> #6366f1
  skinparam RectangleFontColor<<MediaLib>> #6366f1
  skinparam RectangleBorderStyle<<MediaLib>> dashed

  rectangle "==Seerr" <<MediaLibSeerr>> as MediaLibSeerr
  rectangle "==Prowlarr" <<MediaLibProwlarr>> as MediaLibProwlarr
  rectangle "==Bazarr" <<MediaLibBazarr>> as MediaLibBazarr
  rectangle "==Sonarr" <<MediaLibSonarr>> as MediaLibSonarr
  rectangle "==Radarr" <<MediaLibRadarr>> as MediaLibRadarr
  rectangle "==SABnzbd" <<MediaLibSabnzbd>> as MediaLibSabnzbd
  rectangle "==Plex" <<MediaLibPlex>> as MediaLibPlex
}

Gateway .[#8D8D8D,thickness=2].> MediaLibSeerr : <color:#8D8D8D>seerr.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> MediaLibSonarr : <color:#8D8D8D>sonarr.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> MediaLibRadarr : <color:#8D8D8D>radarr.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> MediaLibProwlarr : <color:#8D8D8D>prowlarr.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> MediaLibBazarr : <color:#8D8D8D>bazarr.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
Gateway .[#8D8D8D,thickness=2].> MediaLibSabnzbd : <color:#8D8D8D>sabnzbd.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
MediaLibSeerr .[#8D8D8D,thickness=2].> MediaLibSonarr : <color:#8D8D8D>requests series
MediaLibSeerr .[#8D8D8D,thickness=2].> MediaLibRadarr : <color:#8D8D8D>requests films
MediaLibSonarr .[#8D8D8D,thickness=2].> MediaLibSabnzbd : <color:#8D8D8D>queues downloads
MediaLibProwlarr .[#8D8D8D,thickness=2].> MediaLibSonarr : <color:#8D8D8D>feeds indexers
MediaLibBazarr .[#8D8D8D,thickness=2].> MediaLibSonarr : <color:#8D8D8D>reads the library
MediaLibRadarr .[#8D8D8D,thickness=2].> MediaLibSabnzbd : <color:#8D8D8D>queues downloads
MediaLibProwlarr .[#8D8D8D,thickness=2].> MediaLibRadarr : <color:#8D8D8D>feeds indexers
MediaLibBazarr .[#8D8D8D,thickness=2].> MediaLibRadarr : <color:#8D8D8D>reads the library
@enduml
`;case`flowRequest`:return`@startuml
title "Serving an authenticated request"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam queue<<Www>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<GatewayPangolinGerbil>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<GatewayPangolinTraefik>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<GatewayPangolinServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<GatewayNewt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PrjManOpenproject>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SharedDbPostgresDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
queue "==Public Internet" <<Www>> as Www
component "==Gerbil\\n<size:10>[Wireguard]</size>\\n\\nOwns the host ports. Traefik runs in its network namespace." <<GatewayPangolinGerbil>> as GatewayPangolinGerbil
component "==Traefik\\n\\nReverse proxy. network_mode: service:gerbil." <<GatewayPangolinTraefik>> as GatewayPangolinTraefik
component "==Pangolin Server" <<GatewayPangolinServer>> as GatewayPangolinServer
rectangle "==Newt\\n<size:10>[Wireguard]</size>\\n\\nSite connector, installed per host as a systemd unit by infra.ansible." <<GatewayNewt>> as GatewayNewt
rectangle "==OpenProject" <<PrjManOpenproject>> as PrjManOpenproject
database "==Database" <<SharedDbPostgresDb>> as SharedDbPostgresDb

Www .[#8D8D8D,thickness=2].> GatewayPangolinGerbil : <color:#8D8D8D>GET openprj.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayPangolinGerbil .[#8D8D8D,thickness=2].> GatewayPangolinTraefik : <color:#8D8D8D>forwards on the shared namespace\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayPangolinTraefik .[#8D8D8D,thickness=2].> GatewayPangolinServer : <color:#8D8D8D>badger: is this session allowed?\\n<size:8>[<color:#8D8D8D>Badger middleware]</size>
GatewayPangolinServer .[#8D8D8D,thickness=2].> GatewayPangolinTraefik : <color:#8D8D8D>allow
GatewayPangolinTraefik .[#8D8D8D,thickness=2].> GatewayPangolinGerbil : <color:#8D8D8D>routes into the tunnel\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayPangolinGerbil .[#0ea5e9,thickness=2].> GatewayNewt : <color:#0ea5e9>WireGuard
GatewayNewt .[#8D8D8D,thickness=2].> PrjManOpenproject : <color:#8D8D8D>forwards to the local port\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
PrjManOpenproject .[#8D8D8D,thickness=2].> SharedDbPostgresDb : <color:#8D8D8D>query\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
SharedDbPostgresDb .[#8D8D8D,thickness=2].> PrjManOpenproject : <color:#8D8D8D>rows
PrjManOpenproject .[#8D8D8D,thickness=2].> GatewayNewt : <color:#8D8D8D>200 OK
GatewayNewt .[#8D8D8D,thickness=2].> GatewayPangolinGerbil : <color:#8D8D8D>200 OK
GatewayPangolinGerbil .[#8D8D8D,thickness=2].> GatewayPangolinTraefik : <color:#8D8D8D>200 OK\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
GatewayPangolinTraefik .[#8D8D8D,thickness=2].> Www : <color:#8D8D8D>200 OK
@enduml
`;case`flowSecrets`:return`@startuml
title "How a stack gets its secrets"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<ContainerOrcKomodoPeriphery>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DocsignDocuseal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<SecretsManInfisicalServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<SharedDbPostgresDb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
component "==Periphery\\n\\nPer-host agent, installed as a systemd unit by infra.ansible." <<ContainerOrcKomodoPeriphery>> as ContainerOrcKomodoPeriphery
rectangle "==Docuseal" <<DocsignDocuseal>> as DocsignDocuseal
component "==Server" <<SecretsManInfisicalServer>> as SecretsManInfisicalServer
database "==Database" <<SharedDbPostgresDb>> as SharedDbPostgresDb

ContainerOrcKomodoPeriphery .[#8D8D8D,thickness=2].> DocsignDocuseal : <color:#8D8D8D>docker compose up
DocsignDocuseal .[#8D8D8D,thickness=2].> SecretsManInfisicalServer : <color:#8D8D8D>machine identity login, then GET /docuseal
SecretsManInfisicalServer .[#8D8D8D,thickness=2].> DocsignDocuseal : <color:#8D8D8D>secret bundle
DocsignDocuseal .[#8D8D8D,thickness=2].> SharedDbPostgresDb : <color:#8D8D8D>connects with the injected credentials\\n<size:8>[<color:#8D8D8D>PostgreSQL]</size>
@enduml
`;case`flowDeploy`:return`@startuml
title "Deploying a stack"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Operator>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<ContainerOrcKomodoCore>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<PriCodeForgeForgejoServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<ContainerOrcKomodoPeriphery>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<SecretsManInfisicalServer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<AlertingPushover>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Operator\\n\\nAdministers the fleet through Komodo, Ansible and the forges." <<Operator>> as Operator
component "==Core\\n\\nThe hub: holds stack definitions and drives every deploy." <<ContainerOrcKomodoCore>> as ContainerOrcKomodoCore
component "==Server" <<PriCodeForgeForgejoServer>> as PriCodeForgeForgejoServer
component "==Periphery\\n\\nPer-host agent, installed as a systemd unit by infra.ansible." <<ContainerOrcKomodoPeriphery>> as ContainerOrcKomodoPeriphery
component "==Server" <<SecretsManInfisicalServer>> as SecretsManInfisicalServer
rectangle "==Pushover\\n\\nReceives Komodo alerts. The only telemetry sink in the fleet." <<AlertingPushover>> as AlertingPushover

Operator .[#8D8D8D,thickness=2].> PriCodeForgeForgejoServer : <color:#8D8D8D>git push
ContainerOrcKomodoCore .[#8D8D8D,thickness=2].> PriCodeForgeForgejoServer : <color:#8D8D8D>syncs stack definitions
ContainerOrcKomodoCore .[#15803d,thickness=2].> ContainerOrcKomodoPeriphery : <color:#15803d>deploy
ContainerOrcKomodoPeriphery .[#8D8D8D,thickness=2].> SecretsManInfisicalServer : <color:#8D8D8D>provider fetches the bundle
SecretsManInfisicalServer .[#8D8D8D,thickness=2].> ContainerOrcKomodoPeriphery : <color:#8D8D8D>secrets
ContainerOrcKomodoPeriphery .[#8D8D8D,thickness=2].> ContainerOrcKomodoCore : <color:#8D8D8D>result
ContainerOrcKomodoCore .[#8D8D8D,thickness=2].> AlertingPushover : <color:#8D8D8D>alerts on failure
@enduml
`;case`fleet`:return`@startuml
title "Fleet"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam database<<ProdHomelabNas>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickPangolin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickHomarr>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickDatabasus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickTsAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickZerobyte>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHetznerMaboiNewt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<ProdHetznerMaboiPeriphery>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ProdHetznerMaboiTsAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<ProdHomelabLittlebuddyPeriphery>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ProdHomelabLittlebuddyTsAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabBiggyNewt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickNewt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabBiggyTerraria>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickAuthentik>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<ProdVultrRickCore>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<ProdHomelabBiggyPeriphery>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ProdHomelabBiggyTsAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabBillNewt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<ProdHomelabBillPeriphery>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ProdHomelabBillTsAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabPaikiNewt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabBiggyFbq>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<ProdVultrRickPeriphery>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ProdHomelabPaikiMediaLib>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ProdHomelabLittlebuddyNewt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabBillErpnext>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabPaikiImmich>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabLittlebuddyWoodpecker>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabLittlebuddyKomodoMcp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabLittlebuddyOpenproject>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabLittlebuddyDocuseal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabLittlebuddyPaperless>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabLittlebuddyForgejo>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdHomelabLittlebuddyPostgres>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickInfisical>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<ProdHomelabPaikiPeriphery>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ProdHomelabPaikiTsAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Production" <<Prod>> as Prod {
  skinparam RectangleBorderColor<<Prod>> #737373
  skinparam RectangleFontColor<<Prod>> #737373
  skinparam RectangleBorderStyle<<Prod>> dashed

  rectangle "Hetzner" <<ProdHetzner>> as ProdHetzner {
    skinparam RectangleBorderColor<<ProdHetzner>> #3b82f6
    skinparam RectangleFontColor<<ProdHetzner>> #3b82f6
    skinparam RectangleBorderStyle<<ProdHetzner>> dashed

    rectangle "maboi" <<ProdHetznerMaboi>> as ProdHetznerMaboi {
      skinparam RectangleBorderColor<<ProdHetznerMaboi>> #3b82f6
      skinparam RectangleFontColor<<ProdHetznerMaboi>> #3b82f6
      skinparam RectangleBorderStyle<<ProdHetznerMaboi>> dashed

      rectangle "==Newt\\n<size:10>[Wireguard]</size>\\n\\nSite connector, installed per host as a systemd unit by infra.ansible." <<ProdHetznerMaboiNewt>> as ProdHetznerMaboiNewt
      component "==Periphery\\n\\nPer-host agent, installed as a systemd unit by infra.ansible." <<ProdHetznerMaboiPeriphery>> as ProdHetznerMaboiPeriphery
      rectangle "==Tailscale Agent\\n<size:10>[Wireguard]</size>" <<ProdHetznerMaboiTsAgent>> as ProdHetznerMaboiTsAgent
    }
  }
  rectangle "Vultr" <<ProdVultr>> as ProdVultr {
    skinparam RectangleBorderColor<<ProdVultr>> #3b82f6
    skinparam RectangleFontColor<<ProdVultr>> #3b82f6
    skinparam RectangleBorderStyle<<ProdVultr>> dashed

    rectangle "rick" <<ProdVultrRick>> as ProdVultrRick {
      skinparam RectangleBorderColor<<ProdVultrRick>> #3b82f6
      skinparam RectangleFontColor<<ProdVultrRick>> #3b82f6
      skinparam RectangleBorderStyle<<ProdVultrRick>> dashed

      rectangle "==Pangolin" <<ProdVultrRickPangolin>> as ProdVultrRickPangolin
      rectangle "==Homarr" <<ProdVultrRickHomarr>> as ProdVultrRickHomarr
      rectangle "==Databasus" <<ProdVultrRickDatabasus>> as ProdVultrRickDatabasus
      rectangle "==Tailscale Agent\\n<size:10>[Wireguard]</size>" <<ProdVultrRickTsAgent>> as ProdVultrRickTsAgent
      rectangle "==Zerobyte\\n<size:10>[Restic]</size>" <<ProdVultrRickZerobyte>> as ProdVultrRickZerobyte
      rectangle "==Newt\\n<size:10>[Wireguard]</size>\\n\\nSite connector, installed per host as a systemd unit by infra.ansible." <<ProdVultrRickNewt>> as ProdVultrRickNewt
      rectangle "==Authentik" <<ProdVultrRickAuthentik>> as ProdVultrRickAuthentik
      component "==Core\\n\\nThe hub: holds stack definitions and drives every deploy." <<ProdVultrRickCore>> as ProdVultrRickCore
      component "==Periphery\\n\\nPer-host agent, installed as a systemd unit by infra.ansible." <<ProdVultrRickPeriphery>> as ProdVultrRickPeriphery
      rectangle "==Infisical" <<ProdVultrRickInfisical>> as ProdVultrRickInfisical
    }
  }
  rectangle "Home Lab" <<ProdHomelab>> as ProdHomelab {
    skinparam RectangleBorderColor<<ProdHomelab>> #3b82f6
    skinparam RectangleFontColor<<ProdHomelab>> #3b82f6
    skinparam RectangleBorderStyle<<ProdHomelab>> dashed

    rectangle "biggy" <<ProdHomelabBiggy>> as ProdHomelabBiggy {
      skinparam RectangleBorderColor<<ProdHomelabBiggy>> #3b82f6
      skinparam RectangleFontColor<<ProdHomelabBiggy>> #3b82f6
      skinparam RectangleBorderStyle<<ProdHomelabBiggy>> dashed

      rectangle "==Newt\\n<size:10>[Wireguard]</size>\\n\\nSite connector, installed per host as a systemd unit by infra.ansible." <<ProdHomelabBiggyNewt>> as ProdHomelabBiggyNewt
      rectangle "==Terraria" <<ProdHomelabBiggyTerraria>> as ProdHomelabBiggyTerraria
      component "==Periphery\\n\\nPer-host agent, installed as a systemd unit by infra.ansible." <<ProdHomelabBiggyPeriphery>> as ProdHomelabBiggyPeriphery
      rectangle "==Tailscale Agent\\n<size:10>[Wireguard]</size>" <<ProdHomelabBiggyTsAgent>> as ProdHomelabBiggyTsAgent
      rectangle "==File Browser Quantum" <<ProdHomelabBiggyFbq>> as ProdHomelabBiggyFbq
    }
    database "==snaszy\\n\\nSynology NAS. Not Komodo-managed; holds /volume1/backups and /volume1/docker." <<ProdHomelabNas>> as ProdHomelabNas
    rectangle "littlebuddy" <<ProdHomelabLittlebuddy>> as ProdHomelabLittlebuddy {
      skinparam RectangleBorderColor<<ProdHomelabLittlebuddy>> #3b82f6
      skinparam RectangleFontColor<<ProdHomelabLittlebuddy>> #3b82f6
      skinparam RectangleBorderStyle<<ProdHomelabLittlebuddy>> dashed

      component "==Periphery\\n\\nPer-host agent, installed as a systemd unit by infra.ansible." <<ProdHomelabLittlebuddyPeriphery>> as ProdHomelabLittlebuddyPeriphery
      rectangle "==Tailscale Agent\\n<size:10>[Wireguard]</size>" <<ProdHomelabLittlebuddyTsAgent>> as ProdHomelabLittlebuddyTsAgent
      rectangle "==Newt\\n<size:10>[Wireguard]</size>\\n\\nSite connector, installed per host as a systemd unit by infra.ansible." <<ProdHomelabLittlebuddyNewt>> as ProdHomelabLittlebuddyNewt
      rectangle "==Woodpecker" <<ProdHomelabLittlebuddyWoodpecker>> as ProdHomelabLittlebuddyWoodpecker
      rectangle "==Komodo MCP\\n\\nExposes the Komodo API to agents over MCP." <<ProdHomelabLittlebuddyKomodoMcp>> as ProdHomelabLittlebuddyKomodoMcp
      rectangle "==OpenProject" <<ProdHomelabLittlebuddyOpenproject>> as ProdHomelabLittlebuddyOpenproject
      rectangle "==Docuseal" <<ProdHomelabLittlebuddyDocuseal>> as ProdHomelabLittlebuddyDocuseal
      rectangle "==Paperless" <<ProdHomelabLittlebuddyPaperless>> as ProdHomelabLittlebuddyPaperless
      rectangle "==Forgejo\\n<size:10>[Gitea]</size>" <<ProdHomelabLittlebuddyForgejo>> as ProdHomelabLittlebuddyForgejo
      rectangle "==PostgreSQL\\n\\npostgres:18 on littlebuddy:6109, reached over the shared__postgres_db network." <<ProdHomelabLittlebuddyPostgres>> as ProdHomelabLittlebuddyPostgres
    }
    rectangle "bill" <<ProdHomelabBill>> as ProdHomelabBill {
      skinparam RectangleBorderColor<<ProdHomelabBill>> #3b82f6
      skinparam RectangleFontColor<<ProdHomelabBill>> #3b82f6
      skinparam RectangleBorderStyle<<ProdHomelabBill>> dashed

      rectangle "==Newt\\n<size:10>[Wireguard]</size>\\n\\nSite connector, installed per host as a systemd unit by infra.ansible." <<ProdHomelabBillNewt>> as ProdHomelabBillNewt
      component "==Periphery\\n\\nPer-host agent, installed as a systemd unit by infra.ansible." <<ProdHomelabBillPeriphery>> as ProdHomelabBillPeriphery
      rectangle "==Tailscale Agent\\n<size:10>[Wireguard]</size>" <<ProdHomelabBillTsAgent>> as ProdHomelabBillTsAgent
      rectangle "==ERPNext\\n<size:10>[Frappe]</size>" <<ProdHomelabBillErpnext>> as ProdHomelabBillErpnext
    }
    rectangle "paiki" <<ProdHomelabPaiki>> as ProdHomelabPaiki {
      skinparam RectangleBorderColor<<ProdHomelabPaiki>> #3b82f6
      skinparam RectangleFontColor<<ProdHomelabPaiki>> #3b82f6
      skinparam RectangleBorderStyle<<ProdHomelabPaiki>> dashed

      rectangle "==Newt\\n<size:10>[Wireguard]</size>\\n\\nSite connector, installed per host as a systemd unit by infra.ansible." <<ProdHomelabPaikiNewt>> as ProdHomelabPaikiNewt
      rectangle "==Media Library\\n\\nSeven products in one stack. Each is its own application." <<ProdHomelabPaikiMediaLib>> as ProdHomelabPaikiMediaLib
      rectangle "==Immich" <<ProdHomelabPaikiImmich>> as ProdHomelabPaikiImmich
      component "==Periphery\\n\\nPer-host agent, installed as a systemd unit by infra.ansible." <<ProdHomelabPaikiPeriphery>> as ProdHomelabPaikiPeriphery
      rectangle "==Tailscale Agent\\n<size:10>[Wireguard]</size>" <<ProdHomelabPaikiTsAgent>> as ProdHomelabPaikiTsAgent
    }
  }
}

ProdVultrRickPangolin .[#0ea5e9,thickness=2].> ProdVultrRickNewt : <color:#0ea5e9>WireGuard :51820\\n<size:8>[<color:#0ea5e9>WireGuard]</size>
ProdVultrRickHomarr .[#0ea5e9,thickness=2].> ProdVultrRickAuthentik : <color:#0ea5e9>authenticates users\\n<size:8>[<color:#0ea5e9>OIDC]</size>
ProdVultrRickDatabasus .[#b45309,thickness=2].> ProdVultrRickAuthentik
ProdVultrRickNewt .[#8D8D8D,thickness=2].> ProdVultrRickAuthentik : <color:#8D8D8D>authentik.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdVultrRickTsAgent .[#0ea5e9,thickness=2].> ProdVultrRickAuthentik : <color:#0ea5e9>exposes on the tailnet\\n<size:8>[<color:#0ea5e9>shared__ts-gateway]</size>
ProdVultrRickDatabasus .[#b45309,thickness=2].> ProdVultrRickInfisical
ProdVultrRickNewt .[#8D8D8D,thickness=2].> ProdVultrRickInfisical : <color:#8D8D8D>infisical.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdVultrRickTsAgent .[#0ea5e9,thickness=2].> ProdVultrRickInfisical : <color:#0ea5e9>exposes on the tailnet\\n<size:8>[<color:#0ea5e9>shared__ts-gateway]</size>
ProdVultrRickNewt .[#8D8D8D,thickness=2].> ProdVultrRickCore : <color:#8D8D8D>komo.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdVultrRickCore .[#15803d,thickness=2].> ProdVultrRickPeriphery : <color:#15803d>TLS :8120, pinned core public key
ProdVultrRickDatabasus .[#b45309,thickness=2].> ProdHomelabLittlebuddyPostgres
ProdVultrRickDatabasus .[#b45309,thickness=2].> ProdHomelabLittlebuddyForgejo
ProdVultrRickDatabasus .[#b45309,thickness=2].> ProdHomelabLittlebuddyPaperless
ProdVultrRickCore .[#8D8D8D,thickness=2].> ProdHomelabLittlebuddyForgejo : <color:#8D8D8D>syncs stack definitions
ProdHomelabLittlebuddyOpenproject .[#8D8D8D,thickness=2].> ProdHomelabLittlebuddyPostgres : <color:#8D8D8D>[PostgreSQL]
ProdHomelabLittlebuddyDocuseal .[#8D8D8D,thickness=2].> ProdHomelabLittlebuddyPostgres : <color:#8D8D8D>[PostgreSQL]
ProdHomelabLittlebuddyWoodpecker .[#0ea5e9,thickness=2].> ProdHomelabLittlebuddyForgejo : <color:#0ea5e9>OAuth2 login and repository access\\n<size:8>[<color:#0ea5e9>OIDC]</size>
ProdHomelabLittlebuddyNewt .[#8D8D8D,thickness=2].> ProdHomelabLittlebuddyForgejo : <color:#8D8D8D>fj.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdHomelabLittlebuddyNewt .[#8D8D8D,thickness=2].> ProdHomelabLittlebuddyWoodpecker : <color:#8D8D8D>peck.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdHomelabLittlebuddyNewt .[#8D8D8D,thickness=2].> ProdHomelabLittlebuddyKomodoMcp : <color:#8D8D8D>komodo-mcp.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdHomelabLittlebuddyNewt .[#8D8D8D,thickness=2].> ProdHomelabLittlebuddyOpenproject : <color:#8D8D8D>openprj.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdHomelabLittlebuddyNewt .[#8D8D8D,thickness=2].> ProdHomelabLittlebuddyDocuseal : <color:#8D8D8D>docuseal.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdHomelabLittlebuddyNewt .[#8D8D8D,thickness=2].> ProdHomelabLittlebuddyPaperless : <color:#8D8D8D>paper.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdHomelabLittlebuddyKomodoMcp .[#8D8D8D,thickness=2].> ProdVultrRickCore : <color:#8D8D8D>Komodo API
ProdHomelabBiggyTerraria .[#8D8D8D,thickness=2].> ProdHomelabBiggyFbq : <color:#8D8D8D>stores its world
ProdHomelabBiggyNewt .[#8D8D8D,thickness=2].> ProdHomelabBiggyFbq : <color:#8D8D8D>HTTP :18450\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdHomelabBiggyNewt .[#8D8D8D,thickness=2].> ProdHomelabBiggyTerraria : <color:#8D8D8D>raw TCP :18022\\n<size:8>[<color:#8D8D8D>TCP]</size>
ProdVultrRickDatabasus .[#b45309,thickness=2].> ProdHomelabBillErpnext
ProdVultrRickDatabasus .[#b45309,thickness=2].> ProdHomelabPaikiImmich
ProdHomelabPaikiNewt .[#8D8D8D,thickness=2].> ProdHomelabPaikiMediaLib : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdHomelabPaikiMediaLib .[#64748b,thickness=2].> ProdVultrRickInfisical : <color:#64748b>/stream\\n<size:8>[<color:#64748b>Infisical]</size>
@enduml
`;case`controlplane`:return`@startuml
title "Control Plane"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ProdVultrRickPangolin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickHomarr>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickDatabasus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickTsAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickNewt>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickAuthentik>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProdVultrRickInfisical>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<ProdVultrRickCore>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam component<<ProdVultrRickPeriphery>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ProdVultrRickZerobyte>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "rick" <<ProdVultrRick>> as ProdVultrRick {
  skinparam RectangleBorderColor<<ProdVultrRick>> #3b82f6
  skinparam RectangleFontColor<<ProdVultrRick>> #3b82f6
  skinparam RectangleBorderStyle<<ProdVultrRick>> dashed

  rectangle "==Pangolin" <<ProdVultrRickPangolin>> as ProdVultrRickPangolin
  rectangle "==Homarr" <<ProdVultrRickHomarr>> as ProdVultrRickHomarr
  rectangle "==Databasus" <<ProdVultrRickDatabasus>> as ProdVultrRickDatabasus
  rectangle "==Tailscale Agent\\n<size:10>[Wireguard]</size>" <<ProdVultrRickTsAgent>> as ProdVultrRickTsAgent
  rectangle "==Newt\\n<size:10>[Wireguard]</size>\\n\\nSite connector, installed per host as a systemd unit by infra.ansible." <<ProdVultrRickNewt>> as ProdVultrRickNewt
  rectangle "==Authentik" <<ProdVultrRickAuthentik>> as ProdVultrRickAuthentik
  rectangle "==Infisical" <<ProdVultrRickInfisical>> as ProdVultrRickInfisical
  component "==Core\\n\\nThe hub: holds stack definitions and drives every deploy." <<ProdVultrRickCore>> as ProdVultrRickCore
  component "==Periphery\\n\\nPer-host agent, installed as a systemd unit by infra.ansible." <<ProdVultrRickPeriphery>> as ProdVultrRickPeriphery
  rectangle "==Zerobyte\\n<size:10>[Restic]</size>" <<ProdVultrRickZerobyte>> as ProdVultrRickZerobyte
}

ProdVultrRickPangolin .[#0ea5e9,thickness=2].> ProdVultrRickNewt : <color:#0ea5e9>WireGuard :51820\\n<size:8>[<color:#0ea5e9>WireGuard]</size>
ProdVultrRickHomarr .[#0ea5e9,thickness=2].> ProdVultrRickAuthentik : <color:#0ea5e9>authenticates users\\n<size:8>[<color:#0ea5e9>OIDC]</size>
ProdVultrRickDatabasus .[#b45309,thickness=2].> ProdVultrRickAuthentik
ProdVultrRickNewt .[#8D8D8D,thickness=2].> ProdVultrRickAuthentik : <color:#8D8D8D>authentik.ktbcloud.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdVultrRickTsAgent .[#0ea5e9,thickness=2].> ProdVultrRickAuthentik : <color:#0ea5e9>exposes on the tailnet\\n<size:8>[<color:#0ea5e9>shared__ts-gateway]</size>
ProdVultrRickDatabasus .[#b45309,thickness=2].> ProdVultrRickInfisical
ProdVultrRickNewt .[#8D8D8D,thickness=2].> ProdVultrRickInfisical : <color:#8D8D8D>infisical.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdVultrRickTsAgent .[#0ea5e9,thickness=2].> ProdVultrRickInfisical : <color:#0ea5e9>exposes on the tailnet\\n<size:8>[<color:#0ea5e9>shared__ts-gateway]</size>
ProdVultrRickNewt .[#8D8D8D,thickness=2].> ProdVultrRickCore : <color:#8D8D8D>komo.ktbinternal.com\\n<size:8>[<color:#8D8D8D>HTTPS]</size>
ProdVultrRickCore .[#15803d,thickness=2].> ProdVultrRickPeriphery : <color:#15803d>TLS :8120, pinned core public key
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};