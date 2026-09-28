---
title: "Enforce Advanced Security settings across organizations"
date: "2026-09-15"
summary: "Enterprise administrators can now prevent both organization and repository administrators from overriding enterprise security configurations. Previously, enforcement only restricted repository owners."
category: security
source: "https://github.blog/changelog/2026-09-15-enforce-github-advanced-security-configurations/"
---

### Enforcement options

In an enterprise security configuration, use the `Enforcement` dropdown:

- **`Don't enforce`**: authorized administrators can change the configured settings.
- **`Enforce for repository owners`**: repository owners cannot override the settings, but organization owners can.
- **`Enforce for repository and organization owners`**: the new option also prevents organization owners from overriding the settings, keeping enterprise security policies consistent.

[Security configurations (official documentation)](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage)
