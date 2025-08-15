import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/", // EXACT repo name
	plugins: [react()],
});
