---
title: "Monitor Copilot app agents with OpenTelemetry"
date: "2026-09-22"
summary: "The Copilot app can send agent activity to your organization's monitoring tools, with configuration managed centrally through enterprise settings."
category: copilot
source: "https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app/"
---

### Key takeaways

- **See what the agent did**: follow model calls and tool use step by step in an OpenTelemetry-compatible monitoring platform to investigate unexpected behavior.
- **Configure centrally**: use the `telemetry` property in `managed-settings.json` to enable export and set the receiving endpoint.
- **Content is excluded by default**: prompts, responses, and tool arguments are not captured unless enabled. Review sensitive-data risks before turning content capture on.

[OpenTelemetry for agent monitoring (official documentation)](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/enterprise/opentelemetry)
