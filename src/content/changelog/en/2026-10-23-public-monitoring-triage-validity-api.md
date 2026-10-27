---
title: "Public monitoring: triage, validity checks, API, and webhooks"
date: "2026-10-23"
summary: "Triage secrets leaked in public repositories across GitHub, prioritize active credentials, and connect findings to incident response tools from a dedicated enterprise view."
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-10-23-public-monitoring-adds-triage-validity-api-and-webhooks/"
---

### What changes?

- **Alert management**: close alerts as **Dismissed** or **Fixed**, add an optional comment, reopen alerts, and review their activity timeline.
- **Filtering**: narrow findings by repository, committer, secret type, attribution method (enterprise membership or verified domain), and open or closed state.
- **Always-on validity checks**: supported secret types are checked automatically on an ongoing basis. **Active**, **Inactive**, or **Unknown** status helps prioritize exposed credentials that still work.
- **REST API and webhooks**: query findings with `GET /enterprises/{enterprise}/secret-scanning/public-monitoring-alerts`, or subscribe to the enterprise-level `secret_scanning_public_monitoring_alert` event for newly detected leaks attributed to your enterprise.

### A dedicated enterprise page, not the normal alert list

In the [Octodemo enterprise](https://github.com/enterprises/octodemo), open **Security and quality → Public monitoring** in the left sidebar.

This page is **enterprise-level only**, not an organization or repository tab. It shows secrets attributed to your enterprise members or users whose email matches a verified enterprise domain, including leaks in public repositories your enterprise does not own.

Public monitoring must be enabled first under **Enterprise → Settings → Advanced Security → Additional Settings → Public monitoring**.

### Availability and remediation

Public preview for **GitHub Enterprise Cloud**, including data residency. Included with **GitHub Advanced Security or GitHub Secret Protection** at no additional cost. Enterprise admins and enterprise security managers can enable the feature and manage alert settings.

**Closing an alert only changes its state for your enterprise.** It does not revoke the credential or remove it from the public repository.

[Viewing and managing public monitoring alerts](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-public-monitoring-alerts) / [Enabling public monitoring](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/manage-your-coverage/enabling-public-monitoring-for-your-enterprise)
