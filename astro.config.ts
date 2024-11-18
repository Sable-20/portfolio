import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkRehype from "remark-rehype";
import rehypeKatexNoTranslate from "rehype-katex-notranslate";

import purgecss from "astro-purgecss";

import expressiveCode from "astro-expressive-code";

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === "production"
      ? "https://brutal.elian.codes/"
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : "https://localhost:3000/",
  trailingSlash: "ignore",
  integrations: [
    sitemap(), 
    UnoCSS({ 
      injectReset: true 
    }), 
    expressiveCode(), 
    purgecss(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  markdown: {
    remarkPlugins: [remarkMath, remarkRehype],
    rehypePlugins: [rehypeKatex, rehypeKatexNoTranslate],
  },
  output: "static",
});