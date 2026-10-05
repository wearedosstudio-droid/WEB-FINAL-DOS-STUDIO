import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { contact, siteUrl } from "@/lib/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dos Studio — Agencia de marketing digital en Barcelona",
    template: "%s · Dos Studio",
  },
  description:
    "Dos Studio es una agencia de marketing digital en Barcelona. Construimos y hacemos crecer el ecosistema digital de tu empresa: estrategia, web, SEO, contenido, redes y datos, con servicios de precio cerrado.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dos Studio — Agencia de marketing digital en Barcelona",
    description:
      "Estrategia, web, SEO, contenido y datos trabajando como un solo sistema. Servicios con precio y alcance cerrados.",
    type: "website",
    locale: "es_ES",
    siteName: "Dos Studio",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dos Studio",
  description: "Agencia de marketing digital en Barcelona: estrategia, web, SEO, contenido, redes sociales y datos.",
  url: siteUrl,
  logo: `${siteUrl}/brand/isotype.png`,
  email: contact.email,
  telephone: contact.phones.map((p) => p.label),
  foundingDate: "2026",
  address: { "@type": "PostalAddress", addressLocality: "Barcelona", addressCountry: "ES" },
  areaServed: "ES",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-violet focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <CookieBanner />
      </body>
    </html>
  );
}
