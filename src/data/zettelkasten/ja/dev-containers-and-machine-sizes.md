---
title: "開発コンテナーとマシンサイズ"
---

**開発コンテナーとマシンサイズ**は、`.devcontainer/devcontainer.json` を通じて [[GitHub Codespaces]] の再現可能なクラウド実行環境をコード化します。

## `devcontainer.json` で設定する内容

- **ベースイメージと Features**: コンテナーの OS、ランタイム、ビルドツール、`postCreateCommand` の初期化スクリプトを Git で定義します。
- **AI ツールの事前インストール**: 各 codespace に [[Copilot in VS Code|VS Code の Copilot]] 拡張機能、[[Copilot CLI]]、MCP サーバー、リンター、スキルをあらかじめ用意し、開発者が手動設定なしで作業を始められます。
- **必要に応じたコンピューティングの拡張**: 起動前後にマシンサイズを最大 **32 コア、128 GB RAM、128 GB ストレージ**まで変更できます。軽量ノート PC でも、負荷の高い並列ビルドや AI エージェントを実行できます。
