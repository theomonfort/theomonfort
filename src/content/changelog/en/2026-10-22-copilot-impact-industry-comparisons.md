---
title: "Copilot impact dashboard: compare adoption with industry peers"
date: "2026-10-22"
summary: "Compare agentic adoption and pull request leverage with aggregated benchmarks from businesses of a similar size and industry. Participation is opt-in and disabled by default."
category: administration
source: "https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard/"
---

### What can you compare?

- **Agentic adoption**: the percentage of active users who are agent-first or multi-agent users.
- **Leverage**: how the pull request merge rate of agentic users compares with that of non-agentic users.
- **Peer benchmarks**: compare your scores with the peer median for a 28-day reporting period, with top-decile benchmarks and rankings appearing as participation grows.
- **Company size and industry**: choose a peer group and switch between your industry and all industries. If the selected industry has too few participants, the dashboard widens the comparison to all industries for your company size and labels the group used.

### Where to find it

In the [Octodemo enterprise](https://github.com/enterprises/octodemo), open **Insights → Copilot impact → Industry comparison**.

An enterprise owner can opt in from the widget, select **Industry type** and **Company size**, then confirm. The widget and the **Copilot metrics industry comparison** policy control the same setting. The **Copilot usage metrics** policy must also be enabled.

### What to keep in mind

Participation means both contributing aggregated metrics and viewing comparisons. Opting out hides comparisons immediately and excludes your data from the next daily update. Aggregated benchmarks contain no identifying data and are deleted after 30 days.

Rankings may be missing while peer groups are too small or when your own score cannot be calculated. **Comparisons are dashboard-only**, not part of the usage metrics API, NDJSON exports, or downloads.

Enterprises and standalone organizations can participate; enterprise-owned organizations participate through their enterprise. Enterprises used only to assign Copilot Business licenses are excluded. With data residency, comparisons stay within the same region.

[Viewing the Copilot impact dashboard](https://docs.github.com/en/copilot/how-tos/administer-copilot/view-impact-dashboard)
