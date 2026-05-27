import path from "node:path";
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import { defineConfig } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";
import svelteConfig from "./svelte.config.js";
import jsdoc from "eslint-plugin-jsdoc";

const gitignorePath = path.resolve(import.meta.dirname, ".gitignore");

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  { ignores: ["dist/**"] },
  js.configs.recommended,
  ts.configs.recommended,
  svelte.configs.recommended,
  // jsdoc config
  jsdoc.configs["flat/recommended-typescript"],
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    // jsdoc plugin
    plugins: {
      jsdoc,
    },
    rules: {
      // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
      // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      "no-undef": "off",

      // added rules
      "svelte/no-inspect": "off",
      "svelte/no-at-html-tags": "off",
      "jsdoc/require-param": "off",
      "jsdoc/require-returns": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
        svelteConfig,
      },
    },
  },
  {
    // Override or add rule settings here, such as:
    // 'svelte/button-has-type': 'error'
    rules: {},
  },
);
