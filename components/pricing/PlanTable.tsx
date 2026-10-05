import type { Plan } from "@/lib/portfolio";

/**
 * Tabla de servicios con las columnas del Portfolio (Código, Descripción,
 * Precio, Consumo, Cuota, Compromiso). En escritorio es una tabla; en
 * móvil cada fila se convierte en una ficha apilada.
 */
export default function PlanTable({ title, plans }: { title: string; plans: Plan[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <div className="bg-midnight px-5 py-3 text-center text-sm font-semibold text-white">{title}</div>

      <table className="hidden w-full text-left text-sm md:table">
        <thead className="bg-[#F2F1F6] text-xs text-graphite">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold">Código</th>
            <th scope="col" className="px-4 py-3 font-semibold">Descripción</th>
            <th scope="col" className="px-4 py-3 text-right font-semibold">Precio</th>
            <th scope="col" className="px-4 py-3 font-semibold">Consumo</th>
            <th scope="col" className="px-4 py-3 font-semibold">Cuota</th>
            <th scope="col" className="px-4 py-3 font-semibold">Compromiso</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {plans.map((plan) => (
            <tr key={plan.code} className="align-top transition-colors hover:bg-violet-soft/40">
              <td className="px-4 py-4 font-mono text-xs font-semibold text-violet">{plan.code}</td>
              <td className="px-4 py-4">
                <div className="font-semibold text-ink">{plan.name}</div>
                <div className="mt-1 max-w-sm text-graphite">{plan.description}</div>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-right font-display text-base font-bold text-ink">
                {plan.price}
              </td>
              <td className="px-4 py-4 text-graphite">{plan.unit}</td>
              <td className="px-4 py-4 text-graphite">{plan.fee}</td>
              <td className="whitespace-nowrap px-4 py-4 text-graphite">{plan.commitment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="divide-y divide-line md:hidden">
        {plans.map((plan) => (
          <li key={plan.code} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-semibold text-violet">{plan.code}</span>
                <div className="mt-1 font-semibold text-ink">{plan.name}</div>
              </div>
              <span className="whitespace-nowrap font-display text-lg font-bold text-ink">{plan.price}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-graphite">{plan.description}</p>
            <dl className="mt-3 flex flex-wrap gap-2 text-xs">
              {[
                ["Consumo", plan.unit],
                ["Cuota", plan.fee],
                ["Compromiso", plan.commitment],
              ].map(([k, v]) => (
                <div key={k} className="rounded-full bg-[#F2F1F6] px-3 py-1">
                  <dt className="inline text-graphite">{k}: </dt>
                  <dd className="inline font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
