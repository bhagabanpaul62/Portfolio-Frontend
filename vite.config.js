import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.PNG", "**/*.png"],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
    esbuildOptions: {
      target: "esnext",
    },
  },
  build: {
    target: "esnext",
    sourcemap: true,
  },
});
