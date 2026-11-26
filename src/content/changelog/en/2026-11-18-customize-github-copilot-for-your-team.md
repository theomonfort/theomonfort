---
title: "Customize GitHub Copilot for your team"
date: "2026-11-18"
summary: "Organization teams can share default Copilot Agent Plugins with their direct members."
category: copilot
status: "GA"
source: "https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team/"
demoLinks:
  - label: "octodemo → theo-team → Customize Copilot"
    url: "https://github.com/orgs/octodemo/teams/theo-team/copilot"
demo:
  - "Open the theo-team Customize Copilot page and show the available marketplaces and team plugins."
  - "Explain that a team maintainer or organization owner can add a marketplace and select individual plugins for the team."
  - "Explain that selected plugins are defaults for direct team members, subject to enterprise and organization policies."
---

### A shared starting point

Team maintainers and organization owners can select **Agent Plugins** as defaults for an organization team. Plugins bundle customizations such as skills and MCP server configurations, so members do not have to set them up individually.

Browse plugins from built-in marketplaces, enterprise marketplaces, or marketplaces added by the team. Adding a marketplace makes its plugins available to browse; select individual plugins to enable them for the team.

### Scope and policies

- Team defaults apply to **direct members** in VS Code, the GitHub Copilot app, and Copilot CLI. Members of child teams do not inherit them.
- This feature is for **organization teams**, not enterprise teams. It is available with Copilot Business and Copilot Enterprise.
- Members can turn off team plugins where policy permits. Enterprise and organization policies still control allowed marketplaces and required or blocked plugins.

### Documentation

- [Plugins for GitHub Copilot](https://docs.github.com/copilot/concepts/customizations/plugins)
