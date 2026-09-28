---
title: "Copilot code review が PR を承認可能に"
date: "2026-09-01"
summary: "すべての Copilot レビューに承認可否の評価を表示。管理者は実際の承認も有効化でき、マージに必要な承認数へ含めるかを選べます。"
category: review
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests/"
---

### 覚えておきたいこと

- **評価と承認は別**：概要コメントに Copilot の判断が表示されますが、それだけではマージ要件を満たしません。実際の承認は**既定でオフ**です。
- **新しいコミットには再レビューが必要**：追加コミットを push すると Copilot の承認は取り消されます。改めてレビューを依頼して、新しい承認を得ます。
- **対象プラン**：Copilot Pro、Pro+、Max、Business、Enterprise のパブリックプレビュー。

### 設定方法

対象リポジトリに適用される階層で設定します。

1. **Enterprise 配下の場合**：`AI controls → Copilot code review` を開き、`Allow Copilot to approve pull requests` を `Let organizations decide` に設定（特定の Organization だけを有効にすることも可能）。
2. **Organization 配下の場合**：`Settings → Copilot → Code review → Approvals` を開き、`Count Copilot approvals toward merge requirements` を `Let repositories decide` に設定。
3. **Repository**：`Settings → Copilot → Code review → Auto-approval` で `Allow Copilot to approve pull requests` を有効化。
4. **承認数に含めたい場合**：別途 `Allow Copilot approvals to count toward merge requirements` も有効化。承認を投稿する設定と、マージ要件に数える設定は別です。
5. **対象を絞る**：`File paths` に `docs/**` などの glob を 1 行ずつ入力。承認がカウントされるには、**変更されたすべてのファイル**がいずれかの glob に一致する必要があります。空欄なら全ファイルが対象。最大 15 個まで設定できます。

[設定手順（公式ドキュメント）](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review)
