---
title: "Security overview で AI Scan の指標を確認"
date: "2026-10-13"
summary: "Organization と Enterprise の security overview で、PR 向け AI Scan の検出数、解決数、修復率、Autofix 提案の適用状況を確認できるようになりました。"
category: security
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-10-13-code-scanning-ai-scan-metrics-in-security-overview/"
demoUrl: "https://github.com/orgs/octodemo/security/metrics/codeql?view=ai-scan"
demo:
  - "octodemo の Security and quality → Insights → Code scanning on pull requests を開き、CodeQL と AI Scan のタブを切り替える。"
  - "AI Scan タブで検出数（Autofix 提案あり / なし）、解決数と修復率、リポジトリ別の内訳、期間内のトレンドを見せる。日付ピッカーで期間を変える。"
---

### 覚えておきたいこと

- **ページ名と構成の変更**：「CodeQL pull requests」は「Code scanning on pull requests」に名称変更され、**CodeQL** と **AI Scan** のタブに分かれました。これまでの指標は CodeQL タブにあります。
- **AI Scan タブの指標**：検出数（Autofix 提案あり / なし）、解決数、修復率、検出のあったリポジトリ、選択期間のトレンド、開発者が Autofix 提案を適用した頻度。
- **使い道**：個々の PR を確認せずに AI Scan の効果と開発者の対応状況を把握し、展開範囲や投資の判断材料にできます。
- **提供範囲**：GitHub Code Security または GitHub Advanced Security の利用者向けのパブリックプレビュー。github.com（GitHub Enterprise Cloud を含む）で利用でき、GitHub Enterprise Server は対象外です。AI Scan タブはまだ CSV エクスポートに対応していません。

AI Scan の有効化を API で管理する方法は [9 月 10 日の AI Scan API](#2026-09-10-ai-scan-api) を参照。

[PR のコードスキャン指標の確認（公式ドキュメント）](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-metrics-for-pull-request-alerts) / [AI Scan for PR](https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections) / [AI Scan Community discussion](https://github.com/orgs/community/discussions/201543)
