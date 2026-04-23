---
title: エージェンティック・ワークフロー
titleEn: Agentic Workflow
summary: Plan → Implement → Validate を回す自律的開発サイクル。skill を組み合わせて"職人の流派"を作る。
icon: 🔄
color: green
order: 12
related: ['agent-skills', 'harness-engineering', 'custom-agent']
links:
  - label: theomonfort skills (workflow)
    url: https://theomonfort.github.io/theomonfort/skills/
---

単発のプロンプトは"一撃"、agentic workflow は"型 → 試合 → 反省 → 次の型" のサイクルだ。

**最小構成:**
1. **Plan** — `create-plan` で意図を文章化、リスクを洗う
2. **Critique** — `rubber-duck` で穴を探させる
3. **Implement** — `implement-plan` で段階実装
4. **Validate** — `validate-plan` で達成基準を検証
5. **Describe** — `describe-pr` で物語にして引き継ぐ

このサイクルを身につけると、AI は "魔法" から "職人道具" になる。
そしてある日、君は気付く——**自分の判断力が伸びている**ことに。
