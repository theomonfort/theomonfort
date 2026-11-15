---
title: "Delegated Bypass"
group: "secret"
tags: ["secrets", "governance", "push-protection"]
---

By default, anyone with write access who triggers [[Push Protection]] can self-unblock a push after picking a reason (`used in tests`, `false positive`, or `will fix later`), which records an audit trail and opens or closes [[Secret Scanning Alerts]] accordingly.

**Delegated Bypass** upgrades this control in [[Secret Protection]] by restricting bypass authority to a designated **bypass list** of roles, teams, or security managers:

- Contributors cannot force a blocked secret into the repository on their own.
- Instead, they submit a **bypass request** directly from the block URL, and an approved reviewer grants or denies the push.
