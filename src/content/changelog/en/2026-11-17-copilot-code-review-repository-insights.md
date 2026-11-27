---
title: "Track Copilot code review outcomes in Repository insights"
date: "2026-11-17"
summary: "See how Copilot code review feedback is addressed and where review coverage is missing in each repository."
category: review
source: "https://github.blog/changelog/2026-11-17-track-copilot-code-review-outcomes-in-repository-insights/"
demoLinks:
  - label: "Octodemo → Repository insights"
    url: "https://github.com/octodemo/JPKR-Revenue-Management/insights"
demo:
  - "Open the Octodemo repository insights page and look at the Copilot code review section. The private repository requires access."
  - "Compare the addressed rate, feedback categories, and pull requests merged without Copilot review."
---

### What you can see

The new **Repository insights** page under a repository's **Insights** tab brings together:

- Copilot review comments addressed, including high-severity comments.
- Copilot-reviewed pull requests with no later human change request.
- Pull requests merged without a Copilot review.
- Addressed-rate trends and breakdowns, including feedback categories and unevaluable exclusions.

The same metrics are available in the enterprise and organization `repos-1-day` Copilot usage metrics reports.

### Access

Repository insights is available for organization-owned repositories with read access. The Copilot code review section requires both the **Copilot usage metrics** and **Copilot code review** policies to be enabled. Data may take a few days to appear.

[Repository insights documentation](https://docs.github.com/en/copilot/how-tos/administer-copilot/view-repository-insights) / [Copilot usage metrics API](https://docs.github.com/en/rest/copilot/copilot-usage-metrics)
