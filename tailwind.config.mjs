/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#060b12',
        'deep-purple': '#0b1420',
        'neon-magenta': '#93a8ff',
        'neon-cyan': '#5eead4',
        'crt-amber': '#fcd34d',
        'gb-green': '#86efac',
        'coral-alert': '#fb7185',
        phosphor: '#ecf7fb',
        'phosphor-body': '#bad0de',
        'phosphor-muted': '#728fa3',
        'shadow-ink': '#04080e',
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
        pixel: '0 6px 20px rgba(0, 0, 0, 0.28)',
        'pixel-sm': '0 4px 14px rgba(0, 0, 0, 0.24)',
        hud: '0 6px 20px rgba(0, 0, 0, 0.28)',
        'neon-magenta': 'inset 0 1px 0 rgba(147, 168, 255, 0.35), 0 8px 24px rgba(0, 0, 0, 0.32)',
        'neon-cyan': 'inset 0 1px 0 rgba(94, 234, 212, 0.35), 0 8px 24px rgba(0, 0, 0, 0.32)',
        'neon-amber': 'inset 0 1px 0 rgba(252, 211, 77, 0.35), 0 8px 24px rgba(0, 0, 0, 0.32)',
        'neon-green': 'inset 0 1px 0 rgba(134, 239, 172, 0.35), 0 8px 24px rgba(0, 0, 0, 0.32)',
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
