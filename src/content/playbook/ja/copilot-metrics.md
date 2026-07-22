---
title: Copilot Metrics
titleEn: Copilot Metrics
summary: GitHub Copilot の利用状況・効果を可視化するメトリクス API とダッシュボード。Organization / Enterprise レベルで集計・確認できる。
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
related: ['agentic-workflow', 'copilot-memory']
links:
  - label: Copilot Metrics API
    url: https://docs.github.com/en/rest/copilot/copilot-metrics
  - label: Reviewing Copilot usage data
    url: https://docs.github.com/en/copilot/concepts/billing/organizations-and-enterprises
  - group: 📰 Recent Changelog
    label: "Team-level Copilot usage metrics via API (2026-05-14)"
    url: https://github.blog/changelog/2026-05-14-team-level-copilot-usage-metrics-now-available-via-api
  - group: 📰 Recent Changelog
    label: "Cloud Agent fields added to usage metrics (2026-04-23)"
    url: https://github.blog/changelog/2026-04-23-copilot-cloud-agent-fields-added-to-usage-metrics
  - group: 📰 Recent Changelog
    label: "Plan mode is now included in Copilot metrics (2026-03-02)"
    url: https://github.blog/changelog/2026-03-02-copilot-metrics-now-includes-plan-mode
  - group: 📰 Recent Changelog
    label: "利用状況メトリクスの精度・カバレッジ改善 [GA] (2026-07-06)"
    url: https://github.blog/changelog/2026-07-06-improved-accuracy-and-coverage-in-copilot-usage-metrics-reports
  - group: 📰 Recent Changelog
    label: "Copilot metrics is now generally available (2026-02-27)"
    url: https://github.blog/changelog/2026-02-27-copilot-metrics-is-now-generally-available
---

## 一言で

<div class="hero-quote hero-quote-team">
  <p>
    <strong>Copilot Metrics</strong> は、GitHub Copilot の利用状況と効果を可視化する仕組み。
  </p>
  <p>
    Organization / Enterprise レベルで利用データを集計・確認でき、API エンドポイントとダッシュボードの両方で閲覧できる。
  </p>
</div>

## 概要

Copilot Metrics は GA 済み。精度・カバレッジが改善された利用状況レポートが提供されており、Organization / Enterprise レベルで集計・確認できる。

- **ダッシュボード**：GitHub.com 上で利用状況の傾向をグラフで確認。
- **REST API**：<a class="retro-link" href="https://docs.github.com/en/rest/copilot/copilot-metrics" target="_blank" rel="noopener noreferrer">Copilot Metrics API ↗</a> で、プログラムからデータを取得・分析。
- **チームレベル対応**：Organization 全体だけでなく、チーム単位でもメトリクスを取得可能。
- **Cloud Agent 対応**：Cloud Agent の利用状況も metrics フィールドに含まれる。
