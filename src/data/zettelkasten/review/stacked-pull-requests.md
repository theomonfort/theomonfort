---
title: "Stacked Pull Requests"
group: "stacking"
tags: ["stacked-prs", "layers", "merge", "preview"]
aliases: ["Stacked PRs", "PR Stacks"]
---

**Stacked Pull Requests** (in public preview on [[GitHub]] since **2026-07-30**) chain dependent [[Pull Requests]] so each branch targets the branch directly below it (`feat-a -> main`, `feat-b -> feat-a`, `feat-c -> feat-b`), replacing monolithic diffs with small, independently reviewable layers.

## Stack Mechanics & Guarantees

- **Per-Layer Protections**: [[PR Rulesets]], [[Required Status Checks]], and [[Copilot Code Review]] evaluate cleanly against each individual layer's isolated diff in [[PR Diff & File Views]].
- **Auto-Rebase & Retarget**: Merging a lower layer automatically retargets the PR above it to `main` and rebases dependent branches in the stack.
- **Flexible Atomic Landing**: Merge a single bottom layer, a subset bottom-up, or land the **entire stack atomically from the top PR** once every layer's gates pass.

## Stack History on `main` by Merge Method

| Chosen Strategy ([[Merge Methods]]) | Resulting Commit Graph on `main` |
| --- | --- |
| **Merge commit** | Every layer branch keeps its commits intact, and the **entire stack (`PR #1-3`) lands via 1 single merge commit** (fullest history) |
| **Squash and merge** | Each PR in the stack collapses into **1 squashed commit per PR** (`PR #1`, `PR #2`, `PR #3`) on `main` (cleanest log) |
| **Rebase and merge** | Every commit across `PR #1`, `PR #2`, and `PR #3` replays sequentially onto `main` with **linear history and no merge commit** |

- Manage and sync stacks across `github.com`, GitHub Mobile, REST / GraphQL / webhooks, and the terminal via [[gh stack CLI]].
