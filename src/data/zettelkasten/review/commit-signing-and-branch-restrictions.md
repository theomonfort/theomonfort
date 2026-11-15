---
title: "Commit Signing & Branch Restrictions"
group: "pr-rulesets"
tags: ["signed-commits", "force-push", "linear-history", "git-integrity"]
aliases: ["Require signed commits", "Block force pushes", "Require linear history"]
---

**Commit Signing & Branch Restrictions** are Git-level integrity rules inside [[PR Rulesets]] that guarantee cryptographic commit provenance and protect `main` from history destruction alongside [[Pull Requests]] review gates.

## Core Branch Integrity Rules

| Ruleset Toggle | Protection Provided |
| --- | --- |
| **Block force pushes** *(on by default in new rulesets)* | Rejects `git push --force` on protected branches so merged review history can never be overwritten |
| **Restrict deletions** | Blocks accidental or malicious `git push origin --delete main` / `release/*` |
| **Require linear history** | Rejects merge commits on the target branch, enforcing `Squash and merge` or `Rebase and merge` in [[Merge Methods]] |
| **Require signed commits** | Rejects commits lacking a verified GPG, SSH, or S/MIME signature (`Verified` badge), preventing author-header spoofing and commit injection |

## Compatibility With Web & Agent Workflows

- Commits created through the GitHub web UI, including PR merges, [[Suggested Changes]] batch commits, and commits pushed by Copilot Cloud Agent during [[PR Coding Agent Handoff]], are **automatically signed by GitHub** with a `Verified` signature, working seamlessly under `Require signed commits` without needing [[Ruleset Bypass & Evaluate Mode]].
