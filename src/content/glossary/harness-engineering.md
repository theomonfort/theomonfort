---
title: ハーネスエンジニアリング
titleEn: Harness Engineering
summary: エージェントが安全かつ効果的に動ける足場の設計。ツール群、制約、ループ、検証、ロールバックの設計術。
icon: 🛡️
color: green
order: 8
category: plan
related: ['agentic-workflow', 'agent-skills', 'mcp']
links:
  - label: Well-Architected (GitHub)
    url: https://wellarchitected.github.com/
---

馬は素晴らしい。だが鞍と手綱がなければ乗りこなせない。エージェントも同じ——**ハーネス**がエージェントの "鞍と手綱" だ。

**ハーネスに含まれるもの:**
- ツールセット（読み・書き・実行・検索の境界）
- 制約（書き込み禁止パス、コマンド許可リスト）
- ループ（plan → act → observe → reflect）
- 検証（型・テスト・lint・人間レビュー）
- 観測（ログ、コスト、レイテンシ）
- ロールバック（git, snapshots）

## エコシステム対応表

同じ「AI の足場」でも、置き場所やファイル名はエコシステムごとに少し違う。

| レイヤー | GitHub / Copilot | Open ecosystem |
| --- | --- | --- |
| 全体指示 | `.github/copilot-instructions.md` | `AGENTS.md` |
| パス別ルール | `.github/instructions/*.instructions.md` | nested `AGENTS.md` |
| Skills（project） | `.github/skills/*/SKILL.md` | `.agents/skills/*/SKILL.md` |
| Skills（personal） | `~/.copilot/skills/` | `~/.agents/skills/` |
| Custom agents | Copilot custom agents | agent definitions / plugins |
| MCP / tools | `mcp.config` | `mcp.config` |

> 迷ったら、まずは利用する agent host が読む場所に合わせる。チーム共有なら repository 配下、個人用なら home 配下。

> AI を信頼するな、harness を信頼せよ。
