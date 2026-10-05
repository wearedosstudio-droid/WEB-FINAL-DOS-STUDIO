import Link from "next/link";
import Container from "./ui/Container";

type CtaBannerProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  text?: React.ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

/** CTA final compartido. Por defecto usa el cierre "Hablemos." del Portfolio 2026. */
export default function CtaBanner({
  eyebrow = "Empecemos",
  title = (
    <>
      Hablemos<span className="text-violet-light">.</span>
    </>
  ),
  text = "Empezamos con una llamada de 30 minutos para entender tu negocio y decirte por dónde empezaríamos.",
  primary = { href: "/contacto", label: "Agendar una llamada" },
  secondary = { href: "mailto:wearedosstudio@gmail.com", label: "wearedosstudio@gmail.com" },
}: CtaBannerProps) {
  return (
    <section className="px-3 pb-3 md:px-4 md:pb-4">
      <div className="bg-brand-glow relative overflow-hidden rounded-[2rem] py-24 text-white md:rounded-[2.5rem] md:py-32">
        <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_80%_at_50%_50%,black,transparent)]" />
        <Container className="relative flex flex-col items-center text-center">
          <span className="eyebrow-dark">{eyebrow}</span>
          <h2 className="mt-6 max-w-3xl text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            {title}
          </h2>
          <p className="mt-6 max-w-lg text-lg text-white/75">{text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href={primary.href} className="btn-light">
              {primary.label} <span aria-hidden="true">→</span>
            </Link>
            {secondary &&
              (secondary.href.startsWith("/") ? (
                <Link href={secondary.href} className="btn-ghost-light">
                  {secondary.label}
                </Link>
              ) : (
                <a href={secondary.href} className="btn-ghost-light">
                  {secondary.label}
                </a>
              ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
