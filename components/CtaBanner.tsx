import Link from "next/link";
import Container from "./ui/Container";

export default function CtaBanner() {
  return (
    <section className="px-3 pb-3 md:px-4 md:pb-4">
      <div className="bg-brand-glow relative overflow-hidden rounded-[2rem] py-24 text-white md:rounded-[2.5rem] md:py-28">
        <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_80%_at_50%_50%,black,transparent)]" />
        <Container className="relative flex flex-col items-center text-center">
          <span className="eyebrow-dark">Empecemos</span>
          <h2 className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Hablemos de tu próximo trimestre
          </h2>
          <p className="mt-6 max-w-lg text-lg text-white/75">
            Cuéntanos en qué está tu marca hoy y te respondemos en menos de 24
            horas hábiles con los próximos pasos.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="btn-light">
              Empezar un proyecto <span aria-hidden="true">→</span>
            </Link>
            <a href="mailto:wearedosstudio@gmail.com" className="btn-ghost-light">
              wearedosstudio@gmail.com
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
