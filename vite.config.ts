import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves a project site from /<repo-name>/.
// If you rename the repo, change this to match.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
