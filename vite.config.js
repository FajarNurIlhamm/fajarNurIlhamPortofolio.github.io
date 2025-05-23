import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  base: '/fajarNurIlhamPortofolio/',
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
