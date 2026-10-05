import Container from "./Container";

/**
 * Cabecera de página interior sobre la superficie oscura de marca.
 * Reutilizada por /servicios, /portfolio y el resto de páginas internas
 * para que todas compartan la misma entrada visual.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
  aside,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="px-3 md:px-4">
      <div className="bg-brand-glow relative overflow-hidden rounded-[2rem] text-white md:rounded-[2.5rem]">
        <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_80%_at_70%_20%,black,transparent)]" />
        <Container
          className={`relative grid gap-12 py-16 md:py-24 ${aside ? "lg:grid-cols-[1.25fr_0.75fr] lg:items-end" : ""}`}
        >
          <div className="max-w-3xl">
            <span className="eyebrow-dark">{eyebrow}</span>
            <h1 className="mt-7 text-balance font-display text-[2.6rem] font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            {intro && <div className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</div>}
            {children && <div className="mt-10">{children}</div>}
          </div>
          {aside}
        </Container>
      </div>
    </section>
  );
}
