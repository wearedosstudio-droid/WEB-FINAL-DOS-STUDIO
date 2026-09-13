import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import { processSteps } from "@/lib/process";

export const metadata: Metadata = {
  title: "Proceso de trabajo",
  description:
    "Diagnóstico, estrategia, producción, medición y escalado: el proceso de cinco etapas que aplicamos con cada cliente.",
};

export default function ProcesoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line py-20">
          <Container>
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-violet">Proceso</span>
              <h1 className="text-balance mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Cinco etapas, el mismo criterio con cada cliente
              </h1>
              <p className="mt-6 text-lg text-graphite">
                No improvisamos por cuenta. Cada proyecto pasa por el mismo
                proceso — lo que cambia es el contenido de cada etapa, nunca
                la disciplina detrás.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="space-y-16">
              {processSteps.map((step, i) => (
                <div
                  key={step.number}
                  className="grid gap-8 border-t border-line pt-12 first:border-t-0 first:pt-0 lg:grid-cols-[auto_1fr_1fr]"
                >
                  <div className="flex items-start gap-4 lg:flex-col lg:gap-2">
                    <span className="font-display text-4xl font-bold text-violet">
                      {step.number}
                    </span>
                    <span className="mt-1 inline-block rounded-full bg-violet-soft px-3 py-1 text-xs font-medium text-violet lg:mt-2">
                      {step.duration}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold tracking-tight">
                      {step.title}
                    </h2>
                    <p className="mt-4 max-w-md text-graphite">
                      {step.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line p-6">
                    <h3 className="text-sm font-semibold text-ink">
                      Entregables de esta etapa
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {step.deliverables.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-graphite">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-line bg-ink py-20 text-white">
          <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                ¿Listo para empezar por el diagnóstico?
              </h2>
              <p className="mt-3 max-w-md text-white/70">
                La primera etapa no tiene costo: es la conversación donde
                entendemos si encajamos.
              </p>
            </div>
            <Link
              href="/contacto"
              className="whitespace-nowrap rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Agendar diagnóstico
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
