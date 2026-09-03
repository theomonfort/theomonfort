---
title: コード品質
titleEn: Code Quality
summary: GitHub Code Quality は CodeQL と AI で信頼性・保守性の問題をマージ前に検出し、修正提案、カバレッジと品質スコアの可視化、ルールセットによる品質ゲートまで提供する。
icon: 🩺
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.5
category: secure
related: ['code-scanning', 'github-advanced-security', 'copilot-code-review']
links:
  - group: 📖 公式ドキュメント
    label: GitHub Code Quality
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-quality/code-quality
  - group: 📖 公式ドキュメント
    label: CodeQL-powered analysis for Code Quality
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/reference/code-quality/codeql-detection
  - group: 📖 公式ドキュメント
    label: Preventing code quality issues before merge
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/improve-code-quality/catch-issues-before-merge
  - group: 📖 公式ドキュメント
    label: Enabling GitHub Code Quality
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/enable-code-quality
  - group: 📖 公式ドキュメント
    label: Code scanning
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/code-scanning
  - group: 💰 料金
    label: GitHub Code Quality billing
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/product-billing/github-code-quality
  - group: 📰 発表
    label: "GitHub Code Quality is now generally available (2026-07-20)"
    url: https://github.blog/changelog/2026-07-20-github-code-quality-is-now-generally-available/
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Code Quality</strong> は、信頼性・保守性の問題が将来の技術的負債になる前に止める仕組み。
  </p>
  <p>
    <strong>CodeQL ルール + AI 解析</strong> で検出し、PR で修正を提案、リポジトリの健全性をスコア化し、品質基準を満たさないマージも防げる。
  </p>
</div>

## 2 層の解析

Code Quality は、再現性の高いルールと、幅広い AI の推論を組み合わせる。

| 解析 | 検出するもの | 表示場所 |
| --- | --- | --- |
| 🔬 **CodeQL ルール** | 既知の信頼性・保守性アンチパターン | `github-code-quality[bot]` の PR コメント + default branch の finding |
| 🤖 **AI 解析** | 固定ルール外の設計・命名・ベストプラクティス・文脈上の問題 | 変更コードに対する Copilot コメント |

- ルールベースの finding は **Error / Warning / Note** で分類され、可能な場合は Autofix が付く
- AI 解析は、CodeQL の品質クエリがまだ対応していない言語やパターンも対象にできる
- default branch では既存の品質負債、PR では新しい品質負債を検出

> 💡 AI finding は決定論的ルールを補完するもの。単独では PR をブロックしない。

## Code Quality と Code Scanning の違い

どちらも CodeQL と Autofix を使うが、解決する課題が異なる。

| | 🩺 **Code Quality** | 🛡️ **Code Scanning** |
| --- | --- | --- |
| 主目的 | 信頼性・保守性・効率・カバレッジ | セキュリティ脆弱性・コーディングエラー |
| 代表例 | 無意味な条件、危険な設計、ループ内 DB クエリ | SQL injection、XSS、path traversal、危険な data flow |
| 解析 | CodeQL 品質ルール + AI 検出 | CodeQL セキュリティクエリ、または SARIF 対応ツール |
| 可視化 | 品質スコア、カバレッジ、PR finding、バックログ | セキュリティアラート、severity、CWE、Security overview |
| マージ制御 | ruleset の品質・カバレッジしきい値 | code scanning check とセキュリティのマージ保護 |
| 製品モデル | 独立した有料製品 | public repo は無料、private repo は Code Security が必要 |

> 🔑 両方使う。Code Scanning は悪用可能なリスク、Code Quality は長期的なコードの健全性を守る。

## マージ前に修正

品質負債を直す最適なタイミングは、PR の文脈がまだ新鮮な間。

1. PR でルールベース解析と AI 解析を実行。
2. 説明と修正提案付きの finding をインライン表示。
3. Autofix の適用、理由付き dismiss、または Copilot への修正委任を選択。
4. 品質ゲートを設定している場合、必要な finding が解消されるまでマージをブロック。

GitHub 社内では、Code Quality finding の **67.3% を PR のマージ前に解消** している。

> ⚡ PR 内で解消すれば、後日修正専用の PR を作らずに済み、default branch のバックログも増えない。

## 品質を測定・強制

GA では、組織横断の可視化と、強制可能な品質基準が追加された。

- 📊 **Repository / Organization dashboard** — リポジトリ横断で reliability と maintainability score を確認
- 🧪 **PR のカバレッジ** — 既存の Cobertura XML を表示し、カバレッジの増減を確認
- 🚧 **Ruleset の品質ゲート** — finding severity やカバレッジしきい値でマージをブロック
- 🧭 **Evaluate mode** — 強制前に品質ゲートの影響を確認
- 🤖 **バックログ修正** — Autofix を適用、または大きな修正を Copilot cloud agent に委任
- 🔌 **API** — リポジトリの有効化と finding の取得を自動化

> 🎯 Dashboard で品質負債の場所を把握し、ruleset で新たな負債の追加を止める。

## 有効化と展開

小さく始め、しきい値を調整してから Organization 全体へ展開する。

```text
Enterprise: Code Quality の利用を許可
Organization: Settings → Code quality → Repository access
Repository: Settings → Code quality → Enable code quality
```

- 決定論的な CodeQL scan は Actions workflow で動くため、GitHub Actions が必要
- 選択した repo、または動的 filter で対象を絞って pilot を実施
- 既存テストの Cobertura XML を upload してカバレッジを表示
- ruleset は Evaluate mode で確認してからマージブロックへ移行
- GitHub-hosted runner または label 付き self-hosted runner を利用可能

> 💡 全 Organization へ展開して課金とゲートを有効にする前に、代表的な repo で試す。

## GA の利用条件と料金

Code Quality は **2026 年 7 月 20 日** に GA となった。

| コスト | 計測方法 |
| --- | --- |
| 💺 基本ライセンス | **active committer 1 人あたり月額 $10**。有効化された repo に直近 90 日以内に commit が push されると active |
| 🤖 AI 機能 | AI 検出と Copilot-powered 機能は **GitHub AI credits** を消費 |
| ⚙️ 決定論的 scan | self-hosted runner を使わない場合、CodeQL workflow が **GitHub Actions minutes** を消費 |

- **GitHub Enterprise Cloud と GitHub Team** で利用可能
- GitHub Advanced Security に含まれない、補完関係にある独立製品
- 複数 repo に貢献しても Organization 全体で 1 人として計上。GitHub App bot は対象外
- AI 検出と Autofix に Copilot 契約は不要。Copilot への修正委任は Copilot ライセンスが必要
- GA 時点では GitHub Enterprise Server は対象外

> 💰 広範囲に有効化する前に対象 repo を確認する。Code Quality を有効化して利用すると課金が発生する。
