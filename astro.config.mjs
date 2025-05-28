import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sharp from 'sharp';

// https://astro.build/config
export default defineConfig({
  site: 'https://Yipsix.github.io',
  integrations: [tailwind(), react()],
  assets: {
    addSharpInstructions: true,
    services: [
      {
        name: 'sharp',
        constructor: sharp,
      },
    ],
  },
});
