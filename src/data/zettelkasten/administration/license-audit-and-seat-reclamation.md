---
title: "License Audit & Seat Reclamation"
group: "licensing"
tags: ["licensing", "unaffiliated-users", "offboarding", "scim", "audit"]
---

**License Audit & Seat Reclamation** governs which user states consume paid seats under [[GHE & Copilot Licenses]] and how enterprises prevent dormant accounts from leaking budget.

## What Consumes vs Spares a GHE License

| User State in Enterprise | Consumes GHE Seat? | Key Billing Nuance |
| --- | --- | --- |
| **Organization member or pending org invite** | **Yes (`1` seat)** | Deduplicated across all orgs in the enterprise via [[Multi-Org Seat Deduplication]] |
| **[[Outside Collaborators]] / [[EMU Guest Collaborators]] on private/internal repo** | **Yes (`1` seat)** | Collaborators on **forks** of private repos do not consume an extra seat |
| **Unaffiliated user (SCIM-provisioned, 0 orgs, 0 repos)** | **No (`0` seats)** | Assign **Copilot Business** at the enterprise level (`2025-10-28` GA) to give non-GitHub-repo users Copilot without paying for a GHE seat |
| **Unaffiliated user matched to Visual Studio bundle** | **Yes (1 bundled VS seat)** | [[Enterprise Procurement Channels]] Visual Studio matching claims the bundled license even while unaffiliated |

## Automated Offboarding & Reclamation Workflow

Operating without an automated offboarding pipeline is **Governance Anti-Pattern #12** (dormant accounts retain code access and bill recurring seats):

1. **Enforce [[SCIM Provisioning]]**: Removing or disabling a leaver in the IdP automatically suspends their EMU account (or strips SAML org membership) and frees both GHE and Copilot seats.
2. **Audit Unaffiliated & Dormant Users**: Apply an enterprise unaffiliated-users cleanup policy and review last-active timestamps in enterprise license usage exports.
3. **Inspect Detailed Usage Reports**: Filter the CSV billing report by `username`, license `sku`, `organization`, and `cost_center_name` (including `Enterprise Only` rows in [[Cost Centers]]) to spot orphaned seat assignments.
