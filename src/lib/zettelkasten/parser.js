import { marked } from './vendor.js';

marked.setOptions({
  gfm: true,
  breaks: false,
});

export function slugify(input) {
  return String(input || '')
    .trim()
    .toLowerCase()
    .replace(/\.md$/i, '')
    .replace(/['"`]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function normalizeKey(input) {
  return String(input || '')
    .trim()
    .toLowerCase()
    .replace(/\.md$/i, '')
    .replace(/\s+/g, ' ');
}

export function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unquoteYamlString(raw) {
  const trimmed = raw.trim();
  if (trimmed.length >= 2 && trimmed.startsWith('"') && trimmed.endsWith('"')) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return trimmed.slice(1, -1);
    }
  }
  if (trimmed.length >= 2 && trimmed.startsWith("'") && trimmed.endsWith("'")) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseYamlValue(raw) {
  const val = raw.trim();
  if (!val) return '';

  if (val.startsWith('[') && val.endsWith(']')) {
    const inner = val.slice(1, -1).trim();
    if (!inner) return [];
    return inner
      .split(',')
      .map((item) => unquoteYamlString(item))
      .filter(Boolean);
  }

  return unquoteYamlString(val);
}

export function parseFrontmatter(raw) {
  const normalized = String(raw || '').replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) {
    return { frontmatter: {}, body: normalized };
  }

  const closingIdx = normalized.indexOf('\n---\n', 4);
  if (closingIdx === -1) {
    return { frontmatter: {}, body: normalized };
  }

  const yamlBlock = normalized.slice(4, closingIdx);
  const body = normalized.slice(closingIdx + 5).replace(/^\n+/, '');
  const frontmatter = {};
  let currentListKey = null;

  for (const line of yamlBlock.split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue;

    const listMatch = line.match(/^\s*-\s+(.+)$/);
    if (listMatch && currentListKey) {
      if (!Array.isArray(frontmatter[currentListKey])) {
        frontmatter[currentListKey] = [];
      }
      frontmatter[currentListKey].push(parseYamlValue(listMatch[1]));
      continue;
    }

    const kvMatch = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (kvMatch) {
      const [, key, rawVal] = kvMatch;
      if (!rawVal.trim()) {
        frontmatter[key] = [];
        currentListKey = key;
      } else {
        frontmatter[key] = parseYamlValue(rawVal);
        currentListKey = null;
      }
    }
  }

  return { frontmatter, body };
}

export function serializeFrontmatter(frontmatter, body) {
  const entries = Object.entries(frontmatter || {}).filter(
    ([, v]) => v !== undefined && v !== null && v !== '' && (!Array.isArray(v) || v.length > 0),
  );
  if (entries.length === 0) return body;

  const lines = ['---'];
  for (const [key, val] of entries) {
    if (Array.isArray(val)) {
      const formatted = val.map((v) => JSON.stringify(String(v))).join(', ');
      lines.push(`${key}: [${formatted}]`);
    } else {
      lines.push(`${key}: ${JSON.stringify(String(val))}`);
    }
  }
  lines.push('---', '', body.replace(/^\n+/, ''));
  return lines.join('\n');
}

function maskCodeSegments(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, (m) => ' '.repeat(m.length))
    .replace(/`[^`\n]+`/g, (m) => ' '.repeat(m.length));
}

export function extractWikilinks(body) {
  const masked = maskCodeSegments(body);
  const results = [];
  const regex = /\[\[([^\[\]\n]+?)\]\]/g;
  let match;

  while ((match = regex.exec(masked)) !== null) {
    const inner = match[1].trim();
    if (!inner) continue;

    const [targetPart, aliasPart] = inner.split('|');
    const [rawTarget, headingPart] = targetPart.split('#');
    const target = rawTarget.trim();
    if (!target) continue;

    const start = Math.max(0, match.index - 55);
    const end = Math.min(body.length, match.index + match[0].length + 55);
    const snippet = body
      .slice(start, end)
      .replace(/\s+/g, ' ')
      .trim();

    results.push({
      raw: match[0],
      target,
      heading: headingPart ? headingPart.trim() : null,
      display: aliasPart ? aliasPart.trim() : target,
      snippet,
    });
  }

  return results;
}

export function extractInlineTags(body) {
  const masked = maskCodeSegments(body);
  const tags = new Set();
  const regex = /(?:^|[\s(])#([a-zA-Z][a-zA-Z0-9/_-]*)/g;
  let match;
  while ((match = regex.exec(masked)) !== null) {
    tags.add(match[1].toLowerCase());
  }
  return [...tags];
}

export function parseNote(slug, raw) {
  const cleanSlug = slugify(slug);
  const { frontmatter, body } = parseFrontmatter(raw);

  const headingMatch = body.match(/^#\s+(.+)$/m);
  const title =
    (typeof frontmatter.title === 'string' && frontmatter.title.trim()) ||
    (headingMatch && headingMatch[1].trim()) ||
    cleanSlug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

  const fmTags = Array.isArray(frontmatter.tags)
    ? frontmatter.tags.map((t) => String(t).toLowerCase().replace(/^#/, ''))
    : typeof frontmatter.tags === 'string' && frontmatter.tags
      ? [frontmatter.tags.toLowerCase().replace(/^#/, '')]
      : [];

  const inlineTags = extractInlineTags(body);
  const tags = [...new Set([...fmTags, ...inlineTags])];

  const aliases = Array.isArray(frontmatter.aliases)
    ? frontmatter.aliases.map(String)
    : typeof frontmatter.aliases === 'string' && frontmatter.aliases
      ? [frontmatter.aliases]
      : [];

  const group =
    (typeof frontmatter.group === 'string' && frontmatter.group.trim().toLowerCase()) ||
    tags[0] ||
    'general';

  const wikilinks = extractWikilinks(body);

  return {
    slug: cleanSlug,
    title,
    group,
    tags,
    aliases,
    frontmatter,
    body,
    raw,
    wikilinks,
  };
}

export function buildResolutionIndex(notesMap) {
  const lookup = new Map();

  for (const note of notesMap.values()) {
    lookup.set(note.slug, note.slug);
    lookup.set(normalizeKey(note.slug), note.slug);
    lookup.set(normalizeKey(note.title), note.slug);
    lookup.set(slugify(note.title), note.slug);

    for (const alias of note.aliases) {
      lookup.set(normalizeKey(alias), note.slug);
      lookup.set(slugify(alias), note.slug);
    }
  }

  return function resolveTarget(target) {
    if (!target) return null;
    const byNorm = lookup.get(normalizeKey(target));
    if (byNorm) return byNorm;
    const bySlug = lookup.get(slugify(target));
    if (bySlug) return bySlug;
    return null;
  };
}

export function buildGraphData(notesMap, { includeUnresolved = true } = {}) {
  const resolveTarget = buildResolutionIndex(notesMap);
  const nodesMap = new Map();
  const backlinks = new Map();
  const outgoing = new Map();
  const pairSet = new Set();
  const links = [];

  for (const note of notesMap.values()) {
    nodesMap.set(note.slug, {
      id: note.slug,
      title: note.title,
      group: note.group,
      tags: note.tags,
      exists: true,
      inDegree: 0,
      outDegree: 0,
      degree: 0,
    });
    backlinks.set(note.slug, []);
    outgoing.set(note.slug, new Set());
  }

  for (const note of notesMap.values()) {
    for (const wl of note.wikilinks) {
      const resolved = resolveTarget(wl.target);
      const isResolved = Boolean(resolved);
      let targetSlug = resolved;

      if (!targetSlug) {
        if (!includeUnresolved) continue;
        targetSlug = `unresolved:${slugify(wl.target)}`;
        if (!nodesMap.has(targetSlug)) {
          nodesMap.set(targetSlug, {
            id: targetSlug,
            title: wl.target,
            rawTarget: wl.target,
            group: 'unresolved',
            tags: [],
            exists: false,
            inDegree: 0,
            outDegree: 0,
            degree: 0,
          });
          backlinks.set(targetSlug, []);
          outgoing.set(targetSlug, new Set());
        }
      }

      if (targetSlug === note.slug) continue;

      outgoing.get(note.slug)?.add(targetSlug);

      const backList = backlinks.get(targetSlug);
      if (backList && !backList.some((b) => b.sourceSlug === note.slug)) {
        backList.push({
          sourceSlug: note.slug,
          sourceTitle: note.title,
          snippet: wl.snippet,
        });
      }

      // Undirected canonical pair key so bidirectional links neither double-spring nor double-stroke
      const pairKey =
        note.slug < targetSlug
          ? `${note.slug}:::${targetSlug}`
          : `${targetSlug}:::${note.slug}`;
      if (!pairSet.has(pairKey)) {
        pairSet.add(pairKey);
        links.push({
          id: pairKey,
          source: note.slug,
          target: targetSlug,
          unresolved: !isResolved,
        });
      }
    }
  }

  const degreeMap = new Map();
  for (const node of nodesMap.values()) {
    degreeMap.set(node.id, new Set());
  }
  for (const link of links) {
    degreeMap.get(link.source)?.add(link.target);
    degreeMap.get(link.target)?.add(link.source);
  }
  for (const node of nodesMap.values()) {
    node.outDegree = outgoing.get(node.id)?.size || 0;
    node.inDegree = backlinks.get(node.id)?.length || 0;
    node.degree = degreeMap.get(node.id)?.size || 0;
  }

  return {
    nodes: [...nodesMap.values()],
    links,
    backlinks,
    outgoing,
    adjacency: degreeMap,
    resolveTarget,
  };
}

export function renderNoteHtml(note, resolveTarget) {
  const placeholders = [];

  let bodyToRender = note.body.replace(/^\s*#\s+.+\n+/, '');

  const stash = (html) => {
    const token = `@@ZKTOKEN${placeholders.length}@@`;
    placeholders.push({ token, html });
    return token;
  };

  const segments = bodyToRender.split(/(```[\s\S]*?```|`[^`\n]+`)/g);
  const processed = segments
    .map((segment, idx) => {
      if (idx % 2 === 1) return segment;

      let out = segment.replace(/\[\[([^\[\]\n]+?)\]\]/g, (_, inner) => {
        const [targetPart, aliasPart] = inner.split('|');
        const [rawTarget, headingPart] = targetPart.split('#');
        const cleanTarget = rawTarget.trim();
        const display = (aliasPart ? aliasPart.trim() : cleanTarget) + (headingPart ? ` > ${headingPart.trim()}` : '');
        const resolvedSlug = resolveTarget(cleanTarget);
        const exists = Boolean(resolvedSlug);

        return stash(
          `<a href="#note/${encodeURIComponent(resolvedSlug || slugify(cleanTarget))}" ` +
            `class="zk-wikilink ${exists ? 'is-resolved' : 'is-unresolved'}" ` +
            `data-wikilink="${escapeHtml(cleanTarget)}" ` +
            `data-resolved="${escapeHtml(resolvedSlug || '')}">` +
            `${escapeHtml(display)}</a>`,
        );
      });

      out = out.replace(/(^|[\s(])#([a-zA-Z][a-zA-Z0-9/_-]*)/g, (full, prefix, tag) => {
        const lower = tag.toLowerCase();
        return (
          prefix +
          stash(
            `<button type="button" class="zk-inline-tag" data-tag="${escapeHtml(lower)}">#${escapeHtml(lower)}</button>`,
          )
        );
      });

      return out;
    })
    .join('');

  let html = marked.parse(processed);

  for (const { token, html: replacement } of placeholders) {
    html = html.split(token).join(replacement);
  }

  return html;
}
