---
title: Instructions
titleEn: Instructions
summary: Persistent rule files that give AI standing development guidelines at the repository or file level, so every teammate's Copilot follows the same conventions.
icon: /theomonfort/icons/instructions.png
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
    <strong>Instructions</strong> are rule files you give Copilot in advance to define development rules it should follow.
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

> 🎯 **Precedence**: Personal → Repository → Organization, in that priority order. **Personal instructions take the highest priority**, so user settings override organization policy (see the <a href="https://docs.github.com/en/copilot/concepts/prompting/response-customization" target="_blank" rel="noopener noreferrer" class="retro-link">official docs</a> for details).

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

## What happens inside the harness?

At session start, the harness loads the **always-on instructions** (`.github/copilot-instructions.md`) into context. When the user then asks to edit a file at a specific path, the harness loads any **path-specific instructions** whose `applyTo` glob matches that path.

<figure class="rpi-pipeline" style="margin:2em 0;">
<svg viewBox="0 0 1080 490" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:'DotGothic16','Courier New',monospace;">
  <defs>
    <marker id="arrow-orange" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffb000"/>
    </marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
    </marker>
    <marker id="arrow-pink" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff2e88"/>
    </marker>
  </defs>
  <path d="M 260 50 L 720 50" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <path d="M 140 85 L 140 415 L 350 415 L 350 420" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <path d="M 475 240 L 475 420" fill="none" stroke="#ff2e88" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow-pink)"/>
  <path d="M 610 420 L 610 338" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <path d="M 660 335 L 660 400 L 775 400 L 775 420" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <path d="M 705 290 L 712 290 L 712 195 L 720 195" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <rect x="20" y="15" width="240" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="35" y="36" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">HARNESS</text>
  <text x="35" y="58" fill="#e8f4ff" font-size="12" font-weight="bold">PUT ALWAYS-ON</text>
  <text x="35" y="74" fill="#e8f4ff" font-size="12" font-weight="bold">INSTRUCTIONS IN CONTEXT</text>
  <rect x="720" y="15" width="340" height="215" rx="6" fill="#0a0e27" stroke="#1e2a4a" stroke-width="1"/>
  <text x="735" y="40" font-size="10" fill="#cfe9ff">
    <tspan x="735" dy="0" fill="#888">.github/copilot-instructions.md</tspan>
    <tspan x="735" dy="14" fill="#555">---</tspan>
    <tspan x="735" dy="14" fill="#00f0ff" font-weight="bold"># Coding rules</tspan>
    <tspan x="735" dy="14">- Use TypeScript</tspan>
    <tspan x="735" dy="14">- Use pnpm</tspan>
    <tspan x="735" dy="14">- Write tests</tspan>
    <tspan x="735" dy="22" fill="#888">.github/instructions/db.instructions.md</tspan>
    <tspan x="735" dy="14" fill="#555">---</tspan>
    <tspan x="735" dy="14"><tspan fill="#ffb000">applyTo:</tspan> src/db/**</tspan>
    <tspan x="735" dy="14" fill="#555">---</tspan>
    <tspan x="735" dy="22" fill="#00f0ff" font-weight="bold"># DB guidelines</tspan>
    <tspan x="735" dy="14">- Use prepared statements</tspan>
  </text>
  <rect x="415" y="160" width="120" height="80" rx="12" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="475" y="185" fill="#ff2e88" font-size="12" font-weight="bold" letter-spacing="1" text-anchor="middle">USER</text>
  <text x="475" y="212" fill="#e8f4ff" font-size="14" font-weight="bold" text-anchor="middle">"TOUCH</text>
  <text x="475" y="230" fill="#e8f4ff" font-size="14" font-weight="bold" text-anchor="middle">THE DB"</text>
  <rect x="485" y="265" width="220" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="500" y="286" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">HARNESS</text>
  <text x="500" y="308" fill="#e8f4ff" font-size="12" font-weight="bold">LOADS MATCHING PATH</text>
  <text x="500" y="324" fill="#e8f4ff" font-size="12" font-weight="bold">INSTRUCTION INTO CONTEXT</text>
  <text x="605" y="385" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">edit src/db/users.ts</text>
  <text x="80" y="441" fill="#e8f4ff" font-size="11" font-weight="bold" letter-spacing="1"><tspan x="80" dy="0">MODEL</tspan><tspan x="80" dy="13">CONTEXT</tspan></text>
  <rect x="155" y="420" width="110" height="55" rx="10" fill="#9bbc0f"/>
  <text x="210" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="210" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="295" y="420" width="110" height="55" rx="10" fill="#00f0ff"/>
  <text x="350" y="453" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="435" y="420" width="80" height="55" rx="10" fill="#ff2e88"/>
  <text x="475" y="453" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
  <rect x="545" y="420" width="130" height="55" rx="10" fill="#00f0ff"/>
  <text x="610" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">FILE EDIT</text>
  <text x="610" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">REQUEST</text>
  <rect x="705" y="420" width="140" height="55" rx="10" fill="#ffb000"/>
  <text x="775" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">PATH</text>
  <text x="775" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTION</text>
</svg>
</figure>
