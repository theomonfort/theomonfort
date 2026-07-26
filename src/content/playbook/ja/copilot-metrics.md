---
title: Copilot Metrics
titleEn: Copilot Metrics
summary: ダッシュボードと API で Copilot の導入、活用、コード生成、開発フローへの効果を把握する。
icon: /theomonfort/icons/copilot-metrics.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#9bbc0f"
order: 18
category: operate
related: ['github-copilot', 'governance', 'usage-based-billing']
links:
  - group: 📖 公式ドキュメント
    label: GitHub Copilot usage metrics
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/copilot-usage-metrics/copilot-metrics
  - group: 📖 公式ドキュメント
    label: Copilot usage metrics REST API
    url: https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-usage-metrics
  - group: 📖 公式ドキュメント
    label: Copilot Impact Dashboard の表示
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/view-impact-dashboard
  - group: 📖 公式ドキュメント
    label: 利用状況と導入メトリクスの読み方
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/copilot-usage-metrics/interpret-copilot-metrics
  - group: 📖 公式ドキュメント
    label: チーム単位の Copilot usage metrics
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/copilot-usage-metrics/team-level-metrics
  - group: 📰 発表
    label: "Copilot usage metrics impact dashboard (2026-07-22)"
    url: https://github.blog/changelog/2026-07-22-new-copilot-usage-metrics-impact-dashboard
  - group: 📰 発表
    label: "API に AI 導入フェーズを追加 (2026-05-29)"
    url: https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption
---

## 一言で

<div class="hero-quote hero-quote-green">
  <p>
    <strong>Copilot Metrics</strong> は、製品テレメトリと Pull Request の活動を導入状況と開発効果のストーリーに変える。
  </p>
  <p>
    <strong>意思決定にはダッシュボード</strong>、<strong>自動化、独自 BI、履歴管理には API</strong> を使う。
  </p>
</div>

> 🎯 アクティブユーザー数だけで判断しない。導入、活用、コード生成、Pull Request の流れを組み合わせて見る。

## 何を測る?

| シグナル | 例 | 分かること |
| --- | --- | --- |
| 👥 導入 | DAU、WAU、導入フェーズ | 誰がどの深さで使っているか |
| 💬 活用 | Chat リクエスト、モード、Agent | どのワークフローが定着しているか |
| ✅ 受け入れ | 提案数、採用数、採用率 | 出力が有用で信頼されているか |
| 🧱 コード生成 | 提案、追加、削除された行数 | どれだけ AI が編集を支援したか |
| 🔀 開発フロー | PR 作成、マージ、中央値のマージ時間 | 導入とスループットの関係 |

## UI と API のデータ期間

| 画面または API | 参照できる期間 | 主な用途 |
| --- | --- | --- |
| Usage metrics dashboard | 過去 **28 日** の推移 | 日々の導入と機能利用の確認 |
| Impact dashboard | **6 か月** の Cohort と PR 推移 | 経営向け説明と Enablement |
| 日次 API report | 2025 年 10 月 10 日以降、最大 **1 年** | BI 連携と期間比較 |
| 最新 28 日 API report | 直近 **28 日** | Enterprise または User の概要 |
| NDJSON export | 自社ストレージで保持 | GitHub の期間を超える独自分析 |

## API の要点

新しい連携には Copilot usage metrics API を使う。Enterprise、Organization、User、Repository、Team 結合用の report を期限付き署名 URL で取得できる。

```text
GET /enterprises/{enterprise}/copilot/metrics/reports/enterprise-1-day?day=YYYY-MM-DD
GET /enterprises/{enterprise}/copilot/metrics/reports/users-1-day?day=YYYY-MM-DD
GET /enterprises/{enterprise}/copilot/metrics/reports/user-teams-1-day?day=YYYY-MM-DD
GET /orgs/{org}/copilot/metrics/reports/organization-1-day?day=YYYY-MM-DD
```

- Enterprise: Owner、Billing Manager、または **View Enterprise Copilot Metrics** 権限
- Token scope: `read:enterprise` または `manage_billing:copilot`
- Organization: Owner または **View Organization Copilot Metrics** 権限と `read:org`

> ⚠️ 署名付き URL は期限内にダウンロードする。Seat と License の正本には Metrics ではなく User management API を使う。

## ★ Copilot Impact Dashboard

**2026 年 7 月 22 日**にリリース。導入の深さと Pull Request の成果を結び付け、次に行う Enablement を提案する。

| Cohort | 意味 |
| --- | --- |
| Passive | フェーズ判定の基準に未到達 |
| Phase 1: Code first | Completion または IDE Agent mode |
| Phase 2: Agent first | GitHub ベースの Agent を 1 種類利用 |
| Phase 3: Multi-agent | 複数 Agent または Copilot app を利用 |

- フェーズ割合、1 人あたり PR マージ数、マージ速度、LoC、**6 か月の推移**
- Engaged と Passive を比較する **adoption multiplier** と次の Enablement
- 過去 **28 日** を基にフェーズを毎日再計算

## 数字を正しく読む

収集方法と集計範囲を理解すると、メトリクスをより正確に解釈できる。

- データは通常、対象日の終了から **UTC で丸 2 日以内** に利用できる
- IDE telemetry が機能別と LoC の詳細を提供し、server-side signal が Active User の集計を補完する
- GitHub.com の Copilot Chat と GitHub Mobile の利用は含まれない
- Organization report は所属に基づくため同じ User が複数 Organization に現れ、Enterprise 合計では重複排除される
- Organization 単位の report は **2025 年 12 月 12 日** 以降
- IDE telemetry がなくても Pull Request metrics が存在する場合がある

> ⚠️ Metrics は展開、ツール、Enablement の改善に使う。個人の開発者を順位付けするために使わない。
