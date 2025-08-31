import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on all addresses, including Replit
    allowedHosts: [
      ".replit.dev"
    ],
  },
});
