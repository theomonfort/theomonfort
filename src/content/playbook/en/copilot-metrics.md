---
title: Copilot Metrics
titleEn: Copilot Metrics
summary: Metrics API and dashboard for visualizing GitHub Copilot usage and impact. Aggregate and review data at the Organization and Enterprise level.
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
related: ['agentic-workflow', 'copilot-memory']
links:
  - label: Copilot Metrics API
    url: https://docs.github.com/en/rest/copilot/copilot-metrics
  - label: Reviewing Copilot usage data
    url: https://docs.github.com/en/copilot/concepts/billing/organizations-and-enterprises
  - group: 📰 Recent Changelog
    label: "Team-level Copilot usage metrics via API (2026-05-14)"
    url: https://github.blog/changelog/2026-05-14-team-level-copilot-usage-metrics-now-available-via-api
  - group: 📰 Recent Changelog
    label: "Cloud Agent fields added to usage metrics (2026-04-23)"
    url: https://github.blog/changelog/2026-04-23-copilot-cloud-agent-fields-added-to-usage-metrics
  - group: 📰 Recent Changelog
    label: "Plan mode is now included in Copilot metrics (2026-03-02)"
    url: https://github.blog/changelog/2026-03-02-copilot-metrics-now-includes-plan-mode
  - group: 📰 Recent Changelog
    label: "Improved accuracy and coverage in Copilot usage metrics reports [GA] (2026-07-06)"
    url: https://github.blog/changelog/2026-07-06-improved-accuracy-and-coverage-in-copilot-usage-metrics-reports
  - group: 📰 Recent Changelog
    label: "Copilot metrics is now generally available (2026-02-27)"
    url: https://github.blog/changelog/2026-02-27-copilot-metrics-is-now-generally-available
---

## In a nutshell

<div class="hero-quote hero-quote-team">
  <p>
    <strong>Copilot Metrics</strong> visualizes GitHub Copilot usage and impact.
  </p>
  <p>
    Aggregate and review usage data at the Organization and Enterprise level, via both a dashboard and API endpoints.
  </p>
</div>

## Overview

Copilot Metrics is GA with improved accuracy and coverage in usage reports, available at the Organization and Enterprise level.

- **Dashboard**: View usage trends as charts on GitHub.com.
- **REST API**: Fetch and analyze data programmatically via the <a class="retro-link" href="https://docs.github.com/en/rest/copilot/copilot-metrics" target="_blank" rel="noopener noreferrer">Copilot Metrics API ↗</a>.
- **Team-level support**: Retrieve metrics per team, not just org-wide.
- **Cloud Agent support**: Cloud Agent usage is included in metrics fields.
