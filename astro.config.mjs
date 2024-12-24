import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
    integrations: [expressiveCode(), mdx()],
});
