import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { Container } from "postcss";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      Container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },

  plugins: [react(), tailwindcss()],
});
