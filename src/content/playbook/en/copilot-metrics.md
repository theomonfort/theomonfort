---
title: Copilot Metrics
titleEn: Copilot Metrics
summary: Measure Copilot adoption, engagement, code generation, and delivery impact through dashboards and exportable APIs.
icon: /theomonfort/icons/copilot-metrics.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#9bbc0f"
order: 18
category: operate
related: ['github-copilot', 'governance', 'usage-based-billing']
links:
  - group: 📖 Official docs
    label: GitHub Copilot usage metrics
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/copilot-usage-metrics/copilot-metrics
  - group: 📖 Official docs
    label: REST API endpoints for Copilot usage metrics
    url: https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-usage-metrics
  - group: 📖 Official docs
    label: Viewing the Copilot impact dashboard
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/view-impact-dashboard
  - group: 📖 Official docs
    label: Interpreting usage and adoption metrics
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/copilot-usage-metrics/interpret-copilot-metrics
  - group: 📖 Official docs
    label: Team-level Copilot usage metrics
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/copilot-usage-metrics/team-level-metrics
  - group: 📰 Announcements
    label: "Copilot usage metrics impact dashboard (2026-07-22)"
    url: https://github.blog/changelog/2026-07-22-new-copilot-usage-metrics-impact-dashboard
  - group: 📰 Announcements
    label: "AI adoption phase cohorts in the API (2026-05-29)"
    url: https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption
---

## In a nutshell

<div class="hero-quote hero-quote-team">
  <p>
    <strong>Copilot Metrics</strong> turns product telemetry and pull request activity into an adoption and delivery story.
  </p>
  <p>
    Use the <strong>dashboards for decisions</strong> and the <strong>API for automation, custom BI, and history</strong>.
  </p>
</div>

> 🎯 Do not reduce the story to active users alone. Combine adoption, engagement, code generation, and pull request flow.

## What to measure

| Signal | Examples | Question answered |
| --- | --- | --- |
| 👥 Adoption | DAU, WAU, adoption phase | Who is using Copilot, and how deeply? |
| 💬 Engagement | Chat requests, modes, agents | Which workflows are becoming habitual? |
| ✅ Acceptance | Suggestions shown and accepted | Is the output relevant and trusted? |
| 🧱 Code generation | Lines suggested, added, deleted | How much editor output is AI-assisted? |
| 🔀 Delivery flow | PRs created and merged, median merge time | How does adoption relate to throughput? |

## UI vs API data windows

| Surface | Available window | Best use |
| --- | --- | --- |
| Usage metrics dashboard | Rolling **28-day** trends | Daily adoption and feature monitoring |
| Impact dashboard | **6-month** cohort and PR trends | Executive impact and enablement decisions |
| Daily API reports | Up to **1 year**, from Oct. 10, 2025 | BI pipelines and period comparisons |
| Latest 28-day API reports | Most recent **28 days** | Fast enterprise or user snapshot |
| NDJSON export | Retain in your own storage | Custom analysis beyond GitHub's window |

## API essentials

Use the Copilot usage metrics API for new integrations. It returns time-limited signed download URLs for enterprise, organization, user, repository, and team-join reports.

```text
GET /enterprises/{enterprise}/copilot/metrics/reports/enterprise-1-day?day=YYYY-MM-DD
GET /enterprises/{enterprise}/copilot/metrics/reports/users-1-day?day=YYYY-MM-DD
GET /enterprises/{enterprise}/copilot/metrics/reports/user-teams-1-day?day=YYYY-MM-DD
GET /orgs/{org}/copilot/metrics/reports/organization-1-day?day=YYYY-MM-DD
```

- Enterprise access: owner, billing manager, or a role with **View Enterprise Copilot Metrics**
- Token scope: `read:enterprise` or `manage_billing:copilot`
- Organization access: owner or **View Organization Copilot Metrics**, with `read:org`

> ⚠️ Download signed report URLs promptly. Use the user management API, not metrics reports, as the source of truth for seats and licenses.

## ★ Copilot Impact Dashboard

The dashboard answers four questions for enterprise administrators and organization owners.

| Dashboard section | Quick read |
| --- | --- |
| 👥 **Adoption cohorts** | Who is Passive, Code-first, Agent-first, or Multi-agent? Cards show users, share, PRs/user/month, merge velocity, and LoC/day. |
| ✖️ **Adoption multiplier** | How do the average throughput and speed of engaged users compare with the Passive cohort? |
| 📈 **Trends** | Are cohort growth and pull request throughput changing over the last **six months**? |
| 🎯 **Recommended next steps** | Which concrete enablement action can move more users into deeper-adoption cohorts? |

> 🎯 Move beyond “who is active?” to explain **how deeply Copilot is adopted** and **where enablement should focus next**.

## Read the numbers carefully

Metrics are strongest when you understand their collection and attribution boundaries.

- Data is normally available within **two full UTC days**
- IDE telemetry provides the richest feature and LoC breakdowns; server-side signals supplement active-user totals
- GitHub.com Copilot Chat and GitHub Mobile activity are not included
- Organization reports follow membership, so one user can appear in several organizations; enterprise totals deduplicate users
- Organization-level reports begin on **December 12, 2025**
- Pull request metrics can exist even when IDE telemetry is missing

> ⚠️ Use metrics to improve rollout, tooling, and enablement. Do not use them to rank individual developers.
