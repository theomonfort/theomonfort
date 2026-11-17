---
title: "Office ネイティブのキャンバス"
---

**Office ネイティブのキャンバス**（[[GitHub Copilot App]] `v1.1.35`、`2026-11-04` に提供）は、Browser、Editor、Terminal のキャンバスと並び、組み込みのサイドパネルエディター内で Copilot が実際の `.docx`、`.xlsx`、`.pptx` ファイルを直接作成、編集できる機能です。

## ネイティブのドキュメント形式

| キャンバス | 主な成果物 |
| --- | --- |
| **Word（`.docx`）** | [[Copilot App Projects]] の概要を構造化された仕様書へ変換 |
| **Excel（`.xlsx`）** | 表、数式、グラフを作成 |
| **PowerPoint（`.pptx`）** | プレゼンテーション用スライドを作成、改訂 |

## ネイティブ編集とデスクトップ自動操作の違い

- Office キャンバスは、[[Computer Use]] で外部のデスクトップアプリを起動せず、ドキュメントモデルを直接編集します。[[Copilot Image Generation]] や [[Copilot in VS Code]] のキャンバス（`chat.canvases.enabled`）とも組み合わせやすくなっています。
