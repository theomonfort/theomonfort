---
title: "Universe セキュリティまとめ：検出、優先順位付け、修正"
date: "2026-10-28"
summary: "6 つの更新をまとめて紹介。Copilot app のセキュリティ拡張、AI による push protection、AI アプリとリポジトリ全体のスキャン、public monitoring、Dependabot の到達可能性分析。"
category: security
event: universe-2026
status: "GA とパブリックプレビュー"
source: "https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app"
---

### Copilot app で確認から修正まで

**セキュリティ拡張（パブリックプレビュー）**：code scanning アラートを一覧し、説明や修正を依頼。`/security-review` でローカルの変更も確認できます。修正は作業コピーに留まり、自動でコミットや push はしません。プライベートリポジトリのアラートには Code Security と閲覧権限が必要です。Explain、Fix、レビューは AI クレジットを消費します。

### 検出範囲の拡大

- **AI 検出シークレットの push protection（パブリックプレビュー）**：コードの文脈から、既知の形式がないシークレットもブロック。既定はオフで、AI-detected secrets と push protection の有効化が必要です。github.com の Secret Protection または Advanced Security を持つ組織向け。この push 時の検出は AI クレジットを消費し、push 後の AI シークレットアラートは引き続き料金に含まれます。
- **AI アプリの code scanning（パブリックプレビュー）**：間接的プロンプトインジェクション、機密情報の開示、過剰な権限や自律性を PR で検出。github.com で Advanced Security とスキャンの有効化が必要です。GHES は対象外です。
- **リポジトリ全体の AI Scan（パブリックプレビュー）**：既定ブランチの最新コミットを対象に、言語やフレームワークをまたいで CodeQL を補完。Copilot ライセンスは不要ですが、Code Security AI クレジットを消費します。組織所有の private / internal リポジトリには Code Security または Advanced Security が必要で、個人所有の private リポジトリは対象外です。**修正をマージした後、解決済みアラートを閉じるには再スキャンが必要です。**

### リスクに優先順位を付ける

- **Public monitoring（GA）**：GitHub 上の公開コンテンツから企業のシークレット流出を検出。他者のプライベートリポジトリはスキャンしません。データ所在地を含む Enterprise Cloud の Secret Protection / Advanced Security に含まれます。所属メンバーや検証済みドメインで企業に関連付け、データ所在地環境では検証済みドメインのみを使います。
- **Dependabot の到達可能性分析（パブリックプレビュー）**：JavaScript / TypeScript のコードから脆弱な依存関数を呼び出せるかを表示。データ所在地を含む Enterprise Cloud 向けで、npm、Yarn、pnpm のいずれかのロックファイルが必要です。既定はオフ。プレビュー中は管理された Actions 実行も含め無料です。**「Potentially reachable」は到達可能として扱います。** 判定だけでアラートを閉じることはありません。

### 6 つの公式発表

- [Copilot app のセキュリティ拡張](https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app)
- [既知のパターンを超える push protection](https://github.blog/changelog/2026-10-28-push-protection-beyond-predefined-secret-patterns)
- [AI アプリの code scanning](https://github.blog/changelog/2026-10-28-code-scanning-for-ai-applications-in-public-preview)
- [リポジトリ全体の AI Scan](https://github.blog/changelog/2026-10-28-ai-scan-for-repositories-in-public-preview)
- [Enterprise の public monitoring](https://github.blog/changelog/2026-10-28-public-monitoring-for-enterprises-generally-available)
- [Dependabot の到達可能性分析](https://github.blog/changelog/2026-10-28-prioritize-dependabot-alerts-with-reachability-analysis)
