---
title: "エージェントプラグイン"
---

**エージェントプラグイン**（**Agent Plugins 1.0**、`agent-plugins.org`、`2026-08-12` に GA）は、[[GitHub]] Copilot のオープンなパッケージ形式です。[[Agent Skills]] と [[MCP Servers]] を、インストール可能な単一パッケージにまとめます。

## 一度作成し、複数の環境で実行

- **対応環境（全プランで GA）**: VS Code、Copilot CLI、Copilot SDK、GitHub Copilot デスクトップアプリ。
- **ディレクトリ構成の規約**: 汎用の `skills/` と `mcp.json` を、[[Plugin Manifest & Namespace]] によって Copilot 専用の拡張から分離します。
- **配布とガバナンス**: [[Plugin Marketplaces & CLI]] を通じてユーザー全体にインストールし、[[Copilot Managed Settings]] の `enabledPlugins` とマーケットプレイス制御で Enterprise 規模の管理を行います。
