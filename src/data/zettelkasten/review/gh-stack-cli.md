---
title: "gh stack CLI"
group: "stacking"
tags: ["gh-stack", "cli", "stacked-prs", "api"]
aliases: ["github/gh-stack", "gh stack"]
---

**gh stack CLI** (`github/gh-stack`) is the official GitHub CLI extension for authoring, rebasing, and submitting [[Stacked Pull Requests]] from the terminal alongside GitHub's native web, Mobile, and API stack surfaces.

## Installation & Workflow

```bash
# Install the official GitHub CLI extension
gh extension install github/gh-stack
```

| Capability / Surface | Role in Stacked Workflows |
| --- | --- |
| **`gh stack` CLI** | Create dependent branch layers locally, restack upper branches after amending an earlier layer's review feedback, and push/open linked [[Pull Requests]] in one command |
| **GitHub.com & GitHub Mobile** | Render the native stack navigation bar on every PR in the chain, showing layer order, approval status, CI health, and bottom-up merge controls |
| **REST, GraphQL & Webhooks** | Expose stack membership, base-branch retargeting events, and atomic stack merge operations for CI bots and [[Agent Merge]] |

## Keeping Layers Small for Humans & Agents

- Splitting a feature into `150-300` line layers via `gh stack` lets reviewers inspect schema, backend API, and UI changes separately while [[Copilot Code Review]] and [[Required Status Checks]] validate each layer in parallel.
