---
title: "copilot-setup-steps.yml"
group: "cloud-agent"
tags: ["cloud-agent", "actions", "runners", "environment"]
---

**copilot-setup-steps.yml** (`.github/workflows/copilot-setup-steps.yml`) customizes the GitHub Actions runner environment used by [[Copilot Cloud Agent]] before the agent begins coding.

## Workflow Structure & Capabilities

```yaml
name: "Copilot Setup Steps"
on: workflow_dispatch
jobs:
  copilot-setup-steps:
    runs-on: ubuntu-latest # or larger GitHub runner, self-hosted, or windows-latest
    steps:
      - uses: actions/checkout@v4
        with:
          lfs: true
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
```

- **Customizations**: Pre-install `npm` / `pip` / `apt` packages, scale runner CPU/RAM, target self-hosted or Windows runners, enable Git LFS, inject environment variables, and tune the agent firewall alongside [[Cloud Agent MCP Configuration]].
