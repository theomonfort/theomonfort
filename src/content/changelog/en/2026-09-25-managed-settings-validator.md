---
title: "Check enterprise-managed Copilot settings for errors"
date: "2026-09-25"
summary: "An in-product validator detects malformed JSON, unsupported settings, and invalid team mappings that could prevent your Copilot policies from being enforced."
category: administration
source: "https://github.blog/changelog/2026-09-25-enterprise-managed-settings-in-product-validator/"
---

### Key takeaways

- **Where to check**: Enterprise → AI controls → Agents → Copilot settings validation. Each issue identifies the file and JSON path. The section is hidden when no issues are found.
- **Files checked**: `copilot/managed-settings.json`, `copilot/team-mappings.json`, and the team settings files referenced by the mappings.
- **How to fix**: commit corrections to the default branch of your `.github-private` repository, then reload the Agents page to check again.

[Playbook: Copilot managed settings (slide 10)](https://theomonfort.github.io/theomonfort/en/playbook/governance/?present=1&slide=10)
