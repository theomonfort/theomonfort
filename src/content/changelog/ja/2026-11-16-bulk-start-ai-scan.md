---
title: "AI Scan を複数リポジトリで一括実行"
date: "2026-11-16"
summary: "最大 20 リポジトリの AI Scan を一度に開始できます。"
category: security
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-11-16-bulk-start-ai-scan-for-repositories/"
demoLinks:
  - label: "theomonfort-org → Global security settings"
    url: "https://github.com/organizations/theomonfort-org/settings/security_analysis"
  - label: "theomonfort-org → Code scanning alerts (bulk AI Scan)"
    url: "https://github.com/orgs/theomonfort-org/security/alerts/code-scanning"
demo:
  - "Code scanning で AI Scan for repositories が無効なら有効化する。Organization の code scanning アラート一覧で右上の AI scan をクリックし、最大 20 リポジトリを選ぶ。"
---

### 覚えておきたいこと

- **対象**：デフォルトブランチをスキャンし、検出結果を CodeQL のアラートと同じ一覧に表示します。
- **コスト**：Copilot ライセンスは不要ですが、スキャンごとに Code Security AI credits を消費します。
