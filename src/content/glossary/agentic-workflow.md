---
title: エージェンティック・ワークフロー
titleEn: Agentic Workflow
summary: 自然言語の Markdown を GitHub Actions で動く AI エージェントに変換する仕組み。文脈を読み、判断し、行動する自動化を、コードではなく文章で書く。
icon: 🔄
color: green
order: 12
related: ['agent-skills', 'cloud-agent', 'mcp']
links:
  - label: GitHub Agentic Workflows (gh-aw)
    url: https://github.github.io/gh-aw/introduction/overview/
  - label: gh-aw リポジトリ
    url: https://github.com/githubnext/gh-aw
  - label: Agentics サンプル集
    url: https://github.com/githubnext/agentics
  - label: Peli's Agent Factory (blog)
    url: https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/
  - label: awesome-copilot
    url: https://github.com/github/awesome-copilot
---

従来の自動化は「if これなら then あれ」の固いルールだった。**Agentic Workflow** は違う。Copilot CLI / Claude / Codex のような coding agent を GitHub Actions の中で走らせ、自然言語の指示から **文脈を理解 → 判断 → 適切な行動** を取らせる。

**インストール**
`gh-aw` は GitHub CLI の拡張機能。一行で入る:

```bash
gh extension install githubnext/gh-aw
```

**どう書く?**
複雑なスクリプトの代わりに、Markdown ファイル一つ。frontmatter で「いつ動くか・何ができるか」を宣言、本文で「何をしてほしいか」を日本語や英語で書く。

```yaml
---
on:
  issues:
    types: [opened]
permissions: read-all
safe-outputs:
  add-comment:
---
# Issue Clarifier
新しい issue を分析し、不明確なら追加情報をリクエストせよ。
```

`gh aw compile` がこの Markdown を堅牢化された `.lock.yml`（GitHub Actions ワークフロー）にコンパイルし、issue が開かれるたびに AI エージェントがコンテナ内で起動する。

**なぜ重要?**
- **コードではなく文章** — issue triage、コードレビュー、リリース管理を、書きたいことを書くだけで自動化
- **セキュリティ・バイ・デフォルト** — 読み取り専用権限が初期設定。書き込みは `safe-outputs`（検証済みの安全な GitHub 操作）経由のみ
- **AI に直接の write 権限を渡さない** — issue / コメント / PR の作成はサニタイズされた境界の中で
- **チーム制限** — 実行できる人を絞れるので、AI エージェントが管理された範囲内で動く

つまり Agentic Workflow は、GitHub Actions × Coding Agent × Markdown の組み合わせで作る、**自律的・安全・宣言的な開発自動化** の新しい形。
