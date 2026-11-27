---
title: "Repository insights で Copilot code review の結果を確認"
date: "2026-11-17"
summary: "リポジトリごとに Copilot code review の指摘がどのように対応されたか、レビューが不足している箇所はどこかを確認できます。"
category: review
source: "https://github.blog/changelog/2026-11-17-track-copilot-code-review-outcomes-in-repository-insights/"
demoLinks:
  - label: "Octodemo → Repository insights"
    url: "https://github.com/octodemo/JPKR-Revenue-Management/insights"
demo:
  - "Octodemo の Repository insights ページを開き、Copilot code review セクションを確認する。プライベートリポジトリへのアクセス権が必要です。"
  - "指摘への対応率、フィードバックのカテゴリ、Copilot のレビューなしでマージされた PR を比較する。"
---

### 確認できること

リポジトリの **Insights** タブにある新しい **Repository insights** ページで、次の情報をまとめて確認できます。

- 対応された Copilot のレビューコメント（重大度の高いコメントを含む）。
- Copilot がレビューした後、人による変更リクエストがなかった PR。
- Copilot のレビューなしでマージされた PR。
- 対応率の推移と内訳（フィードバックのカテゴリや評価対象外のコメントを含む）。

同じ指標は、Enterprise / Organization の Copilot usage metrics `repos-1-day` レポートでも利用できます。

### 利用条件

Organization 所有のリポジトリで、読み取り権限があれば Repository insights を利用できます。Copilot code review セクションには、**Copilot usage metrics** と **Copilot code review** の両方のポリシーを有効にする必要があります。データが表示されるまで数日かかる場合があります。

[Repository insights のドキュメント](https://docs.github.com/en/copilot/how-tos/administer-copilot/view-repository-insights) / [Copilot usage metrics API](https://docs.github.com/en/rest/copilot/copilot-usage-metrics)
