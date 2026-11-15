---
title: "Secret Scanning Alerts"
group: "secure"
tags: ["secrets", "detection", "secret"]
---

**Secret Scanning Alerts** provide continuous post-commit detection inside [[Secret Protection]], notifying security managers and repository administrators in the **Security and quality** tab whenever credentials appear in a repository.

## Coverage & Lifecycle

- **Full repository surface**: Scans the entire Git history across all branches, plus Issues, Pull Requests, GitHub Discussions, Wikis, and secret gists.
- **Automatic back-scanning**: Whenever GitHub ships new [[Provider & Generic Patterns]] or [[Custom Patterns]] are published, historical content is rescanned.
- **Real-risk triage**: Combine alerts with [[Validity Checks]] to filter for `Active` credentials first, and group open alerts into [[Security Campaigns]] so teams revoke, rotate, and close them systematically.
