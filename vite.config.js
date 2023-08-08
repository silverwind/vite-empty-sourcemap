import {defineConfig} from "vite";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      entry: [
        "./index.js",
        "./index.css",
      ],
      formats: ["es"],
    },
  },
});
