import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:2000,
  },
   define: {
        'process.env': {
            KEYS: JSON.stringify(process.env.KEYS),
        }
    }
})
