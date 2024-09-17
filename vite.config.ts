import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dotenv from "dotenv"

dotenv.config()

// https://vitejs.dev/config/
const configCallback = () => ({
	plugins: [react()],
	server: {
		port: parseInt(process.env.VITE_SERVER_PORT || "5173", 10)
	}
})

const viteConfig = defineConfig(configCallback)

export default viteConfig
