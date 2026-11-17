---
title: "Copilot の管理設定"
---

**Copilot の管理設定**（`managed-settings.json`、`2026-07-01` に GA）は、[[GitHub]] の Enterprise 管理者が、[[Copilot CLI]]、[[Copilot in VS Code]]、[[GitHub Copilot App]] に対してクライアントポリシーを上位から適用する機能です。[[Enterprise Governance]]、[[Organization Instructions]]、[[GitHub Well-Architected Guardrails]]（#19～#21）を補完します。

## 3 つの展開方法と厳密な優先順位（`MDM -> server-managed -> file -> user`）

1. **MDM の管理設定（`Highest`）**: Intune / Jamf でドット区切りのキーと文字列値を配布します（macOS の `/Library/Managed Preferences/com.github.copilot.plist` を `plutil -p` で確認。例: `"remoteControl.mode" => "disabled"`）。
2. **サーバー管理（`copilot/managed-settings.json`）**: [[.github-private & Source Org]] に配置します。デフォルトブランチへのプッシュは**約 1 時間以内**、またはクライアントの再起動 / 再サインイン時に即座に反映されます。[[Enterprise & Org Teams]] でチーム別の設定にも対応します。
3. **デバイス上のファイル**: macOS では `/Library/Application Support/GitHubCopilot/managed-settings.json` に配置します。Copilot CLI は、**所有者が `root` で、グループや他のユーザーが書き込めない場合のみ**読み込みます。

## 管理設定キーの一覧と上書き動作

| キー | モードと GA 日 | クライアントに適用する動作 |
| --- | --- | --- |
| `model` と `autoTier` | `OVERRIDABLE`（`2026-09-02`） | [[Copilot Model Selection]] の既定の会話モデルと Auto ルーティングのティアを、[[Enterprise Policies]] とともに設定 |
| `permissions.*` | `OVERRIDABLE`（`2026-09-09`） | `deny > ask > allow` のルールを [[Tool Permissions & Sandbox]] で適用。`Shell()`、`Read()`、`Edit()`、`Domain()` と `disableBypassPermissionsMode` を使用 |
| `sandbox` | `OVERRIDABLE`（`2026-07-29`） | [[Local & Cloud Sandboxes]] を適用。ワークスペース、`git`/`gh`、ネットワークを許可し、`~/.ssh` と Keychain をブロック（`allowBypass: false`） |
| `features.computerUse` | `LOCKED`（`2026-10-01`） | `false` にすると、CLI と App で [[Computer Use]] によるデスクトップ GUI のクリック / 入力を無効化 |
| `enabledPlugins` とマーケットプレイス | `ADDITIVE` / `OVERRIDABLE`（`2026-08-26`） | プラグインを自動インストールまたはブロックし、[[Plugin Marketplaces & CLI]] で `strictKnownMarketplaces` を適用 |
| `allowedMcpServers` / `deniedMcpServers` | `OVERRIDABLE`（`2026-08-06`） | [[MCP Allowlist Governance]] で URL / コマンドの許可リストと拒否リストを適用 |
| `remoteControl`、`telemetry`、`forceRemoteSettingsRefresh` | `LOCKED`（`2026-07`） | [[Remote Agent Control]] の SSO を管理し、OpenTelemetry スパンを [[Copilot Metrics]] へ出力し、ポリシー更新を強制 |
