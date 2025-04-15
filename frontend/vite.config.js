import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  // server:{
  //   "/api" : {
  //     target : "https://super-duper-fiesta-g6grj4v745gfjpq-5000.app.github.dev/"
  //   }
  // }
})
