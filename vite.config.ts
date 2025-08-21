import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import monkey, { type MonkeyUserScript } from "vite-plugin-monkey";

const repo = "https://github.com/clangmoyai/plab-ultra";
const downloadURL = `${repo}/raw/main/dist/plab-ultra.user.js`;
const icon = `${repo}/raw/main/src/assets/logo64.png`;

const userscript: MonkeyUserScript = {
  name: "plab-ultra",
  namespace: repo,
  version: "2025.08.21",
  author: "clangmoyai",
  description: "Userscript for PornoLab.Net",
  license: "MIT",
  icon,
  homepage: repo,
  supportURL: `${repo}/issues`,
  downloadURL,
  updateURL: downloadURL,
  match: "https://pornolab.net/forum/viewtopic.php*",
  tag: ["pornolab", "pornolab.net"],
  connect: "*",
  "run-at": "document-start",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    monkey({
      entry: "src/main.ts",
      userscript,
    }),
  ],
});
