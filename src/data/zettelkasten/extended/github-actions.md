---
title: "GitHub Actions"
group: "secure"
tags: ["actions", "ci-cd", "automation", "test-and-secure", "product"]
aliases: ["Actions"]
---

**GitHub Actions** is [[GitHub]]'s native CI/CD and event-driven automation platform. Defined as YAML pipelines in `.github/workflows/`, it automates builds, unit and Playwright E2E test suites, deployments, issue triage, and releases directly where repositories and pull requests live.

## Clone -> Run -> Destroy

The golden rule of GitHub Actions is **"start from scratch every time"**: when a repository event fires, GitHub provisions a clean disposable VM, clones the repository, executes your steps in order, reports checks and logs back to the pull request, and destroys the VM.

## Core Building Blocks

- [[Workflows & Triggers]]: Declarative `.github/workflows/*.yml` pipelines triggered by `push`, `pull_request`, `schedule`, `workflow_dispatch`, and 35+ repository events.
- [[Actions Runners]]: Managed GitHub-hosted Linux/Windows/macOS VMs, Larger runners, and Self-hosted / ARC Kubernetes runners.
- [[Marketplace Actions]]: Reusable steps (`actions/checkout`, `actions/setup-node`) governed by source review and org allowlists.
- [[Workflow Lockfiles]]: GA `.github/workflows/actions.lock` pinning action tags and transitive dependencies to immutable commit SHAs.
- [[Actions Cache & Artifacts]]: Controlled state persistence (`actions/cache` with least-privilege `cache-mode`, plus test and coverage artifacts).
- [[Actions Secrets & OIDC]]: Masked `${{ secrets.NAME }}` values and short-lived keyless OIDC cloud tokens.
- [[Actions Compute & Budgets]]: Monthly monetary compute allowance and soft budget alerts for runner minutes.
- [[DORA Metrics]]: Measures how CI/CD and automated checks improve both delivery speed and production stability.

Status checks from Actions plug directly into [[Rulesets & Merge Protection]] so failing tests or scans never merge to `main`.
