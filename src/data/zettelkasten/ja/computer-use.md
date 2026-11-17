---
title: "Computer Use"
---

**Computer Use**（[[GitHub Copilot App]] のローカル macOS / Windows セッションでパブリックプレビュー）により、Copilot は API、CLI、MCP サーバーのないデスクトップアプリで、ウィンドウの確認、UI コントロールのクリック、文字入力を行えます。

## 安全性と権限の制御

- **OS の権限**: macOS では、`Settings -> Computer Use -> Enable Computer Use` で**アクセシビリティ**と**画面収録**の権限を明示的に付与する必要があります。
- **承認ゲート**: `Tool permissions -> Ask every time` を有効に保ち、プロンプトで読み取り / 書き込みの境界を明示します。実行中の操作は **Stop** または **`Esc`** でいつでも停止できます。Enterprise 管理者は Computer Use を一元的に無効化できます。
- **ローカル限定**: ローカルのデスクトップセッションのみで動作し、[[Local & Cloud Sandboxes]] のクラウド VM 内では実行されません。[[Native Office Canvases]] とは別の機能です。
