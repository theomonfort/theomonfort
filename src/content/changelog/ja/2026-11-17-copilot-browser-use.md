---
title: "GitHub Copilot がブラウザーを操作できるように"
date: "2026-11-17"
summary: "GitHub Copilot のブラウザー拡張機能を使って、Web サイトの操作、Web アプリのテスト、ブラウザー上の作業を Copilot に任せられます。"
category: copilot
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-11-17-let-github-copilot-interact-with-your-browser/"
demo:
  - "GitHub Copilot 拡張機能をインストールし、Copilot クライアントで browser use を有効にする。拡張機能に Connected と表示されていることを確認する。"
  - "機密情報のない公開ページを開き、Copilot に依頼する： https://example.com を開き、ページの内容を説明してください。フォームの送信やデータの変更はしないでください。"
  - "ブラウザーでの操作と結果を確認する。"
---

### browser use でできること

Copilot が作業の一環として Web サイトを操作できます。例えば、Web アプリのテスト、ページの移動、フォームへの入力、情報の取得を依頼できます。デスクトップアプリを含む作業では computer use と組み合わせることもできます。

**Copilot CLI、Copilot app、VS Code、JetBrains** で利用できます。ブラウザー拡張機能は **Chrome** と **Microsoft Edge** に対応しています（Edge の利用にも Chrome のインストールが必要です）。

### 始め方

1. [GitHub Copilot ブラウザー拡張機能](https://chromewebstore.google.com/detail/github-copilot/hblomdgalaelcilcdepgohfcogjiijhe)をインストールします。
2. クライアントで browser use を有効にします。CLI では `/plugin` を開いて browser use を有効にし、新しいセッションを開始します。Copilot app では先に computer use を有効にし、**Settings → Computer Use** で browser use をオンにします。VS Code と JetBrains では設定から有効にします。
3. 拡張機能に **Connected** と表示されていることを確認し、Copilot にブラウザー上の作業を依頼します。

### アクセスと安全性

browser use は**既定でオフ**です。すでにサインインしているサイトも操作できるため、特にデータの変更や他の人に影響する操作では、依頼内容と結果を確認してください。Web サイトに表示される内容は Copilot のコンテキストになる可能性があります。

Enterprise 管理者は managed settings の `features.browserUse` を `false` に設定して、ユーザーによる有効化を禁止できます。

### ドキュメント

- [GitHub Copilot の browser use について](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/browser-use)
