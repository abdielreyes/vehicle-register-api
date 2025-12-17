/* eslint-disable */

import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import love from "eslint-config-love";

export default defineConfig([
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.node },
  },
  tseslint.configs.recommended,
  {
    ...(love as any),
    files: ["**/*.js", "**/*.ts"],
  },
  { ignores: ["node_modules/", "dist/"] },
]);
