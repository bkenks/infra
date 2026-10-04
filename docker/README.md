# Stacks

Docker Compose stacks/projects defining all docker infrastructure.

[Architecture Diagram](https://diagram.ktbcloud.com)

## Specification

### General

- **Platform**: Docker
- **Configuration Language**: Pkl

### Naming

- **Model**: A/HC/LC

**Example:**
```
shape      T1 strict                                T2 file                                      T3 label
none       repo-infra-stacks-local                  repo_infra-stacks_local                      REPO · Infra Stacks · Local
ordinal2   repo-infra-stacks-local-01               repo_infra-stacks_local_01                   REPO · Infra Stacks · Local 01
ordinal3   repo-infra-stacks-local-001              repo_infra-stacks_local_001                  REPO · Infra Stacks · Local 001
date       repo-infra-stacks-local-20260830         repo_infra-stacks_local_2026-08-30           REPO · Infra Stacks · Local 2026-08-30
semver     repo-infra-stacks-local-v1-0-0           repo_infra-stacks_local_v1.0.0               REPO · Infra Stacks · Local v1.0.0
rolling    01-01-01-repo-infra-stacks-local         01-01-01_repo_infra-stacks_local             01-01-01 · REPO · Infra Stacks · Local
revision   repo-infra-stacks-local-r1               repo_infra-stacks_local_r1                   REPO · Infra Stacks · Local r1

encoding   name                                     targets
kebab      repo-infra-stacks-local                  T1, CLI flags, docker, branches, TS files
snake      repo_infra_stacks_local                  python, bash, ansible, yaml, toml, terraform, sql
screaming  REPO_INFRA_STACKS_LOCAL                  env vars, constants
camel      repoInfraStacksLocal                     go unexported, JS/TS, k8s yaml, JS json
pascal     RepoInfraStacksLocal                     go exported, classes, types, components
dot        repo.infra.stacks.local                  docker labels, property paths
```