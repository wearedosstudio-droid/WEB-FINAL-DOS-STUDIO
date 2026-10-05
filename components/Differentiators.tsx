import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

/**
 * Diferenciación basada únicamente en cómo trabaja Dos Studio según el
 * Portfolio 2026 (sin clientes, métricas ni premios inventados).
 */
const items = [
  {
    title: "Precio y alcance cerrados",
    text: "Todos los servicios están paquetizados: código, alcance, precio y condiciones. Sabes qué contratas y cuánto cuesta antes de empezar.",
  },
  {
    title: "Un único interlocutor",
    text: "Hablas con los socios que ejecutan tu proyecto. Sin capas de intermediarios entre tú y el trabajo.",
  },
  {
    title: "Diagnóstico antes de proponer",
    text: "Empezamos entendiendo qué falla. Y si contratas un servicio en los 60 días siguientes, la auditoría se descuenta del primer pago.",
  },
  {
    title: "Compromisos honestos",
    text: "Solo pedimos permanencia donde el trabajo la necesita: el SEO es acumulativo y los primeros resultados suelen verse a partir del tercer mes.",
  },
  {
    title: "Todo es tuyo",
    text: "La web, los contenidos y las cuentas son del cliente una vez abonados. Los accesos se entregan al finalizar el proyecto.",
  },
  {
    title: "Decisiones con datos",
    text: "Informes mensuales de resultados y, en estrategia, un cuadro de mando con los KPI de tu negocio.",
  },
];

export default function Differentiators() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <span className="eyebrow">Por qué Dos Studio</span>
            <h2 className="section-title mt-6">
              Lo que nos diferencia no es qué hacemos. <span className="text-violet">Es cómo.</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-graphite">
            Transparencia, compromiso y una sola cabeza estratégica detrás de
            todos tus canales.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div
                className={`group relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1 ${
                  i === 0
                    ? "bg-midnight text-white"
                    : "border border-line bg-paper hover:border-violet/40 hover:shadow-[0_30px_70px_-45px_rgba(27,14,102,0.55)]"
                }`}
              >
                <svg
                  viewBox="0 0 100 100"
                  className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 transition-transform duration-700 group-hover:rotate-90 ${
                    i === 0 ? "text-violet/40" : "text-violet-soft"
                  }`}
                  aria-hidden="true"
                >
                  <path d="M0 0 H100 A100 100 0 0 1 0 100 Z" fill="currentColor" />
                </svg>
                <span className={`font-mono text-xs font-semibold ${i === 0 ? "text-violet-light" : "text-violet"}`}>
                  0{i + 1}
                </span>
                <div className="mt-10">
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "text-white/70" : "text-graphite"}`}>
                    {item.text}
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
