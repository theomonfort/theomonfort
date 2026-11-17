---
title: "ルールセットとマージ保護"
---

**ルールセットとマージ保護**は、リポジトリ、Organization、Enterprise の各レベルにおける [[GitHub]] の統一されたポリシーゲートです。暗黙の規律に頼らず、保護ブランチにコードが入る前に、プルリクエストでセキュリティと健全性のチェックを直接強制します。

## 製品を横断するゲート

- [[GitHub Actions]]：[[Workflows & Triggers|ワークフローとトリガー]]内の自動ユニットテストや Playwright E2E テストスイートが失敗すると、`Require status checks to pass` がマージをブロックします。Actions ポリシーは [[Workflow Lockfiles|ワークフローのロックファイル]]を強制します。
- [[Secret Protection]]：ブランチに未解決の [[Secret Scanning Alerts|シークレットスキャンアラート]]（誤検出の多い [[Provider & Generic Patterns|プロバイダーパターンと汎用パターン]]を含む）があると、`Require secret scanning results` が PR マージをブロックし、コミット時の [[Push Protection|プッシュ保護]]を補完します。
- [[Code Scanning|コードスキャン]]：`Require code scanning results` は、[[CodeQL]]、[[AI Scan]]、[[Third-Party SARIF|サードパーティーの SARIF]]が `High` または `Critical` の脆弱性を検出するとマージをブロックします。
- [[Dependabot]]：[[Dependency Review|依存関係レビュー]]のチェックと Enterprise の [[Open Source License Compliance|オープンソースライセンスのコンプライアンス]]ポリシーを適用します（**Evaluate モード**で影響を安全に試してから **Active** のブロックに切り替え可能）。
- [[Code Quality]]：プルリクエストに信頼性、保守性、[[Quality Score & Coverage|品質スコアとカバレッジ]]のしきい値を適用します。評価から始める段階的な展開にも対応します。
