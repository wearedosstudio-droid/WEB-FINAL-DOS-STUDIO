"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./ui/Container";
import ServiceIcon from "./ui/ServiceIcon";
import Reveal from "./ui/Reveal";
import { services } from "@/lib/services";
import { categories, priceSuffix, pricedCategoryBySlug, startingPrice } from "@/lib/portfolio";

export default function Services() {
  const [active, setActive] = useState(0);
  const service = services[active];
  const categoryId = pricedCategoryBySlug[service.slug];
  const fromPlan = categoryId ? startingPrice(categoryId) : undefined;
  const category = categories.find((c) => c.id === categoryId);

  return (
    <section id="servicios" className="bg-[#F7F5FF] py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Servicios</span>
            <h2 className="section-title mt-6">
              Ocho disciplinas, <span className="text-violet">un mismo sistema.</span>
            </h2>
          </div>
          <p className="max-w-sm text-graphite">
            Contrátalas por separado o combinadas, según en qué punto esté tu
            negocio. Todas responden a la misma estrategia.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[340px_1fr]">
          <div
            role="tablist"
            aria-label="Servicios"
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.slug}
                  role="tab"
                  id={`tab-${s.slug}`}
                  aria-selected={isActive}
                  aria-controls="service-panel"
                  onClick={() => setActive(i)}
                  className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-sm font-semibold transition-all duration-300 lg:px-5 lg:py-4 ${
                    isActive
                      ? "bg-violet text-white shadow-[0_16px_40px_-18px_rgba(84,48,255,0.9)]"
                      : "bg-paper text-ink hover:bg-violet-soft"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      isActive ? "bg-white/15 text-white" : "bg-violet-soft text-violet"
                    }`}
                  >
                    <ServiceIcon slug={s.slug} className="h-4 w-4" />
                  </span>
                  <span className="whitespace-nowrap lg:whitespace-normal">{s.title}</span>
                  <span
                    aria-hidden="true"
                    className={`ml-auto hidden transition-transform lg:inline ${
                      isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`tab-${service.slug}`}
            className="relative overflow-hidden rounded-[2rem] bg-paper p-8 shadow-[0_30px_80px_-50px_rgba(27,14,102,0.5)] md:p-12"
          >
            <svg
              viewBox="0 0 100 100"
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 text-violet-soft"
              aria-hidden="true"
            >
              <path d="M0 0 H100 A100 100 0 0 1 0 100 Z" fill="currentColor" transform="rotate(180 50 50)" />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid gap-10 md:grid-cols-[1.3fr_0.7fr]"
              >
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet text-white">
                    <ServiceIcon slug={service.slug} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-8 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                    {service.tagline}
                  </h3>
                  <p className="mt-5 leading-relaxed text-graphite">
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {service.deliverables.slice(0, 4).map((d) => (
                      <li key={d} className="flex gap-3 text-sm text-ink">
                        <svg
                          viewBox="0 0 20 20"
                          className="mt-0.5 h-5 w-5 shrink-0 text-violet"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path d="m5 10.5 3.2 3L15 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/servicios/${service.slug}`} className="btn-primary mt-10">
                    Descubre {service.title.toLowerCase()} <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="flex flex-col gap-4 self-start">
                  <div className="rounded-3xl bg-midnight p-7 text-white">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-violet-light">
                      Cómo lo trabajamos
                    </span>
                    <ol className="mt-5 space-y-4">
                      {service.steps.map((step, i) => (
                        <li key={step.title} className="flex gap-3">
                          <span className="font-mono text-xs text-white/50">0{i + 1}</span>
                          <span className="text-sm font-semibold">{step.title}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  {fromPlan && category ? (
                    <Link
                      href={`/servicios#${category.id}`}
                      className="group rounded-3xl border border-line p-7 transition-colors hover:border-violet"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-violet">
                        Servicio paquetizado
                      </span>
                      <span className="mt-3 block text-sm text-graphite">Desde</span>
                      <span className="block font-display text-3xl font-bold">
                        {fromPlan.price}
                        <span className="ml-1 text-sm font-normal text-graphite">{priceSuffix(fromPlan)}</span>
                      </span>
                      <span className="link-arrow mt-4">
                        Ver planes <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  ) : (
                    <div className="rounded-3xl border border-line p-7">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-violet">
                        Ideal para
                      </span>
                      <p className="mt-3 text-sm leading-relaxed text-graphite">{service.idealFor}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
