import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Data-Visualization-Chartjs-React-Typescript",

  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled"],
  },
});
