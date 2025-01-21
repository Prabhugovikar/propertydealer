import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;


// import { defineConfig } from 'eslint-define-config';

// export default defineConfig({
//   extends: ['next/core-web-vitals'],
//   overrides: [
//     {
//       files: ['**/*.js', '**/*.jsx'], // Only include JavaScript files
//     },
//   ],
//   settings: {
//     'import/resolver': {
//       node: {
//         extensions: ['.js', '.jsx'],
//       },
//     },
//   },
//   rules: {
//     // Add any additional rules here if needed
//   },
// });
