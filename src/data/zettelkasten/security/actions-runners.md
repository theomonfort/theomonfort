---
title: "Actions Runners"
group: "actions"
tags: ["actions", "runners", "compute", "arc"]
aliases: ["GitHub-Hosted Runners", "Self-Hosted Runners", "Larger Runners"]
---

**Actions Runners** are the execution machines that run jobs in [[GitHub Actions]] [[Workflows & Triggers]].

## Ephemeral Lifecycle

On hosted runners, every job follows **clone -> run -> destroy**: `actions/checkout` clones the repository into a clean `$GITHUB_WORKSPACE`, runs the steps, sends logs and check results back to [[GitHub]], and discards the VM so no stale state leaks between runs (use [[Actions Cache & Artifacts]] when files must persist).

## Runner Options

- **GitHub-Hosted Standard Runners**: Managed Linux, Windows, and macOS VMs patched by GitHub; free on public repositories and metered via [[Actions Compute & Budgets]] on private repositories.
- **Larger Runners**: Higher-CPU, memory, GPU, or static-IP hosted machines available on Team and Enterprise Cloud.
- **Self-Hosted Runners & ARC**: Machines you manage on your own network or autoscaled on Kubernetes with **Actions Runner Controller (ARC)**, incurring zero Actions compute charges while accessing private infrastructure for [[CodeQL]] builds or [[Third-Party SARIF]] scans.
