import Link from "next/link";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

/** Problemas reales que resuelve cada línea de servicio (Portfolio 2026). */
const problems = [
  { problem: "Una web que no genera contactos", answer: "Web & Ecommerce", href: "/servicios#web-ecommerce" },
  { problem: "No aparecer en Google cuando te buscan", answer: "SEO", href: "/servicios#seo" },
  { problem: "Publicar sin estrategia ni constancia", answer: "Redes sociales", href: "/servicios#redes-sociales" },
  { problem: "Acciones sueltas sin un plan común", answer: "Estrategia digital", href: "/servicios#estrategia" },
  { problem: "Invertir en marketing sin saber qué funciona", answer: "Auditorías", href: "/servicios#auditorias" },
  { problem: "Webs que se degradan con el tiempo", answer: "Mantenimiento web", href: "/servicios#mantenimiento" },
];

export default function Problems() {
  return (
    <section className="bg-[#F7F5FF] py-24 md:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <span className="eyebrow">El problema</span>
          <h2 className="section-title mt-6">
            Casi nunca falla un canal. <span className="text-violet">Falta un sistema.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-graphite">
            La mayoría de empresas no tiene un problema de herramientas, sino de
            dirección: proveedores sin coordinar, canales que no se hablan y
            decisiones sin datos.
          </p>
          <div className="mt-10 rounded-3xl bg-midnight p-7 text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-violet-light">
              La oportunidad
            </span>
            <p className="mt-3 font-display text-xl font-bold leading-snug">
              Web, SEO y redes funcionan mejor juntos.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Con una estrategia común y un único interlocutor, cada acción suma a
              la siguiente en lugar de competir por presupuesto.
            </p>
          </div>
        </Reveal>

        <ul className="divide-y divide-line border-y border-line">
          {problems.map((item, i) => (
            <li key={item.problem}>
              <Reveal delay={i * 0.05}>
                <Link
                  href={item.href}
                  className="group grid gap-3 py-7 transition-colors sm:grid-cols-[1fr_auto] sm:items-center md:py-8"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="font-mono text-xs text-graphite">0{i + 1}</span>
                    <span className="font-display text-xl font-bold leading-snug transition-colors duration-300 group-hover:text-violet md:text-2xl">
                      {item.problem}
                    </span>
                  </span>
                  <span className="ml-9 inline-flex items-center gap-2 self-start rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink transition-all duration-300 group-hover:border-violet group-hover:bg-violet group-hover:text-white sm:ml-0 sm:self-auto">
                    {item.answer}
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
