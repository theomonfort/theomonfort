---
title: "Custom Patterns"
group: "secret"
tags: ["secrets", "patterns", "internal-tokens"]
---

**Custom Patterns** let organizations, enterprises, and repositories extend [[Secret Protection]] with regular expressions tailored to **internal service tokens, legacy credentials, or proprietary key formats** that external partners will never register.

## Safe Rollout Workflow

1. **Define format & test string**: Specify secret regex, optional before/after context expressions, and sample test strings.
2. **Save and dry run**: Scan repositories silently **without generating [[Secret Scanning Alerts]]** to measure hit volume and false positives first.
3. **Publish & enforce**: Publish the pattern to start alerting, then optionally enable [[Push Protection]] at the repository or enterprise pattern dashboard level.
