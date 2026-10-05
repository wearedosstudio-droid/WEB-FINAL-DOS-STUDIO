import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Callout from "@/components/ui/Callout";
import Reveal from "@/components/ui/Reveal";
import PlanCard from "@/components/pricing/PlanCard";
import PackCard from "@/components/pricing/PackCard";
import PacksComparison from "@/components/pricing/PacksComparison";
import SectionNav from "@/components/pricing/SectionNav";
import {
  categories,
  conditions,
  hourly,
  packs,
  packsIntro,
  structure,
  allPlans,
  priceSuffix,
} from "@/lib/portfolio";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios paquetizados y tarifas de marketing digital",
  description:
    "Auditorías, webs y ecommerce, mantenimiento, redes sociales, SEO, estrategia y Packs Dos Studio con precio, alcance y compromiso cerrados. Agencia de marketing digital en Barcelona.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios paquetizados · Dos Studio",
    description:
      "Qué ofrecemos y cuánto cuesta: servicios de marketing digital con precio y alcance cerrados antes de empezar.",
    url: "/servicios",
  },
};

const navItems = [
  ...categories.map((c) => ({ id: c.id, label: c.navLabel, number: c.number })),
  { id: "packs", label: "Packs Dos Studio", number: "07" },
];

const facts = [
  { title: "Alcance cerrado", text: "Cada servicio tiene un código y un alcance definido." },
  { title: "Precio conocido", text: "Sabéis cuánto cuesta antes de empezar." },
  { title: "Compromiso claro", text: "Permanencia indicada en cada plan." },
];

function OfferCatalogJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Servicios paquetizados Dos Studio",
    url: `${siteUrl}/servicios`,
    itemListElement: allPlans.map((plan) => ({
      "@type": "Offer",
      sku: plan.code,
      name: plan.name,
      description: plan.description,
      price: plan.price.replace(/[^\d]/g, ""),
      priceCurrency: "EUR",
      seller: { "@type": "Organization", name: "Dos Studio" },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHero
          eyebrow="Servicios paquetizados"
          title={
            <>
              Qué hacemos y cuánto cuesta,{" "}
              <span className="text-violet-light">antes de empezar.</span>
            </>
          }
          intro={structure.intro}
          aside={
            <ul className="grid gap-3">
              {facts.map((f) => (
                <li
                  key={f.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-sm"
                >
                  <span className="font-display font-bold">{f.title}</span>
                  <span className="mt-1 block text-sm text-white/65">{f.text}</span>
                </li>
              ))}
            </ul>
          }
        >
          <div className="flex flex-wrap gap-3">
            <a href="#packs" className="btn-light">
              Ver Packs Dos Studio <span aria-hidden="true">→</span>
            </a>
            <Link href="/portfolio" className="btn-ghost-light">
              Portfolio completo
            </Link>
          </div>
        </PageHero>

        <div className="h-3 md:h-4" />
        <SectionNav items={navItems} label="Categorías de servicios" />

        {/* Tipos de cuota */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="grid gap-4 md:grid-cols-3">
              {structure.fees.map((fee) => (
                <div key={fee.type} className="rounded-3xl bg-[#F7F5FF] p-6 md:p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-violet">
                    Cuota {fee.type.toLowerCase()}
                  </span>
                  <p className="mt-3 font-display text-lg font-bold leading-snug">{fee.definition}</p>
                  <p className="mt-2 text-sm text-graphite">{fee.appliesTo}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-graphite">
              Todos los precios son sin IVA. Cualquier trabajo fuera del alcance de
              un servicio se presupuesta antes de empezar.
            </p>
          </Container>
        </section>

        {categories.map((category, ci) => (
          <section
            key={category.id}
            id={category.id}
            className={`py-20 md:py-28 ${ci % 2 === 0 ? "bg-[#F7F5FF]" : ""}`}
          >
            <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr]">
              <Reveal className="lg:sticky lg:top-44 lg:self-start">
                <span className="font-mono text-sm font-semibold text-violet">
                  {category.number} — {category.navLabel.toUpperCase()}
                </span>
                <h2 className="section-title-sm mt-4">{category.title}</h2>
                <p className="mt-5 leading-relaxed text-graphite">{category.intro}</p>

                {category.includes.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                      {category.includesTitle}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {category.includes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-ink">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {category.problems.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                      Qué problema resuelve
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {category.problems.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs text-graphite"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>

              <div className="min-w-0 space-y-12">
                {category.groups.map((group) => (
                  <div key={group.title}>
                    {category.groups.length > 1 && (
                      <h3 className="mb-5 font-display text-lg font-bold">{group.title}</h3>
                    )}
                    <Reveal>
                      {/* Móvil: carrusel deslizable. Tablet y escritorio: cuadrícula. */}
                      <ul
                        aria-label={group.title}
                        className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 pt-2 sm:pt-0 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
                      >
                        {group.plans.map((plan) => (
                          <li key={plan.code} className="w-[85%] shrink-0 snap-center sm:w-auto">
                            <PlanCard plan={plan} />
                          </li>
                        ))}
                      </ul>
                      {group.plans.length > 1 && (
                        <p className="mt-3 text-xs text-graphite sm:hidden" aria-hidden="true">
                          Desliza para ver los {group.plans.length} planes →
                        </p>
                      )}
                    </Reveal>
                  </div>
                ))}

                {category.id === "estrategia" && (
                  <div>
                    <h3 className="font-display text-lg font-bold">{hourly.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-graphite">{hourly.intro}</p>
                    <div className="mt-5 flex flex-col justify-between gap-4 rounded-[1.75rem] border border-dashed border-violet/40 bg-paper p-7 sm:flex-row sm:items-center">
                      <div>
                        <span className="font-mono text-[11px] font-semibold tracking-wider text-violet">
                          {hourly.plan.code}
                        </span>
                        <p className="mt-1 font-display text-lg font-bold">{hourly.plan.name}</p>
                        <p className="mt-1 text-sm text-graphite">
                          {hourly.plan.description} {hourly.plan.fee} · {hourly.plan.commitment}.
                        </p>
                      </div>
                      <div className="shrink-0 font-display text-3xl font-bold">
                        {hourly.plan.price}
                        <span className="ml-1 text-sm font-normal text-graphite">{priceSuffix(hourly.plan)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {(category.callout || category.notes.length > 0) && (
                  <div className="space-y-4">
                    {category.callout && <Callout {...category.callout} />}
                    {category.notes.length > 0 && (
                      <ul className="space-y-1.5 text-xs leading-relaxed text-graphite">
                        {category.notes.map((n) => (
                          <li key={n}>* {n}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </Container>
          </section>
        ))}

        {/* 07 — Packs */}
        <section id="packs" className="px-3 md:px-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-midnight py-20 text-white md:rounded-[2.5rem] md:py-28">
            <Container>
              <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <span className="font-mono text-sm font-semibold text-violet-light">07 — PACKS DOS STUDIO</span>
                  <h2 className="section-title mt-4">
                    Web, SEO y redes, <span className="text-violet-light">en una sola cuota.</span>
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-white/70">{packsIntro.intro}</p>
              </Reveal>

              <div className="mt-14 grid gap-4 lg:grid-cols-3">
                {packs.map((pack, i) => (
                  <Reveal key={pack.code} delay={i * 0.08}>
                    <PackCard pack={pack} emphasis={i === 1} />
                  </Reveal>
                ))}
              </div>

              <div className="mt-16">
                <h3 className="mb-6 hidden font-display text-xl font-bold md:block">Versiones de los packs</h3>
                <PacksComparison />
              </div>

              <p className="mt-8 text-sm text-white/60">* {packsIntro.note}</p>
            </Container>
          </div>
        </section>

        {/* Condiciones */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading eyebrow="Condiciones" title="Condiciones generales" size="sm" />
              <Link href="/portfolio#condiciones" className="link-arrow">
                Ver condiciones en el Portfolio <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {conditions.map((block) => (
                <div key={block.title} className="rounded-3xl border border-line p-6">
                  <h3 className="font-display text-base font-bold">{block.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-graphite">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <CtaBanner
          eyebrow="¿Por dónde empezar?"
          title={
            <>
              ¿No sabes qué plan encaja<span className="text-violet-light">?</span>
            </>
          }
          text="Empezamos con una llamada de 30 minutos para entender tu negocio y decirte por dónde empezaríamos."
          primary={{ href: "/contacto", label: "Agendar una llamada" }}
          secondary={{ href: "/portfolio", label: "Ver Portfolio completo" }}
        />
        <OfferCatalogJsonLd />
      </main>
      <Footer />
    </>
  );
}
