---
title: "DORA Metrics"
group: "secure"
tags: ["actions", "dora", "devops", "metrics"]
---

**DORA Metrics** (DevOps Research and Assessment) measure software delivery performance across two axes that [[GitHub Actions]] improves simultaneously: **speed** and **stability**.

## The Four Yardsticks (Elite Targets)

1. **Deployment Frequency** (Speed): On-demand, multiple deployments per day.
2. **Lead Time for Changes** (Speed): Less than 1 day from commit to production.
3. **Change Failure Rate** (Stability): `0% to 15%` of deployments causing a failure.
4. **Mean Time to Recovery** (Stability): Less than 1 hour to restore service.

## How CI/CD Automation Pushes Teams Toward Elite

Automating build, test, and deployment [[Workflows & Triggers]] in [[GitHub Actions]] while gating pull requests through [[Rulesets & Merge Protection]] lets teams deploy smaller changes more often without raising failure rates.
