export type AccentColor = 'magenta' | 'cyan' | 'amber' | 'green';

export interface AccentToken {
  text: string;
  border: string;
  glow: string;
  shadow: string;
  hex: string;
}

export const accentTokens = {
  magenta: {
    text: 'text-neon-magenta',
    border: 'border-neon-magenta',
    glow: 'hover:shadow-neon-magenta',
    shadow: 'shadow-neon-magenta',
    hex: '#93a8ff',
  },
  cyan: {
    text: 'text-neon-cyan',
    border: 'border-neon-cyan',
    glow: 'hover:shadow-neon-cyan',
    shadow: 'shadow-neon-cyan',
    hex: '#5eead4',
  },
  amber: {
    text: 'text-crt-amber',
    border: 'border-crt-amber',
    glow: 'hover:shadow-neon-amber',
    shadow: 'shadow-neon-amber',
    hex: '#fcd34d',
  },
  green: {
    text: 'text-gb-green',
    border: 'border-gb-green',
    glow: 'hover:shadow-neon-green',
    shadow: 'shadow-neon-green',
    hex: '#86efac',
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
