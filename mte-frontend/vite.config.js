import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        hmr: false,
        port: 3000,
        cors: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false
            },
            '/resources': {
                target: 'http://localhost:8080',
                secure: false
            }
        },
    }
})
