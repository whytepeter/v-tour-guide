import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: "/v-tour-guide/", // GitHub Pages base path
  build: {
    outDir: "dist-demo",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
    target: "esnext",
    minify: "esbuild",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: ["vue"],
  },
});
