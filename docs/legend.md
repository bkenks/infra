# Networking

## Access Direction

- **egress**: Host reaches the network.
- **ingress**: Network reaches a service on the host.
- **bidirectional**: Both egress and ingress

## Routing

- **subnet router / routing peer**: Node that exposes a non-mesh LAN to the mesh.
- **exit node**: Node that routes other nodes' internet traffic.
- **tunnel / connector**: Outbound-initiated link that exposes a service without opening inbound ports (e.g. Cloudflare Tunnel).

## Security

- **ACL / Policy**: Rules for which nodes can reach which nodes/ports.
- **Tag**: Label on a node, used in ACLs instead of per-device rules.

## Networks

### Types

#### Mesh

- **node / peer**: Any device joined to the mesh. Can reach and be reached by others (bidirectional).
- **agent**: Software installed on a node to join it to the mesh.
- **coordination server / control plane**: Distributes keys, identities, and peer lists. Does not carry traffic.
- **relay**: Forwards traffic when two nodes cannot connect directly (e.g. NAT blocks it).
