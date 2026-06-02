---
title: Instructions
titleEn: Instructions
summary: Persistent rule files that give AI standing development guidelines at the repository or file level, so every teammate's Copilot follows the same conventions.
icon: 📜
color: amber
order: 5
category: plan
related: ['agent-skills']
links:
  - group: 👤 Personal Instructions
    label: GitHub Docs — GitHub.com Personal instructions for Copilot Chat
    url: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-personal-instructions
  - group: 👤 Personal Instructions
    label: GitHub Docs — Copilot CLI custom instructions
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions
  - group: 👤 Personal Instructions
    label: VS Code — Customize Copilot Chat with instructions
    url: https://code.visualstudio.com/docs/copilot/copilot-customization
  - group: 📦 Repository Instructions
    label: GitHub Docs — Add repository custom instructions
    url: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions
  - group: 🏢 Organization Instructions
    label: GitHub Docs — Add organization custom instructions
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/configure-custom-instructions/add-organization-instructions
  - group: 📚 Learn More
    label: GitHub Docs — Customize Copilot responses with custom instructions
    url: https://docs.github.com/copilot/customizing-copilot/about-customizing-github-copilot-chat-responses
  - group: 📰 Recent Changelog
    label: "Organization custom instructions are now generally available (2026-04-02)"
    url: https://github.blog/changelog/2026-04-02-copilot-organization-custom-instructions-are-generally-available
---

## At a Glance

<div class="hero-quote">
  <p>
    <strong>Instructions</strong> are rule files you give Copilot in advance to define development rules it should always follow.
  </p>
  <p>
    They are loaded at the Repository / Organization / Personal scope, applying team conventions automatically without writing them into every prompt.
  </p>
</div>


## 3 Scopes

| Scope | 📁 Location | 💡 Purpose |
| --- | --- | --- |
| 👤 **Personal** | **CLI**: `~/.copilot/copilot-instructions.md`<br/>**VS Code**: User Settings (`github.copilot.chat.*.instructions`)<br/>**GitHub.com**: Copilot Chat → profile picture → Personal Instructions | Style preferences, response language, personal writing habits |
| 📦 **Repository** | `.github/copilot-instructions.md` (single file)<br/>or `.github/instructions/*.instructions.md` (with `applyTo`) | Project conventions, framework-specific rules, "always use library X" |
| 🏢 **Org / Enterprise** | GitHub.com → Organization Settings → Copilot → Custom instructions | Compliance, security requirements, company-wide policies |

> 🎯 **Merge order**: Org → Repository → Personal, stacked in that order. **Org rules are strongest** and cannot be overridden by users.

## 📦 Repository Level

Rules that apply to **every teammate**. The moment someone runs `git clone`, the project's Copilot conventions are in place. **Two file formats** are available:

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>.github/copilot-instructions.md</code>
      <span class="setup-card-tag tag-cyan">🌍 Global</span>
    </div>
    <p>
      <strong>Scope</strong>: Entire repository<br />
      <strong>Loaded</strong>: Always active<br />
      <strong>Purpose</strong>: Tech stack, naming conventions, libraries to use/avoid, review standards
    </p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>.github/instructions/*.instructions.md</code>
      <span class="setup-card-tag tag-magenta">🎯 Per-file (Path Instructions)</span>
    </div>
    <p>
      <strong>Scope</strong>: Only files matching the <code>applyTo</code> glob<br />
      <strong>Loaded</strong>: Auto-injected only when touching those targets<br />
      <strong>Purpose</strong>: Test-specific, language-specific, or area-specific rules (frontend / API / DB, etc.)
    </p>
  </div>
</div>

```yaml
---
applyTo: "server/tests/test_*.py"
---
This file uses pytest functional tests.
- Load fixtures from `conftest.py`
- One assert per function
- Always mock LLM calls
```
