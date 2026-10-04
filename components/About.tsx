import Link from "next/link";
import Container from "./ui/Container";
import Arc from "./ui/Arc";

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden border-t border-line py-24">
      <Arc
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-[0.06]"
        rotate={180}
      />
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Un estudio pequeño, a propósito.
          </h2>
          <p className="mt-6 max-w-md text-graphite">
            Dos Studio nace en 2026 en Barcelona, fundado por dos socios que
            cubren, entre los dos, estrategia, diseño y desarrollo.
            Mantenemos el equipo pequeño a propósito: significa que hablas
            directamente con quien ejecuta tu proyecto, no con una capa de
            intermediarios.
          </p>
          <Link
            href="/nosotros"
            className="mt-6 inline-block text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-violet"
          >
            Conoce al equipo y cómo pensamos
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          <div className="bg-paper p-8">
            <div className="font-display text-2xl font-bold">2</div>
            <p className="mt-2 text-xs leading-relaxed text-graphite">
              personas en el equipo
            </p>
          </div>
          <div className="bg-paper p-8">
            <div className="font-display text-2xl font-bold">2026</div>
            <p className="mt-2 text-xs leading-relaxed text-graphite">
              año de fundación
            </p>
          </div>
          <div className="bg-paper p-8">
            <div className="font-display text-2xl font-bold">BCN</div>
            <p className="mt-2 text-xs leading-relaxed text-graphite">
              sede en Barcelona
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
