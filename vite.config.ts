import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({ // Não precisamos mais do 'mode' aqui
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()], // Apenas o plugin do React é necessário
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});