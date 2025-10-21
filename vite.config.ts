import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import dts from "vite-plugin-dts"
import path from "path"
import { copyFileSync, mkdirSync } from "fs"
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: "src",
      outDir: "dist/types",
      tsconfigPath: path.resolve(__dirname, "tsconfig.lib.json"),
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
    }),
    {
      name: 'copy-css',
      buildEnd() {
        const src = path.resolve(__dirname, 'src/styles/tailwind.css')
        const destDir = path.resolve(__dirname, 'dist/styles')
        mkdirSync(destDir, { recursive: true })
        copyFileSync(src, path.join(destDir, 'tailwind.css'))
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "GoodFoodUI",
      fileName: (format) => `goodfood-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
