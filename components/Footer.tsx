import Link from "next/link";
import Logomark from "./ui/Logomark";
import Container from "./ui/Container";
import { services } from "@/lib/services";
import { contact } from "@/lib/site";

const commercialLinks = [
  { href: "/servicios", label: "Servicios paquetizados" },
  { href: "/portfolio", label: "Portfolio" },
];

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
              Agencia de marketing digital en Barcelona. Construimos y hacemos
              crecer el ecosistema digital de tu empresa: estrategia, web, SEO,
              contenido y datos.
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Empezar un proyecto <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Servicios
            </h2>
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
            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {commercialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-violet-light"
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-violet-light transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Agencia
            </h2>
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
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Contacto
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              {contact.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="hover:text-white">
                    {p.label}
                  </a>
                </li>
              ))}
              <li>{contact.city}</li>
            </ul>
          </div>
        </Container>

        <Container>
          <div
            aria-hidden="true"
            className="select-none bg-gradient-to-b from-violet to-violet/0 bg-clip-text font-display text-[18vw] font-bold leading-[0.8] tracking-tighter text-transparent lg:text-[13.5rem]"
          >
            Dos Studio.
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
