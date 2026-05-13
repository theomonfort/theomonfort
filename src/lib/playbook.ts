import { getCollection, type CollectionEntry } from 'astro:content';
import { type Locale, isLocale } from './i18n';

export type PlaybookEntry = CollectionEntry<'playbook'>;
export type LocalizedPlaybookEntry = {
  entry: PlaybookEntry;
  slug: string;
  locale: Locale;
  isFallback: boolean;
};

export function splitPlaybookId(id: string): { locale: Locale; slug: string } | null {
  const [maybeLocale, ...rest] = id.split('/');
  if (!isLocale(maybeLocale) || rest.length === 0) return null;
  return { locale: maybeLocale, slug: rest.join('/') };
}

export function playbookSlug(entry: PlaybookEntry): string {
  return splitPlaybookId(entry.id)?.slug ?? entry.id;
}

export function playbookLocale(entry: PlaybookEntry): Locale {
  return splitPlaybookId(entry.id)?.locale ?? 'ja';
}

export async function getPlaybookEntries(locale: Locale): Promise<LocalizedPlaybookEntry[]> {
  const entries = (await getCollection('playbook'))
    .map((entry) => ({ entry, parsed: splitPlaybookId(entry.id) }))
    .filter((item): item is { entry: PlaybookEntry; parsed: { locale: Locale; slug: string } } => Boolean(item.parsed));

  const primary = entries
    .filter(({ parsed }) => parsed.locale === locale)
    .map(({ entry, parsed }) => ({ entry, slug: parsed.slug, locale: parsed.locale, isFallback: false }));

  if (locale === 'ja') {
    return primary.sort((a, b) => a.entry.data.order - b.entry.data.order);
  }

  const primarySlugs = new Set(primary.map((item) => item.slug));
  const fallbacks = entries
    .filter(({ parsed }) => parsed.locale === 'ja' && !primarySlugs.has(parsed.slug))
    .map(({ entry, parsed }) => ({ entry, slug: parsed.slug, locale, isFallback: true }));

  return [...primary, ...fallbacks].sort((a, b) => a.entry.data.order - b.entry.data.order);
}

export async function getPlaybookEntry(locale: Locale, slug: string): Promise<LocalizedPlaybookEntry | null> {
  const localized = await getPlaybookEntries(locale);
  return localized.find((item) => item.slug === slug) ?? null;
}

export function playbookEntryTitle(item: LocalizedPlaybookEntry): string {
  return item.locale === 'ja'
    ? item.entry.data.title
    : item.entry.data.titleEn || item.entry.data.title;
}

export function playbookEntryKicker(item: LocalizedPlaybookEntry): string | undefined {
  if (item.locale === 'ja') return item.entry.data.titleEn;
  return item.entry.data.titleEn && item.entry.data.titleEn !== item.entry.data.title
    ? item.entry.data.title
    : undefined;
}
