---
title: エージェント・スキル
titleEn: Agent Skills
summary: 特定タスクをこなすための再利用可能な手順書。`SKILL.md` に書かれた "型" を AI が呼び出して使う。
icon: 🎴
color: magenta
order: 7
related: ['custom-agent', 'agentic-workflow']
links:
  - label: theomonfort skills
    url: https://theomonfort.github.io/theomonfort/skills/
---

人間が「型（カタ）」を覚えるように、エージェントも skill を覚えると安定する。

**Skill の構造:**
- `SKILL.md` — いつ使うか、何を出力するか、どう判断するか
- 補助スクリプト — Python / Bash / TypeScript で繰り返し処理を固める
- テンプレート — 出力フォーマットを揃える

**例:**
- `create-plan` — 大きな機能の実装計画を作る
- `describe-pr` — コード差分から PR 説明文を生成する
- `research-codebase` — 並列エージェントで全文調査する

skill は "AIに渡す秘伝の巻物"。一度書けば、君もチームも一生使える。
