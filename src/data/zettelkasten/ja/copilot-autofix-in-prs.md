---
title: "PR 内の Copilot Autofix"
---

**PR 内の Copilot Autofix** は、[[Code Scanning PR Merge Protection]] のアラート内に、すぐコミットできる脆弱性修正パッチを直接生成します。[[Pull Requests]] で利用でき、修正時間の中央値を**手動の 1.5 時間から 28 分**に短縮します（3 倍超の高速化）。

## PR Autofix と一般的な AI 修正の違い

- 指摘された行だけを見るのではなく、Copilot Autofix は CodeQL のクエリルール、周辺ファイル、完全な**入力元から出力先までの汚染データフロー経路**を LLM に渡します。必要な依存関係の編集を含む的確なパッチを生成し、作成者は [[Suggested Changes]] のように適用するか、[[PR Coding Agent Handoff]] で調整できます。

## 従来の PR Autofix とエージェント型 Autofix（`GA 2026-10-15`）

| 観点 | 従来の Copilot Autofix（PR 内） | エージェント型 Autofix（デフォルトブランチの未対応項目） |
| --- | --- | --- |
| **起動場所** | PR の `CodeQL` アラートへの自動インライン修正提案 | **未対応アラート `1-25` 件**を `Security -> Code scanning` で選び、**Assign to Copilot** をクリック（PR のみのアラートでは利用不可） |
| **検証と出力** | 現在の PR スレッドへのパッチ提案 | Actions ランナーでビルド / テストを実行し、Copilot Memory で修正規約を学習（`2026-09-25`）して、別の [[Draft Pull Requests]] を作成 |
| **ライセンスとクレジット** | **Copilot ライセンス不要**、**AI クレジット消費ゼロ**（Code Security に含まれ、パブリックリポジトリでは無料、既定で有効） | **Code Security AI Credits** と GitHub Actions ランナーの実行分数を消費 |

## 修正を支えるエンジン

- [[Copilot Autofix]] と Actions で検証する [[Agentic Autofix]] を基盤とし、[[Security Campaigns]] によって過去の負債全体へ拡張します。
