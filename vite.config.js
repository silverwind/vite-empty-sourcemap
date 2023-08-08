import {fileURLToPath} from "node:url";
import {defineConfig} from "vite";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      entry: [
        fileURLToPath(new URL("index.js", import.meta.url)),
        fileURLToPath(new URL("index.css", import.meta.url)),
      ],
      formats: ["es"],
    },
  },
});
