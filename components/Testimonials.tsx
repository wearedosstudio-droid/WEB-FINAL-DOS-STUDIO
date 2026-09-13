import Container from "./ui/Container";

const testimonials = [
  {
    quote:
      "Dos Studio ordenó en tres meses lo que llevábamos dos años intentando resolver solos: saber exactamente qué canal nos traía clientes reales.",
    name: "Marina Costa",
    role: "Fundadora, Cala Studio",
  },
  {
    quote:
      "Lo que más valoro es que discuten las decisiones conmigo con números encima de la mesa. No es una agencia que solo entrega piezas.",
    name: "Julián Reyes",
    role: "Director comercial, Nortia Finance",
  },
  {
    quote:
      "Pasamos de depender de un solo canal a tener un sistema de adquisición que no se cae si sube el costo por clic en uno de ellos.",
    name: "Paula Ibáñez",
    role: "CEO, Rumbo Salud",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="border-t border-line py-24">
      <Container>
        <div className="max-w-lg">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Lo que dicen quienes ya trabajan con nosotros
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-line p-8"
            >
              <blockquote className="text-[1.05rem] leading-relaxed text-ink">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-soft font-display text-sm font-semibold text-violet">
                  {initials(t.name)}
                </span>
                <div>
                  <div className="text-sm font-medium text-ink">{t.name}</div>
                  <div className="text-xs text-graphite">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
