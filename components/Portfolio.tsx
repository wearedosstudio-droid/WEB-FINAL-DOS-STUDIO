import Link from "next/link";
import Container from "./ui/Container";
import ProjectVisual from "./ui/ProjectVisual";
import { projects } from "@/lib/projects";

export default function Portfolio() {
  const featured = projects.slice(0, 3);

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
          <Link
            href="/proyectos"
            className="text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-violet"
          >
            Ver todos los proyectos
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <article key={project.name} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                  <ProjectVisual variant={project.variant} />
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
