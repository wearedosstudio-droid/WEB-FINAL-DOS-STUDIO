import Link from "next/link";
import Container from "./ui/Container";
import { processSteps } from "@/lib/process";

export default function Process() {
  return (
    <section id="proceso" className="border-t border-line py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-lg">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              Cómo trabajamos, de inicio a resultado
            </h2>
            <p className="mt-4 text-graphite">
              El mismo proceso de cinco etapas para cada cliente, adaptado en
              contenido pero no en disciplina.
            </p>
          </div>
          <Link
            href="/proceso"
            className="text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-violet"
          >
            Ver el proceso completo
          </Link>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-violet">
                  {step.number}
                </span>
                {i < processSteps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-line md:block" />
                )}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                {step.summary}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
