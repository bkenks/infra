# Docker Images

## Multi Platform Builds (MacOS)
**Prereqs:** Colima, Docker, Buildx

### Setup

#### 1. Colima

These settings worked for building linux/amd64 and linux/arm64 images.

```yaml
# ~/.colima/default/colima.yaml or ~/.colima/<your-profile-name>/colima.yaml

cpu: 4
disk: 100
memory: 4
arch: aarch64
runtime: docker
vmType: vz
rosetta: true  # allows fast amd64 building on MacOS
binfmt: true
nestedVirtualization: false
cpuType: ""
```

#### 2. Docker

**Log in to GHCR:**

```shell
gh auth token | docker login ghcr.io -u USER --password-stdin
```

**Create a multi-arch builder (one time only):**

```shell
docker buildx create --name multi --use
```

**Install other platforms for emulation:**

```shell
docker run --privileged --rm tonistiigi/binfmt --install all
```

**Build and push:**

*Can't store other platform images on host by default, so push completed builds right away*

```shell
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t "ghcr.io/USER/IMAGE:1.0.0" \
  -t "ghcr.io/USER/IMAGE:1" \
  -t "ghcr.io/USER/IMAGE:latest" \
  --push .
```