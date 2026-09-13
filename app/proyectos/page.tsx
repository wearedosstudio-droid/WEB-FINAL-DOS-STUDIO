import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Marcas con las que trabajamos de forma continua, en distintos sectores y etapas de crecimiento.",
};

export default function ProyectosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line py-20">
          <Container>
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-violet">Proyectos</span>
              <h1 className="text-balance mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Marcas que ya están creciendo con nosotros
              </h1>
              <p className="mt-6 text-lg text-graphite">
                Una muestra de clientes activos, en distintos sectores y con
                distintas combinaciones de servicios según su etapa.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.name} className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                      <ProjectVisual variant={project.variant} />
                    </div>
                  </div>
                  <h2 className="mt-4 font-display text-lg font-semibold">
                    {project.name}
                  </h2>
                  <p className="mt-1 text-sm text-graphite">{project.category}</p>
                  <p className="mt-2 text-sm font-medium text-violet">
                    {project.result}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-line bg-ink py-20 text-white">
          <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Tu marca puede ser el próximo caso
              </h2>
              <p className="mt-3 max-w-md text-white/70">
                Cuéntanos tu objetivo y armamos un plan a la medida de tu
                sector.
              </p>
            </div>
            <Link
              href="/contacto"
              className="whitespace-nowrap rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Quiero resultados así
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
