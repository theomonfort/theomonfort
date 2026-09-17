---
title: "VS Code Agents ウィンドウの利用を Metrics API で把握"
date: "2026-09-11"
summary: "Copilot usage metrics に、VS Code の専用 Agents ウィンドウの利用者数、セッション数、ユーザーメッセージ数が追加。Organization と Enterprise の導入状況を追えます。"
category: administration
status: "一般提供"
source: "https://github.blog/changelog/2026-09-11-add-vs-code-agents-to-copilot-usage-metrics/"
demo:
  - "専用 Agents ウィンドウと、通常のエディター内の Agent Mode を見比べる。今回の指標が対象にするのは前者のみ。"
  - "権限のある検証環境で 1 日と 28 日のレポートを取得し、集計レポートとユーザー別レポートの項目を確認する。実在ユーザーのデータを公開デモに出さない。"
  - "フィールドが欠けている、または null の場合を確認する。データがない状態を、利用者ゼロと同一視しない。"
---

### 「VS Code Agents」とは？

VS Code の **専用 Agents ウィンドウ** のことです。エージェントを中心に、複数のセッションやプロジェクトの作業を管理するための画面です。普段のエディターの Chat で使う **Agent Mode とは別** で、今回の指標もエディター内の Agent Mode や一般的な利用集計とは分けられています。

### 何が測れる？

- **Enterprise / Organization の集計レポート**：`daily_active_vscode_agent_users` は日ごとのユニーク利用者数。`totals_by_vscode_agent` には `session_count` と `total_user_messages` が入ります。
- **ユーザー別レポート**：`used_vscode_agent` は利用の有無。`totals_by_vscode_agent` で、そのユーザーのセッション数とメッセージ数を確認できます。
- **1 日、28 日の両方に対応。** 追加項目は任意で、対応するデータがなければ未出力または `null` のままです。

### 対象者と読み方

対象は導入率や利用傾向を把握したい管理者です。Enterprise owner / billing manager、Organization owner、または `View Copilot Metrics` を持つカスタムロールでアクセスでき、Copilot usage metrics policy の有効化が必要です。セッション数やメッセージ数は活動量であり、そのまま生産性や成果の評価にはなりません。

[Copilot usage metrics API](https://docs.github.com/rest/copilot/copilot-usage-metrics) / [VS Code のエージェント体験](https://code.visualstudio.com/docs/agents/overview)
