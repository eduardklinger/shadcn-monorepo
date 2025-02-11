import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    return {
        server: {
            allowedHosts: ["cw25mr-5173.csb.app"],
        },
        plugins: [react()],
    };
});
