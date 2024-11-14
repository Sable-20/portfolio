import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import remarkMath from "remark-math";
import rehypeMathJax from "rehype-mathjax";
import rehypeMathJaxBrowser from "rehype-mathjax/browser";
import remarkRehype from "remark-rehype";

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === "production"
      ? "https://brutal.elian.codes/"
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : "https://localhost:3000/",
  trailingSlash: "ignore",
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  markdown: {
    remarkPlugins: [remarkMath, remarkRehype],
    rehypePlugins: [rehypeMathJax],
  },
  output: "static",
});
