// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/EventJhapa/", // important for GitHub Pages repo path
	plugins: [react()],
});
