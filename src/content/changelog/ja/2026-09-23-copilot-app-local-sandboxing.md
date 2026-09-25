---
title: "Copilot App にローカルサンドボックス"
date: "2026-09-23"
summary: "Copilot App のローカルリポジトリ / ワークツリーセッションで、ファイル、ネットワーク、認証情報へのアクセスをプロジェクトごとに制限できます。"
category: copilot
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app/"
---

### 覚えておきたいこと

- **既定はオフ**：設定 → 対象プロジェクト → Sandbox → Sandbox new sessions で新規セッション向けに有効化。`/sandbox on` は現在のセッションだけを有効化。
- **制限の変更**：ファイル、ネットワーク、認証情報の設定変更は、新規セッションまたは再起動後に反映。
- **保護なしで続行しない**：OS がポリシーを適用できない場合、シェルはエラーで停止。
- **ローカルの App セッションのみ**：クラウドやリモートホストは対象外。Copilot CLI の設定とは別。
