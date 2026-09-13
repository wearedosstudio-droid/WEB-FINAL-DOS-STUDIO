import Logomark from "./ui/Logomark";
import Container from "./ui/Container";

const columns = [
  {
    title: "Servicios",
    links: [
      "Gestión de redes sociales",
      "Diseño web",
      "Branding",
      "Publicidad digital",
      "SEO",
      "Email marketing",
    ],
  },
  {
    title: "Agencia",
    links: ["Nosotros", "Proyectos", "Proceso", "Testimonios", "Contacto"],
  },
];

const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <Container className="grid gap-14 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logomark className="h-7 w-7" color="#FFFFFF" />
            <span className="font-display text-lg font-bold">Dos Studio</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Agencia de marketing digital especializada en estrategia,
            performance y diseño de marca para negocios en crecimiento.
          </p>
          <div className="mt-6 flex gap-5">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-medium text-white/50">{col.title}</h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#top"
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Dos Studio. Todos los derechos reservados.</span>
          <div className="flex gap-5">
            <a href="#top" className="hover:text-white/70">
              Aviso legal
            </a>
            <a href="#top" className="hover:text-white/70">
              Privacidad
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
