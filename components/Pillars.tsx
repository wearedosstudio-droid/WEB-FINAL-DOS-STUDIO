import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const pillars = [
  {
    number: "01",
    title: "Estrategia antes que ejecución",
    text: "Cada acción parte de un diagnóstico: objetivos trimestrales, prioridades por canal y KPIs que entiende todo tu equipo.",
    className: "bg-violet-soft text-ink",
    numberClass: "text-violet",
    textClass: "text-graphite",
  },
  {
    number: "02",
    title: "Creatividad que se mide",
    text: "Diseño y contenido con identidad propia, probados en variaciones para saber qué funciona y escalarlo con datos.",
    className: "bg-violet text-white",
    numberClass: "text-white/70",
    textClass: "text-white/75",
  },
  {
    number: "03",
    title: "Performance sin intermediarios",
    text: "Hablas con quien ejecuta tu cuenta. Reportes mensuales en lenguaje de negocio y decisiones rápidas, sin capas.",
    className: "bg-ink text-white",
    numberClass: "text-violet-soft/70",
    textClass: "text-white/70",
  },
];

export default function Pillars() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Por qué Dos Studio</span>
          <h2 className="section-title mt-6">
            Un solo equipo para pensar, crear y{" "}
            <span className="text-violet">hacer crecer</span> tu marca.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 0.1}>
              <div
                className={`group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1.5 ${pillar.className}`}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-10 transition-transform duration-700 group-hover:rotate-90"
                  aria-hidden="true"
                >
                  <path d="M0 0 H100 A100 100 0 0 1 0 100 Z" fill="currentColor" />
                </svg>
                <span className={`font-display text-sm font-bold ${pillar.numberClass}`}>
                  {pillar.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight">
                    {pillar.title}
                  </h3>
                  <p className={`mt-4 text-sm leading-relaxed ${pillar.textClass}`}>
                    {pillar.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
