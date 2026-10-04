import Link from "next/link";
import Logomark from "./ui/Logomark";
import Container from "./ui/Container";
import { services } from "@/lib/services";

const agencyLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/proceso", label: "Proceso" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/politica-de-privacidad", label: "Política de privacidad" },
  { href: "/politica-de-cookies", label: "Política de cookies" },
];

export default function Footer() {
  return (
    <footer className="px-3 pb-3 md:px-4 md:pb-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink text-white md:rounded-[2.5rem]">
        <Container className="grid gap-14 pb-12 pt-16 md:pt-20 lg:grid-cols-[1.3fr_1fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Logomark className="h-8" />
              <span className="font-display text-xl font-bold">Dos Studio</span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Estudio de marketing digital en Barcelona: estrategia,
              performance y diseño de marca para negocios en crecimiento.
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Empezar un proyecto <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Servicios
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Agencia
            </h4>
            <ul className="mt-5 space-y-3">
              {agencyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a href="mailto:wearedosstudio@gmail.com" className="hover:text-white">
                  wearedosstudio@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+34684342984" className="hover:text-white">
                  +34 684 34 29 84
                </a>
              </li>
              <li>
                <a href="tel:+34635372754" className="hover:text-white">
                  +34 635 37 27 54
                </a>
              </li>
              <li>Barcelona, España</li>
            </ul>
          </div>
        </Container>

        <Container>
          <div
            aria-hidden="true"
            className="select-none bg-gradient-to-b from-violet to-violet/0 bg-clip-text font-display text-[18vw] font-bold leading-[0.8] tracking-tighter text-transparent lg:text-[13.5rem]"
          >
            Dos Studio
          </div>
        </Container>

        <div className="border-t border-white/10 py-6">
          <Container className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Dos Studio. Todos los derechos reservados.</span>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white/70">
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
