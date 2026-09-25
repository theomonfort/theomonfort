---
title: "Copilot CLI の C++ コード探索が高速に"
date: "2026-09-22"
summary: "C++ プロジェクト全体の関数やクラス、そのつながりを「地図」のように保存して再利用。開いていないファイルも対象です。"
category: copilot
source: "https://github.blog/changelog/2026-09-22-faster-c-code-intelligence-with-whole-codebase-indexing/"
---

### 覚えておきたいこと

- **開発者にとってのメリット**：「この関数はどこにある？」「どこで使われている？」を調べる待ち時間を短縮。アプリ自体の実行速度を上げる機能ではありません。
- **使える場所**：Windows、macOS、Linux の GitHub Copilot CLI。Microsoft C++ Language Server プラグインと、プロジェクトのビルド情報（`compile_commands.json`）の設定が必要。
- **セットアップ後は既定で有効**：初回の索引作成には時間と追加メモリが必要。その後は再利用しながら更新されます。進行状況は `/lsp logs` で確認。

[セットアップと前提条件（公式ドキュメント）](https://github.com/microsoft/cpp-language-server)
