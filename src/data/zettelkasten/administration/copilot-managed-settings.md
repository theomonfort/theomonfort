---
title: "Copilot Managed Settings"
group: "governance"
tags: ["managed-settings", "copilot", "mdm", "sandbox", "mcp", "governance"]
aliases: ["managed-settings.json"]
---

**Copilot Managed Settings** (`managed-settings.json`, GA `2026-07-01`) let [[GitHub]] enterprise administrators enforce client policies top-down across Copilot CLI, VS Code, and the GitHub Copilot App, complementing [[Enterprise Governance]] and [[GitHub Well-Architected Guardrails]] (#19-#21).

## Three Deployment Methods & Strict Precedence (`MDM -> server-managed -> file -> user`)

1. **MDM Managed Preferences (`Highest`)**: Pushes dot-separated keys with string values via Intune/Jamf (for example, macOS `/Library/Managed Preferences/com.github.copilot.plist` inspected with `plutil -p`, such as `"remoteControl.mode" => "disabled"`).
2. **Server-Managed (`copilot/managed-settings.json`)**: Hosted in [[.github-private & Source Org]]; pushes to the default branch propagate within **~1 hour** (or immediately on client restart / re-sign-in) and support per-team specialization across [[Enterprise & Org Teams]].
3. **Device File-Based**: Placed at `/Library/Application Support/GitHubCopilot/managed-settings.json` on macOS; Copilot CLI reads it **only if owned by `root` and not group- or world-writable**.

## Managed Settings Key Reference & Override Behavior

| Key | Mode & GA Date | Enforced Client Behavior |
| --- | --- | --- |
| `model` & `autoTier` | `OVERRIDABLE` (`2026-09-02`) | Sets default conversation model (`auto` or specific model) and routing tier alongside [[Enterprise Policies]]; users can still switch per chat |
| `permissions.*` | `OVERRIDABLE` (`2026-09-09`) | Enforces `deny > ask > allow` rules using `Shell()`, `Read()`, `Edit()`, `Domain()` (e.g., `deny` `Shell(rm -rf *)`, `ask` `Shell(git push *)`, `allow` `Shell(npm test *)`; unlisted actions ask) + `disableBypassPermissionsMode` (blocks YOLO mode) |
| `sandbox` | `OVERRIDABLE` (`2026-07-29`) | Enforces local CLI/App workspace sandboxing: permits working folder, `git`/`gh`, and network while blocking `~/.ssh` and macOS Keychain; lock with `allowBypass: false` |
| `features.computerUse` | `LOCKED` (`2026-10-01`) | `false` disables desktop GUI clicking/typing in CLI and App (local settings cannot re-enable) |
| `enabledPlugins` & marketplaces | `ADDITIVE` / `OVERRIDABLE` (`2026-08-26`) | `enabledPlugins` (`true` auto-installs, `false` blocks); `extraKnownMarketplaces` (with `autoUpdate`); `strictKnownMarketplaces` (`[]` blocks all unlisted repos) |
| `allowedMcpServers` / `deniedMcpServers` | `OVERRIDABLE` (`2026-08-06`) | Match by URL (`*` wildcards) or command; `allowedMcpServers: []` allows built-ins like GitHub MCP only; `deniedMcpServers` wins even if listed in allowlist |
| `remoteControl`, `telemetry`, `forceRemoteSettingsRefresh` | `LOCKED` (`2026-07`) | Require SSO or disable remote session control (`2026-07-30`), export OpenTelemetry (`2026-07-08`), and force remote policy refresh |
