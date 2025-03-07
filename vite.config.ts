import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@states": fileURLToPath(
                new URL("./src/app/store/states", import.meta.url)
            ),
            "@slices": fileURLToPath(
                new URL("./src/app/store/slices", import.meta.url)
            ),
        },
    },
});
