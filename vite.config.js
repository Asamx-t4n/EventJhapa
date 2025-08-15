import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/EventJhapa/", // EXACT repo name
	plugins: [react()],
});
