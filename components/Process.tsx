import Link from "next/link";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { processSteps } from "@/lib/process";

export default function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Metodología</span>
            <h2 className="section-title mt-6">
              Cómo trabajamos, de inicio a resultado
            </h2>
          </div>
          <Link href="/proceso" className="btn-primary self-start md:self-auto">
            Ver el proceso completo <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col rounded-[1.75rem] border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-violet hover:bg-violet hover:text-white">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-display text-4xl font-bold text-violet transition-colors group-hover:text-white">
                    {step.number}
                  </span>
                  <span className="rounded-full bg-violet-soft px-3 py-1 text-[11px] font-semibold text-violet transition-colors group-hover:bg-white/15 group-hover:text-white">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite transition-colors group-hover:text-white/80">
                  {step.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
