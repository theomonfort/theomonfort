import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [
    react(),
    mdx(),
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
  },
  experimental: {},
});
