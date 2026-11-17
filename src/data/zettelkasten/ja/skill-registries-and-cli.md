---
title: "スキルレジストリと CLI"
---

**スキルレジストリと CLI**により、開発者はコミュニティの [[Agent Skills|エージェントスキル]]を閲覧し、リポジトリ（`.github/skills/` または `.agents/skills/`）に直接インストールできます。GitHub CLI `v2.90.0+` を使用します（変更履歴 `2026-04-16`）。

## 厳選カタログとコマンド

```bash
# Install from GitHub's official curated collection (awesome-copilot.github.com/skills)
gh skills install github/awesome-copilot <skill-name>

# Install from skills.sh or any GitHub repository
gh skills install <owner>/<repo> <skill-name>
```

- **`github/awesome-copilot`**：GitHub 公式の厳選スキルカタログ（[[Plugin Marketplaces & CLI|プラグインマーケットプレースと CLI]]でもプラグインマーケットプレースとして提供）。
- **`skills.sh`**：エコシステムを横断するオープンな Agent Skills レジストリ。
- **`ards-project/connectors`**：[[GitHub Agent Finder]] の探索機能を担うスキルをホストします。
