---
title: "Copilot CLI のサブエージェント"
---

**Copilot CLI のサブエージェント**は、GitHub Copilot CLI に組み込まれた 7 つの [[Subagents]] です。`.agent.md` の [[Custom Agents]] と組み合わせられ、`/subagents` で個別に特定のモデルへ振り分けられます（[[Copilot Model Selection]]）。

## CLI の 7 つの組み込みサブエージェント

| サブエージェント | 主な役割 |
| --- | --- |
| **Explore** | 高速で読み取り専用のコードベース検索とナビゲーション |
| **Task** | テスト、ビルド、lint、出力の多いシェルコマンドの実行 |
| **General-purpose** | CLI の全ツールを使う複雑な複数ステップの実装 |
| **Rubber-duck** | 計画とコードへの独立した批評。`/subagents` で**異なるモデルファミリー**を割り当て、モデル間レビューを実施 |
| **Code-review** | ステージ済み差分やブランチ差分の、確度の高いバグとロジックのレビュー |
| **Research** | 出典引用を伴う詳細な GitHub 調査と Web 調査 |
| **Security-review** | 確度の高い脆弱性分析 |
