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
    <footer className="border-t border-line bg-ink text-white">
      <Container className="grid gap-14 py-16 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Logomark className="h-7" />
            <span className="font-display text-lg font-bold">Dos Studio</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Estudio de marketing digital en Barcelona: estrategia,
            performance y diseño de marca para negocios en crecimiento.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white/50">Servicios</h4>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white/50">Agencia</h4>
          <ul className="mt-4 space-y-3">
            {agencyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white/50">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>wearedosstudio@gmail.com</li>
            <li>+34 684 34 29 84</li>
            <li>+34 635 37 27 54</li>
            <li>Barcelona, España</li>
          </ul>
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
    </footer>
  );
}
