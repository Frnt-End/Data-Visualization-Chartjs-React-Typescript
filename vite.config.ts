import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Data-Visualization-Chartjs-React-Typescript/",
  plugins: [react()],
  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled"],
  },
});
