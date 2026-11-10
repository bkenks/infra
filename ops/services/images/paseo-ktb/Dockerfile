FROM ghcr.io/getpaseo/paseo:latest

COPY --from=ghcr.io/jdx/mise:2026.10.4 /usr/local/bin/mise /usr/local/bin/mise

USER root

RUN apt-get update \
&& apt-get -y --no-install-recommends install ca-certificates git \
&& rm -rf /var/lib/apt/lists/*

ENV MISE_DATA_DIR="/mise"
ENV MISE_CONFIG_DIR="/mise"
ENV MISE_CACHE_DIR="/mise/cache"
ENV PATH="/mise/shims:$PATH"

RUN npm install -g @anthropic-ai/claude-code @opencode/cli

RUN mise use -g gh fd rg