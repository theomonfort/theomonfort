---
title: "GitHub Flow"
group: "review"
tags: ["branching", "github-flow", "continuous-delivery", "main", "pr-workflow"]
aliases: ["Branching Strategies"]
---

**GitHub Flow** is [[GitHub]]'s lightweight branching model built around a single always-deployable `main` branch and short-lived change branches integrated via [[Pull Requests]].

## Four-Step Loop

1. **Branch from `main`**: Create a short-lived branch for one focused feature or fix (or a layered chain with [[Stacked Pull Requests]]).
2. **Open a PR Early**: Start [[Draft Pull Requests]] or active [[Pull Requests]] early to trigger CI checks and [[Copilot Code Review]].
3. **Review & Verify**: Clear [[PR Rulesets]], [[Required Status Checks]], and human review feedback.
4. **Merge & Deploy**: Integrate via [[Merge Methods]] or [[Merge Queue]] and deploy immediately from `main`, keeping `main` continuously shippable.

## GitHub Flow vs Multi-Branch Versioned Releases

| Model | Branch Topology | Best Fit & Tradeoffs |
| --- | --- | --- |
| **GitHub Flow** | Single long-lived `main` + short-lived feature branches | Default choice for web services and continuous delivery; minimal rebase drift and fastest lead time |
| **Multi-Branch Release Flow (`Git Flow`)** | Long-lived `main` (tagged `v0.1`, `v1.0`) + `develop`, plus `feature/*`, `release/*`, and `hotfix/*` lanes | Used only for scheduled, versioned software releases; adds dual-merge overhead (`release/*` and `hotfix/*` must merge back to both `main` and `develop`) |
