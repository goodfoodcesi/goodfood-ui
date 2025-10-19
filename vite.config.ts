import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import dts from "vite-plugin-dts"
import path from "path"

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
