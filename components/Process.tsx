import Link from "next/link";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { processSteps } from "@/lib/process";

/** Metodología: titular fijo a la izquierda y etapas en línea de tiempo. */
export default function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <span className="eyebrow">Sistema de trabajo</span>
          <h2 className="section-title mt-6">
            Un método, <span className="text-violet">cinco etapas.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-graphite">
            El mismo sistema para cada cliente: adaptado en contenido, nunca en
            disciplina. Empieza siempre por un diagnóstico y termina en lo que
            de verdad importa, escalar lo que funciona.
          </p>
          <Link href="/proceso" className="btn-primary mt-10">
            Ver el proceso completo <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <ol className="relative">
          <span className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-line" aria-hidden="true" />
          {processSteps.map((step, i) => (
            <li key={step.number} className="relative pb-6 last:pb-0">
              <Reveal delay={i * 0.06}>
                <div className="group flex gap-6">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper font-mono text-xs font-semibold text-violet transition-colors duration-300 group-hover:border-violet group-hover:bg-violet group-hover:text-white">
                    {step.number}
                  </span>
                  <div className="flex-1 rounded-[1.5rem] border border-line p-6 transition-all duration-500 group-hover:border-violet/40 group-hover:shadow-[0_24px_60px_-40px_rgba(27,14,102,0.55)] md:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-bold">{step.title}</h3>
                      <span className="rounded-full bg-violet-soft px-3 py-1 text-xs font-semibold text-violet">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-graphite">{step.summary}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
