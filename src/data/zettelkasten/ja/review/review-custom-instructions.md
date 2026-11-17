---
title: "レビュー用カスタム指示"
---

**レビュー用カスタム指示**は、チームのアーキテクチャ、セキュリティチェックリスト、スタイル規約をバージョン管理された Markdown ファイルに明文化し、[[Copilot Code Review]] が各 PR にプロジェクト固有のルールを適用できるようにします。

## 対応する指示の取得元

| 取得元 | パス / 場所 | レビューでの主な機能 |
| --- | --- | --- |
| **リポジトリの指示** | `.github/copilot-instructions.md` | リポジトリ全体の標準。**従来の4,000文字制限は撤廃済み**で、レビュー基準をすべて読み込む |
| **パス限定の指示** | `.github/instructions/*.instructions.md` | YAML の `applyTo` glob（`"src/api/**"` など）と、任意の `excludeAgent` による対象指定 |
| **エージェントの指示** | `AGENTS.md`（ルートまたは入れ子のサブディレクトリ、`2026-06-18` から対応） | Copilot Code Review、Cloud Agent、Copilot CLI が共通で従う単一ファイル |
| **Organization の指示** | `Org -> Settings -> Copilot -> Custom instructions`（`GA 2026-04-02`） | すべてのリポジトリに適用する Organization 共通の基本的なセキュリティおよびコンプライアンスルール |

## `excludeAgent` による適用範囲の指定

パス限定の `.instructions.md` ファイルでは、`excludeAgent` を使ってレビューチェックリストをコード生成用プロンプトから分離できます。

```yaml
---
applyTo: "src/db/**/*.ts"
excludeAgent: "coding-agent"
---
- Flag any raw SQL string interpolation without parameterized bindings.
- Verify every migration includes a reversible down step and index concurrency annotations.
```

- 雛形生成専用の指示に `excludeAgent: "code-review"` を設定すると、[[Copilot Code Review]] に不要な内容が入りません。レビュー専用の監査チェックリストには `excludeAgent: "coding-agent"` を設定し、[[Custom Agents in Code Review|コードレビューのカスタムエージェント]]と併用します。
