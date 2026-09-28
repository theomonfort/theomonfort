---
title: "Copilot App / CLI がコンテンツ除外に対応"
date: "2026-09-02"
summary: "Copilot App / CLI が Enterprise、Organization、リポジトリのコンテンツ除外ポリシーに対応。エージェントの作業でも、除外ファイルをコンテキストに使わなくなります。"
category: security
status: "一般提供"
source: "https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli/"
---

### Agent mode でも使える？

- **Copilot App / CLI のエージェント作業は対象**：従来の対応するコード補完やチャットに加え、今回これらのエージェントツールにも対応が広がりました。
- **VS Code の Agent / Edit mode は別**：公式ドキュメントでは、VS Code などのエディター内のこれらのモードは引き続き対象外。すべての Copilot エージェントに対応したという意味ではありません。

### 覚えておきたいこと

- **Business / Enterprise 向け**：管理者が設定した除外ポリシーを App / CLI が尊重します。
- **ファイルアクセスを隔離する sandbox とは別**：Copilot がコンテキストに使う内容を制御する機能です。シンボリックリンク、リモートファイルシステム、IDE が間接的に渡す型情報などには、引き続きドキュメント上の制限があります。

[対応範囲と制限](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion) / [コンテンツ除外の設定](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot)
