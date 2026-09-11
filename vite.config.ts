import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false,
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: "esbuild",
    cssMinify: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (/node_modules\/(motion|framer-motion)/.test(id)) return "motion";
            if (/node_modules\/lenis/.test(id)) return "lenis";
            // Icons ship on first paint (header); dialog/carousel/etc. load on demand
            if (/node_modules\/lucide-react/.test(id)) return "icons";
            if (
              /node_modules\/(@radix-ui|radix-ui|cmdk|vaul|embla-carousel-react)/.test(
                id,
              )
            )
              return "ui-vendor";
            if (/node_modules\/(three|@react-three)/.test(id)) return "three";
            if (/node_modules\/(recharts|react-hook-form|@hookform|zod)/.test(id))
              return "forms-charts";
            if (/node_modules\/@tanstack\/react-query/.test(id)) return "query";
            if (/node_modules\/react-router/.test(id)) return "router";
            if (/node_modules\/(react|react-dom|react-is|use-sync-external-store)/.test(id))
              return "react";
            if (/node_modules\/(gsap|@gsap)/.test(id)) return "gsap";
          }
        },
      },
    },
  },
});
