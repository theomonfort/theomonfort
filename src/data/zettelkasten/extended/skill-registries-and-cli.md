---
title: "Skill Registries & CLI"
group: "plan"
tags: ["gh-cli", "awesome-copilot", "skills-sh", "registry", "skills"]
aliases: ["gh skills install", "skills.sh"]
---

**Skill Registries & CLI** let developers browse and install community [[Agent Skills]] directly into a repository (`.github/skills/` or `.agents/skills/`) using GitHub CLI `v2.90.0+` (changelog `2026-04-16`).

## Curated Catalogs & Commands

```bash
# Install from GitHub's official curated collection (awesome-copilot.github.com/skills)
gh skills install github/awesome-copilot <skill-name>

# Install from skills.sh or any GitHub repository
gh skills install <owner>/<repo> <skill-name>
```

- **`github/awesome-copilot`**: GitHub's official curated catalog of skills (also surfaced as a plugin marketplace in [[Plugin Marketplaces & CLI]]).
- **`skills.sh`**: Cross-ecosystem open Agent Skills registry.
- **`ards-project/connectors`**: Hosts the discovery skill powering [[GitHub Agent Finder]].
