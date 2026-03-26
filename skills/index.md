---
title: Recommended Skills
layout: default
nav_order: 2
---

# Recommended Skills

Copilot skills (`.copilot/skills/`) extend what your AI assistant can do. These are the recommended skills for an effective agentic workflow.

Click any skill to see install instructions.

---

## 🔄 Planning & Execution Cycle

These skills work together as a complete plan → implement → validate lifecycle.

<div class="links-grid" markdown="0">

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">📝</span>
    <div class="link-body">
      <span class="link-name">create-plan <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Create detailed implementation plans through interactive research and iteration. Use when starting a new feature, refactoring, or complex task that needs careful planning.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Install to your project:</span>
    <div class="install-code">mkdir -p .github/skills/create-plan && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/create-plan/SKILL.md -o .github/skills/create-plan/SKILL.md</div>
    <span class="install-label">Or install globally:</span>
    <div class="install-code">mkdir -p ~/.copilot/skills/create-plan && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/create-plan/SKILL.md -o ~/.copilot/skills/create-plan/SKILL.md</div>
  </div>
</div>

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">🔄</span>
    <div class="link-body">
      <span class="link-name">iterate-plan <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Update and refine existing implementation plans based on new information or feedback. Use when you need to modify, expand, or adjust a plan that's already been created.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Install to your project:</span>
    <div class="install-code">mkdir -p .github/skills/iterate-plan && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/iterate-plan/SKILL.md -o .github/skills/iterate-plan/SKILL.md</div>
    <span class="install-label">Or install globally:</span>
    <div class="install-code">mkdir -p ~/.copilot/skills/iterate-plan && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/iterate-plan/SKILL.md -o ~/.copilot/skills/iterate-plan/SKILL.md</div>
  </div>
</div>

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">🚀</span>
    <div class="link-body">
      <span class="link-name">implement-plan <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Implement an approved technical plan phase by phase with verification. Use when you have a finalized plan and need to execute it systematically, step by step.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Install to your project:</span>
    <div class="install-code">mkdir -p .github/skills/implement-plan && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/implement-plan/SKILL.md -o .github/skills/implement-plan/SKILL.md</div>
    <span class="install-label">Or install globally:</span>
    <div class="install-code">mkdir -p ~/.copilot/skills/implement-plan && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/implement-plan/SKILL.md -o ~/.copilot/skills/implement-plan/SKILL.md</div>
  </div>
</div>

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">✅</span>
    <div class="link-body">
      <span class="link-name">validate-plan <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Validate that an implementation was executed correctly against the plan. Verifies success criteria and identifies any gaps or issues that need attention.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Install to your project:</span>
    <div class="install-code">mkdir -p .github/skills/validate-plan && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/validate-plan/SKILL.md -o .github/skills/validate-plan/SKILL.md</div>
    <span class="install-label">Or install globally:</span>
    <div class="install-code">mkdir -p ~/.copilot/skills/validate-plan && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/validate-plan/SKILL.md -o ~/.copilot/skills/validate-plan/SKILL.md</div>
  </div>
</div>

</div>

---

## 🔍 Research & Handoff

These skills help you understand codebases and transfer context between sessions.

<div class="links-grid" markdown="0">

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">🔬</span>
    <div class="link-body">
      <span class="link-name">research-codebase <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Conduct comprehensive research across the codebase to answer questions. Spawns parallel sub-agents to explore components and synthesizes findings into clear answers.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Install to your project:</span>
    <div class="install-code">mkdir -p .github/skills/research-codebase && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/research-codebase/SKILL.md -o .github/skills/research-codebase/SKILL.md</div>
    <span class="install-label">Or install globally:</span>
    <div class="install-code">mkdir -p ~/.copilot/skills/research-codebase && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/research-codebase/SKILL.md -o ~/.copilot/skills/research-codebase/SKILL.md</div>
  </div>
</div>

<div class="skill-card" onclick="this.classList.toggle('open')">
  <div class="link-card">
    <span class="link-icon">🤝</span>
    <div class="link-body">
      <span class="link-name">create-handoff <span class="skill-arrow">▸</span></span>
      <span class="link-desc">Create a handoff document for transferring work to another session. Documents progress, decisions, and next steps so a new session can pick up seamlessly.</span>
    </div>
  </div>
  <div class="skill-install">
    <span class="install-label">Install to your project:</span>
    <div class="install-code">mkdir -p .github/skills/create-handoff && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/create-handoff/SKILL.md -o .github/skills/create-handoff/SKILL.md</div>
    <span class="install-label">Or install globally:</span>
    <div class="install-code">mkdir -p ~/.copilot/skills/create-handoff && curl -sL https://raw.githubusercontent.com/theomonfort/theomonfort/main/.github/skills/create-handoff/SKILL.md -o ~/.copilot/skills/create-handoff/SKILL.md</div>
  </div>
</div>

</div>
