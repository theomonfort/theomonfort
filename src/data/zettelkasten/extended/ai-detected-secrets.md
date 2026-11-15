---
title: "AI-Detected Secrets"
group: "secure"
tags: ["secrets", "ai", "passwords", "secret"]
---

**AI-Detected Secrets** is a licensed detection engine in [[Secret Protection]] that uses AI models to catch **unstructured credentials** that deterministic regexes in [[Provider & Generic Patterns]] or [[Custom Patterns]] cannot express.

## Key Characteristics

- **Target leaks**: Plaintext passwords in configuration files, connection secrets in prose, and ad-hoc credentials without a fixed token prefix.
- **Triage workflow**: Alerts appear alongside generic patterns in [[Secret Scanning Alerts]]. Because there is no third-party issuer API to query, [[Validity Checks]] do not apply to AI-detected passwords, so treat findings as potentially live during triage.
- **Push blocking**: Optional [[Push Protection]] coverage for AI-detected secrets is controlled through a separate opt-in toggle.
