---
title: "パス別の指示"
---

**パス別の指示**（`.github/instructions/*.instructions.md`、VS Code では**ファイルベースの指示**とも呼ばれます）は、YAML の `applyTo` フロントマターで [[Custom Instructions|カスタム指示]]の適用範囲を特定のファイル glob に限定します。

## 設定例

```yaml
---
applyTo: "server/tests/test_*.py"
---
This file uses pytest functional tests.
- Load fixtures from `conftest.py`
- One assert per function
- Always mock LLM calls
```

## 動的な読み込み

1. セッション開始時、Copilot は無関係なパス別ファイルを注入せずに [[Repository Instructions|リポジトリの指示]]を読み込みます。
2. プロンプトやツール呼び出しが対象ファイルに触れると（たとえば `edit src/db/users.ts` が `applyTo: src/db/**` という `db.instructions.md` 内の指定に一致すると）、Copilot はその指示ファイルを動的に追加します。
3. 範囲を限定した読み込みにより、無関係なルールがコンテキストに入りません。サブディレクトリに入れ子で配置する [[AGENTS.md]] ファイルと同じ役割を果たします。
