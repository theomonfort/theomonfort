/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: 'rgb(var(--rgb-midnight) / <alpha-value>)',
        'deep-purple': 'rgb(var(--rgb-deep-purple) / <alpha-value>)',
        'neon-magenta': 'rgb(var(--rgb-neon-magenta) / <alpha-value>)',
        'neon-cyan': 'rgb(var(--rgb-neon-cyan) / <alpha-value>)',
        'crt-amber': 'rgb(var(--rgb-crt-amber) / <alpha-value>)',
        'gb-green': 'rgb(var(--rgb-gb-green) / <alpha-value>)',
        'coral-alert': 'rgb(var(--rgb-coral-alert) / <alpha-value>)',
        phosphor: 'rgb(var(--rgb-phosphor) / <alpha-value>)',
        'phosphor-body': 'rgb(var(--rgb-phosphor-body) / <alpha-value>)',
        'phosphor-muted': 'rgb(var(--rgb-phosphor-muted) / <alpha-value>)',
        'shadow-ink': 'rgb(var(--rgb-shadow-ink) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Orbitron"', '"IBM Plex Sans JP"', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
        'pixel-jp': ['"DotGothic16"', 'monospace'],
        terminal: ['"VT323"', 'monospace'],
        body: ['"IBM Plex Sans JP"', '"Noto Sans JP"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        pixel: 'var(--shadow-pixel)',
        'pixel-sm': 'var(--shadow-pixel-sm)',
        hud: 'var(--shadow-hud)',
        'neon-magenta': 'var(--shadow-neon-magenta)',
        'neon-cyan': 'var(--shadow-neon-cyan)',
        'neon-amber': 'var(--shadow-neon-amber)',
        'neon-green': 'var(--shadow-neon-green)',
      },
      animation: {
        flicker: 'flicker 6s infinite',
        'pulse-pixel': 'pulse-pixel 1.4s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        'blink-cursor': 'blink-cursor 1.1s step-end infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.85' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.92' },
          '97%': { opacity: '1' },
        },
        'pulse-pixel': {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(0,-2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'blink-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
