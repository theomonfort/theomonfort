---
title: クラウドエージェント
titleEn: Cloud Agent
summary: リモート環境で非同期にPRを作成するエージェント。Issueを投げれば、起きたら実装が出来上がっている。
icon: ☁️
color: amber
order: 11
related: ['agent-mode', 'agentic-workflow']
links:
  - label: Copilot coding agent
    url: https://docs.github.com/copilot
---

ローカル agent は"伴走者"、cloud agent は"派遣社員"。Issue や指示を渡すと、自分のマシンを離れて働き、PR を持って帰ってくる。

**向いているタスク:**
- ✅ 退屈だが手順が明確な改修（typo, deps bump, lint fix）
- ✅ 並列に進められる調査・プロトタイピング
- ✅ レビュー込みで一晩で回したい実験

**向いていないタスク:**
- ❌ 仕様が曖昧で対話が必要
- ❌ 本番影響の大きい設計変更

**心得:** Issue を"AIへの依頼書"として書け。最初の一文が90%の品質を決める。
