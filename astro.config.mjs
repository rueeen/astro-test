// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // 1. Cambia el sitio a tu dominio real
  site: 'https://eirp.cl',
  // 2. IMPORTANTE: Cambia el base a '/' (raíz)
  base: '/',
  build: {
    assets: 'assets' // <--- AGREGA ESTA LÍNEA
  }
});