// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` once the domain is bought (used for canonical URLs and the sitemap).
export default defineConfig({
  site: 'https://getnurtie.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
