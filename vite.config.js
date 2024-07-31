import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: 'https://maxzi3.github.io/EsutLodges/',
  server :{
    port: 3000
  }
})
