---
title: "GitHub Agent Finder"
---

**GitHub Agent Finder**（`github.com/agentfinder`）は、エンジニアリングのタスクに合う [[MCP Servers|MCP サーバー]]、ツール、[[Agent Skills|エージェントスキル]]、[[Custom Agents|カスタムエージェント]]を同時に探す、エコシステム横断のディスカバリーサービスです。

## インストールと使い方

```bash
gh skills install ards-project/connectors skills/github-copilot
```

- [[Skill Registries & CLI|スキルレジストリと CLI]]を使い、`ards-project/connectors`（`skills/github-copilot/SKILL.md`）からインストールします。
- `/agentfinder <what you want>` を実行すると、データベース、メール、クラウドデプロイ、監視などの目的に合うインストール可能な連携機能を、設定前に一覧できます。
