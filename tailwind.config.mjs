/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0e27',
        'deep-purple': '#1a0b2e',
        'neon-magenta': '#ff2e88',
        'neon-cyan': '#00f0ff',
        'crt-amber': '#ffb000',
        'gb-green': '#9bbc0f',
        phosphor: '#e8f4ff',
        'shadow-ink': '#05060f',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        'pixel-jp': ['"DotGothic16"', 'monospace'],
        terminal: ['"VT323"', 'monospace'],
        body: ['"Noto Sans JP"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        pixel: '4px 4px 0 0 #05060f',
        'pixel-sm': '2px 2px 0 0 #05060f',
        'neon-magenta': '0 0 8px #ff2e88, 0 0 24px rgba(255,46,136,.4)',
        'neon-cyan': '0 0 8px #00f0ff, 0 0 24px rgba(0,240,255,.4)',
        'neon-amber': '0 0 8px #ffb000, 0 0 24px rgba(255,176,0,.4)',
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
