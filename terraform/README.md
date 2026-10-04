# infra.terraform

OpenTofu-managed infrastructure for the homelab. Complements `infra.ansible`: tofu provisions infrastructure objects, Ansible configures the OS on them.

> 📚 Where this fits in the homelab (the IaC split, host topology) lives in Notion → [*Architecture — How It All Connects*](https://app.notion.com/p/37931e9a948a819380e7e9ef7d90cf8c) and [*Repositories — where homelab code lives*](https://app.notion.com/p/37931e9a948a81e58edfeebf2d31a0c1). This file covers only `infra.terraform`: how to use it and its conventions.

## Prerequisites

- OpenTofu >= 1.10
- fnox with 1Password access to the `secrets` vault — `fnox.toml` supplies provider credentials and the R2 state credentials

## Usage

```bash
tofu -chdir=docker init -backend-config=../r2.s3.tfbackend
tofu -chdir=docker plan
tofu -chdir=docker apply
```

Swap `docker` for `vultr` or `cloudflare`.

## State

Each root stores state in the Cloudflare R2 bucket `tofu-state` under `<root>/terraform.tfstate`, locked with an S3 lockfile. Shared backend settings live in `r2.s3.tfbackend`; each root's `backend "s3"` block holds only its key.
