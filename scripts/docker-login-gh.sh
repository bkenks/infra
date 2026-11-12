# Logs into docker via GitHub CLI
# USAGE: `source ./<script>`
gh auth token | docker login ghcr.io -u USER --password-stdin