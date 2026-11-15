---
title: "Review Custom Instructions"
group: "review"
tags: ["instructions", "copilot-instructions", "agents-md", "exclude-agent", "copilot-review"]
aliases: ["excludeAgent", ".instructions.md"]
---

**Review Custom Instructions** codify team architecture, security checklists, and style conventions in versioned Markdown files so [[Copilot Code Review]] enforces project-specific rules on every PR.

## Supported Instruction Sources

| Source | Path / Location | Key Review Capability |
| --- | --- | --- |
| **Repository Instructions** | `.github/copilot-instructions.md` | Repo-wide standards; **the former 4,000-character cap has been removed**, so full review rubrics are read completely |
| **Path-Scoped Instructions** | `.github/instructions/*.instructions.md` | YAML `applyTo` globs (such as `"src/api/**"`) + optional `excludeAgent` targeting |
| **Agent Instructions** | `AGENTS.md` (root or nested subdirectories, supported since `2026-06-18`) | Single shared file honored across Copilot Code Review, Cloud Agent, and Copilot CLI |
| **Organization Instructions** | `Org -> Settings -> Copilot -> Custom instructions` (`GA 2026-04-02`) | Baseline org-wide security and compliance rules applied across every repository |

## Scoping Rules With `excludeAgent`

Path-scoped `.instructions.md` files can separate review checklists from code-generation prompts using `excludeAgent`:

```yaml
---
applyTo: "src/db/**/*.ts"
excludeAgent: "coding-agent"
---
- Flag any raw SQL string interpolation without parameterized bindings.
- Verify every migration includes a reversible down step and index concurrency annotations.
```

- Set `excludeAgent: "code-review"` on scaffolding-only instructions so they do not clutter [[Copilot Code Review]], or `excludeAgent: "coding-agent"` for review-only audit checklists alongside [[Custom Agents in Code Review]].

## Shared Instruction Hierarchy

- Works alongside [[Custom Instructions]], [[Repository Instructions]], [[Path Instructions]], and [[AGENTS.md]], and pairs with [[Custom Agents in Code Review]].
