import Container from "./ui/Container";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const iconProps = {
  className: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const services: Service[] = [
  {
    title: "Gestión de redes sociales",
    description:
      "Calendarios editoriales, comunidad activa y contenido nativo por plataforma, pensado para generar conversación real, no solo alcance.",
    icon: (
      <svg {...iconProps}>
        <circle cx="7" cy="12" r="3.2" />
        <circle cx="17" cy="6" r="2.4" />
        <circle cx="17" cy="18" r="2.4" />
        <path d="M9.8 10.6 14.8 7.2M9.8 13.4 14.8 16.8" />
      </svg>
    ),
  },
  {
    title: "Diseño web",
    description:
      "Sitios y tiendas rápidos, medibles y fáciles de mantener, construidos sobre una base técnica sólida en lugar de plantillas genéricas.",
    icon: (
      <svg {...iconProps}>
        <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
        <path d="M3.5 8.5h17" />
        <circle cx="6.3" cy="6.5" r="0.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Branding",
    description:
      "Identidad verbal y visual coherente: naming, sistema de marca, tono de voz y lineamientos que se sostienen en cada punto de contacto.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 4 H14 A6 6 0 0 1 8 14 Z" fill="currentColor" stroke="none" opacity="0.9" />
        <path d="M4 14 V20 H10 A6 6 0 0 0 4 14 Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Publicidad digital",
    description:
      "Meta, Google y TikTok Ads gestionados con foco en costo por resultado, con pruebas creativas continuas y optimización semanal.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 10v4h4l6 4V6l-6 4Z" />
        <path d="M17.5 9.5a4 4 0 0 1 0 5" />
      </svg>
    ),
  },
  {
    title: "SEO",
    description:
      "Arquitectura, contenido y autoridad de dominio trabajados a la vez, para ranking que no depende de un solo cambio de algoritmo.",
    icon: (
      <svg {...iconProps}>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M15.3 15.3 20 20" />
      </svg>
    ),
  },
  {
    title: "Email marketing",
    description:
      "Automatizaciones de bienvenida, recuperación y fidelización, con segmentación real y copys que se leen antes de borrarse.",
    icon: (
      <svg {...iconProps}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
        <path d="m4 6.5 8 6.5 8-6.5" />
      </svg>
    ),
  },
  {
    title: "Automatización",
    description:
      "Flujos que conectan formularios, CRM y campañas, para que ningún lead se enfríe esperando una tarea manual.",
    icon: (
      <svg {...iconProps}>
        <circle cx="8" cy="8" r="2.6" />
        <circle cx="16" cy="16" r="2.6" />
        <path d="M10.5 9.5 13.5 14.5" />
      </svg>
    ),
  },
  {
    title: "Consultoría estratégica",
    description:
      "Diagnóstico, plan trimestral y prioridades claras cuando el reto no es ejecutar más, sino decidir qué ejecutar primero.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="4.6" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="border-t border-line py-24">
      <Container>
        <div className="max-w-lg">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Todo lo que necesita una marca para crecer en digital
          </h2>
          <p className="mt-4 text-graphite">
            Ocho disciplinas que trabajamos por separado o como un solo
            sistema, según en qué punto esté tu negocio.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-paper p-7 transition-colors hover:bg-violet-soft"
            >
              <span
                className="pointer-events-none absolute right-0 top-0 h-8 w-8 bg-line transition-colors group-hover:bg-violet/20"
                style={{ clipPath: "path('M0 0 H32 V32 A32 32 0 0 1 0 0 Z')" }}
              />
              <div className="text-violet">{service.icon}</div>
              <h3 className="mt-5 font-display text-base font-semibold">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-graphite">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
