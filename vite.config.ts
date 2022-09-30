import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react()],
    define: { "process.env": { ...loadEnv(mode, process.cwd()) } },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};
