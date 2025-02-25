import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    // Cargar variables de entorno según el modo (development, production)
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [react()],
        define: {
            "import.meta.env.VITE_API_URL": JSON.stringify(env.VITE_API_URL),
        },
    };
});
