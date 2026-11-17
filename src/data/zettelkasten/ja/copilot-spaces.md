---
title: "Copilot Spaces"
---

**Copilot Spaces**（Spaces API は `2026-05-18` に GA）は、[[GitHub]] 上で、整理されたコンテキストを共有できる空間を作成します。機能開発の開始、アーキテクチャの Q&A、オンボーディング、チームの定常ワークフローで、プロジェクト固有の知識に基づく Copilot の回答を得られます。

## ソースと情報取得の仕組み

| ソースの種類 | Copilot の処理方法 | 適した用途 |
| --- | --- | --- |
| **Space の指示** | Space 内の役割、期待する回答、境界を定義 | 一般論や根拠のない回答の防止 |
| **リポジトリ** | 必要な部分をオンデマンドで検索、取得（リポジトリ全体を一括投入しない） | 大規模コードベース全体のアーキテクチャ把握 |
| **ファイル / フォルダー / Issue / PR** | 優先してより一貫して参照し、Git と常に同期 | 仕様、API 契約、主要な実装 |
| **アップロードと自由形式メモ** | アップロードしたスナップショット（画像、PDF、Word/Excel）とテキストメモを使用 | 外部の参考資料と組織内の暗黙知に関する FAQ |

## 所有権と IDE エージェント統合

- [[Spaces Source Types & Sharing]] に基づいて管理します（所有者は `Organization` または `Individual`。共有しても元のリポジトリの権限は迂回しません）。
- [[Copilot in VS Code]] または [[Copilot CLI]] の IDE Agent モードから、[[Spaces IDE Integration via MCP]] を通じてリモートの [[GitHub MCP Server]] に直接問い合わせできます（`"X-MCP-Toolsets": "default,copilot_spaces"` → `list_copilot_spaces` と `get_copilot_space`）。
