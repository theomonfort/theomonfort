---
title: "Public Monitoring"
group: "secure"
tags: ["secrets", "enterprise", "leak-detection", "secret"]
---

**Public Monitoring** is an enterprise-wide capability in [[Secret Protection]] (GitHub Enterprise Cloud, surfaced inside [[Security Overview]]) that detects secrets leaked in **public content outside your own repositories** across `github.com` in real time.

## Attribution & Scope

- **External public leaks**: Catches credentials accidentally pushed to personal forks, open-source repositories, public issues, PR comments, and discussions.
- **Never scans private repos**: Inspects public GitHub content only.
- **Two attribution signals**:
  1. **Enterprise member**: The committer account belongs to your enterprise.
  2. **Verified domain**: Commit author email matches a verified domain owned by your enterprise (catching personal accounts configured with a work email).
- **Zero repo setup**: Turned on once at the enterprise level under Security and quality, surfacing existing public exposures immediately.
