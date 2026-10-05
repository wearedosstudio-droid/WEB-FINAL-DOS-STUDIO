import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const flow = [
  { label: "Estrategia", text: "Define objetivos, prioridades y presupuesto." },
  { label: "Web", text: "Convierte visitas en contactos o ventas." },
  { label: "SEO y contenido", text: "Atraen a quien ya busca lo que haces." },
  { label: "Marketing", text: "Activa y mantiene la relación con tu audiencia." },
  { label: "Datos", text: "Dicen qué funciona y dónde invertir." },
];

/** Propuesta de valor: el ecosistema como un sistema, no como acciones sueltas. */
export default function ValueProposition() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <Reveal>
          <span className="eyebrow">Propuesta de valor</span>
          <p className="mt-8 max-w-5xl text-balance font-display text-3xl font-semibold leading-[1.18] tracking-tight text-graphite/70 md:text-5xl md:leading-[1.12]">
            No vendemos acciones sueltas.{" "}
            <span className="text-ink">
              Diseñamos el sistema digital de tu empresa
            </span>{" "}
            para que cada canal empuje al siguiente y{" "}
            <span className="text-violet">el crecimiento sea consecuencia, no casualidad.</span>
          </p>
        </Reveal>

        <ol className="mt-20 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-6">
          {flow.map((step, i) => (
            <li key={step.label} className="bg-paper">
              <Reveal delay={i * 0.06} className="flex h-full flex-col p-6 md:p-7">
                <span className="font-mono text-xs font-semibold text-violet">0{i + 1}</span>
                <span className="mt-8 font-display text-lg font-bold">{step.label}</span>
                <span className="mt-2 text-sm leading-relaxed text-graphite">{step.text}</span>
              </Reveal>
            </li>
          ))}
          <li className="bg-violet text-white sm:col-span-2 lg:col-span-1">
            <Reveal delay={0.32} className="flex h-full flex-col p-6 md:p-7">
              <span className="font-mono text-xs font-semibold text-white/70">=</span>
              <span className="mt-8 font-display text-lg font-bold">Crecimiento</span>
              <span className="mt-2 text-sm leading-relaxed text-white/80">
                Un ecosistema que se mide, se ajusta y escala.
              </span>
            </Reveal>
          </li>
        </ol>
      </Container>
    </section>
  );
}
