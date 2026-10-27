---
title: "Copilot impact dashboard：同業他社とエージェント活用を比較"
date: "2026-10-22"
summary: "同程度の企業規模や同じ業種の集計ベンチマークと、エージェント活用率や PR マージ率の比率を比較できます。参加はオプトイン方式で、既定では無効です。"
category: administration
source: "https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard/"
---

### 何を比較できる？

- **Agentic adoption**：アクティブユーザーのうち、agent-first または multi-agent に分類されるユーザーの割合。
- **Leverage**：エージェントを活用するユーザーの PR マージ率が、活用していないユーザーと比べてどの程度高いか。
- **他社ベンチマーク**：28 日間のレポート期間について、比較対象グループの中央値と自社スコアを比較。参加企業が増えると、上位 10% のベンチマークやランキングも表示されます。
- **企業規模と業種**：比較対象を選び、自社の業種と全業種を切り替えられます。同業種の参加数が不足する場合は、同じ企業規模の全業種へ比較対象を広げ、実際に使ったグループを表示します。

### どこで確認する？

[Octodemo Enterprise](https://github.com/enterprises/octodemo) で **Insights → Copilot impact → Industry comparison** を開きます。

Enterprise オーナーはウィジェットから参加を開始し、**Industry type** と **Company size** を選択して確定します。ウィジェットと **Copilot metrics industry comparison** ポリシーは同じ設定を操作します。**Copilot usage metrics** ポリシーも有効である必要があります。

### 押さえておきたい制約

参加すると、集計メトリクスの提供と比較結果の閲覧の両方が有効になります。オプトアウトすると比較表示は即時に停止し、次の日次更新からデータが除外されます。集計ベンチマークに識別情報は含まれず、30 日後に削除されます。

比較対象が少ない場合や自社スコアを計算できない場合、ランキングは表示されません。**比較結果はダッシュボード限定**で、usage metrics API、NDJSON エクスポート、ダウンロードには含まれません。

Enterprise と Enterprise に属さない Organization が参加できます。Enterprise 配下の Organization は Enterprise 経由で参加します。Copilot Business ライセンスの割り当て専用 Enterprise は対象外です。データ所在地を利用する場合、同じリージョン内だけで比較します。

[Copilot impact dashboard の利用手順](https://docs.github.com/en/copilot/how-tos/administer-copilot/view-impact-dashboard)
