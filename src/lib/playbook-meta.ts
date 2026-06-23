import { execSync } from 'node:child_process';
import type { Locale } from './i18n';
import type { LocalizedPlaybookEntry } from './playbook';

// Slugs flagged as recently added; surfaced with a "New" badge in the TOC.
export const NEW_PLAYBOOK_SLUGS = new Set([
  'usage-based-billing',
  'token-optimization',
]);

export function isNewPlaybookEntry(slug: string): boolean {
  return NEW_PLAYBOOK_SLUGS.has(slug);
}

const dateCache = new Map<string, string | null>();

function entryFilePath(entry: LocalizedPlaybookEntry): string {
  const fromLoader = (entry.entry as { filePath?: string }).filePath;
  return fromLoader ?? `src/content/playbook/${entry.entry.id}.md`;
}

// Last commit date (ISO 8601) for the entry's source file, or null if unavailable.
export function playbookUpdatedISO(entry: LocalizedPlaybookEntry): string | null {
  const filePath = entryFilePath(entry);
  if (dateCache.has(filePath)) return dateCache.get(filePath)!;
  let iso: string | null = null;
  try {
    const out = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    iso = out || null;
  } catch {
    iso = null;
  }
  dateCache.set(filePath, iso);
  return iso;
}

export function formatPlaybookUpdated(iso: string | null, locale: Locale): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return locale === 'ja' ? `${y}.${m}.${d}` : `${y}-${m}-${d}`;
}
