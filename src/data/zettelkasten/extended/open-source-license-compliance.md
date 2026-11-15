---
title: "Open Source License Compliance"
group: "secure"
tags: ["sca", "licenses", "governance", "compliance", "dependabot"]
aliases: ["License Compliance"]
---

**Open Source License Compliance** (GitHub Enterprise Cloud + [[Code Security]]) turns ad-hoc per-repo [[Dependency Review]] YAML files into a **centrally governed enterprise license policy** inside [[Dependabot]].

## Policy, Exceptions & Audits

- **Central policy**: Define allowed and disallowed SPDX license families once at the enterprise level (for example allowing `MIT` and `Apache-2.0` while blocking `AGPL-3.0`).
- **Evaluate vs Active enforcement**: Attach the policy to [[Rulesets & Merge Protection]] in **Evaluate mode** first to observe impact without blocking developers, then switch to **Active** to block non-compliant PRs.
- **Exception workflow**: Developers request a scoped exception from the failed PR check, approved or denied by the **Enterprise Open-Source License Manager** role with a permanent audit trail.
- **Existing inventory check**: Combine SBOM exports from the [[Dependency Graph]] (`pkg:` PURLs) with the **Package-check REST API** to audit already-merged dependencies.
