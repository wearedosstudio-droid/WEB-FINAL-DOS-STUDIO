import Link from "next/link";
import type { Pack } from "@/lib/portfolio";

/**
 * Tarjeta de un Pack Dos Studio sobre fondo oscuro. El pack central se
 * destaca solo visualmente (sin etiquetas tipo "más vendido" que no
 * figuran en el Portfolio).
 */
export default function PackCard({ pack, emphasis = false }: { pack: Pack; emphasis?: boolean }) {
  const included = [
    { label: "Mantenimiento web", value: pack.maintenance },
    { label: "SEO", value: pack.seo },
    { label: "Redes sociales", value: pack.social },
    { label: "Estrategia", value: pack.strategy },
    { label: "Auditoría Digital Completa", value: pack.audit },
  ];

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1.5 md:p-9 ${
        emphasis
          ? "bg-violet text-white shadow-[0_40px_90px_-40px_rgba(84,48,255,0.9)]"
          : "border border-white/10 bg-white/[0.04] text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-semibold tracking-wider text-white/60">{pack.code}</span>
        <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/80">
          Compromiso {pack.commitment}
        </span>
      </div>

      <h3 className="mt-8 font-display text-3xl font-bold tracking-tight">{pack.name}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${emphasis ? "text-white/85" : "text-white/65"}`}>
        {pack.audience}
      </p>

      <div className="mt-8 flex items-baseline gap-2">
        <span className="font-display text-5xl font-bold tracking-tight">{pack.price}</span>
        <span className="text-sm text-white/70">/ mes</span>
      </div>
      <p className="mt-2 text-sm text-white/60">
        Por separado: <span className="line-through">{pack.separatePrice}</span>
      </p>

      <ul className={`mt-8 space-y-3 border-t pt-7 ${emphasis ? "border-white/25" : "border-white/10"}`}>
        {included.map((item) => (
          <li key={item.label} className="flex items-start gap-3 text-sm">
            <svg
              viewBox="0 0 20 20"
              className={`mt-0.5 h-5 w-5 shrink-0 ${emphasis ? "text-white" : "text-violet-light"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m5 10.5 3.2 3L15 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>
              <span className="block text-white/60">{item.label}</span>
              <span className="font-semibold">{item.value}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-10">
        <Link
          href={`/contacto?plan=${pack.code}`}
          className={`flex items-center justify-between rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-300 ${
            emphasis ? "bg-white text-ink hover:bg-violet-soft" : "bg-white/10 text-white hover:bg-white hover:text-ink"
          }`}
        >
          Quiero este pack
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
