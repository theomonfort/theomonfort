---
title: "Copilot の管理設定"
---

**Copilot の管理設定**（`managed-settings.json`、`2026-07-01` に GA）は、[[GitHub]] の Enterprise 管理者が、Copilot CLI、VS Code、GitHub Copilot App に対してクライアントポリシーを上位から適用する機能です。[[Enterprise Governance]] と [[GitHub Well-Architected Guardrails]]（#19～#21）を補完します。

## 3 つの展開方法と厳密な優先順位（`MDM -> server-managed -> file -> user`）

1. **MDM の管理設定（`Highest`）**: Intune / Jamf でドット区切りのキーと文字列値を配布します（例: macOS の `/Library/Managed Preferences/com.github.copilot.plist` を `plutil -p` で確認し、`"remoteControl.mode" => "disabled"` のように設定）。
2. **サーバー管理（`copilot/managed-settings.json`）**: [[.github-private & Source Org]] に配置します。デフォルトブランチへのプッシュは**約 1 時間以内**、またはクライアントの再起動 / 再サインイン時に即座に反映されます。[[Enterprise & Org Teams]] でチーム別の設定にも対応します。
3. **デバイス上のファイル**: macOS では `/Library/Application Support/GitHubCopilot/managed-settings.json` に配置します。Copilot CLI は、**所有者が `root` で、グループや他のユーザーが書き込めない場合のみ**読み込みます。

## 管理設定キーの一覧と上書き動作

| キー | モードと GA 日 | クライアントに適用する動作 |
| --- | --- | --- |
| `model` と `autoTier` | `OVERRIDABLE`（`2026-09-02`） | 既定の会話モデル（`auto` または特定モデル）とルーティングのティアを [[Enterprise Policies]] とともに設定。ユーザーはチャットごとに切り替え可能 |
| `permissions.*` | `OVERRIDABLE`（`2026-09-09`） | `deny > ask > allow` のルールを `Shell()`、`Read()`、`Edit()`、`Domain()` で適用（例: `deny` `Shell(rm -rf *)`、`ask` `Shell(git push *)`、`allow` `Shell(npm test *)`。未指定の操作は確認）。さらに `disableBypassPermissionsMode` で YOLO モードをブロック |
| `sandbox` | `OVERRIDABLE`（`2026-07-29`） | ローカル CLI / App のワークスペースをサンドボックス化。作業フォルダー、`git`/`gh`、ネットワークを許可し、`~/.ssh` と macOS Keychain をブロック。`allowBypass: false` で固定 |
| `features.computerUse` | `LOCKED`（`2026-10-01`） | `false` にすると CLI と App のデスクトップ GUI クリック / 入力を無効化（ローカル設定で再有効化できない） |
| `enabledPlugins` とマーケットプレイス | `ADDITIVE` / `OVERRIDABLE`（`2026-08-26`） | `enabledPlugins`（`true` は自動インストール、`false` はブロック）、`extraKnownMarketplaces`（`autoUpdate` 付き）、`strictKnownMarketplaces`（`[]` は未指定のリポジトリをすべてブロック） |
| `allowedMcpServers` / `deniedMcpServers` | `OVERRIDABLE`（`2026-08-06`） | URL（`*` ワイルドカード）またはコマンドで照合。`allowedMcpServers: []` は GitHub MCP などの組み込みのみを許可。許可リストに含まれていても `deniedMcpServers` が優先 |
| `remoteControl`、`telemetry`、`forceRemoteSettingsRefresh` | `LOCKED`（`2026-07`） | SSO を必須にするかリモートセッション制御を無効化（`2026-07-30`）、OpenTelemetry を出力（`2026-07-08`）、リモートポリシーの更新を強制 |
