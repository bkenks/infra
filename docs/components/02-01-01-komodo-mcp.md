# komodo-mcp

Runs [MP-Tool's Komodo MCP Server](https://github.com/MP-Tool/komodo-mcp-server), exposing Komodo to MCP clients like Claude Code. Streamable-HTTP at **https://komodo-mcp.ktbinternal.com/mcp** (tailnet/LAN-only). Runs on **littlebuddy** alongside Komodo Core.

## Deploy

Deployed via Komodo. The image is upstream's on GHCR — verify the tag exists before bumping (`docker manifest inspect ghcr.io/mp-tool/komodo-mcp-server:<tag>`).

No stack secrets. Clients sign in with their own Komodo username and password through the server's browser login, and each session runs with that user's Komodo permissions. The login needs a local Komodo account; OIDC/GitHub login isn't supported yet.

Connect Claude Code (it opens the browser login on first use):

```bash
claude mcp add --transport http komodo https://komodo-mcp.ktbinternal.com/mcp
```
