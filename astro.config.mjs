import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://numan-dev.web.app/',
    integrations: [expressiveCode(), mdx(), tailwind()],
});
