---
title: "Enterprise Policies"
group: "governance"
tags: ["enterprise-policies", "actions", "copilot", "models", "governance"]
---

**Enterprise Policies** enforce organization- and platform-wide guardrails from the top of [[Enterprise Governance]]: repositories hold no policy settings of their own, and organizations can only **tighten** (never loosen) an enterprise-enforced policy (`Enabled` / `Disabled` vs `No policy` / `Let organizations decide`).

## Repository, Access & Token Policies

- **Visibility & Forking**: Block public repository creation (especially outside dedicated OSS orgs, or universally under [[EMU Account Restrictions]]), restrict who can change repository visibility or delete repos, and disable private/internal repository forking by default.
- **External Invites & PATs**: Lock [[Outside Collaborators]] invitations to `Owners only` (default ships as `No policy`) and require administrator approval flows for fine-grained Personal Access Tokens (see [[GitHub Well-Architected Guardrails]]).
- **Apps & Audit Logs**: Install enterprise-wide GitHub Apps centrally at the enterprise level and enable **audit log streaming** to SIEM/cloud storage so events outlive short default UI retention.

## GitHub Actions Supply-Chain Policies

Avoid **Governance Anti-Pattern #04 (`Allow all actions`)**, which exposes builds to unvetted third-party code:

- Restrict allowed actions to **GitHub-created**, **Verified Creators**, and an explicit internal/SHA-pinned allowlist.
- Set default `GITHUB_TOKEN` workflow permissions to **`read-only`**, disable Actions automatic PR approval, and scope Actions execution and self-hosted runner groups to approved repositories.

## Copilot Model & Enterprise-Assigned User Policies

- **Global Model Policy & Auto Selection**: Set the enterprise default for newly released models via the **Global model policy** (GA `2026-08-26`, with [[Enterprise & Org Teams]] model targeting in preview `2026-07-31`), default clients to **Auto model selection** (GA `2026-07-01`), and optionally enforce in-region models on [[Copilot with Data Residency]].
- **Policies for Enterprise-Assigned Users**: Users granted **Copilot Business** directly at the enterprise without org membership (see [[GHE & Copilot Licenses]]) bypass "Let organizations decide". Their feature availability is governed by `Enterprise -> AI controls -> Copilot -> Policies for enterprise-assigned users` (if set to `Disabled`, every org-delegated feature turns off for them).
