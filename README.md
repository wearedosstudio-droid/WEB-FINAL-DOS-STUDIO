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
│   ├── page.tsx                    # Home: hero → propuesta de valor → problema → Dos Studio →
│   │                               # sistema → servicios → diferenciación → FAQ → accesos → CTA
│   ├── servicios/
│   │   ├── page.tsx                # Servicios paquetizados (planes y tarifas del Portfolio 2026)
│   │   └── [slug]/page.tsx         # Página de cada disciplina (con FAQ y enlace a sus tarifas)
│   ├── portfolio/page.tsx          # Portfolio 2026 completo como documento web (+ descarga PDF)
│   ├── proceso/ · nosotros/ · blog/ · contacto/
│   ├── aviso-legal/ · politica-de-privacidad/ · politica-de-cookies/
│   ├── api/contact/route.ts        # Endpoint del formulario (recibe también el plan elegido)
│   ├── sitemap.ts · robots.ts      # sitemap.xml y robots.txt generados
│   ├── opengraph-image.tsx         # Imagen para redes sociales
│   └── layout.tsx                  # Fuentes, metadata SEO, JSON-LD y banner de cookies
├── lib/
│   ├── portfolio.ts                # ⭐ Fuente única de la oferta comercial (Portfolio 2026)
│   ├── site.ts                     # URL del sitio y datos de contacto
│   ├── services.ts                 # Las 8 disciplinas (contenido de /servicios/[slug])
│   ├── process.ts · blog.ts · faq.ts
├── components/
│   ├── pricing/                    # PlanCard, PackCard, PacksComparison, PlanTable, SectionNav
│   ├── ui/                         # PageHero, SectionHeading, Callout, Reveal, Wordmark, Accordion…
│   ├── Header.tsx / Footer.tsx     # Mega menú de servicios · footer con Servicios paquetizados y Portfolio
│   ├── Hero.tsx / ValueProposition.tsx / Problems.tsx / About.tsx / Process.tsx
│   ├── Services.tsx / Differentiators.tsx / FaqSection.tsx / ExploreCards.tsx / CtaBanner.tsx
│   ├── ContactForm.tsx             # Admite ?plan=CODIGO para preseleccionar un plan
│   └── CookieBanner.tsx
└── public/
    ├── brand/                      # Isotipo de marca
    └── portfolio/                  # PDF oficial del Portfolio 2026
```

## Cómo actualizar precios o servicios

Toda la oferta comercial (códigos, precios, cuotas, compromisos, packs y
condiciones) vive en `lib/portfolio.ts`, transcrita del documento
**Dos Studio · Portfolio 2026**. Tanto `/servicios` como `/portfolio` leen de
ahí, así que un cambio de tarifa se hace una sola vez. Si se publica una nueva
versión del PDF, sustituye también `public/portfolio/dos-studio-portfolio-2026.pdf`.

## Dominio

La URL usada en SEO (canonical, sitemap, Open Graph) se toma de la variable
`NEXT_PUBLIC_SITE_URL` (por defecto `https://web10-seven.vercel.app`). Cuando
tengáis dominio propio, añádela en Vercel → Settings → Environment Variables.

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
