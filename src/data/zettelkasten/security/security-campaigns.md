---
title: "Security Campaigns"
group: "bridge"
tags: ["remediation", "backlog", "governance"]
---

Legacy repositories rarely start at zero alerts, and dumping thousands of historical findings onto product squads stalls adoption. **Security Campaigns** (included across [[Code Security]] and [[Secret Protection]] in [[GHAS]]) turn backlog cleanup into **scoped, time-boxed engineering sprints**.

## How Campaigns Work

- **Scoped slices**: Filter up to **1,000 alerts** across [[Code Scanning]] or [[Secret Scanning Alerts]] (for example: *SQL injection on internet-facing services* or *`Active` tokens confirmed by [[Validity Checks]]*).
- **Clear accountability**: Assign a **campaign manager** and **target due date**; affected developers receive a dedicated campaign tab inside their repository with [[Copilot Autofix]] and [[Agentic Autofix]] ready to use.
- **Progress tracking**: Monitor burn-down completion rates across teams inside [[Security Overview]].
