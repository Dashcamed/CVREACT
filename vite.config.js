import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // 👇 sube el límite del warning (opcional, evita spam en consola)
    chunkSizeWarningLimit: 2000,

    // 👇 divide dependencias pesadas en chunks separados
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          three: [
            "three",
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          gsap: ["gsap", "@gsap/react"],
        },
      },
    },
  },
});
