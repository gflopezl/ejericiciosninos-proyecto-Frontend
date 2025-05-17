import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // 👈 Necesario para producción en Netlify
  plugins: [react()],
});
