---
title: "Copilot Managed Settings"
group: "admin"
tags: ["managed-settings", "copilot", "mdm", "sandbox", "mcp", "governance"]
aliases: ["managed-settings.json"]
---

**Copilot Managed Settings** (`managed-settings.json`, GA `2026-07-01`) let [[GitHub]] enterprise administrators enforce client policies top-down across [[Copilot CLI]], [[Copilot in VS Code]], and the [[GitHub Copilot App]], complementing [[Enterprise Governance]], [[Organization Instructions]], and [[GitHub Well-Architected Guardrails]] (#19-#21).

## Three Deployment Methods & Strict Precedence (`MDM -> server-managed -> file -> user`)

1. **MDM Managed Preferences (`Highest`)**: Pushes dot-separated keys with string values via Intune/Jamf (macOS `/Library/Managed Preferences/com.github.copilot.plist` inspected with `plutil -p`, e.g., `"remoteControl.mode" => "disabled"`).
2. **Server-Managed (`copilot/managed-settings.json`)**: Hosted in [[.github-private & Source Org]]; pushes to the default branch propagate within **~1 hour** (or immediately on client restart / re-sign-in) and support per-team specialization across [[Enterprise & Org Teams]].
3. **Device File-Based**: Placed at `/Library/Application Support/GitHubCopilot/managed-settings.json` on macOS; Copilot CLI reads it **only if owned by `root` and not group- or world-writable**.

## Managed Settings Key Reference & Override Behavior

| Key | Mode & GA Date | Enforced Client Behavior |
| --- | --- | --- |
| `model` & `autoTier` | `OVERRIDABLE` (`2026-09-02`) | Sets default conversation model and Auto routing tier in [[Copilot Model Selection]] alongside [[Enterprise Policies]] |
| `permissions.*` | `OVERRIDABLE` (`2026-09-09`) | Enforces `deny > ask > allow` rules in [[Tool Permissions & Sandbox]] using `Shell()`, `Read()`, `Edit()`, `Domain()` + `disableBypassPermissionsMode` |
| `sandbox` | `OVERRIDABLE` (`2026-07-29`) | Enforces [[Local & Cloud Sandboxes]]: permits workspace, `git`/`gh`, and network while blocking `~/.ssh` and Keychain (`allowBypass: false`) |
| `features.computerUse` | `LOCKED` (`2026-10-01`) | `false` disables desktop GUI clicking/typing in [[Computer Use]] across CLI and App |
| `enabledPlugins` & marketplaces | `ADDITIVE` / `OVERRIDABLE` (`2026-08-26`) | Auto-installs or blocks plugins and enforces `strictKnownMarketplaces` in [[Plugin Marketplaces & CLI]] |
| `allowedMcpServers` / `deniedMcpServers` | `OVERRIDABLE` (`2026-08-06`) | Enforces URL/command allowlists and denylists in [[MCP Allowlist Governance]] |
| `remoteControl`, `telemetry`, `forceRemoteSettingsRefresh` | `LOCKED` (`2026-07`) | Governs [[Remote Agent Control]] SSO, exports OpenTelemetry spans to [[Copilot Metrics]], and forces policy refresh |
