export type AccentColor = 'magenta' | 'cyan' | 'amber' | 'green';
export type SiteTheme = 'phosphor' | 'retro';

export const SITE_THEME_KEY = 'akq-site-theme';
export const SITE_THEME_EVENT = 'akq:theme-change';

export interface AccentToken {
  text: string;
  border: string;
  glow: string;
  shadow: string;
  hex: string;
}

export const phosphorAccentHex: Record<AccentColor, string> = {
  magenta: '#93a8ff',
  cyan: '#5eead4',
  amber: '#fcd34d',
  green: '#86efac',
};

export const retroAccentHex: Record<AccentColor, string> = {
  magenta: '#ff2e88',
  cyan: '#00f0ff',
  amber: '#ffb000',
  green: '#9bbc0f',
};

export function getCurrentSiteTheme(): SiteTheme {
  if (typeof document !== 'undefined') {
    return document.documentElement.dataset.theme === 'retro' ? 'retro' : 'phosphor';
  }
  return 'phosphor';
}

export function getAccentHexForTheme(color: AccentColor, theme: SiteTheme = getCurrentSiteTheme()): string {
  return theme === 'retro' ? retroAccentHex[color] : phosphorAccentHex[color];
}

export const accentTokens = {
  magenta: {
    text: 'text-neon-magenta',
    border: 'border-neon-magenta',
    glow: 'hover:shadow-neon-magenta',
    shadow: 'shadow-neon-magenta',
    hex: 'var(--c-neon-magenta)',
  },
  cyan: {
    text: 'text-neon-cyan',
    border: 'border-neon-cyan',
    glow: 'hover:shadow-neon-cyan',
    shadow: 'shadow-neon-cyan',
    hex: 'var(--c-neon-cyan)',
  },
  amber: {
    text: 'text-crt-amber',
    border: 'border-crt-amber',
    glow: 'hover:shadow-neon-amber',
    shadow: 'shadow-neon-amber',
    hex: 'var(--c-crt-amber)',
  },
  green: {
    text: 'text-gb-green',
    border: 'border-gb-green',
    glow: 'hover:shadow-neon-green',
    shadow: 'shadow-neon-green',
    hex: 'var(--c-gb-green)',
  },
} as const satisfies Record<AccentColor, AccentToken>;

export const accentColorValues = Object.fromEntries(
  Object.entries(accentTokens).map(([key, value]) => [key, value.hex])
) as Record<AccentColor, string>;

export const accentClasses = accentTokens;

export const accentGlowClasses = {
  magenta: accentTokens.magenta.shadow,
  cyan: accentTokens.cyan.shadow,
  amber: accentTokens.amber.shadow,
  green: accentTokens.green.shadow,
} as const satisfies Record<AccentColor, string>;

export function resolveAccent(color: AccentColor, accent?: Partial<AccentToken>): AccentToken {
  return {
    ...accentTokens[color],
    ...accent,
  };
}
