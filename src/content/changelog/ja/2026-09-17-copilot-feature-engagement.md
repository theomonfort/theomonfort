---
title: "Copilot impact dashboard に機能別の利用状況を追加"
date: "2026-09-17"
summary: "開発者がどの Copilot 機能を継続的に使っているか、ダッシュボードと Enterprise / Organization のレポート API で確認できます。"
category: administration
source: "https://github.blog/changelog/2026-09-17-copilot-impact-dashboard-now-shows-feature-engagement/"
---

### 覚えておきたいこと

- **画面で確認できる**：機能ごとに、**28 日間のうち 2 日以上**利用したアクティブユーザー数を表示。追加のトレーニングが必要な機能を見つけやすくなります。
- **機能別の内訳**：コード補完、agent edit、コードレビュー（active / passive）、cloud agent、CLI、app。同じユーザーが複数の機能にカウントされる場合があります。
- **API も更新**：`copilot_feature_engagement` で同じ件数を 28 日間の集計レポートに追加。ユーザー別レポートは対象外。`users_in_phase_28d` は当日の利用者だけでなく、各 AI adoption phase に属する直近 28 日間の全ユーザー数を返します。
- **利用条件**：Copilot usage metrics policy の有効化が必要。Enterprise owner / billing manager、Organization owner、または `View Copilot Metrics` を持つカスタムロールでアクセスできます。

[Copilot usage metrics API](https://docs.github.com/rest/copilot/copilot-usage-metrics)
