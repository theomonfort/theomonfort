export type AccentColor = 'magenta' | 'cyan' | 'amber' | 'green' | 'red';

export const accentColorValues = {
  magenta: '#ff2e88',
  cyan: '#00f0ff',
  amber: '#ffb000',
  green: '#9bbc0f',
  red: '#ff3030',
} as const satisfies Record<AccentColor, string>;

export const accentClasses = {
  magenta: {
    border: 'border-neon-magenta',
    text: 'text-neon-magenta',
    glow: 'hover:shadow-neon-magenta',
  },
  cyan: {
    border: 'border-neon-cyan',
    text: 'text-neon-cyan',
    glow: 'hover:shadow-neon-cyan',
  },
  amber: {
    border: 'border-crt-amber',
    text: 'text-crt-amber',
    glow: 'hover:shadow-neon-amber',
  },
  green: {
    border: 'border-gb-green',
    text: 'text-gb-green',
    glow: 'hover:shadow-neon-amber',
  },
  red: {
    border: 'border-neon-red',
    text: 'text-neon-red',
    glow: 'hover:shadow-neon-red',
  },
} as const satisfies Record<
  AccentColor,
  { border: string; text: string; glow: string }
>;

export const accentGlowClasses = {
  magenta: 'shadow-neon-magenta',
  cyan: 'shadow-neon-cyan',
  amber: 'shadow-neon-amber',
  green: 'shadow-neon-amber',
  red: 'shadow-neon-red',
} as const satisfies Record<AccentColor, string>;
