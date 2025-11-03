import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),

    // 📊 (Optional) Analyze bundle size after build
    // visualizer({ open: true }),

    // 🗜️ Generate compressed .gz and .br files for Netlify
    viteCompression({
      algorithm: "brotliCompress", // creates both gzip and brotli
      ext: ".br",
      threshold: 1024, // only compress files > 1KB
      deleteOriginFile: false, // keep original .js and .css
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],

  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },

  server: {
    open: true,
  },
});
