import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      // dependencies
      "**/node_modules/**",
      "**/.pnp/**",
      "**/.pnp.js",
      
      // testing
      "**/coverage/**",
      
      // next.js
      "**/.next/**",
      "**/out/**",
      
      // production
      "**/build/**",
      
      // misc
      "**/.DS_Store",
      "**/*.pem",
      
      // debug logs
      "**/npm-debug.log*",
      "**/yarn-debug.log*",
      "**/yarn-error.log*",
      
      // local env files
      "**/.env*.local",
      
      // vercel
      "**/.vercel",
      
      // typescript
      "**/*.tsbuildinfo",
      "**/next-env.d.ts",
      
      // other
      "**/package-lock.json",
      "**/public/**"
    ]
  },
  ...compat.extends(
    "next/core-web-vitals", 
    "next/typescript", 
    "prettier"
  ),
  {
    rules: {
      // React rules
      "react/prop-types": "off", // TypeScript handles this
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/display-name": "warn",
      "react/no-array-index-key": "warn",
      "react/no-unused-state": "warn",
      "react/jsx-sort-props": ["warn", {
        "callbacksLast": true,
        "shorthandFirst": true,
        "ignoreCase": true,
        "reservedFirst": true,
      }],
      
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": ["warn", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_" 
      }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      
      // General code quality rules
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "no-debugger": "warn",
      "prefer-const": "warn",
      "no-var": "error",
      "eqeqeq": ["error", "always", { "null": "ignore" }],
      "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }],
      "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
      
      // Import rules
      "import/order": ["warn", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }],
      
      // Accessibility rules
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
    }
  }
];

export default eslintConfig;
