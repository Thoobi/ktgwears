// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": "/src",
//       "@components": "/src/components",
//       "@assets": "/src/assets",
//     },
//   },
//   build: {
//     outDir: "dist",
//     sourcemap: true,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "@components": path.resolve(__dirname, "/src/components"),
      "@assets": path.resolve(__dirname, "/src/assets"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
