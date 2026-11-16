---
title: "Reachability Analysis"
group: "dependabot"
tags: ["sca", "codeql", "triage"]
---

Most vulnerabilities reported in transitive packages sit in functions an application never invokes. **Reachability Analysis** (Public Preview in [[Dependabot]] under [[Code Security]]) bridges SCA and SAST by combining advisory metadata with [[CodeQL]] call-path extraction.

## Three Reachability Labels

- **`Reachable`**: CodeQL traced a real call path from your repository code into the vulnerable package function. Fix first.
- **`Potentially reachable`**: Advisory lacks function-level granularity or dynamic dispatch prevents ruling the path out.
- **`Unreachable`**: No call path exists in the analyzed build, letting teams deprioritize safely via [[Auto-Triage & Assign to Agent]] or [[Security Overview]] filters.
