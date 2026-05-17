#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * One-shot importer: turns a Google Codelabs Markdown source (`workshop-nikon.md`)
 * into per-step MDX files under `src/content/handson/ja/` and copies all referenced
 * images into `public/handson/img/`.
 *
 * Usage:
 *   node scripts/import-handson.mjs <path-to-workshop-repo> [--force]
 *
 * Defaults the source path to `../2026-Github-Copilot-Workshop` (sibling repo).
 *
 * Generated step files are clearly marked auto-generated. Re-running without
 * `--force` aborts if any destination file already exists (avoids silent loss).
 */
import { promises as fs, existsSync, statSync, readdirSync, mkdirSync, copyFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkGfm from 'remark-gfm';
import { toString as mdastToString } from 'mdast-util-to-string';

// ── Paths ───────────────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const force = args.includes('--force');
const positional = args.filter((a) => !a.startsWith('--'));
const sourceRoot = path.resolve(
  positional[0] ?? path.resolve(repoRoot, '..', '2026-Github-Copilot-Workshop'),
);
const sourceMd = path.join(sourceRoot, 'workshop-nikon.md');
const sourceImgDir = path.join(sourceRoot, 'github-copilot-workshop', 'img');

const outContentDir = path.join(repoRoot, 'src', 'content', 'handson', 'ja');
const outImgDir = path.join(repoRoot, 'public', 'handson', 'img');

// Public base path the generated image URLs must use to resolve through Astro's BASE_URL.
const publicImgBase = '/theomonfort/handson/img/';

// ── Sanity checks ───────────────────────────────────────────────────────────
if (!existsSync(sourceMd)) {
  console.error(`✖ Source markdown not found: ${sourceMd}`);
  console.error('  Pass the workshop repo path as the first argument.');
  process.exit(1);
}
if (!existsSync(sourceImgDir)) {
  console.error(`✖ Source image dir not found: ${sourceImgDir}`);
  process.exit(1);
}

// Try to record the upstream commit SHA for traceability.
let upstreamSha = 'unknown';
try {
  upstreamSha = execSync('git rev-parse HEAD', { cwd: sourceRoot, encoding: 'utf8' }).trim();
} catch {
  // Not a git repo or no git available — leave as 'unknown'.
}

// ── Parse ───────────────────────────────────────────────────────────────────
const raw = await fs.readFile(sourceMd, 'utf8');

// The Codelabs source has a non-standard YAML-ish header (no `---` delimiters) at the top
// (`author:`, `summary:`, `id:`, etc.) followed by the first `# Title`. Strip everything
// before the first `# ` heading so remark sees clean Markdown.
const firstH1Idx = raw.search(/^# /m);
const cleaned = firstH1Idx > 0 ? raw.slice(firstH1Idx) : raw;

const processor = unified().use(remarkParse).use(remarkGfm);
const stringifier = unified()
  .use(remarkStringify, {
    bullet: '-',
    fences: true,
    listItemIndent: 'one',
    rule: '-',
    emphasis: '_',
    strong: '*',
  })
  .use(remarkGfm);

const tree = processor.parse(cleaned);

// ── Step splitting (AST-aware: fenced code blocks have type === 'code', not heading) ──
const root = tree;
const steps = [];
let current = null;

for (const node of root.children) {
  if (node.type === 'heading' && node.depth === 1) {
    // Document title — ignore. Each step gets its own h1 in the page header.
    continue;
  }
  if (node.type === 'heading' && node.depth === 2) {
    current = {
      title: mdastToString(node).trim(),
      children: [],
    };
    steps.push(current);
    continue;
  }
  if (current) current.children.push(node);
}

if (steps.length === 0) {
  console.error('✖ No h2 steps found.');
  process.exit(1);
}
console.log(`✓ Detected ${steps.length} steps`);

// ── Per-step transform ──────────────────────────────────────────────────────

function slugify(title) {
  // Strip "INTRO：" / "PLAN: " style prefixes, then build an ASCII slug.
  // Kana/kanji are dropped from the slug (they wouldn't survive URL encoding well anyway).
  return title
    .normalize('NFKD')
    .replace(/[：:\(\)（）「」『』]/g, '-')
    .replace(/[^A-Za-z0-9\u3040-\u30FF\u4E00-\u9FAF]+/g, '-')
    .replace(/[\u3040-\u30FF\u4E00-\u9FAF]+/g, '')
    .toLowerCase()
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Special-case slug overrides for purely kana/kanji titles that produce empty
// ASCII slugs. Keys match the literal step title after trim.
const SLUG_OVERRIDES = {
  'おめでとうございます 🎉': 'congratulations',
  'おめでとうございます': 'congratulations',
};

function deriveSlug(title, fallback) {
  if (SLUG_OVERRIDES[title]) return SLUG_OVERRIDES[title];
  const s = slugify(title);
  return s || fallback;
}

/** Extract the Duration directive (first paragraph "Duration: N") from a step body. */
function extractDuration(children) {
  for (let i = 0; i < children.length; i += 1) {
    const node = children[i];
    if (node.type === 'paragraph') {
      const text = mdastToString(node).trim();
      const m = /^Duration:\s*(\d+)\s*$/i.exec(text);
      if (m) {
        children.splice(i, 1);
        return Number(m[1]);
      }
      // First non-Duration paragraph — stop looking.
      return null;
    }
    if (node.type === 'heading') return null;
  }
  return null;
}

/**
 * Detects a Codelabs aside blockquote and, if found, mutates the AST so the
 * "aside positive|negative" marker is stripped while the body content is kept.
 *
 * Codelabs source format is:
 *   > aside positive
 *   > Body content with **markdown**.
 *
 * remark parses this as ONE blockquote with ONE paragraph child whose first
 * inline node is a text "aside positive\n…". We strip the marker line in place
 * and return the type — the caller then renders the *modified* blockquote
 * children as the aside body.
 *
 * Returns null when this blockquote is not an aside.
 */
function detectAndStripAside(node) {
  if (node.type !== 'blockquote') return null;
  const first = node.children[0];
  if (!first || first.type !== 'paragraph') return null;
  const inlines = first.children;
  if (!inlines || inlines.length === 0) return null;
  const firstInline = inlines[0];
  if (!firstInline || firstInline.type !== 'text') return null;

  const m = /^aside\s+(positive|negative)\s*(?:\n|$)/i.exec(firstInline.value);
  if (!m) return null;
  const type = m[1].toLowerCase();

  // Strip the marker prefix from the first text node.
  const remainder = firstInline.value.slice(m[0].length);
  if (remainder.length === 0) {
    // Marker was the only thing in that text node — drop it. If the paragraph
    // then has no inlines, drop the paragraph too.
    inlines.shift();
    if (inlines.length === 0) {
      node.children.shift();
    }
  } else {
    firstInline.value = remainder;
  }
  return type;
}

/** Rewrite image URLs in-place across an AST subtree. Tracks images actually used. */
function rewriteImages(node, usedImages) {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'image' && typeof node.url === 'string') {
    const m = /github-copilot-workshop\/img\/([^?#]+)/.exec(node.url);
    if (m) {
      const filename = m[1];
      // Replace the workshop's Copilot pixel-art logo with full-body Mona, rendered
      // as raw HTML so we can attach the .handson-mascot class (frameless, half size).
      if (/^copilot-pixel\.(png|jpe?g|gif|svg)$/i.test(filename)) {
        node.type = 'html';
        node.value = '<img src="/theomonfort/octocat-mona.png" alt="Mona the Octocat" class="handson-mascot" />';
        delete node.url;
        delete node.alt;
        delete node.title;
        delete node.children;
        return;
      }
      usedImages.add(filename);
      node.url = `${publicImgBase}${filename}`;
    }
  }
  if (node.type === 'html' && typeof node.value === 'string') {
    // Rewrite raw inline HTML <img src="github-copilot-workshop/img/..."> too.
    node.value = node.value.replace(
      /(src=["'])github-copilot-workshop\/img\/([^"']+)(["'])/g,
      (_full, q1, file, q2) => {
        if (/^copilot-pixel\.(png|jpe?g|gif|svg)$/i.test(file)) {
          return `${q1}/theomonfort/octocat-mona.png${q2}`;
        }
        usedImages.add(file);
        return `${q1}${publicImgBase}${file}${q2}`;
      },
    );
    // MDX (JSX) requires void elements to be self-closed. Convert any non-self-closed
    // <img ...> (and similar void HTML tags emitted by the workshop source) so MDX parses.
    node.value = selfCloseVoidTags(node.value);
    // Drop floating-right phase mascot <img> tags (vestiges of the Codelabs design;
    // our category-aware Aside dialog already displays the right Octocat per section).
    node.value = stripFloatingPhaseMascots(node.value);
  }
  const arr = node.children;
  if (Array.isArray(arr)) for (const c of arr) rewriteImages(c, usedImages);
}

/** Force void HTML tags (img, br, hr, ...) to be self-closed for MDX compatibility. */
function selfCloseVoidTags(html) {
  const VOID = ['img', 'br', 'hr', 'input', 'source', 'meta', 'link', 'col', 'area', 'embed'];
  let out = html;
  for (const tag of VOID) {
    const re = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, 'gi');
    out = out.replace(re, (_full, attrs) => `<${tag}${attrs.trimEnd()} />`);
  }
  return out;
}

/**
 * Remove inline `<img>` tags that the Codelabs source used as floating-right phase
 * mascots (e.g. `octocat-plan.png`, `Octocat-red.png`, etc. with `style="float: right;"`).
 * Our category-aware Aside dialog already speaks with the right Octocat per section,
 * so these inline mascots are redundant and visually collide with the dialog.
 */
function stripFloatingPhaseMascots(html) {
  const re = /<img\s[^>]*src="[^"]*[Oo]ctocat[^"]*"[^>]*style="[^"]*float\s*:\s*right[^"]*"[^>]*\/>\s*/gi;
  return html.replace(re, '');
}

/** Stringify a list of mdast nodes back into markdown. */
function stringifyNodes(children) {
  if (children.length === 0) return '';
  const fakeRoot = { type: 'root', children };
  return stringifier.stringify(fakeRoot).trim();
}

/**
 * Convert CommonMark autolinks `<https://...>` and `<mailto:...>` into standard
 * markdown links — MDX treats `<` as the start of JSX/HTML and rejects autolinks.
 */
function unwrapAutolinks(md) {
  return md.replace(/<((?:https?:\/\/|mailto:)[^>\s]+)>/g, '[$1]($1)');
}

/**
 * Render a step's body, replacing aside blockquotes with <Aside type="…"> MDX blocks.
 */
function renderStepBody(children, usedImages) {
  for (const c of children) rewriteImages(c, usedImages);

  const chunks = [];
  for (const node of children) {
    const asideType = detectAndStripAside(node);
    if (asideType) {
      // The blockquote children now contain the body content sans marker.
      const innerMd = unwrapAutolinks(stringifyNodes(node.children));
      // Detect 📖 参考 reference asides → render with the Octocat dialog variant.
      const isReference = asideType === 'positive' && /^\s*\**\s*📖\s*参考/m.test(innerMd);
      const renderedType = isReference ? 'reference' : asideType;
      chunks.push(`<Aside type="${renderedType}">\n\n${innerMd}\n\n</Aside>`);
    } else {
      chunks.push(unwrapAutolinks(stringifyNodes([node])));
    }
  }
  return chunks.filter((c) => c.length > 0).join('\n\n');
}

// ── Build step files ────────────────────────────────────────────────────────
const usedImages = new Set();
const seenSlugs = new Map();
const outFiles = [];

steps.forEach((step, idx) => {
  const order = idx + 1;
  const duration = extractDuration(step.children);
  let base = deriveSlug(step.title, `step-${order}`);
  const count = seenSlugs.get(base) ?? 0;
  seenSlugs.set(base, count + 1);
  const slug = count === 0 ? base : `${base}-${count + 1}`;
  const fileName = `${String(order).padStart(2, '0')}-${slug}.mdx`;

  const body = renderStepBody(step.children, usedImages);

  const firstParaNode = step.children.find((c) => c.type === 'paragraph');
  const summaryRaw = firstParaNode ? mdastToString(firstParaNode).trim().replace(/\s+/g, ' ') : '';
  const summary = summaryRaw.length > 180 ? `${summaryRaw.slice(0, 177)}…` : summaryRaw;

  const yamlEscape = (s) => `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  const frontmatter = [
    '---',
    `title: ${yamlEscape(step.title)}`,
    `order: ${order}`,
    `stepSlug: ${yamlEscape(slug)}`,
    duration != null ? `duration: ${duration}` : null,
    summary ? `summary: ${yamlEscape(summary)}` : null,
    'generated: true',
    `generatedFrom: ${yamlEscape('workshop-nikon.md')}`,
    `upstreamSha: ${yamlEscape(upstreamSha)}`,
    '---',
  ]
    .filter(Boolean)
    .join('\n');

  const header =
    `{/*\n` +
    `  AUTO-GENERATED FILE — do not edit by hand.\n` +
    `  Source: 2026-Github-Copilot-Workshop/workshop-nikon.md @ ${upstreamSha}\n` +
    `  Regenerate via: node scripts/import-handson.mjs --force\n` +
    `*/}\n\n` +
    `import Aside from '../../../components/handson/Aside.astro';\n\n`;

  const mdx = `${frontmatter}\n${header}${body}\n`;
  outFiles.push({ path: path.join(outContentDir, fileName), content: mdx, slug, order });
});

// ── Pre-flight: refuse to overwrite without --force ──────────────────────────
mkdirSync(outContentDir, { recursive: true });
const existing = readdirSync(outContentDir).filter((f) => f.endsWith('.mdx'));
if (existing.length > 0 && !force) {
  console.error(
    `✖ ${existing.length} existing step file(s) found in ${outContentDir}. ` +
      'Re-run with --force to overwrite.',
  );
  process.exit(1);
}

// Wipe out old files first so removed/renamed steps don't leave orphans behind.
for (const f of existing) {
  await fs.unlink(path.join(outContentDir, f));
}

// ── Write step files ────────────────────────────────────────────────────────
for (const out of outFiles) {
  await fs.writeFile(out.path, out.content, 'utf8');
  console.log(`  + ${path.relative(repoRoot, out.path)} (order ${out.order})`);
}

// ── Copy referenced images ──────────────────────────────────────────────────
mkdirSync(outImgDir, { recursive: true });

for (const f of readdirSync(outImgDir)) {
  try {
    const p = path.join(outImgDir, f);
    if (statSync(p).isFile()) await fs.unlink(p);
  } catch {
    // ignore
  }
}

let copied = 0;
let missing = 0;
for (const img of usedImages) {
  const src = path.join(sourceImgDir, img);
  const dst = path.join(outImgDir, img);
  if (!existsSync(src)) {
    console.error(`  ✖ missing image: ${img}`);
    missing += 1;
    continue;
  }
  mkdirSync(path.dirname(dst), { recursive: true });
  copyFileSync(src, dst);
  copied += 1;
}

console.log(`✓ Wrote ${outFiles.length} step files`);
console.log(`✓ Copied ${copied} images to ${path.relative(repoRoot, outImgDir)}`);
if (missing > 0) {
  console.error(`✖ ${missing} image(s) referenced but not found in source.`);
  process.exit(1);
}
