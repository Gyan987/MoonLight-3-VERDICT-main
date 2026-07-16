import { defineConfig } from "vitest/config";

export default defineConfig({
  // Use Node.js mode
  mode: "node",

  test: {
    // Enable compatibility with CommonJS modules
    deps: { interopDefault: true },

    // Use global test APIs like describe(), it(), expect()
    globals: true,

    // Run tests in a Node.js environment
    environment: "node",

    // Include all TypeScript test files
    include: ["tests/**/*.test.ts"],

    // Ignore dependencies
    exclude: ["node_modules"],

    // Project root directory
    root: ".",
  },

  resolve: {
    // Resolve these file extensions automatically
    extensions: [".ts", ".js"],

    // Module resolution conditions
    conditions: ["import", "node", "default"],
  },
});
