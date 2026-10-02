---
title: "Copilot がデスクトップアプリを操作できるように"
date: "2026-10-01"
summary: "Copilot CLI / Copilot App の computer use で、クリック、入力、スクロールなどのアプリ操作を任せられます。API、CLI、MCP がない GUI 専用ソフトの作業も自動化の対象に。"
category: copilot
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps/"
demoUrl: "https://docs.github.com/copilot/how-tos/github-copilot-app/computer-use"
demo:
  - "準備：Copilot App の Settings → Computer Use で Enable Computer Use をオン（CLI では /computer on、状態確認は /computer show）。macOS では Accessibility と Screen Recording の権限を付与。"
  - "機密情報を含まないデモ用アプリを開き、求める結果、対象アプリ、制約をまとめて依頼する。次のプロンプトの APP_NAME はインストール済みのアプリ名に置き換える。"
  - "APP_NAME を開き、メインウィンドウに表示されているステータス情報を要約してください。値の変更やフォームの送信はしないでください。"
  - "承認プロンプトで、アプリと操作が依頼内容と合っているか確認してから Allow を選ぶ（デモでは Always allow を避ける）。セッション内のツール実行履歴を見せる。途中で止めるときは Stop または Esc。"
---

### 覚えておきたいこと

- **既定はオフ**：明示的な有効化が必要。macOS / Windows のローカルセッションが対象。
- **操作前の承認**：アプリを操作する前に承認を求めるかは、App / CLI それぞれのツール権限設定に従う。Always allow は同じ PC の App と CLI で共有され、App の設定から個別に削除可能。拒否ルールが常に優先。
- **管理者が無効化できる**：Enterprise の managed settings で `features.computerUse` を `false` にすると、ローカル設定では上書き不可。
- **使いどころ**：API、MCP、ターミナル、ブラウザ専用ツールで済む作業は、そちらの方が結果が安定。computer use は画面操作しか手段がない作業向け。UI の変化で誤ったボタンを押すこともあるため、データを変更する操作は必ず確認。画面に映る内容は Copilot のコンテキストになります。

[computer use の仕組みと制限（公式ドキュメント）](https://docs.github.com/en/copilot/concepts/agents/computer-use) / [Copilot CLI での使い方](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/computer-use)
