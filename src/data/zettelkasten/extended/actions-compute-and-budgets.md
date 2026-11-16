---
title: "Actions Compute & Budgets"
group: "secure"
tags: ["actions", "billing", "budgets", "compute"]
---

**Actions Compute & Budgets** govern how runner execution and storage are metered across [[GitHub Actions]] on [[GitHub]].

## Shared Compute Allowance

Standard public [[Actions Runners]] and self-hosted compute are free. Eligible private repository usage draws from a monthly monetary allowance ($12 Free, $18 Pro/Team, $300 Enterprise Cloud; for example, Linux 2-core at $0.006/min):

- **Shared consumers**: Standard CI [[Workflows & Triggers]], hosted [[CodeQL]] scans, [[Code Quality]] runs, and Actions-backed Copilot agentic tasks draw from the same compute pool (separate from AI credits and [[Actions Cache & Artifacts]] storage).
- **Soft vs hard budgets**: Start with **soft budgets** (`75% / 90% / 100%` alerts) and Actions usage metrics to monitor consumption before enabling hard scope limits that block billed runs.
