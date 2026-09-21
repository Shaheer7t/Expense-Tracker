import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This file tells Vite (our build tool) to understand React (JSX) syntax.
export default defineConfig({
  plugins: [react()],
});
