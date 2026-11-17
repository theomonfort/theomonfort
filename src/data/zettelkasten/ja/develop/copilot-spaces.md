---
title: "Copilot Spaces"
---

**Copilot Spaces**（Copilot Spaces API は `2026-05-18` 時点で GA）は、[[GitHub]] 上で、整理されたコンテキストを共有できる空間を作成します。背景説明のプロンプトを繰り返さずに、プロジェクト固有の知識に基づく Copilot の回答を得られます。

## コンテキストの 4 つの要素

| 要素 | 例 | 役割 |
| --- | --- | --- |
| **指示** | ペルソナ、回答形式、境界 | Space 内での Copilot の回答方法を定義 |
| **GitHub コンテンツ** | リポジトリ、フォルダー、ファイル、Issue、PR | リポジトリのコードの変化に合わせて常に同期 |
| **アップロード** | 画像、PDF、Word/Excel ファイル | 外部参考資料のスナップショットを追加 |
| **テキストメモ** | アーキテクチャのメモ、会議の決定、FAQ | 専門家が持つ組織内の暗黙知を記録 |

## Spaces の接続先

- [[Spaces Source Types & Sharing]] によって管理され、[[Spaces IDE Integration via MCP]] を通じて、[[Copilot in VS Code]] または [[Copilot CLI]] の IDE Agent モードから直接問い合わせできます。
