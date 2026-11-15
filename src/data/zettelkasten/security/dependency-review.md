---
title: "Dependency Review"
group: "dependabot"
tags: ["sca", "pull-requests", "shift-left"]
---

While [[Dependabot Alerts & Updates]] watch the **default branch** after merge, **Dependency Review** is the **pull-request gate** in [[Dependabot]] that stops risky packages before they ever land.

## How It Protects Pull Requests

- Compares the [[Dependency Graph]] between base and head commits on every PR touching a manifest or lockfile.
- Flags newly added packages with known CVEs, malware advisories, disallowed open-source licenses, or unmaintained hygiene signals right inside the PR Files Changed view.
- **Enforcement**: Pair the `actions/dependency-review-action` check with [[Rulesets & Merge Protection]] (free on public repos; part of [[Code Security]] on private repos), or scale license rules enterprise-wide with [[Open Source License Compliance]].
