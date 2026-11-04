---
title: "Agent Merge がクラウドで PR を監視して修正"
date: "2026-10-28"
summary: "PR のマージ欄から Watch and fix を有効化。失敗した Actions ワークフローやマージ競合を監視し、選択した問題が発生すると Copilot がクラウドで修正します。"
category: review
event: universe-2026
status: "有料 Copilot プラン"
source: "https://github.blog/changelog/2026-10-28-agent-merge-watches-and-fixes-pull-requests-in-the-cloud"
---

### マージ欄から設定

- **Watch and fix**：Actions ワークフローの失敗、マージ競合、または両方を選択。対象の問題が発生するとクラウド開発環境で修正を開始します。
- **自分の PR の既定にする**：Copilot settings で有効化すると、自分が作成する PR を継続的に監視できます。
- **エディターの外でも利用**：Copilot app と VS Code に続き、GitHub 上の PR に直接統合されました。

### 修正とマージは別

Agent Merge は PR をマージ可能な状態に保ちます。**Auto-merge は別の設定**です。要件を満たした後のマージも任せたい場合に有効化します。必須レビューやチェックは引き続き適用されます。

クラウドの Agent Merge には有料 Copilot プランが必要で、Organization と Enterprise のポリシーに従います。
