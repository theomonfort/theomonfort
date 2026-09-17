---
title: "Actions のキャッシュ権限を cache-mode で制御"
date: "2026-09-10"
summary: "ワークフローやジョブごとに、キャッシュの復元と保存を制限できます。必要最小限の権限で、キャッシュ汚染のリスクを減らすための設定です。"
category: actions
status: "一般提供"
source: "https://github.blog/changelog/2026-09-10-control-github-actions-cache-access-with-cache-mode/"
demo:
  - "デモは未検証。テスト用ワークフローで read、write-only、none を指定し、復元と保存の可否を確認する。"
  - "ジョブ単位の指定がワークフロー単位より優先されることと、再利用ワークフローに渡せる権限の上限を確認する。"
  - "pull_request_target などの低信頼イベントには、デモのためだけに書き込み権限を追加しない。"
---

### 4 つのモード

- **`read`**：復元のみ。保存は禁止。`pull_request_target` などの低信頼イベントの既定値。
- **`write`**：復元と保存の両方を許可。「保存のみ」ではない点に注意。`push` などの信頼されたイベントの既定値。
- **`write-only`**：保存のみ。復元は禁止。
- **`none`**：復元も保存も禁止。

### ここがポイント

ジョブ設定はワークフロー設定より優先されます。制限はキャッシュサービス側で強制され、再利用ワークフローにも引き継がれます。呼び出される側に、呼び出し元が許可した以上の権限を渡すことはできません。

**明示的な指定は、安全な既定値も上書きします。** 低信頼イベントで `write` や `write-only` を指定するとキャッシュ汚染のリスクが増すため、警告が表示されます。未指定なら従来の安全な既定値が維持されます。github.com の全プランで一般提供です。

[cache-mode のワークフロー構文（公式ドキュメント）](https://docs.github.com/actions/reference/workflows-and-actions/workflow-syntax#cache-mode)
