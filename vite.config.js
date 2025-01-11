import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: "src/entry-server.jsx", // Pointing to the SSR entry file
    outDir: "dist",
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
