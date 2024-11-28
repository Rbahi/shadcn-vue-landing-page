import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Sitemap from "vite-plugin-sitemap";

import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    Sitemap({
      hostname: "https://fmitradinggroup.com", // Your base URL
      outDir: "dist", // Output directory for generated files
      extensions: "html", // Extensions to include in the sitemap (e.g., HTML)
      generateRobotsTxt: true, // Whether to generate a robots.txt
      robots: [{ userAgent: "*", allow: "/" }], // Allow all user agents to crawl the site
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
