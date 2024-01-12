import react from "@vitejs/plugin-react";
import ReactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ReactRefresh(), react()],
});
