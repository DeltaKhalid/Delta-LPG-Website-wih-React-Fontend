import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	root: 'delta_react_website_v3',
	plugins: [react()],
	server: {
		historyApiFallback: true,
	}
})
