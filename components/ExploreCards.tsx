import Link from "next/link";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { portfolioMeta } from "@/lib/portfolio";

const cards = [
  {
    label: "Servicios paquetizados",
    text: "Descubre nuestros servicios, planes y tarifas.",
    cta: "Ver servicios",
    href: "/servicios",
  },
  {
    label: "Portfolio",
    text: "Conoce nuestra propuesta completa y cómo estructuramos nuestros servicios.",
    cta: "Ver Portfolio",
    href: "/portfolio",
  },
];

/** Puerta de acceso a /servicios y /portfolio antes del CTA final. */
export default function ExploreCards() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <Reveal className="max-w-xl">
          <h2 className="section-title-sm">Conoce cómo podemos ayudarte</h2>
          <p className="mt-4 text-graphite">
            Si quieres profundizar antes de hablar con nosotros, aquí tienes
            nuestra oferta con precios y el {portfolioMeta.title} completo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.href} delay={i * 0.08}>
              <Link
                href={card.href}
                className="group flex h-full flex-col justify-between gap-10 rounded-[1.75rem] border border-line bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:border-violet hover:shadow-[0_30px_70px_-45px_rgba(84,48,255,0.7)] md:p-10"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-violet">{card.label}</span>
                  <p className="mt-4 max-w-sm font-display text-2xl font-bold leading-snug">{card.text}</p>
                </div>
                <span className="link-arrow">
                  {card.cta} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
