---
title: "Proof of presence for high-impact actions"
date: "2026-09-24"
summary: "Require IdP re-authentication or MFA before sensitive actions such as creating tokens, editing webhooks, or changing security settings."
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-09-24-require-proof-of-presence-for-high-impact-actions/"
---

### Key takeaways

- **Scope**: EMU enterprises on github.com or GHEC-DR using Microsoft Entra ID for SSO (SAML or OIDC).
- **Valid for two hours**: after a successful check, further high-impact actions in the same browser session require no new challenge.
- **PR merges are not covered yet**: support is coming soon.

[Configuration (official documentation)](https://docs.github.com/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-proof-of-presence)
