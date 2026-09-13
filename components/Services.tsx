import Link from "next/link";
import Container from "./ui/Container";
import ServiceIcon from "./ui/ServiceIcon";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="servicios" className="border-t border-line py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-lg">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              Todo lo que necesita una marca para crecer en digital
            </h2>
            <p className="mt-4 text-graphite">
              Ocho disciplinas que trabajamos por separado o como un solo
              sistema, según en qué punto esté tu negocio.
            </p>
          </div>
          <Link
            href="/servicios"
            className="text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-violet"
          >
            Ver todos los servicios
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="group relative bg-paper p-7 transition-colors hover:bg-violet-soft"
            >
              <span
                className="pointer-events-none absolute right-0 top-0 h-8 w-8 bg-line transition-colors group-hover:bg-violet/20"
                style={{ clipPath: "path('M0 0 H32 V32 A32 32 0 0 1 0 0 Z')" }}
              />
              <div className="text-violet">
                <ServiceIcon slug={service.slug} />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-graphite">
                {service.summary}
              </p>
              <span className="mt-4 inline-block text-xs font-medium text-violet opacity-0 transition-opacity group-hover:opacity-100">
                Ver detalles →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
