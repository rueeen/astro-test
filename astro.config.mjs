// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Actions define la variable de entorno CI=true automáticamente.
// La usamos para distinguir el build de vista previa (GitHub Pages)
// del build de producción (tu hosting real en eirp.cl).
const isGithubPagesPreview = process.env.CI === 'true';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: isGithubPagesPreview ? 'https://rueeen.github.io' : 'https://eirp.cl',
  base: isGithubPagesPreview ? '/astro-test/' : '/',
  build: {
    assets: 'assets'
  }
});