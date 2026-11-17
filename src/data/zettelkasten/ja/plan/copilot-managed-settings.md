---
title: "Copilot の管理設定"
---

**Copilot の管理設定**（`managed-settings.json`、`2026-07-01` に GA）は、Enterprise 管理者が [[GitHub]] Copilot CLI、VS Code、Copilot App のクライアント動作を上位から適用する機能です。

## 3 つの展開方法と優先順位（`MDM -> server-managed -> file -> user`）

1. **MDM（`com.github.copilot.plist`）**: 最優先です。Intune / Jamf でドット区切りのキーを配布します（`/Library/Managed Preferences/com.github.copilot.plist`）。
2. **サーバー管理（`copilot/managed-settings.json`）**: [[.github-private Repository]] に保存し、約 1 時間以内、またはクライアント再起動時に適用します。`teams/*.json` + `team-mappings.json` によるチーム別の上書きに対応します。
3. **ファイルベース（ディスク上の `managed-settings.json`）**: `/Library/Application Support/GitHubCopilot/` に配置します（CLI は所有者が `root` で、グループや他のユーザーが書き込めない場合のみ読み込みます）。

## 主なポリシー制御

- **モデル（`OVERRIDABLE`）**: [[Copilot Model Selection]] の既定の `model`（`2026-09-02`）と `autoTier`。
- **実行とホストの分離**: [[Tool Permissions & Sandbox]] の `permissions.*`、`sandbox`、`features.computerUse`（`LOCKED`）（[[Organization Instructions]] を補完）。
- **プラグイン（`ADDITIVE` / `OVERRIDABLE`）**: [[Plugin Marketplaces & CLI]] の `enabledPlugins`、`extraKnownMarketplaces`（`autoUpdate`）、`strictKnownMarketplaces`。
- **MCP（`OVERRIDABLE`）**: [[MCP Allowlist Governance]] の `allowedMcpServers` と `deniedMcpServers`。
- **デバイスと可観測性（`LOCKED`）**: `remoteControl`（SSO または無効）、`telemetry`（OpenTelemetry コレクターへの出力）、`forceRemoteSettingsRefresh`。
