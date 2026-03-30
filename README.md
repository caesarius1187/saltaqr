# Salta QR — Historia en la calle

Sitio estático con [Next.js](https://nextjs.org) para códigos QR en espacios públicos de Salta. **Primera implementación:** monumento a Güemes (mármol/placas). El proyecto está pensado para sumar más puntos en la ciudad. Incluye landing, página **Vida de Güemes** con anclas para QRs y **`/mapa-qr`** (equipo) con URLs exactas.

## Requisitos

- Node.js 20+ (recomendado)
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Opcional: copiá `.env.example` a `.env.local` y definí `NEXT_PUBLIC_SITE_URL=http://localhost:3000` para probar metadata y el mapa de QRs con esa base.

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — compilación de producción
- `npm run start` — sirve el build localmente
- `npm run lint` — ESLint

## Despliegue en Vercel

1. **Repositorio Git**  
   Inicializá el repo en esta carpeta (si aún no existe), subilo a GitHub o GitLab.

   ```bash
   git init
   git add .
   git commit -m "Initial commit: sitio Güemes Salta"
   ```

2. **Importar en Vercel**  
   En [vercel.com](https://vercel.com), **Add New → Project**, conectá el repositorio y dejá el preset de Next.js (build `next build`, output por defecto).

3. **Variable de entorno**  
   En el proyecto Vercel: **Settings → Environment Variables**. Agregá:

   - `NEXT_PUBLIC_SITE_URL` = la URL pública definitiva del sitio, **sin barra final**, por ejemplo `https://tu-proyecto.vercel.app` o tu dominio custom.

   Esto alinea `metadataBase`, Open Graph, `sitemap.xml`, `robots.txt` y la tabla de **`/mapa-qr`**. Sin esta variable, en build local se usa `http://localhost:3000`; en Vercel suele inferirse `VERCEL_URL`, pero conviene fijar la URL canónica que vas a grabar en los QRs.

4. **Dominio propio (opcional)**  
   En **Settings → Domains** agregá tu dominio y seguí la verificación DNS. Volvé a confirmar que `NEXT_PUBLIC_SITE_URL` coincide con ese dominio antes de imprimir o grabar los QRs.

5. **Preview**  
   Cada push genera un preview; los QRs del monumento deben apuntar siempre a la URL de **producción** estable.

## Mapa de QRs

En producción, abrí `https://TU_DOMINIO/mapa-qr` para copiar las URLs por ancla (`/vida#intro`, etc.). Esa ruta tiene `noindex` para reducir su aparición en buscadores; no está enlazada en el menú principal.

## Licencia y contenido

Textos divulgativos sujetos a revisión. Ajustá créditos y contacto en el footer según tu organización.
