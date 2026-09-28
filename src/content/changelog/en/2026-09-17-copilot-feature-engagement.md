---
title: "Copilot impact dashboard shows feature engagement"
date: "2026-09-17"
summary: "See which Copilot features developers use regularly, directly in the dashboard and in enterprise / organization report APIs."
category: administration
source: "https://github.blog/changelog/2026-09-17-copilot-impact-dashboard-now-shows-feature-engagement/"
---

### Key takeaways

- **Visible in the dashboard**: counts active users who engaged with each feature on at least **two days during a 28-day period**, helping identify where more training is needed.
- **Feature breakdown**: code completion, agent edit, code review (active / passive), cloud agent, CLI, and app. One user can count toward multiple features.
- **API updates too**: `copilot_feature_engagement` adds the same counts to 28-day aggregate reports, not per-user reports. `users_in_phase_28d` adds each AI adoption phase's full rolling 28-day population, rather than only users active that day.
- **Access**: requires the Copilot usage metrics policy to be enabled. Available to enterprise owners / billing managers, organization owners, and custom roles with `View Copilot Metrics`.

[Copilot usage metrics API](https://docs.github.com/rest/copilot/copilot-usage-metrics)
