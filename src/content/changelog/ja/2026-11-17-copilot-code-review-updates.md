---
title: "Copilot コードレビュー：Adaptive、シークレット検出など"
date: "2026-11-17"
summary: "PR ごとにレビューの深さを自動選択し、他の公開リポジトリを参照して、漏えいしたシークレットを検出できます。Azure Repos 向けコードレビューも一般提供になりました。"
category: review
status: "パブリックプレビュー / 一般提供"
source: "https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more/"
---

### 主な更新

- **Adaptive（パブリックプレビュー）**：PR の複雑さとリスクに応じて Lite、Balanced、Max を選択し、使用したレビューの深さを表示します。PR ごと、または個人、リポジトリ、Organization、Enterprise の既定値として選択できます。既定は引き続き Balanced で、Adaptive は設定された最大の深さを超えません。
- **リポジトリをまたぐコンテキスト（パブリックプレビュー）**：公開リポジトリのレビュー時に、関連する公開リポジトリを読み取り、依存するコード、ドキュメント、カスタム指示、スキルを参照できます。
- **シークレット検出（パブリックプレビュー）**：既知の形式の検出と AI / ML により、漏えいした認証情報をレビューで指摘します。リポジトリまたは Organization の Settings → Copilot → Code review で有効にします。
- **Repository insights**：リポジトリの Insights → Repository insights で、Copilot のレビュー指摘がどのように対応されたかを確認できます。
- **Azure Repos（一般提供）**：手動またはブランチポリシーで Copilot のレビューを依頼し、カスタム指示やスキルを使えます。利用量は、連携した Azure サブスクリプションに GitHub AI クレジットで請求されます。

Adaptive、リポジトリをまたぐコンテキスト、シークレット検出は、Copilot Pro、Pro+、Max、Business、Enterprise で利用できます。

[Copilot コードレビューの設定](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review) / [Repository insights の発表](https://github.blog/changelog/2026-11-17-track-copilot-code-review-outcomes-in-repository-insights/) / [Azure DevOps の設定](https://learn.microsoft.com/azure/devops/repos/git/copilot-code-reviews)
