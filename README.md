# Dos Studio — Web corporativa

Web completa para la agencia de marketing digital **Dos Studio**, construida
con Next.js 14 (App Router), React Server Components, TailwindCSS y Framer
Motion, siguiendo la identidad de marca (violeta `#5430FF`, isotipo
geométrico en forma de "D", tipografía bold sans-serif).

## Nota sobre los archivos de marca originales

Los dos JPG que me diste (`public/brand-original/`) tienen el fondo
"transparente" **grabado como un patrón de cuadros** dentro de la propia
imagen — es lo que pasa cuando un PNG con transparencia real se exporta o
convierte a JPG, un formato que no soporta canal alfa. Por eso no se usan
directamente en el sitio (se verían con el cuadriculado visible).

En su lugar, recreé el isotipo como SVG limpio (`components/ui/Logomark.tsx`
y `app/icon.svg`), con la misma geometría de dos piezas en violeta. Es fiel
al espíritu de la marca, pero para un resultado 100% pixel-perfect te
recomiendo exportar desde tu herramienta de diseño (Figma, Illustrator) un
**SVG o PNG con transparencia real** y reemplazar `Logomark.tsx` por ese
path, o sustituir el `<Logomark />` por un `<Image src="/logo.svg" ... />`.

## Estructura del proyecto

```
dos-studio/
├── app/
│   ├── api/contact/route.ts   # Endpoint del formulario de contacto
│   ├── globals.css            # Tokens de color/tipografía y estilos base
│   ├── icon.svg                # Favicon (isotipo de marca)
│   ├── layout.tsx             # Layout raíz, fuentes y metadata SEO
│   └── page.tsx               # Ensambla todas las secciones de la home
├── components/
│   ├── ui/
│   │   ├── Arc.tsx            # Motivo decorativo (cuarto de círculo)
│   │   ├── Container.tsx      # Wrapper de ancho máximo
│   │   ├── Logomark.tsx       # Isotipo vectorial reutilizable
│   │   └── ProjectVisual.tsx  # Placeholders de proyecto en la paleta de marca
│   ├── About.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Portfolio.tsx
│   ├── Process.tsx
│   ├── Services.tsx
│   └── Testimonials.tsx
├── public/
│   └── brand-original/        # Tus JPG originales, guardados como referencia
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Tokens de diseño usados

| Token          | Valor      | Uso                                  |
|----------------|------------|---------------------------------------|
| `violet`       | `#5430FF`  | Color de marca (CTAs, acentos, links) |
| `violet.deep`  | `#1B0E66`  | Sombras del isotipo, footer oscuro    |
| `violet.soft`  | `#EDE9FF`  | Fondos suaves, hover de tarjetas      |
| `ink`          | `#0A0A0B`  | Texto principal, fondos oscuros       |
| `graphite`     | `#5B5B66`  | Texto secundario                      |
| `line`         | `#E4E2EC`  | Bordes y divisores                    |

Tipografías: **Space Grotesk** (titulares, `font-display`) y **Inter**
(cuerpo de texto, `font-body`), cargadas vía `next/font/google` — sin
peticiones externas ni layout shift.

## Cómo correrlo en local

Requisitos: Node.js 18.18 o superior.

```bash
# 1. Instala las dependencias
npm install

# 2. Levanta el entorno de desarrollo
npm run dev

# 3. Abre http://localhost:3000
```

## Cómo conectar el formulario de contacto a un email real

El formulario ya envía los datos a `app/api/contact/route.ts`. Ahora mismo
esa ruta solo hace `console.log` de los datos recibidos. Para enviarlos por
email, la forma más rápida es con [Resend](https://resend.com):

```bash
npm install resend
```

Y en `app/api/contact/route.ts`, descomenta el bloque de ejemplo que ya está
preparado, añadiendo tu `RESEND_API_KEY` como variable de entorno (local en
`.env.local`, y en producción en el panel de Vercel).

## Subir el proyecto a GitHub

```bash
cd dos-studio
git init
git add .
git commit -m "Primera versión de la web de Dos Studio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/dos-studio.git
git push -u origin main
```

## Desplegar en Vercel

**Opción 1 — desde la web (recomendada):**
1. Entra a [vercel.com/new](https://vercel.com/new) e inicia sesión con tu
   cuenta de GitHub.
2. Selecciona el repositorio `dos-studio` que acabas de subir.
3. Vercel detecta automáticamente que es un proyecto Next.js — no hay que
   tocar ninguna configuración de build.
4. Si vas a usar Resend u otro proveedor de email, añade la variable de
   entorno correspondiente (`RESEND_API_KEY`) en **Settings → Environment
   Variables** antes de desplegar.
5. Pulsa **Deploy**. En 1-2 minutos tendrás una URL en producción
   (`dos-studio.vercel.app`) y cada `git push` a `main` desplegará
   automáticamente una nueva versión.

**Opción 2 — desde la terminal:**
```bash
npm install -g vercel
vercel login
vercel        # despliegue de prueba (preview)
vercel --prod # despliegue a producción
```

## Personalizar contenido

- **Textos e imágenes de proyectos**: edita el array `projects` en
  `components/Portfolio.tsx`. Los placeholders actuales son SVG generativos
  en la paleta de marca (`ProjectVisual.tsx`); cuando tengas capturas reales
  de proyectos, sustitúyelos por `next/image` apuntando a `/public`.
- **Servicios**: array `services` en `components/Services.tsx`.
- **Datos de contacto**: `components/ContactForm.tsx` y `Footer.tsx`.
- **Colores/tipografía**: `tailwind.config.ts` y `app/layout.tsx`.
