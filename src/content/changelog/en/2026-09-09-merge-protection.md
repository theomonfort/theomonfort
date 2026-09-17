---
title: "Block PRs with exposed secrets before they merge"
date: "2026-09-09"
summary: "A new ruleset rule requires secret scanning alerts to be resolved, adding a merge-time check alongside push protection."
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-09-09-block-pull-requests-with-exposed-secrets-from-merging/"
demo:
  - "Not yet presented: prepare a configuration where push protection covers only provider patterns. This is a demo configuration, not a product limitation."
  - "On a critical repository, enable Require secret scanning alerts are resolved in a ruleset, and include custom and generic patterns alongside provider patterns."
  - "Use safe test data to show a case that passes the push but is blocked at merge time. Never use real credentials."
---

### Key takeaways

- **Different checkpoints.** Push protection acts before a secret reaches the repository. The new rule adds a check when a PR is merged.
- **Scan completion and alert resolution are required.** The head commit must have completed a secret scan, with no open alerts for secrets introduced by the PR's commits. Developers without bypass permissions must resolve each alert.
- **Broader coverage is configurable.** Provider patterns are checked by default. Custom and generic patterns can also block merging.

### Why it matters

You can keep push protection scoped to provider patterns while checking **provider / custom / generic** patterns at merge time on critical repositories. This complements push protection rather than replacing it.

Available in public preview for GitHub Secret Protection or GitHub Advanced Security customers. Enable **Require secret scanning alerts are resolved** in repository, organization, or enterprise ruleset settings.
