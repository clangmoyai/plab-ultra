import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import monkey, { type MonkeyUserScript } from "vite-plugin-monkey";
import userscript from "./userscript.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    monkey({
      entry: "src/main.ts",
      userscript: userscript as MonkeyUserScript,
    }),
  ],
});
