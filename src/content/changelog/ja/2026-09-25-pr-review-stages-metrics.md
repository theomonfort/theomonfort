---
title: "Usage metrics API に PR レビュー段階別の所要時間を追加"
date: "2026-09-25"
summary: "リポジトリ単位の Copilot usage metrics に PR レビュー段階別の所要時間が追加。レビュー待ち、レビュー中、承認後マージ待ちのどこで時間がかかっているかを、中央値と 90 パーセンタイルで把握できます。"
category: administration
source: "https://github.blog/changelog/2026-09-25-usage-metrics-api-adds-pull-request-review-stages/"
---

### 何が測れる？

Enterprise / Organization の `repos-1-day` レポートの各行に `pull_request_review_times` 配列が追加されました。3 つの段階それぞれについて、**中央値**と **90 パーセンタイル**（分単位）を返します。

- **Ready for review → 最初のレビュー**：誰かが見てくれるまでの待ち時間。
- **最初のレビュー → 最後のレビュー**：レビュアーとのやり取りにかかる時間。1 回のレビューで終わった場合は `0`。
- **最後のレビュー → マージ**：承認後、マージされずに残っている時間。

`authored_by` / `reviewed_by`（今回はどちらも `human`）、対象の件数 `total_merged` も含まれます。所要時間は **マージされた日** に計上され、既存の `pull_requests` フィールドは変わりません。

### 覚えておきたいこと

- **人のレビューだけを計測**：人が作成し、作成者以外の人が 1 人以上レビューした PR が対象。Copilot code review、その他の bot、作成者自身のレビューは除外されます。そのため `total_merged` は通常 `pull_requests.total_merged` より少なくなります。
- **バックフィルなし**：データはリリース日以降のみ。2026 年 9 月 21 日より前に ready for review になった PR は対象外です。
- **空配列はゼロではない**：対象 PR がマージされなかった日は `[]` になります。
- **利用条件**：Copilot usage metrics policy の有効化が必要。Enterprise owner / billing manager、Organization owner、または `View Copilot Metrics` を持つカスタムロールでアクセスできます。

[Copilot usage metrics API](https://docs.github.com/rest/copilot/copilot-usage-metrics)
