import Link from "next/link";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const facts = [
  { value: "2", label: "socios fundadores al frente de cada proyecto" },
  { value: "1", label: "único interlocutor para todos tus canales" },
  { value: "BCN", label: "estudio con base en Barcelona" },
  { value: "2026", label: "año de fundación" },
];

export default function About() {
  return (
    <section id="nosotros" className="px-3 md:px-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-violet py-24 text-white md:rounded-[2.5rem] md:py-32">
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] text-violet-deep/40"
          aria-hidden="true"
        >
          <path d="M0 0 H100 A100 100 0 0 1 0 100 Z" fill="currentColor" transform="rotate(180 50 50)" />
        </svg>

        <Container className="relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal>
            <span className="eyebrow-dark">Dos Studio</span>
            <h2 className="section-title mt-6">
              Un estudio pequeño, a propósito. Con visión de agencia completa.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85">
              Dos Studio nace en 2026 en Barcelona. Dos socios que cubren
              estrategia, diseño, desarrollo y marketing, y que trabajan
              directamente contigo. Sin capas, sin traspasos de información y
              con una sola visión de tu negocio.
            </p>
            <Link href="/nosotros" className="btn-light mt-10">
              Conoce al equipo <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <dl className="grid grid-cols-2 gap-4">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-white/15 bg-white/[0.07] p-6 md:p-8">
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="block font-display text-5xl font-bold tracking-tight md:text-6xl">{f.value}</span>
                    <span className="mt-3 block text-sm leading-snug text-white/80">{f.label}</span>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
