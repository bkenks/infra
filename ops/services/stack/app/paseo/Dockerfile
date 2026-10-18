# syntax=docker/dockerfile:1
# Agent CLIs on top of the published Paseo daemon image, which ships none.
# Both versions are pinned by build args that the stack's compose.yaml passes in.
ARG PASEO_VERSION
FROM ghcr.io/getpaseo/paseo:${PASEO_VERSION}

ARG CLAUDE_CODE_VERSION

# Leave the image user as root: the base entrypoint prepares the mounted volumes
# as root, then drops the daemon and every agent it launches to the non-root
# paseo user (uid/gid 1000).
USER root
RUN npm install -g @anthropic-ai/claude-code@${CLAUDE_CODE_VERSION}
