---
title: "Automatic Copilot Review"
group: "review"
tags: ["auto-review", "rulesets", "push-review", "drafts", "copilot-review"]
aliases: ["Automatically request Copilot code review", "Auto Copilot Review"]
---

**Automatic Copilot Review** triggers [[Copilot Code Review]] automatically on [[Pull Requests]] through [[PR Rulesets]] at repository, organization, or enterprise scale without requiring authors to assign Copilot manually.

## Ruleset Configuration Across Three Scopes

| Governance Scope | Settings Path | Targeting Options |
| --- | --- | --- |
| **Repository** | `Repo -> Settings -> Code and automation -> Rules -> Rulesets -> New branch ruleset` | Default branch (`main`) or branch name patterns (`release/*`) |
| **Organization** | `Org -> Settings -> Repository -> Rulesets -> New branch ruleset` | All repos, name globs (`*-service`), or repository custom properties |
| **Enterprise** | `Enterprise -> Policies -> Rulesets` | Enforce baseline review coverage across every organization in the enterprise |

## Sub-Options Under `Automatically request Copilot code review`

- **Review on PR Creation**: Requests Copilot immediately when a qualifying PR opens or transitions out of draft.
- **Review new pushes**: Re-runs incremental [[Copilot Code Review]] on each newly pushed commit so regressions introduced during review fixes are caught automatically (and addressed threads auto-resolve).
- **Review draft pull requests**: Extends auto-review to [[Draft Pull Requests]] so authors get AI feedback before pinging [[CODEOWNERS]].
- **Individual Pro / Pro+ Toggle**: Developers on Copilot Pro or Pro+ can also enable personal automatic review across repositories where they open PRs, governed by [[Review Effort Levels]] and [[Review Runner & Quota Governance]].
