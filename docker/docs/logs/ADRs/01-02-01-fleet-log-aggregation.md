# 01-02-01 Fleet logs go to VictoriaLogs, collected by Vector off the docker socket

## Decision

`platform/monitoring/victorialogs` runs one VictoriaLogs on `littlebuddy`, published on
`19428` without a `host_ip` so the rest of the fleet can reach it over the `.internal`
zone. `platform/monitoring/log-agent` runs one Vector per host; it tails the docker
socket and ships every container's stdout/stderr to that instance.

The UI is exposed through Pangolin: the store joins `newt_gw_001` like every stack and the
resource targets `victorialogs-logs:9428`. The published port is for ingest only, since a
docker network does not span hosts. The agent exposes nothing and opts out of the gateway.

Retention is 90 days (`-retentionPeriod=90d`). The sink endpoint is
`registry.endpoint.serviceGroup.victorialogs`, so moving the store to another host is one
line in the registry.

Both services carry `komodo.skip`, so `StopAllContainers` leaves the pipeline running.

## Why

Komodo reads logs live off the daemon. When a container crash-loops, Komodo recreates it
and the previous container — along with its `json-file` log — is gone, which is exactly
the window worth reading.

VictoriaLogs over Loki: a single Go binary with no object storage, no index tuning and no
chunk lifecycle to operate. It has its own query UI, so nothing else has to be stood up to
read a log.

**Vector over the `loki`/`fluentd` docker log drivers.** A log driver writes from inside
the container's own lifecycle: in blocking mode it stalls the container when the sink is
down, and in non-blocking mode it drops silently. Vector reads the socket from outside, so
a container's fate and its logs' fate are separate, and Vector's own disk buffer (256 MiB,
`when_full: block`) covers a VictoriaLogs outage.

**Vector over vlagent**, the first-party agent: vlagent collects from Kubernetes pods and
from file globs. Pointing it at `/var/lib/docker/containers/*/*-json.log` would yield log
lines keyed by container id and nothing else. Vector's `docker_logs` source attaches
`container_name`, `image`, `stream` and container labels, which is what makes a crash loop
searchable after the fact.

**The store is on a home host, not the VPS.** A home host has lower uptime, but the
failure modes do not line up with this workload: agents and store share a LAN, so an
internet outage does not interrupt ingestion at all, and a power outage stops the
containers that would have been writing logs anyway. Against that, a VPS turns every home
internet blip into a buffering event for every agent, charges for the tens of GB that 90
days of fleet logs occupy, and puts container stdout — which leaks tokens and request
paths — outside the house.

If outage-window visibility is ever wanted, the fix is a second sink on the agent
replicating to the VPS with short retention, not moving the store.

`host` is overwritten in a `remap` transform from the `HOST` deploy variable, because
`docker_logs` fills it from the container's own hostname — the same string on every host.
`host,container_name` are the log stream fields, so one container's history is one stream
across restarts.
