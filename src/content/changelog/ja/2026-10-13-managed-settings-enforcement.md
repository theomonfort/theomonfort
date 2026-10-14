---
title: "Enterprise 管理設定：起動時の強制更新とクライアントの最小バージョン"
date: "2026-10-13"
summary: "Copilot クライアントの起動時に、キャッシュではなく最新のサーバー管理設定の取得を必須にできるようになりました。sandbox キーでは、クライアントの最小バージョンも強制されます。"
category: administration
source: "https://github.blog/changelog/2026-10-13-enterprise-managed-settings-enforcement-updates/"
demo:
  - "theomonfort-org/.github-private → copilot/managed-settings.json を開き、sandbox キーと並んで \"forceRemoteSettingsRefresh\": true が設定されていることを見せる。"
---

### 覚えておきたいこと

- **強制更新**：`managed-settings.json` に `"forceRemoteSettingsRefresh": true`（JSON の Boolean）を設定。Copilot CLI、VS Code、GitHub Copilot App が対応。有効な間はキャッシュでは起動できないため、ポリシー変更が Copilot の起動前に反映されます。
- **フェイルクローズ**：最新のポリシーを確認できない場合、古いポリシーのまま動作しません。Copilot CLI は該当する操作を制限し、VS Code は更新が成功するまで Copilot 機能をブロック。起動時にネットワーク接続が必要です。
- **適用タイミング**：MDM やファイル配布なら、初回起動時（サインイン前）から適用。サーバー管理設定（`.github-private`）なら、一度受信した後の次回起動から適用。このキーがなければ、通常のキャッシュ（約 1 時間）を使用。
- **`sandbox` の最小バージョン**：管理設定に `sandbox` キーがある場合、古いクライアントは更新するまでブロックされます。VS Code 1.141.0、Copilot CLI 1.0.93、GitHub Copilot App 1.1.26。

[Playbook：Copilot managed settings（スライド 11）](https://theomonfort.github.io/theomonfort/playbook/governance/?present=1&slide=11)

[起動時に最新設定を必須にする（公式ドキュメント）](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/deploy-managed-settings#requiring-fresh-server-managed-settings-on-startup) / [forceRemoteSettingsRefresh リファレンス](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/enterprise-administrators/enterprise-managed-settings#forceremotesettingsrefresh) / [sandbox のクライアント最小バージョン](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/enterprise-administrators/enterprise-managed-settings#minimum-client-version-enforcement-for-sandbox)
