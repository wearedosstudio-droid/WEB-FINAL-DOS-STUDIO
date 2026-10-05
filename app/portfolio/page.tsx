import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import Container from "@/components/ui/Container";
import Wordmark from "@/components/ui/Wordmark";
import Callout from "@/components/ui/Callout";
import PlanTable from "@/components/pricing/PlanTable";
import PacksComparison from "@/components/pricing/PacksComparison";
import SectionNav from "@/components/pricing/SectionNav";
import {
  categories,
  conditions,
  contactClosing,
  hourly,
  packs,
  packsIntro,
  portfolioMeta,
  structure,
  type Plan,
} from "@/lib/portfolio";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio 2026: servicios y planes",
  description:
    "Portfolio 2026 de Dos Studio, agencia de marketing digital en Barcelona: estructura de servicios, auditorías, web y ecommerce, mantenimiento, redes sociales, SEO, estrategia, packs y condiciones.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio 2026 · Dos Studio",
    description: "Nuestra propuesta comercial completa: servicios, planes, tarifas y condiciones.",
    url: "/portfolio",
  },
};

/** Índice del documento, en el mismo orden y numeración de páginas que el PDF. */
const toc = [
  { id: "estructura", label: "Estructura y tipología de servicios", page: 2 },
  ...categories.map((c) => ({ id: c.id, label: c.title, page: c.page })),
  { id: "packs", label: packsIntro.title, page: packsIntro.page },
  { id: "condiciones", label: "Condiciones y contacto", page: 10 },
];

/* ---------- piezas de documento ---------- */

function Sheet({
  id,
  label,
  page,
  title,
  intro,
  children,
}: {
  id: string;
  label: string;
  page: number;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="rounded-[1.75rem] border border-line bg-paper shadow-[0_30px_80px_-60px_rgba(20,18,42,0.5)]"
    >
      <header className="flex items-center justify-between border-b border-line px-6 py-4 md:px-10">
        <Wordmark className="text-base" />
        <span className="text-xs font-medium text-graphite">{label}</span>
      </header>
      <div className="px-6 py-10 md:px-10 md:py-12">
        <h2 id={`${id}-title`} className="section-title-sm">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-2xl leading-relaxed text-graphite">{intro}</p>}
        <div className="mt-10 space-y-10">{children}</div>
      </div>
      <footer className="flex items-center justify-between border-t border-line px-6 py-3 text-[11px] text-graphite md:px-10">
        <span>Dos Studio · {portfolioMeta.title} · {portfolioMeta.vatNote}</span>
        <span className="font-mono">{page}</span>
      </footer>
    </section>
  );
}

/** Tabla simple de texto (tipos de cuota, compromisos…) que se apila en móvil. */
function DocTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: string[];
  rows: string[][];
}) {
  return (
    <div>
      <h3 className="font-display text-lg font-bold">{caption}</h3>
      <div className="mt-4 overflow-hidden rounded-2xl border border-line">
        <table className="hidden w-full text-left text-sm md:table">
          <thead className="bg-midnight text-white">
            <tr>
              {columns.map((c) => (
                <th key={c} scope="col" className="px-5 py-3 font-semibold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((r) => (
              <tr key={r[0]} className="align-top">
                {r.map((cell, i) => (
                  <td key={i} className={`px-5 py-4 ${i === 0 ? "font-semibold text-ink" : "text-graphite"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <dl className="divide-y divide-line md:hidden">
          {rows.map((r) => (
            <div key={r[0]} className="p-5">
              <dt className="font-semibold text-ink">{r[0]}</dt>
              {r.slice(1).map((cell, i) => (
                <dd key={i} className="mt-1.5 text-sm text-graphite">
                  <span className="text-xs font-medium uppercase tracking-wider text-graphite/70">
                    {columns[i + 1]}:
                  </span>{" "}
                  {cell}
                </dd>
              ))}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function IncludesProblems({ title, includes, problems }: { title: string; includes: string[]; problems: string[] }) {
  if (!includes.length) return null;
  return (
    <div className="grid overflow-hidden rounded-2xl border border-line md:grid-cols-2">
      {[
        { heading: title, items: includes },
        { heading: "Qué problema resuelve", items: problems },
      ].map((col, i) => (
        <div key={col.heading} className={i === 1 ? "border-t border-line bg-[#F7F5FF] md:border-l md:border-t-0" : ""}>
          <h3 className="border-b border-line px-5 py-3 text-sm font-semibold text-ink">{col.heading}</h3>
          <ul className="space-y-2.5 px-5 py-4 text-sm text-graphite">
            {col.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${i === 0 ? "bg-violet" : "bg-graphite/40"}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Notes({ notes }: { notes: string[] }) {
  if (!notes.length) return null;
  return (
    <ul className="space-y-1.5 text-xs leading-relaxed text-graphite">
      {notes.map((n) => (
        <li key={n}>* {n}</li>
      ))}
    </ul>
  );
}

const packPlans: Plan[] = packs.map((p) => ({
  code: p.code,
  name: `Pack ${p.name}`,
  description: p.description,
  price: p.price,
  unit: "Mes",
  fee: p.fee,
  commitment: p.commitment,
}));

/* ---------- página ---------- */

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        {/* Portada */}
        <section id="presentacion" className="px-3 md:px-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-midnight text-white md:rounded-[2.5rem]">
            <Container className="grid gap-16 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col justify-between gap-16">
                <div>
                  <span className="eyebrow-dark">Portfolio</span>
                  <h1 className="mt-8">
                    <Wordmark className="block text-6xl leading-none text-[#F6F4EE] sm:text-7xl lg:text-8xl" />
                    <span className="mt-8 block font-display text-4xl font-bold text-violet-light md:text-5xl">
                      {portfolioMeta.title}
                    </span>
                    <span className="mt-3 block text-2xl font-normal text-white/85">{portfolioMeta.subtitle}</span>
                  </h1>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <a href={portfolioMeta.pdfHref} download className="btn-light">
                      Descargar PDF <span aria-hidden="true">↓</span>
                    </a>
                    <Link href="/servicios" className="btn-ghost-light">
                      Servicios paquetizados
                    </Link>
                  </div>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                  {portfolioMeta.tagline}
                </span>
              </div>

              <nav aria-label="Índice del Portfolio" className="self-end">
                <ol className="divide-y divide-dotted divide-white/20 border-y border-dotted border-white/20">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center justify-between gap-4 py-3 text-sm text-white/85 transition-colors hover:text-white"
                      >
                        <span className="transition-transform duration-300 group-hover:translate-x-1">{item.label}</span>
                        <span className="font-mono text-white/50 group-hover:text-violet-light">{item.page}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </Container>
          </div>
        </section>

        <div className="bg-[#F7F5FF] py-16 md:py-24">
          <Container className="grid gap-10 lg:grid-cols-[230px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-graphite">Índice</p>
                <SectionNav
                  variant="toc"
                  label="Índice del Portfolio"
                  items={toc.map((t) => ({ id: t.id, label: t.label, number: String(t.page).padStart(2, "0") }))}
                />
                <a href={portfolioMeta.pdfHref} download className="link-arrow mt-8">
                  Descargar PDF <span aria-hidden="true">↓</span>
                </a>
              </div>
            </aside>

            <div className="min-w-0 space-y-8">
              {/* Estructura */}
              <Sheet
                id="estructura"
                label="Estructura del portfolio"
                page={2}
                title="Estructura y tipología de servicios"
                intro={structure.intro}
              >
                <DocTable
                  caption="1. Tipos de cuota"
                  columns={["Tipo de cuota", "Definición", "Se aplica a"]}
                  rows={structure.fees.map((f) => [f.type, f.definition, f.appliesTo])}
                />
                <DocTable
                  caption="2. Tipos de compromiso"
                  columns={["Compromiso", "Definición", "Por qué"]}
                  rows={structure.commitments.map((c) => [c.type, c.definition, c.why])}
                />
                <div>
                  <h3 className="font-display text-lg font-bold">3. Cómo leer las tablas</h3>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-line">
                    <div className="bg-midnight px-5 py-3 text-center text-sm font-semibold text-white">
                      Ejemplo de tabla de servicio
                    </div>
                    <dl className="grid grid-cols-2 divide-line text-sm sm:grid-cols-3 md:grid-cols-6 md:divide-x">
                      {structure.readingColumns.map((col) => (
                        <div key={col.label} className="border-b border-line p-4 md:border-b-0">
                          <dt className="text-xs font-semibold text-graphite">{col.label}</dt>
                          <dd className="mt-1 font-medium text-ink">{col.example}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <Notes notes={structure.notes} />
              </Sheet>

              {categories.map((category) => (
                <Sheet
                  key={category.id}
                  id={category.id}
                  label={category.navLabel === "Web & Ecommerce" ? "Web y ecommerce" : category.title}
                  page={category.page}
                  title={category.title}
                  intro={category.intro}
                >
                  <IncludesProblems
                    title={category.includesTitle}
                    includes={category.includes}
                    problems={category.problems}
                  />
                  <div className="space-y-6">
                    <h3 className="font-display text-lg font-bold">{category.servicesTitle}</h3>
                    {category.groups.map((group) => (
                      <PlanTable key={group.title} title={group.title} plans={group.plans} />
                    ))}
                  </div>
                  {category.callout && <Callout {...category.callout} />}
                  {category.id === "estrategia" && (
                    <div className="space-y-4">
                      <h3 className="font-display text-lg font-bold">{hourly.title}</h3>
                      <p className="max-w-2xl text-sm leading-relaxed text-graphite">{hourly.intro}</p>
                      <PlanTable title={hourly.groupTitle} plans={[hourly.plan]} />
                    </div>
                  )}
                  <Notes notes={category.notes} />
                </Sheet>
              ))}

              {/* Packs */}
              <Sheet id="packs" label="Packs" page={packsIntro.page} title={packsIntro.title} intro={packsIntro.intro}>
                <div>
                  <h3 className="mb-4 font-display text-lg font-bold">Versiones de los packs</h3>
                  <PacksComparison tone="light" mobileFallback />
                </div>
                <PlanTable title="Packs mensuales" plans={packPlans} />
                <Notes notes={[packsIntro.note]} />
              </Sheet>

              {/* Condiciones y contacto */}
              <Sheet id="condiciones" label="Condiciones y contacto" page={10} title="Condiciones generales">
                <div className="grid gap-4 sm:grid-cols-2">
                  {conditions.map((block) => (
                    <div key={block.title} className="rounded-2xl bg-[#F7F5FF] p-6">
                      <h3 className="font-display text-base font-bold">{block.title}</h3>
                      <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-graphite">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl bg-midnight p-8 text-white md:p-10">
                  <p className="font-display text-4xl font-bold md:text-5xl">
                    {contactClosing.title.replace(".", "")}
                    <span className="text-violet">.</span>
                  </p>
                  <p className="mt-4 max-w-md text-white/75">{contactClosing.text}</p>
                  <div className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">Email</p>
                      <a href={`mailto:${contact.email}`} className="mt-2 block font-medium hover:text-violet-light">
                        {contact.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">Teléfono</p>
                      {contact.phones.map((p) => (
                        <a key={p.href} href={p.href} className="mt-2 block font-medium hover:text-violet-light">
                          {p.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/45">Barcelona · Digital marketing</p>
                </div>
              </Sheet>
            </div>
          </Container>
        </div>

        <CtaBanner
          eyebrow="Siguiente paso"
          primary={{ href: "/contacto", label: "Agendar una llamada" }}
          secondary={{ href: "/servicios", label: "Ver servicios paquetizados" }}
        />
      </main>
      <Footer />
    </>
  );
}
