---
title: "Security Configurations"
group: "secure"
tags: ["rollout", "governance", "enterprise", "bridge"]
---

Enabling security repository by repository breaks down past a few dozen projects. **Security Configurations** let [[GHAS]] administrators roll out [[Secret Protection]], [[Code Security]], [[Code Scanning]] ([[Default vs Advanced Setup]]), and [[Dependabot]] across thousands of repositories from a single policy.

## Rollout Capabilities

- **GitHub-recommended or custom**: Start from GitHub's preset or build custom configurations differentiating Tier-1 production services from internal prototypes.
- **Auto-apply to new repos**: Automatically attach configurations whenever developers create new public, private, or internal repositories.
- **Policy enforcement**: Lock settings so individual repository admins cannot silently disable [[Push Protection]] or [[Secret Scanning Alerts]], and verify rollout completion in [[Security Overview]].
