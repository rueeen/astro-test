# Landing EIRP+ (Astro + Tailwind)

Landing corporativa single-page para EIRP+, enfocada en conversión para industria y minería.

## Crear proyecto e instalar dependencias

```bash
npm create astro@latest eirp-landing -- --template basics --install --typescript strict
cd eirp-landing
npx astro add tailwind
npm install
```

## Ejecutar en local

```bash
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura principal

- `src/data/site.ts`: contenido desacoplado.
- `src/layouts/BaseLayout.astro`: layout base con SEO.
- `src/components/*`: secciones reutilizables de la landing.
- `src/pages/index.astro`: composición de la página.
- `src/styles/global.css`: estilos globales + animaciones suaves.
