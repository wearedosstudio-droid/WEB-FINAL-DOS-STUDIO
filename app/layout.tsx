import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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
  metadataBase: new URL("https://dosstudio.example.com"),
  title: {
    default: "Dos Studio — Marketing digital con criterio",
    template: "%s · Dos Studio",
  },
  description:
    "Dos Studio es una agencia de marketing digital: redes sociales, diseño web, branding, publicidad, SEO, email marketing y automatización, con estrategia detrás de cada decisión.",
  openGraph: {
    title: "Dos Studio — Marketing digital con criterio",
    description:
      "Estrategia, diseño y contenido que mueven métricas reales. Conoce a Dos Studio.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
