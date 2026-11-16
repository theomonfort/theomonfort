---
title: "Push Protection"
group: "secret"
tags: ["secrets", "prevention", "git-push"]
---

**Push Protection** is the primary preventive control in [[Secret Protection]]. Instead of alerting after a credential enters Git history, it inspects commits at `git push` time across all branches and **rejects the push on the spot** when a high-confidence secret is detected.

## How It Works

- **Immediate block**: The terminal prints the detected secret type, commit location, and an unblock URL so the secret never reaches the remote repository and never needs emergency rotation.
- **Scope**: Covers pushes to all branches on [[GitHub]] where enabled (local unpushed commits are not scanned until pushed). Free user-level push protection also protects pushes to public repos.
- **Pattern tuning**: High-confidence [[Provider & Generic Patterns]] (partner patterns) block by default; [[Custom Patterns]] and generic patterns can be opted in from enterprise pattern configurations based on false-positive and bypass rates.
- **Controlled exceptions**: Pair with [[Delegated Bypass]] so contributors must request approval instead of self-bypassing, or pair with [[Rulesets & Merge Protection]] to allow pushes on noisy patterns while still blocking PR merges.
