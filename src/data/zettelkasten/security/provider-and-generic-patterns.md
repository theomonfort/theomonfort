---
title: "Provider & Generic Patterns"
group: "secret"
tags: ["secrets", "patterns", "regex"]
---

[[Secret Protection]] layers deterministic detection across two built-in pattern families before adding [[Custom Patterns]] and [[AI-Detected Secrets]]:

## 1. Provider Patterns

- Regex formats registered by **200+ cloud and SaaS partners** (AWS, Azure, GCP, GitHub PATs, Slack, Stripe, OpenAI, Anthropic, Salesforce, and more).
- Very low false-positive rate: enabled by default for both [[Secret Scanning Alerts]] and [[Push Protection]], and eligible for [[Validity Checks]] and the [[Partner Program]].

## 2. Generic Patterns

- Catch unstructured standard formats without a vendor prefix: `rsa_private_key`, `openssh_private_key`, MongoDB/MySQL/Postgres connection strings, and HTTP Basic/Bearer headers.
- Detection is on with Secret Protection, while [[Push Protection]] is **off by default** to avoid developer friction. Teams can opt individual patterns into push blocking or enforce them at PR time via [[Rulesets & Merge Protection]].
