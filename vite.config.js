import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/EventJhapa/", // Should match your repo name exactly
	plugins: [react()],
});
