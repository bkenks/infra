# komodo-mcp

Runs [MP-Tool's Komodo MCP Server](https://github.com/MP-Tool/komodo-mcp-server), exposing Komodo to MCP clients like Claude Code. Streamable-HTTP at **https://komodo-mcp.ktbinternal.com/mcp** (tailnet/LAN-only). Runs on **littlebuddy** alongside Komodo Core.

## Deploy

Deployed via Komodo. The image comes from the self-hosted mirror — verify the tag exists there before bumping (`docker manifest inspect fj.ktbcloud.com/bkenks/komodo-mcp-server:<tag>`).

Secrets: `fnox.toml`, 1Password item `komodo-mcp`. `KOMODO_MCP_BASICAUTH_USERS` is a htpasswd string (`htpasswd -nbB user pass` → `user:hash`); the plaintext password goes in the MCP client's `Authorization: Basic` header. To restrict access, issue a read-only Komodo API key.

Connect Claude Code:
```bash
claude mcp add --transport http komodo https://komodo-mcp.ktbinternal.com/mcp \
  --header "Authorization: Basic <base64-of-user:pass>"
```
