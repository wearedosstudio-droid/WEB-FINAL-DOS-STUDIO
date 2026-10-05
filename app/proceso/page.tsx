import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { processSteps } from "@/lib/process";

export const metadata: Metadata = {
  title: "Proceso de trabajo y metodología",
  alternates: { canonical: "/proceso" },
  description:
    "Diagnóstico, estrategia, producción, medición y escalado: el proceso de cinco etapas que aplicamos con cada cliente.",
};

export default function ProcesoPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHero
          eyebrow="Sistema de trabajo"
          title={
            <>
              Cinco etapas. <span className="text-violet-light">El mismo criterio con cada cliente.</span>
            </>
          }
          intro="No improvisamos por cuenta. Cada proyecto pasa por el mismo proceso: lo que cambia es el contenido de cada etapa, nunca la disciplina detrás."
        />

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

        <CtaBanner
          eyebrow="Etapa 01"
          title={
            <>
              Empecemos por el diagnóstico<span className="text-violet-light">.</span>
            </>
          }
          text="Una llamada de 30 minutos o, si necesitas un análisis a fondo, una auditoría: descontable si contratas un servicio en los 60 días siguientes."
          primary={{ href: "/contacto", label: "Agendar una llamada" }}
          secondary={{ href: "/servicios#auditorias", label: "Ver auditorías" }}
        />
      </main>
      <Footer />
    </>
  );
}
