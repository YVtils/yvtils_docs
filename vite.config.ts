import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@layout": path.resolve("src/components/layout"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
