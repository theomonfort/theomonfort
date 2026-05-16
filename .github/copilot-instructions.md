# Repository instructions

This is an Astro/Tailwind static site for a bilingual GitHub/Copilot playbook. Use `pnpm` and validate code/content changes with `pnpm build`.

## Playbook content

- Playbook entries live in `src/content/playbook/ja/` and `src/content/playbook/en/` with matching slugs. Japanese is the primary locale; keep the English mirror structurally aligned unless the user asks for one locale only.
- Frontmatter is validated by `src/content.config.ts`: `title`, `summary`, `icon`, `color`, `order`, `category`, optional `titleEn`, `related`, and `links`.
- `titleEn` must be the English short title. In Japanese presentation mode, the left TOC and first-slide H1 use `titleEn`, not the Japanese title.
- Presentation mode splits slides on every `##` heading. Do not add body-level `#` headings; the title slide is generated from frontmatter. Keep each H2 section slide-sized.
- Use official, fully-qualified URLs in `links`. Link groups usually start with an emoji prefix, e.g. `📖 公式ドキュメント`.

## UI and presentation mode

- The main playbook renderer is duplicated in `src/pages/playbook/[slug].astro` and `src/pages/en/playbook/[slug].astro`; keep behavior in sync.
- Mermaid diagrams are rendered client-side. Presentation mode intentionally hides content while Mermaid is preparing so diagrams are fully rendered before the slide appears.
- Public assets are referenced from the `/theomonfort/` base path in content and CSS where appropriate.

## Hooks examples

- Hook examples live in `.github/hooks/`. Do not commit `.github/hooks/session.log`; it is runtime output.
- The protected-path hook blocks agent edits that reference `.github/`, `.env`, or `pnpm-lock.yaml`.
- Hook syntax differs slightly by environment: VS Code uses keys like `timeout` and payload fields such as `tool_name` / `tool_input`; Copilot CLI and Cloud Agent use `timeoutSec`, `toolName` / `toolArgs`, and top-level `permissionDecision`.

## Change hygiene

- Keep edits surgical and update both localized files when changing shared content.
- Do not commit generated build output. Run `pnpm build` before finishing code, content, or presentation-mode changes.
