---
title: "Copilot Managed Settings"
group: "governance"
tags: ["managed-settings", "enterprise", "mdm", "governance"]
aliases: ["managed-settings.json"]
---

**Copilot Managed Settings** (`managed-settings.json`, GA `2026-07-01`) let enterprise administrators enforce client behavior top-down across [[GitHub]] Copilot CLI, VS Code, and the Copilot App.

## 3 Deployment Methods & Precedence (`MDM -> server-managed -> file -> user`)

1. **MDM (`com.github.copilot.plist`)**: Highest priority; pushes dot-separated keys via Intune/Jamf (`/Library/Managed Preferences/com.github.copilot.plist`).
2. **Server-Managed (`copilot/managed-settings.json`)**: Stored in the [[.github-private Repository]], applying within ~1 hour (or on client restart) with per-team overrides via `teams/*.json` + `team-mappings.json`.
3. **File-Based (`managed-settings.json` on disk)**: Placed in `/Library/Application Support/GitHubCopilot/` (CLI reads it only if owned by `root` and not group- or world-writable).

## Key Policy Controls

- **Models (`OVERRIDABLE`)**: `model` default (`2026-09-02`) and `autoTier` for [[Copilot Model Selection]].
- **Execution & Host Isolation**: `permissions.*`, `sandbox`, and `features.computerUse` (`LOCKED`) in [[Tool Permissions & Sandbox]] (complementing [[Organization Instructions]]).
- **Plugins (`ADDITIVE` / `OVERRIDABLE`)**: `enabledPlugins`, `extraKnownMarketplaces` (`autoUpdate`), and `strictKnownMarketplaces` in [[Plugin Marketplaces & CLI]].
- **MCP (`OVERRIDABLE`)**: `allowedMcpServers` and `deniedMcpServers` in [[MCP Allowlist Governance]].
- **Device & Observability (`LOCKED`)**: `remoteControl` (SSO or disabled), `telemetry` (OpenTelemetry collector export), and `forceRemoteSettingsRefresh`.
