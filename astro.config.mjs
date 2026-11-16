import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://jonathan.pl",
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    build: {
      // Source maps are sent to Bugsink when deploying (sourcemaps.sh), never published
      sourcemap: "hidden",
    },
  },
});
