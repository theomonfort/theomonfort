---
title: "Organization Instructions"
group: "instructions"
tags: ["organization", "enterprise", "compliance", "instructions"]
---

**Organization Instructions** (GA `2026-04-02`) let organization admins publish company-wide standing rules inside [[Custom Instructions]] without editing individual repositories.

## Setup & Precedence Nuance

- **Location**: `GitHub.com -> Organization Settings -> Copilot -> Custom instructions`.
- **Typical Use**: Security baselines, regulatory compliance reminders, internal library guidance, and shared engineering standards.
- **Precedence Caveat**: Because [[Custom Instructions]] resolve in `Personal -> Repository -> Organization` order, [[Personal Instructions]] and [[Repository Instructions]] can override org prose. Enforce mandatory technical guardrails via [[Hooks]] ([[PreToolUse Guardrails]]) and [[Copilot Managed Settings]].
