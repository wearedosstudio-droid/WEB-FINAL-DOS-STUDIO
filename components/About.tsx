import Container from "./ui/Container";
import Arc from "./ui/Arc";

const values = [
  {
    title: "Decisiones con datos",
    description:
      "Cada recomendación nace de un número, no de una tendencia. Medimos antes, durante y después.",
  },
  {
    title: "Un solo interlocutor",
    description:
      "Un estratega acompaña tu cuenta de punta a punta. Nada se pierde entre equipos ni entre herramientas.",
  },
  {
    title: "Diseño que vende",
    description:
      "La estética siempre está al servicio de un objetivo de negocio, no al revés.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden border-t border-line py-24">
      <Arc
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-[0.06]"
        rotate={180}
      />
      <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Somos el equipo de marketing que tu marca contrataría internamente,
            sin tener que armarlo.
          </h2>
          <p className="mt-6 max-w-md text-graphite">
            Dos Studio nació en 2020 de la unión de dos disciplinas que casi
            nunca conviven bien: la estrategia de negocio y el diseño de
            marca. Hoy somos un equipo de 14 personas entre estrategas,
            diseñadores, redactores y especialistas en performance,
            trabajando para marcas de Latinoamérica y España.
          </p>
          <p className="mt-4 max-w-md text-graphite">
            No vendemos horas ni entregables sueltos: construimos un sistema
            de marketing que se ajusta cada mes según lo que los datos van
            mostrando.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-1">
          {values.map((value) => (
            <div key={value.title} className="bg-paper p-8">
              <h3 className="font-display text-lg font-semibold">
                {value.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-graphite">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
