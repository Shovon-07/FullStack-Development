import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  //change port for production
  preview: {
    port: 5000,
  },
  // for dev
  server: {
    port: 3000,
  },
});
