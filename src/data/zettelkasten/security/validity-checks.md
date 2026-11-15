---
title: "Validity Checks"
group: "secret"
tags: ["secrets", "triage", "api"]
---

**Validity Checks** inside [[Secret Protection]] cut through alert fatigue by sending a safe validation check to supported third-party providers (such as AWS, GitHub, Slack, or Stripe) to verify whether a leaked credential is still live.

## Three Statuses

- **`Active`**: Confirmed live credential. Treat as immediate incident priority and rotate right away.
- **`Inactive`**: Already revoked or expired. Safe to close after confirming history context.
- **`Unknown`**: Provider does not support validation or could not respond (including [[AI-Detected Secrets]] and [[Custom Patterns]]).

Filtering [[Secret Scanning Alerts]] or scoping [[Security Campaigns]] by `Active` status lets security teams fix real exposure before chasing dead test tokens.
