import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      components: resolve(__dirname, "src/components"),
      context: resolve(__dirname, "src/context"),
      interfaces: resolve(__dirname, "src/interfaces"),
      pages: resolve(__dirname, "src/pages"),
      route: resolve(__dirname, "src/route"),
      theme: resolve(__dirname, "src/theme"),
      utils: resolve(__dirname, "src/utils"),
      hooks: resolve(__dirname, "src/hooks"),
    },
  },
});
