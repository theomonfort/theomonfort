---
title: "コードレビューのカスタムエージェント"
---

**コードレビューのカスタムエージェント**は、ドメイン固有のレビュアーペルソナ、ツールの許可リスト、ブロッキング / 非ブロッキングの重大度基準を `.agent.md` プロファイルにまとめ、[[Copilot Code Review]]、VS Code、Copilot CLI で利用する仕組みです。

## `.agent.md` プロファイルの 4 つのスコープ

| スコープ | 保存場所 | 代表的なレビューペルソナ |
| --- | --- | --- |
| **Enterprise** | `.github-private` → `agents/*.agent.md` | Enterprise のセキュリティ、コンプライアンス、アクセシビリティ監査役 |
| **Organization** | `.github` または `.github-private` → `agents/*.agent.md` | デザインシステムのレビュアー（`design-reviewer`）、API 契約のチェック役 |
| **リポジトリ** | `.github/agents/*.agent.md` | データベース移行、性能、ドメインモデルのレビュアー |
| **個人** | `~/.copilot/agents/*.agent.md` | [[IDE Local Copilot Review]] で使う、個人向けの PR 作成前の批評役 |

## 読み取り専用レビューエージェントの構造

```yaml
---
name: security-api-reviewer
description: Audits auth boundaries, input validation, and SQL safety on API PRs.
target: github-copilot
tools: ["read", "search", "github/pull-request-read"]
---
Classify findings into Blocking Defects vs Non-Blocking Suggestions.
Never flag formatting already covered by CI linters.
```

- `tools` を読み取り専用の調査（`read`、`search`、`github/pull-request-read`）に制限すると、エージェントはファイルを変更せず、[[Agentic Review Tool-Calling]] でコンテキストを調査できます。[[Review Custom Instructions]] のパスルールと、CLI の組み込みサブエージェント（`code-review`、`security-review`、`rubber-duck`）を補完します。
