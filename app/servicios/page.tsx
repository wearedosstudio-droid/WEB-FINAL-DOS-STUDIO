import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Gestión de redes sociales, diseño web, branding, publicidad digital, SEO, email marketing, automatización y consultoría estratégica.",
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line py-20">
          <Container>
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-violet">Servicios</span>
              <h1 className="text-balance mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Ocho disciplinas, un mismo criterio detrás de cada una
              </h1>
              <p className="mt-6 text-lg text-graphite">
                Trabajamos cada servicio con el mismo estándar: diagnóstico
                antes de ejecutar, entregables claros desde el primer mes y
                reportes en lenguaje de negocio. Elige el que necesitas hoy o
                combina varios en un solo plan.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className="group flex flex-col rounded-2xl border border-line p-8 transition-colors hover:border-violet hover:bg-violet-soft/60"
                >
                  <div className="text-violet">
                    <ServiceIcon slug={service.slug} className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">
                    {service.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                    <div>
                      <div className="font-display text-lg font-bold text-ink">
                        {service.stat.value}
                      </div>
                      <div className="text-xs text-graphite">
                        {service.stat.label}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-violet opacity-0 transition-opacity group-hover:opacity-100">
                      Ver servicio →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-line bg-ink py-20 text-white">
          <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                ¿No sabes por dónde empezar?
              </h2>
              <p className="mt-3 max-w-md text-white/70">
                Cuéntanos en qué está tu marca hoy y te decimos con qué
                servicio conviene arrancar.
              </p>
            </div>
            <Link
              href="/contacto"
              className="whitespace-nowrap rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Hablar con un estratega
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
