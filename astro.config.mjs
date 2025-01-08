import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: 'https://coders-blogs.web.app',
    integrations: [sitemap(), tailwind(), expressiveCode({
        // plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
        themes: ["github-dark", "github-light"],
        styleOverrides: {
            codeFontFamily: "jetbrains-mono",
            uiFontFamily: "jetbrains-mono",
        },
        themeCssSelector: (theme) => `[data-theme="${theme.type}"]`
    }), mdx()],
});
