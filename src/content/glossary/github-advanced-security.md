---
title: GitHub Advanced Security
titleEn: GitHub Advanced Security (GHAS)
summary: コード・シークレット・依存関係の脆弱性を自動で検出する GitHub のセキュリティ製品群。Code Scanning、Secret Protection、Dependabot を含む、AI 時代の "安全弁"。
icon: /theomonfort/github-white-icon.svg
color: amber
order: 19
category: secure
related: ['github-actions', 'agentic-workflow']
links:
  - label: GitHub Advanced Security
    url: https://github.com/security/advanced-security
  - label: Code Scanning ドキュメント
    url: https://docs.github.com/code-security/code-scanning
---

GitHub Advanced Security (GHAS) は、開発フローに統合されたセキュリティ機能群。**Code Scanning** (CodeQL によるコード脆弱性検出)、**Secret Protection** (シークレット漏洩検出)、**Dependabot** (依存関係の脆弱性アラート・自動更新) を提供する。

**AI駆動開発における意味:**
- **AI が書いたコードの安全網** — Copilot や Cloud Agent が生成したコードも例外なくスキャンされ、脆弱性は PR 上で即座に指摘される。
- **シフトレフト** — 本番にデプロイする前、コミット段階で問題を発見。AI による開発速度の向上に対し、品質と安全性を担保する。
- **自動修正の提案** — Copilot Autofix が CodeQL の検出結果に対して修正パッチを自動生成。検出から修復までを AI で完結。

**主な機能:**
- **Code Scanning (CodeQL)** — セマンティック解析による脆弱性検出。SAST。
- **Secret Protection** — Push protection でシークレットのコミット自体をブロック。
- **Dependabot** — 脆弱な依存パッケージを検出し、修正 PR を自動作成。
- **Copilot Autofix** — 検出された脆弱性に AI が修正案を提示。
