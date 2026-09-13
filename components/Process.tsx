import Container from "./ui/Container";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Auditamos tus canales actuales, tu competencia y tu histórico de datos para entender de dónde parte el proyecto de verdad.",
  },
  {
    number: "02",
    title: "Estrategia",
    description:
      "Definimos objetivos trimestrales, prioridades por canal y los indicadores que vamos a revisar cada mes contigo.",
  },
  {
    number: "03",
    title: "Producción",
    description:
      "Diseño, contenido, campañas y automatizaciones se ejecutan bajo un mismo calendario, sin piezas sueltas.",
  },
  {
    number: "04",
    title: "Medición",
    description:
      "Reportamos resultados en lenguaje de negocio, no solo de métricas, y ajustamos lo que no está funcionando.",
  },
  {
    number: "05",
    title: "Escalado",
    description:
      "Una vez el canal es rentable, invertimos más presupuesto y sumamos nuevos canales con el mismo criterio.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="border-t border-line py-24">
      <Container>
        <div className="max-w-lg">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Cómo trabajamos, de inicio a resultado
          </h2>
          <p className="mt-4 text-graphite">
            El mismo proceso de cinco etapas para cada cliente, adaptado en
            contenido pero no en disciplina.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-violet">
                  {step.number}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-line md:block" />
                )}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
