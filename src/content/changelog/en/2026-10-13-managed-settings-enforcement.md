---
title: "Enterprise managed settings: force refresh on startup and minimum client versions"
date: "2026-10-13"
summary: "Administrators can require Copilot clients to fetch current server-managed settings at startup instead of using a cached policy. The sandbox key now also enforces a minimum client version."
category: administration
source: "https://github.blog/changelog/2026-10-13-enterprise-managed-settings-enforcement-updates/"
demo:
  - "Open theomonfort-org/.github-private → copilot/managed-settings.json and show \"forceRemoteSettingsRefresh\": true alongside the sandbox key."
---

### Key takeaways

- **Force refresh**: set `"forceRemoteSettingsRefresh": true` (JSON Boolean) in `managed-settings.json`. Supported in Copilot CLI, VS Code, and the GitHub Copilot app. While active, a cached response cannot satisfy startup, so a policy change applies before Copilot starts.
- **Fails closed**: if the client cannot confirm the current policy, it does not run with a stale one. Copilot CLI restricts affected operations, and VS Code blocks Copilot features until the refresh succeeds. Users need a network connection at startup.
- **When it applies**: through MDM or file-based delivery, from the very first startup (before sign-in). Through server-managed settings (`.github-private`), from the next startup after the client has received it once. Without this key, clients keep the normal cache (about one hour).
- **Minimum version for `sandbox`**: when the `sandbox` key is in managed settings, users on older clients are blocked until they update: VS Code 1.141.0, Copilot CLI 1.0.93, GitHub Copilot app 1.1.26.

[Playbook: Copilot managed settings (slide 11)](https://theomonfort.github.io/theomonfort/en/playbook/governance/?present=1&slide=11)

[Requiring fresh settings on startup (official documentation)](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/deploy-managed-settings#requiring-fresh-server-managed-settings-on-startup) / [forceRemoteSettingsRefresh reference](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/enterprise-administrators/enterprise-managed-settings#forceremotesettingsrefresh) / [Minimum client versions for sandbox](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/enterprise-administrators/enterprise-managed-settings#minimum-client-version-enforcement-for-sandbox)
