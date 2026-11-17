---
title: "プルリクエスト"
---

**プルリクエスト**（[[GitHub]] が2008年に導入）は、提案 → 議論 → レビュー → マージという中核的な仕組みです。人、Copilot Cloud Agent、Dependabot、エージェント型ワークフローによるコード変更を、`main` に入る前に検証します。

## プルリクエストレビューの構成

| 要素 | マージ前の役割 |
| --- | --- |
| **差分の提案** | [[PR Diff & File Views|PR の差分とファイル表示]]で head と base ブランチを比較し、[[Draft Pull Requests|ドラフトプルリクエスト]]や [[PR Templates & Issue Linking|PR テンプレートと Issue のリンク]]で早期に開始 |
| **人によるレビュー** | [[PR Review States|PR レビューの状態]]での判定、[[Inline Review Comments & Threads|インラインレビューコメントとスレッド]]での行単位の議論、コミット可能な [[Suggested Changes|変更提案]]、[[CODEOWNERS]] による割り当て |
| **AI レビュー** | 自動またはオンデマンドの [[Copilot Code Review]] が PR の概要、インラインコメント、修正パッチを提供 |
| **CI とステータスゲート** | [[PR Rulesets|PR ルールセット]]と [[Required Status Checks|必須ステータスチェック]]によって強制するビルド、テスト、サプライチェーンのチェック |
| **セキュリティと品質** | [[Code Scanning PR Merge Protection|コードスキャンによる PR マージ保護]]と [[Copilot Autofix in PRs|PR の Copilot Autofix]]による脆弱性ゲート、および [[Code Quality PR Findings|Code Quality の PR 指摘]]による保守性チェック |
| **取り込み** | [[Merge Methods|マージ方法]]、[[Auto-Merge|自動マージ]]、[[Stacked Pull Requests|積み重ねたプルリクエスト]]、[[Merge Queue|マージキュー]]、[[Agent Merge]] による制御された統合 |

## AI 時代のプルリクエスト

- **規模**：コーディングエージェントが開発者と並行してブランチを作成し、改善を繰り返すようになり、GitHub は2026年に**月間約9,000万件の PR マージ**を処理しています（従来の約2倍）。
- **責任分担**：自動チェックと [[Copilot Code Review]] が構文、null 安全性、スタイル、セキュリティのリグレッションを先に検出し、人のレビュアーはアーキテクチャ、ドメインロジック、マージ承認に集中できます。
