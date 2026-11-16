---
title: "Workflow Lockfiles"
group: "secure"
tags: ["actions", "supply-chain", "lockfiles", "security"]
aliases: ["actions.lock", "Actions Workflow Lockfiles"]
---

**Workflow Lockfiles** (GA) bring deterministic supply-chain pinning to [[GitHub Actions]], letting [[Workflows & Triggers]] keep human-readable tags like `actions/checkout@v4` while executing the exact reviewed commit SHA.

## How `actions.lock` Works

- **Immutable resolution**: Running `gh actions-lock` generates `.github/workflows/actions.lock`, recording each direct and transitive dependency from [[Marketplace Actions]] alongside its exact commit SHA, `owner_id`, and `repo_id`. If a tag moves upstream, GitHub Actions still runs the locked commit.
- **CI verification**: `gh actions-lock --verify` checks that workflows and lockfiles agree without modifying files.
- **[[Dependabot]] integration**: [[Dependabot Alerts & Updates]] updates both the workflow tag and the matching `actions.lock` SHA together in a single pull request.
- **Gradual policy rollout**: Organization and enterprise admins can enforce `Require lockfile` under `Settings > Actions > Policies`, starting in **`Evaluate`** mode (inspecting Policy insights) before switching to **`Active`** blocking alongside [[Rulesets & Merge Protection]].
