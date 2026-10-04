# Dos Studio — Web corporativa

Web completa para el estudio de marketing digital **Dos Studio** (Barcelona),
construida con Next.js 14 (App Router), React Server Components, TailwindCSS
y Framer Motion, siguiendo la identidad de marca (violeta `#5430FF`, isotipo
geométrico en forma de "D").

## Estructura del proyecto

Sitio multipágina — cada sección principal vive en su propia ruta:

```
dos-studio/
├── app/
│   ├── api/contact/route.ts        # Endpoint del formulario de contacto
│   ├── servicios/
│   │   ├── page.tsx                # Listado completo de los 8 servicios
│   │   └── [slug]/page.tsx         # Página individual de cada servicio (con FAQ)
│   ├── proceso/page.tsx            # Las 5 etapas del proceso, en profundidad
│   ├── blog/
│   │   ├── page.tsx                # Listado de artículos
│   │   └── [slug]/page.tsx         # Artículo individual
│   ├── nosotros/page.tsx           # Sobre el equipo (2 fundadores, 2026, Barcelona)
│   ├── contacto/page.tsx           # Formulario de contacto
│   ├── aviso-legal/page.tsx        # Aviso legal (LSSI-CE)
│   ├── politica-de-privacidad/page.tsx  # Política de privacidad (RGPD)
│   ├── politica-de-cookies/page.tsx     # Política de cookies
│   ├── icon.png                    # Favicon (isotipo real de marca)
│   ├── layout.tsx                  # Layout raíz, fuentes, metadata SEO y banner de cookies
│   └── page.tsx                    # Home: resumen de cada sección + CTAs
├── lib/
│   ├── services.ts                 # Datos de los 8 servicios (incluye FAQ por servicio)
│   ├── process.ts                  # Datos de las 5 etapas del proceso
│   ├── blog.ts                     # Artículos del blog
│   └── faq.ts                      # Preguntas frecuentes generales (Home)
├── components/
│   ├── ui/
│   │   ├── Arc.tsx                 # Motivo decorativo (cuarto de círculo)
│   │   ├── Container.tsx           # Wrapper de ancho máximo
│   │   ├── Logomark.tsx            # Isotipo real de marca (PNG con transparencia)
│   │   ├── ServiceIcon.tsx         # Iconos de cada servicio, por slug
│   │   ├── AbstractVisual.tsx      # Composiciones visuales en la paleta de marca
│   │   ├── Accordion.tsx           # Desplegable usado en todas las FAQ
│   │   └── Reveal.tsx              # Animación de aparición al hacer scroll
│   ├── Header.tsx / Footer.tsx     # Header con mega menú de servicios
│   ├── Pillars.tsx                 # Bloques de propuesta de valor (home)
│   ├── PlatformMarquee.tsx         # Cinta de plataformas con las que trabajamos
│   ├── Hero.tsx / About.tsx / Services.tsx / Process.tsx
│   ├── BlogPreview.tsx / FaqSection.tsx / CtaBanner.tsx
│   ├── ContactForm.tsx
│   └── CookieBanner.tsx            # Aviso de cookies (aceptar/rechazar)
├── public/
│   └── brand/                      # Isotipo real recortado con transparencia
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Datos de contacto

- Email: wearedosstudio@gmail.com
- Teléfono: +34 684 34 29 84 / +34 635 37 27 54
- Oficina: Barcelona, España

## Cómo correrlo en local

Requisitos: Node.js 18.18 o superior.

```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Cómo conectar el formulario de contacto a un email real

El formulario envía los datos a `app/api/contact/route.ts`. Ahora mismo esa
ruta solo hace `console.log`. Para enviarlos por email, instala
[Resend](https://resend.com) (`npm install resend`) y descomenta el bloque
de ejemplo ya preparado en ese archivo, añadiendo `RESEND_API_KEY` como
variable de entorno (en Vercel: Settings → Environment Variables).

## Desplegar en Vercel

Cada `git push` a la rama `main` dispara un nuevo deployment automático en
Vercel. No es necesario hacer nada manual ahí.

## Nota legal

Las páginas `/aviso-legal`, `/politica-de-privacidad` y
`/politica-de-cookies` son plantillas estándar para España (LSSI-CE/RGPD).
Contienen una nota indicando qué datos fiscales exactos (NIF, razón social)
deben completarse, y se recomienda que un asesor legal las revise antes de
considerar el sitio en cumplimiento total.
