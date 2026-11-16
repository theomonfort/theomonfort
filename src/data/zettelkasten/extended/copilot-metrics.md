---
title: "Copilot Metrics"
group: "operate"
tags: ["metrics", "telemetry", "roi", "adoption", "impact-dashboard", "operate"]
aliases: ["Copilot Usage Metrics", "Copilot Impact Dashboard"]
---

**Copilot Metrics** quantify [[GitHub Copilot]] adoption, agent maturity, and engineering velocity across organizations and enterprises in [[SDLC Stage 05 Operate]].

## Dashboards, Maturity Cohorts & Export APIs

- **Usage & Impact Dashboards**: Pair the 28-day Usage Dashboard (active users, model mix, surface breakdown across [[Copilot Surfaces]]) with the 6-month **Copilot Impact Dashboard** correlating maturity cohorts (`Passive -> Code-first -> Agent-first -> Multi-agent`) against [[Pull Requests]] cycle time, merge throughput, and [[DORA Metrics]].
- **NDJSON Export APIs & Seat Reconciliation**: 1-year NDJSON REST export APIs complement billing seat endpoints in [[GHE & Copilot Licenses]] and [[License Audit & Seat Reclamation]].
- **Client OpenTelemetry**: Local agent spans from [[Copilot CLI]] and [[GitHub Copilot App]] can stream to enterprise observability pipelines via `telemetry` in [[Copilot Managed Settings]].
