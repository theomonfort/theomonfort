---
title: "Partner Program"
group: "secure"
tags: ["secrets", "public-repos", "revocation", "secret"]
---

The **Secret Scanning Partner Program** is a free, always-on protection inside [[Secret Protection]] covering **all public repositories on [[GitHub]] and public `npm` packages**.

## Automatic Provider Remediation

- Whenever a push matches one of the 200+ [[Provider & Generic Patterns]] in a public repo, GitHub forwards the match directly to the issuing vendor (AWS, Google, Slack, Stripe, OpenAI, and others).
- The partner can **revoke the token or notify the account owner within seconds**, neutralizing automated credential-harvesting bots before attackers abuse the leaked key.
- Private and internal repositories never send matches to external partners; instead, they create private [[Secret Scanning Alerts]] and optional [[Validity Checks]].
