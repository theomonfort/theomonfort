---
title: "Actions Cache & Artifacts"
group: "actions"
tags: ["actions", "cache", "artifacts", "security"]
aliases: ["cache-mode", "Actions Artifacts"]
---

Because [[Actions Runners]] destroy the VM after every job in [[GitHub Actions]], **Actions Cache & Artifacts** provide explicit, controlled ways to share files across steps and runs.

## Dependencies Cache & `cache-mode`

- **`actions/cache`**: Speeds up [[Workflows & Triggers]] by restoring package directories (10 GB included per repository; extra capacity metered under [[Actions Compute & Budgets]]).
- **Least-privilege `cache-mode`**: Controls cache access at the workflow or job level (`read`, `write`, `write-only`, `none`), enforced across reusable workflows so untrusted events like `pull_request_target` default to `read` and avoid **cache poisoning**.

## Workflow Artifacts

- Uploads build outputs, Playwright failure traces, Cobertura XML reports for [[Quality Score & Coverage]], or scanner outputs for [[Third-Party SARIF]] so developers and reviewers can inspect results after the runner VM is gone.
