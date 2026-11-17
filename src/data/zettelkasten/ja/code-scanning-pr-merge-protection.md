---
title: "Code Scanning による PR マージ保護"
---

**Code Scanning による PR マージ保護**は、`github-advanced-security[bot]` から脆弱性アラートを [[PR Diff & File Views]] に直接インライン投稿します。[[Pull Requests]]（[[GitHub]] 上）で確認でき、[[PR Rulesets]] で脆弱な変更のマージをブロックします。

## 1 つの PR ゲートに統合された 3 つの検出エンジン

| エンジン | 対応言語と脅威 | ライセンスと課金 |
| --- | --- | --- |
| **CodeQL** | C/C++、C#、Go、Java/Kotlin、JS/TS、Python、Ruby、Rust、Swift、GitHub Actions の `.yml` ワークフローを対象に意味的なデータフロー解析 | パブリックリポジトリは無料。プライベートリポジトリは **GitHub Code Security**（`$30 / active committer / month`） |
| **AI Scan** *（PR 向け）* | CodeQL 対応外の言語は **GA**。AI アプリやエージェントの間接プロンプトインジェクションと安全でないツール利用は**プレビュー** | Code Security + **Code Security AI Credits** |
| **Third-Party SARIF** | `github/codeql-action/upload-sarif@v3` を通じて SAST / コンテナー / IaC の結果を統合アラートビューへアップロード | ツールごとに同じ統合ルールセットのしきい値を適用 |

## マージゲートの適用

- **ルールセットが必要**: Code scanning は**単独では PR のマージをブロックしません**。管理者が [[PR Rulesets]] 内で **Require code scanning results** を有効にする必要があります（通常は `Security alerts: High or higher` と `Alerts: Errors` に設定）。
- **PR の段階でブロックする理由**: 業界データでは、**マージ後のセキュリティ負債のうち修正されるのは `10%` のみ**です。一方、PR 時点のアラートと [[Copilot Autofix in PRs]]、[[PR Dependency & Secret Gates]] を組み合わせれば、脆弱性が `main` に入る前に防止できます。

## 検出元となるセキュリティエンジン

- [[Code Scanning]]、[[CodeQL]]、[[AI Scan]]、[[Third-Party SARIF]] の検出結果を、[[Rulesets & Merge Protection]] とともに適用します。
