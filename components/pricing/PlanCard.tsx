import Link from "next/link";
import { priceSuffix, type Plan } from "@/lib/portfolio";

/**
 * Tarjeta de un servicio paquetizado: código, precio, descripción y
 * condiciones (cuota, compromiso, consumo) tal como figuran en el Portfolio.
 */
export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className="group relative flex h-full flex-col rounded-[1.75rem] border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet/40 hover:shadow-[0_30px_70px_-45px_rgba(27,14,102,0.55)]">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-md bg-violet-soft px-2 py-1 font-mono text-[11px] font-semibold tracking-wider text-violet">
          {plan.code}
        </span>
        <span className="text-xs font-medium text-graphite">{plan.commitment}</span>
      </div>

      <h4 className="mt-6 font-display text-xl font-bold leading-snug text-ink">
        {plan.name}
      </h4>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-4xl font-bold tracking-tight text-ink">
          {plan.price}
        </span>
        <span className="text-sm text-graphite">{priceSuffix(plan)}</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-graphite">{plan.description}</p>

      <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-line pt-5 text-xs">
        <div>
          <dt className="text-graphite">Cuota</dt>
          <dd className="mt-1 font-semibold text-ink">{plan.fee}</dd>
        </div>
        <div>
          <dt className="text-graphite">Compromiso</dt>
          <dd className="mt-1 font-semibold text-ink">{plan.commitment}</dd>
        </div>
        <div>
          <dt className="text-graphite">Consumo</dt>
          <dd className="mt-1 font-semibold text-ink">{plan.unit}</dd>
        </div>
      </dl>

      <Link
        href={`/contacto?plan=${plan.code}`}
        className="mt-auto pt-7"
        aria-label={`Solicitar ${plan.name} (${plan.code})`}
      >
        <span className="flex items-center justify-between rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors duration-300 group-hover:border-violet group-hover:bg-violet group-hover:text-white">
          Solicitar
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    </article>
  );
}
