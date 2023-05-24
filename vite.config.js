// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        billet: resolve(__dirname, "src/billet.html"),
        om: resolve(__dirname, "src/om.html"),
        program: resolve(__dirname, "src/program.html"),
        kontakt: resolve(__dirname, "src/kontakt.html"),
        frivillig: resolve(__dirname, "src/frivillig.html"),
        opencall: resolve(__dirname, "src/opencall.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
      },
    },
  },
});
