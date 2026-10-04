---
display_name: Default Workspace
description: Provision Docker container workspaces on the Coder host with a persistent home volume, code-server, and Claude Code
icon: /icon/docker.svg
tags: [docker, container, claude-code]
---

# Default Workspace

Provisions each workspace as a Docker container on the same host that runs the Coder
control plane (`src/tools/coder`). The container joins the `coder-workspaces` Docker
network so the agent reaches the Coder server without leaving the host, and mounts a
per-workspace volume at `/home/coder` that survives stop/start and template updates.

Ships with code-server, Claude Code, optional git clone on start, dotfiles, and a
personalize hook.

## Prerequisites

- The Coder stack from `src/tools/coder` running, with `/var/run/docker.sock` mounted
  into the `coder-app` container.
- The `coder-workspaces` Docker network, created by that same stack.
- Outbound network access from the workspace container to pull registry modules,
  code-server, and the Claude Code CLI.

## Architecture

| Resource                    | Lifetime                                                          |
| --------------------------- | ----------------------------------------------------------------- |
| `docker_volume.home`        | Persistent. Named `coder-<workspace_id>-home`, never destroyed by attribute changes. |
| `docker_container.workspace` | Ephemeral. Created on start, destroyed on stop.                  |
| `coder_agent.main`          | Ephemeral. Runs inside the container, seeds `/etc/skel` on first start. |

The container runs `codercom/enterprise-base:ubuntu` by default. Override with the
`image` Terraform variable at push time.

## Claude Code authentication

The `claude_code_oauth_token` Terraform variable is optional and marked sensitive. Leave
it unset and developers authenticate the CLI interactively on first use; set it at push
time to pre-authenticate every workspace.

Generate the token on a machine where you can complete the browser login, then push it:

```bash
claude setup-token

coder templates push default \
  -d src/tools/coder/templates/default/ \
  --variable claude_code_oauth_token="<token>"
```

> [!WARNING]
> The token is stored in the template's variable values on the Coder deployment and is
> handed to every workspace built from this template. It authenticates as the Claude.ai
> account that generated it, and usage counts against that account's limits. Prefer
> interactive per-developer login, or Coder AI Gateway, if that is not acceptable.

## Repository parameter

`repo_url` is a mutable workspace parameter. When set, the `git-clone` module clones the
repository on start and both code-server and Claude Code open in the cloned directory.
When empty, both open in `/home/coder`.
