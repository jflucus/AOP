import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  // Set this to the production domain once known, e.g. 'https://aopfoundation.org'
  site: 'https://aopfoundation.org',
  integrations: [sitemap()],
});
