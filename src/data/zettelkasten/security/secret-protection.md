---
title: "Secret Protection"
group: "product"
tags: ["secrets", "ghas", "prevention"]
aliases: ["GitHub Secret Protection", "Secret Scanning"]
---

**Secret Protection** is GitHub's product inside [[GHAS]] ($19 / month per active committer) for detecting and preventing credential leaks. Core secret scanning and push protection are free on public repositories; private and internal repositories require a license.

Deleting a committed secret in a later commit never removes it from Git history or local clones: stopping leaks before push and rotating exposed keys are the core strategies.

## Prevention & Detection Controls

- [[Push Protection]]: Blocks `git push` on the spot when a supported secret is detected.
- [[Rulesets & Merge Protection]]: Blocks pull request merges when secret scanning alerts remain unresolved (useful for noisy generic patterns).
- [[Secret Scanning Alerts]]: Continuous scanning across full Git history, branches, issues, PRs, discussions, and wikis.
- [[Public Monitoring]]: Real-time enterprise detection of secrets leaked in public repositories outside your own orgs.

## Detection Engines & Triage

- [[Provider & Generic Patterns]]: 200+ low-noise partner token formats plus opt-in generic private keys and connection strings.
- [[Custom Patterns]]: Organization or repository regexes with dry-run testing for internal token formats.
- [[AI-Detected Secrets]]: Catches unstructured credentials such as plaintext passwords in config or prose.
- [[Validity Checks]]: Queries provider APIs to confirm whether a leaked token is still live (`Active`).
- [[Delegated Bypass]]: Turns push-protection bypasses into governed approval requests.
- [[Partner Program]]: Automatically notifies cloud providers to revoke tokens leaked in public repos.
- [[Security Campaigns]] & [[Risk Assessments]]: Inventory existing exposure and burn down active alerts with owners and deadlines.
