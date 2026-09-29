---
title: "Proof of presence for high-impact actions"
date: "2026-09-24"
summary: "Require IdP re-authentication or MFA before sensitive actions such as creating tokens, editing webhooks, or changing security settings."
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-09-24-require-proof-of-presence-for-high-impact-actions/"
demoUrl: "https://github.com/enterprises/octodemo/settings/security"
---

### Key takeaways

- **Scope**: EMU enterprises on github.com or GHEC-DR using Microsoft Entra ID for SSO (SAML or OIDC).
- **Valid for two hours**: after a successful check, further high-impact actions in the same browser session require no new challenge.
- **PR merges are not covered yet**: support is coming soon.

### Settings

In the enterprise **Settings → Authentication security → Proof of presence**, choose the Sudo actions policy: **No policy / Re-authentication / MFA**.

![Proof of presence Sudo actions policy selector](/theomonfort/changelog/img/proof-of-presence-settings.png)

[Configuration (official documentation)](https://docs.github.com/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-proof-of-presence)
