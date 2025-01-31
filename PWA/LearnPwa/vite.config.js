import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true, // Enables PWA in development mode
      },
      manifest: {
        name: "My PWA App",
        short_name: "PWA",
        description: "A Vite + React PWA",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            // src: "/pwa-192x192.png",
            src: "/vite.svg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            // src: "/pwa-512x512.png",
            src: "/vite.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg}"],
      },
    }),
  ],
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
