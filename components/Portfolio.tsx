import Container from "./ui/Container";
import ProjectVisual from "./ui/ProjectVisual";

const projects = [
  {
    name: "Nortia Finance",
    category: "Fintech · Performance + Web",
    result: "+61% en leads calificados en 4 meses",
  },
  {
    name: "Cala Studio",
    category: "Retail de moda · Branding + Social",
    result: "x2.4 en tasa de conversión de Instagram Shop",
  },
  {
    name: "Verde Cocina",
    category: "Food · SEO + Email marketing",
    result: "+38% de tráfico orgánico en 6 meses",
  },
  {
    name: "Rumbo Salud",
    category: "Clínicas · Automatización + Ads",
    result: "-32% en costo por cita agendada",
  },
  {
    name: "Alto Coworking",
    category: "Real estate · Diseño web",
    result: "Nuevo sitio con +90 en Core Web Vitals",
  },
  {
    name: "Marea Beauty",
    category: "Cosmética · Consultoría estratégica",
    result: "Plan trimestral que ordenó 5 canales en uno",
  },
];

export default function Portfolio() {
  return (
    <section id="proyectos" className="border-t border-line py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-lg">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              Proyectos que ya están dando resultados
            </h2>
            <p className="mt-4 text-graphite">
              Una muestra de marcas con las que trabajamos de forma continua,
              en distintos sectores y etapas de crecimiento.
            </p>
          </div>
          <a
            href="#contacto"
            className="text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-violet"
          >
            Quiero resultados así
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article key={project.name} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                  <ProjectVisual variant={i} />
                </div>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-graphite">{project.category}</p>
              <p className="mt-2 text-sm font-medium text-violet">
                {project.result}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
