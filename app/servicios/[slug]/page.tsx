import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Accordion from "@/components/ui/Accordion";
import CtaBanner from "@/components/CtaBanner";
import { services, getServiceBySlug } from "@/lib/services";
import { categories, priceSuffix, pricedCategoryBySlug, startingPrice } from "@/lib/portfolio";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} en Barcelona`,
    description: service.summary,
    alternates: { canonical: `/servicios/${service.slug}` },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const category = categories.find((c) => c.id === pricedCategoryBySlug[service.slug]);
  const fromPlan = category ? startingPrice(category.id) : undefined;

  return (
    <>
      <Header />
      <main id="contenido">
        <section className="border-b border-line py-20">
          <Container>
            <Link
              href="/#servicios"
              className="text-sm text-graphite transition-colors hover:text-ink"
            >
              ← Todos los servicios
            </Link>

            <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-violet">
                  <ServiceIcon slug={service.slug} className="h-7 w-7" />
                </div>
                <h1 className="text-balance mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-5 text-lg text-graphite">{service.tagline}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contacto"
                    className="rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-ink"
                  >
                    Solicitar una propuesta
                  </Link>
                  <Link
                    href="/proceso"
                    className="rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-violet hover:text-violet"
                  >
                    Ver cómo trabajamos
                  </Link>
                </div>
              </div>

              {fromPlan && category ? (
                <Link
                  href={`/servicios#${category.id}`}
                  className="group rounded-3xl bg-midnight p-7 text-white transition-transform duration-500 hover:-translate-y-1"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-violet-light">
                    Servicio paquetizado
                  </span>
                  <span className="mt-3 block text-sm text-white/60">Desde</span>
                  <span className="block font-display text-4xl font-bold">
                    {fromPlan.price}
                    <span className="ml-1 text-sm font-normal text-white/60">{priceSuffix(fromPlan)}</span>
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                    Ver planes y tarifas
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ) : (
                <Link
                  href="/servicios"
                  className="group rounded-3xl border border-line bg-violet-soft/60 p-7 transition-colors hover:border-violet"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-violet">
                    Presupuesto a medida
                  </span>
                  <p className="mt-3 max-w-[240px] text-sm text-graphite">
                    Lo combinamos con nuestros servicios paquetizados según tu objetivo.
                  </p>
                  <span className="link-arrow mt-4">
                    Ver servicios paquetizados <span aria-hidden="true">→</span>
                  </span>
                </Link>
              )}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                Qué hacemos exactamente
              </h2>
              <p className="mt-5 max-w-xl text-graphite">{service.description}</p>

              <h3 className="mt-12 font-display text-lg font-semibold">
                Qué incluye
              </h3>
              <ul className="mt-5 space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line p-8">
              <h3 className="font-display text-lg font-semibold">
                Para quién es
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                {service.idealFor}
              </p>

              <h3 className="mt-10 font-display text-lg font-semibold">
                Cómo lo trabajamos
              </h3>
              <div className="mt-5 space-y-6">
                {service.steps.map((step, i) => (
                  <div key={step.title} className="flex gap-4">
                    <span className="font-display text-sm font-bold text-violet">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">
                        {step.title}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-graphite">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/proceso"
                className="mt-8 inline-block text-sm font-medium text-violet underline underline-offset-4"
              >
                Ver nuestro proceso completo →
              </Link>
            </div>
          </Container>
        </section>

        <section className="border-t border-line py-20">
          <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-balance font-display text-2xl font-bold tracking-tight md:text-3xl">
                Preguntas frecuentes sobre {service.title.toLowerCase()}
              </h2>
            </div>
            <Accordion items={service.faq} />
          </Container>
        </section>

        <section className="border-t border-line py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Otros servicios que suelen combinarse con este
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="group rounded-2xl border border-line p-6 transition-colors hover:border-violet hover:bg-violet-soft/60"
                >
                  <div className="text-violet">
                    <ServiceIcon slug={s.slug} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold">
                    {s.title}
                  </h3>
                  <span className="mt-3 inline-block text-xs font-medium text-violet opacity-0 transition-opacity group-hover:opacity-100">
                    Ver servicio →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <CtaBanner
          eyebrow={service.title}
          title={
            <>
              ¿Empezamos<span className="text-violet-light">?</span>
            </>
          }
          text="Cuéntanos tu objetivo. Empezamos con una llamada de 30 minutos para entender tu negocio y decirte por dónde empezaríamos."
          primary={{ href: "/contacto", label: "Solicitar una propuesta" }}
          secondary={{ href: "/servicios", label: "Ver servicios y tarifas" }}
        />
      </main>
      <Footer />
    </>
  );
}
