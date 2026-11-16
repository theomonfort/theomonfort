---
title: Instructions
titleEn: Instructions
summary: Persistent rule files that give AI standing development guidelines at the repository or file level, so every teammate's Copilot follows the same conventions.
icon: /theomonfort/icons/instructions.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#86efac"
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
  - group: 📦 Repository Instructions
    label: VS Code — Use custom instructions in VS Code
    url: https://code.visualstudio.com/docs/agent-customization/custom-instructions
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


## 3 Scopes <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting/response-customization" target="_blank" rel="noopener noreferrer">📖 Docs</a>

| Scope | 📁 Location | 💡 Purpose |
| --- | --- | --- |
| 👤 **Personal** | **CLI**: `~/.copilot/copilot-instructions.md`<br/>**VS Code**: User Settings (`github.copilot.chat.*.instructions`)<br/>**GitHub.com**: Copilot Chat → profile picture → Personal Instructions | Style preferences, response language, personal writing habits |
| 📦 **Repository** | `.github/copilot-instructions.md` (single file)<br/>or `.github/instructions/*.instructions.md` (with `applyTo`) | Project conventions, framework-specific rules, "always use library X" |
| 🏢 **Org / Enterprise** | GitHub.com → Organization Settings → Copilot → Custom instructions | Compliance, security requirements, company-wide policies |

> 🎯 **Precedence**: **Personal → Repository → Organization**. Personal instructions take the highest priority, overriding organization policy.

## 📦 Repository Level

**Every teammate** gets the project's conventions after `git clone`. **Two file formats**:

<div class="instructions-repository">
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

</div>

## What happens inside the harness?

**Always-on rules** first. Matching **path rules** are added when you edit a file.

<figure class="instructions-pipeline">
<svg viewBox="0 0 1100 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The harness loads repository instructions into model context. The user's prompt requests a database edit, causing matching path instructions to be appended to the existing context.">
<defs>
<marker id="instructions-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="var(--c-crt-amber)"/></marker>
<marker id="instructions-cyan" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-cyan)"/></marker>
<marker id="instructions-magenta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-magenta)"/></marker>
</defs>
<g fill="none" stroke-width="2.5">
<path d="M320 70 H730" stroke="var(--c-crt-amber)" marker-end="url(#instructions-amber)"/>
<path d="M170 120 V375 H390 V390" stroke="var(--c-crt-amber)" marker-end="url(#instructions-amber)"/>
<path d="M525 255 V365 H575 V390" stroke="var(--c-neon-magenta)" stroke-dasharray="6 5" marker-end="url(#instructions-magenta)"/>
<path d="M760 390 V360" stroke="var(--c-neon-cyan)" marker-end="url(#instructions-cyan)"/>
<path d="M920 325 H1090 V180 H1080" stroke="var(--c-crt-amber)" marker-end="url(#instructions-amber)"/>
<path d="M820 360 V372 H970 V390" stroke="var(--c-crt-amber)" marker-end="url(#instructions-amber)"/>
</g>
<rect x="20" y="20" width="300" height="100" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="38" y="48" fill="var(--c-crt-amber)" font-size="20" font-weight="700">HARNESS</text>
<text x="38" y="78" fill="var(--c-phosphor)" font-size="19"><tspan x="38">Load always-on rules</tspan><tspan x="38" dy="25">into model context</tspan></text>
<rect x="730" y="20" width="350" height="240" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-cyan)" stroke-width="1.5"/>
<text x="746" y="45" fill="var(--c-phosphor)" font-size="16">
<tspan x="746" class="instruction-source">.github/copilot-instructions.md</tspan>
<tspan x="746" dy="24" fill="var(--c-neon-cyan)" font-weight="700"># Coding rules</tspan>
<tspan x="746" dy="22">- Use TypeScript</tspan><tspan x="746" dy="22">- Use pnpm</tspan><tspan x="746" dy="22">- Write tests</tspan>
<tspan x="746" dy="28" class="instruction-source">.github/instructions/db.instructions.md</tspan>
<tspan x="746" dy="24" fill="var(--c-crt-amber)">applyTo: src/db/**</tspan>
<tspan x="746" dy="24" fill="var(--c-neon-cyan)" font-weight="700"># DB guidelines</tspan>
<tspan x="746" dy="22">- Use prepared statements</tspan>
</text>
<rect x="430" y="155" width="190" height="100" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="525" y="187" text-anchor="middle" fill="var(--c-neon-magenta)" font-size="20" font-weight="700">USER</text>
<text x="525" y="222" text-anchor="middle" fill="var(--c-phosphor)" font-size="20">“Touch the DB”</text>
<rect x="620" y="290" width="300" height="70" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="638" y="318" fill="var(--c-crt-amber)" font-size="20" font-weight="700">HARNESS</text>
<text x="638" y="343" fill="var(--c-phosphor)" font-size="18">Append matching path rules</text>
<text x="12" y="414" fill="var(--c-phosphor)" font-size="17" font-weight="700"><tspan x="12">MODEL</tspan><tspan x="12" dy="24">CONTEXT</tspan></text>
<rect x="120" y="390" width="150" height="60" rx="3" fill="var(--c-gb-green)"/>
<rect x="300" y="390" width="180" height="60" rx="3" fill="var(--c-neon-cyan)"/>
<rect x="510" y="390" width="130" height="60" rx="3" fill="var(--c-neon-magenta)"/>
<rect x="670" y="390" width="180" height="60" rx="3" fill="var(--c-neon-cyan)"/>
<rect x="880" y="390" width="180" height="60" rx="3" fill="var(--c-crt-amber)"/>
<g fill="var(--c-shadow-ink)" text-anchor="middle" font-size="17" font-weight="700">
<text x="195" y="414"><tspan x="195">SYSTEM</tspan><tspan x="195" dy="23">+ TOOLS</tspan></text>
<text x="390" y="426">INSTRUCTIONS</text>
<text x="575" y="426">PROMPT</text>
<text x="760" y="414"><tspan x="760">EDIT REQUEST</tspan><tspan x="760" dy="23" font-size="14">src/db/users.ts</tspan></text>
<text x="970" y="414"><tspan x="970">PATH</tspan><tspan x="970" dy="23">INSTRUCTIONS</tspan></text>
</g>
</svg>
</figure>
