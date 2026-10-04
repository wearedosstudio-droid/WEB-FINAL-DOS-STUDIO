import Link from "next/link";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const figures = [
  { value: "8", label: "disciplinas de marketing digital bajo un mismo equipo" },
  { value: "5", label: "etapas de trabajo, del diagnóstico a la optimización" },
  { value: "<24h", label: "tiempo de respuesta a cada nueva consulta" },
  { value: "2", label: "socios fundadores al frente de cada cuenta" },
];

export default function About() {
  return (
    <section id="nosotros" className="px-3 md:px-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-violet py-24 text-white md:rounded-[2.5rem] md:py-32">
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 text-white/[0.07]"
          aria-hidden="true"
        >
          <path d="M0 0 H100 A100 100 0 0 1 0 100 Z" fill="currentColor" />
        </svg>
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] text-violet-deep/40"
          aria-hidden="true"
        >
          <path d="M0 0 H100 A100 100 0 0 1 0 100 Z" fill="currentColor" transform="rotate(180 50 50)" />
        </svg>

        <Container className="relative grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <span className="eyebrow-dark">Nosotros</span>
            <h2 className="section-title mt-6">
              Un estudio pequeño, a propósito.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
              Dos Studio nace en 2026 en Barcelona. Dos socios que cubren
              estrategia, diseño y desarrollo, y que hablan directamente
              contigo: sin capas de intermediarios.
            </p>
            <Link href="/nosotros" className="btn-light mt-10">
              Conoce al equipo <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {figures.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
                  <div className="font-display text-5xl font-bold tracking-tight md:text-6xl">
                    {f.value}
                  </div>
                  <p className="mt-3 text-sm leading-snug text-white/75">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
