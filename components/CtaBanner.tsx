import Link from "next/link";
import Container from "./ui/Container";

export default function CtaBanner() {
  return (
    <section className="border-t border-line bg-ink py-20 text-white">
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Hablemos de tu próximo trimestre
          </h2>
          <p className="mt-3 max-w-md text-white/70">
            Cuéntanos en qué está tu marca hoy y te respondemos en menos de
            24 horas hábiles con los próximos pasos.
          </p>
        </div>
        <Link
          href="/contacto"
          className="whitespace-nowrap rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
        >
          Empezar un proyecto
        </Link>
      </Container>
    </section>
  );
}
