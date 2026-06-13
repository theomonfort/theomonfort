import { getCollection, type CollectionEntry } from 'astro:content';
import { type Locale, isLocale } from './i18n';

export type HandsonEntry = CollectionEntry<'handson'>;
export type LocalizedHandsonEntry = {
  entry: HandsonEntry;
  slug: string;
  locale: Locale;
  isFallback: boolean;
};

export function splitHandsonId(id: string): { locale: Locale; slug: string } | null {
  const [maybeLocale, ...rest] = id.split('/');
  if (!isLocale(maybeLocale) || rest.length === 0) return null;
  return { locale: maybeLocale, slug: rest.join('/') };
}

export function handsonRouteSlug(entry: HandsonEntry): string {
  // URL slug uses the explicit `stepSlug` frontmatter field (which does NOT
  // collide with Astro's reserved `slug` field). Falls back to the locale-stripped
  // filename slug (minus the `NN-` numeric prefix) if missing.
  return entry.data.stepSlug || splitHandsonId(entry.id)?.slug?.replace(/^\d+-/, '') || entry.id;
}

export async function getHandsonSteps(locale: Locale): Promise<LocalizedHandsonEntry[]> {
  const all = (await getCollection('handson'))
    .map((entry) => ({ entry, parsed: splitHandsonId(entry.id) }))
    .filter((item): item is { entry: HandsonEntry; parsed: { locale: Locale; slug: string } } =>
      Boolean(item.parsed),
    );

  const primary = all
    .filter(({ parsed }) => parsed.locale === locale)
    .map(({ entry }) => ({
      entry,
      slug: handsonRouteSlug(entry),
      locale,
      isFallback: false,
    }));

  if (locale === 'ja') {
    return primary.sort((a, b) => a.entry.data.order - b.entry.data.order);
  }

  // EN fallback to JA when an English step file is missing (same pattern as playbook).
  const primarySlugs = new Set(primary.map((item) => item.slug));
  const fallbacks = all
    .filter(({ parsed }) => parsed.locale === 'ja')
    .map(({ entry }) => ({ entry, routeSlug: handsonRouteSlug(entry) }))
    .filter(({ routeSlug }) => !primarySlugs.has(routeSlug))
    .map(({ entry, routeSlug }) => ({ entry, slug: routeSlug, locale, isFallback: true }));

  return [...primary, ...fallbacks].sort((a, b) => a.entry.data.order - b.entry.data.order);
}

export async function getHandsonStep(
  locale: Locale,
  slug: string,
): Promise<LocalizedHandsonEntry | null> {
  const list = await getHandsonSteps(locale);
  return list.find((item) => item.slug === slug) ?? null;
}

export function handsonStepTitle(item: LocalizedHandsonEntry): string {
  if (item.locale === 'en') {
    return item.entry.data.titleEn || item.entry.data.title;
  }
  return item.entry.data.title;
}

/**
 * Section category for a hands-on step, derived from its slug prefix.
 * Mirrors the playbook category palette so aside dialog boxes feel
 * consistent across the two areas: every step page picks an accent
 * color + matching octocat mascot for its asides.
 */
export type HandsonCategory =
  | 'introduction'
  | 'plan'
  | 'develop'
  | 'review'
  | 'secure'
  | 'operate'
  | 'final';

export const HANDSON_CATEGORY_ORDER: HandsonCategory[] = [
  'introduction',
  'plan',
  'develop',
  'review',
  'secure',
  'operate',
  'final',
];

export function handsonCategoryForSlug(slug: string): HandsonCategory {
  if (slug.startsWith('plan-')) return 'plan';
  if (slug.startsWith('code-')) return 'develop';
  if (slug.startsWith('review-')) return 'review';
  if (slug.startsWith('test-secure-') || slug.startsWith('test-')) return 'secure';
  if (slug.startsWith('operate-')) return 'operate';
  if (slug === 'congratulations') return 'final';
  return 'introduction';
}

export interface HandsonCategoryStyle {
  accent: string;
  mascot: string;
}

export interface HandsonCategoryMeta extends HandsonCategoryStyle {
  labelJa: string;
  labelEn: string;
  icon: string;
  color: 'magenta' | 'cyan' | 'amber' | 'green';
  planet: string;
}

const CATEGORY_META: Record<HandsonCategory, HandsonCategoryMeta> = {
  introduction: {
    labelJa: 'はじめに',
    labelEn: 'Introduction',
    icon: '📘',
    color: 'cyan',
    accent: '#00f0ff',
    mascot: '/theomonfort/octocat-profile-mona.png',
    planet: '/theomonfort/planet-introduction.webp',
  },
  plan: {
    labelJa: '企画',
    labelEn: 'Plan',
    icon: '📋',
    color: 'green',
    accent: '#9bbc0f',
    mascot: '/theomonfort/octocat-profile-green.png',
    planet: '/theomonfort/planet-plan.webp',
  },
  develop: {
    labelJa: '開発',
    labelEn: 'Develop',
    icon: '💻',
    color: 'magenta',
    accent: '#ff2e88',
    mascot: '/theomonfort/octocat-profile-red.png',
    planet: '/theomonfort/planet-develop.webp',
  },
  review: {
    labelJa: 'レビュー',
    labelEn: 'Review',
    icon: '🔍',
    color: 'amber',
    accent: '#ffb000',
    mascot: '/theomonfort/octocat-profile-yellow.png',
    planet: '/theomonfort/planet-review.webp',
  },
  secure: {
    labelJa: 'テスト & 品質保証',
    labelEn: 'Test & Secure',
    icon: '🛡️',
    color: 'cyan',
    accent: '#00f0ff',
    mascot: '/theomonfort/octocat-profile-blue.png',
    planet: '/theomonfort/planet-secure.webp',
  },
  operate: {
    labelJa: '運用',
    labelEn: 'Operate',
    icon: '📊',
    color: 'green',
    accent: '#9bbc0f',
    mascot: '/theomonfort/octocat-team.png',
    planet: '/theomonfort/planet-operate.webp',
  },
  final: {
    labelJa: 'クリア',
    labelEn: 'Quest Clear',
    icon: '🏆',
    color: 'magenta',
    accent: '#ff2e88',
    mascot: '/theomonfort/octocat-full-mona.png',
    planet: '/theomonfort/planet-introduction.webp',
  },
};

export function handsonCategoryStyle(category: HandsonCategory): HandsonCategoryStyle {
  const { accent, mascot } = CATEGORY_META[category];
  return { accent, mascot };
}

export function handsonCategoryMeta(category: HandsonCategory, locale: Locale) {
  const meta = CATEGORY_META[category];
  return {
    ...meta,
    label: locale === 'ja' ? meta.labelJa : meta.labelEn,
    secondaryLabel: locale === 'ja' ? meta.labelEn : meta.labelJa,
  };
}
