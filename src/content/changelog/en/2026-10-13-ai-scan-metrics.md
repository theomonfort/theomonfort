---
title: "AI Scan metrics in security overview"
date: "2026-10-13"
summary: "Organization and enterprise security overview now shows AI Scan for pull requests metrics: findings, resolutions, remediation rate, and how often developers apply autofix suggestions."
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-10-13-code-scanning-ai-scan-metrics-in-security-overview/"
demoUrl: "https://github.com/orgs/octodemo/security/metrics/codeql?view=ai-scan"
demo:
  - "In octodemo, open Security and quality → Insights → Code scanning on pull requests and switch between the CodeQL and AI Scan tabs."
  - "On the AI Scan tab, show total findings (with / without an autofix suggestion), resolved findings and remediation rate, the per-repository breakdown, and trends. Change the period with the date picker."
---

### Key takeaways

- **Renamed page, two tabs**: "CodeQL pull requests" is now "Code scanning on pull requests", with separate **CodeQL** and **AI Scan** tabs. The previous metrics live under the CodeQL tab.
- **AI Scan tab metrics**: total findings (with / without an autofix suggestion), resolved findings, remediation rate, repositories that generated findings, trends over the selected period, and how often developers applied autofix suggestions.
- **Why it matters**: evaluate AI Scan's effectiveness and developer response without reviewing individual pull requests, and make informed rollout and investment decisions.
- **Availability**: public preview on github.com, including GitHub Enterprise Cloud, for customers with GitHub Code Security or GitHub Advanced Security. GitHub Enterprise Server is not supported. CSV export is not yet available on the AI Scan tab.

To manage AI Scan enablement through APIs, see [AI Scan APIs on Sep 10](#2026-09-10-ai-scan-api).

[Viewing code scanning metrics for pull requests (official documentation)](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-metrics-for-pull-request-alerts) / [AI Scan for pull requests](https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections) / [AI Scan Community discussion](https://github.com/orgs/community/discussions/201543)
