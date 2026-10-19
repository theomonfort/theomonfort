---
title: "Open source license compliance is generally available"
date: "2026-10-16"
summary: "Define an enterprise-wide dependency license policy and enforce it before merge with rulesets, PR annotations, and centrally reviewed exceptions."
category: security
status: "GA"
source: "https://github.blog/changelog/2026-10-16-open-source-license-compliance-generally-available/"
---

### What's new?

- **Centralized license policy**: expands beyond the dependency review action's license checks with an enterprise-wide policy. Branch rulesets target the repositories and branches where compliance results are required before merging.
- **PR-time enforcement**: new or changed dependencies, including detected transitive dependencies, are checked against the policy. Noncompliant dependencies produce PR annotations. Resolve violations by removing or replacing the dependency, amending the policy, or obtaining an approved exception.
- **Delegated governance**: the new **Enterprise Open-Source License Manager** role lets designated individuals or teams review exception requests. Pending requests appear in the enterprise console and trigger email notifications.
- **APIs and audit logs**: download, update, or replace the enterprise policy through the API. Another endpoint checks package compliance, enabling coding agents to check proposed dependencies before incorporating them. Policy changes now emit audit log events.
- **Data residency**: license data is now available to GitHub Enterprise Cloud with data residency, including in the dependency graph and SBOM exports.

### Availability and rollout

Available for **GitHub Enterprise Cloud**, including data residency, on repositories with **GitHub Code Security enabled**. This is separate from the free core Dependabot features.

A ruleset in **Active** mode blocks PRs with noncompliant dependencies. **Evaluate** mode runs checks and annotates PRs without directly blocking merges. However, branch protection requiring conversation resolution can still block a merge on those annotations.

[About open source license compliance](https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/open-source-license-compliance) / [Configure license policies](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-license-policies) / [Dependency graph REST API](https://docs.github.com/rest/dependency-graph?apiVersion=2026-03-10)
