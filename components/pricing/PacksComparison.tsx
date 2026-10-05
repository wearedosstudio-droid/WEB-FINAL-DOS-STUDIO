import { packRows, packs } from "@/lib/portfolio";

/**
 * Tabla "Versiones de los packs" del Portfolio. En móvil no se muestra
 * comprimida: se oculta y la misma información vive en las tarjetas.
 */
export default function PacksComparison({
  tone = "dark",
  mobileFallback = false,
}: {
  tone?: "dark" | "light";
  /** Muestra en móvil una ficha por pack (cuando no hay tarjetas que ya lo cuenten). */
  mobileFallback?: boolean;
}) {
  const dark = tone === "dark";
  const head = dark ? "text-white/50" : "text-graphite";
  const cell = dark ? "text-white/85" : "text-ink";
  const border = dark ? "border-white/10" : "border-line";

  return (
    <>
    {mobileFallback && (
      <div className="space-y-4 md:hidden">
        {packs.map((p) => (
          <div key={p.code} className={`rounded-2xl border p-5 ${border}`}>
            <div className="flex items-baseline justify-between">
              <span className={`font-display text-lg font-bold ${dark ? "text-white" : "text-ink"}`}>{p.name}</span>
              <span className={`font-display text-lg font-bold ${dark ? "text-white" : "text-violet"}`}>{p.price}/mes</span>
            </div>
            <dl className="mt-3 space-y-2 text-sm">
              {packRows.map((row) => (
                <div key={row.key} className="flex justify-between gap-4">
                  <dt className={head}>{row.label}</dt>
                  <dd className={`text-right font-medium ${cell}`}>{String(p[row.key])}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    )}
    <div className={`hidden overflow-hidden rounded-3xl border md:block ${border}`}>
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Comparativa de los Packs Dos Studio</caption>
        <thead>
          <tr className={`border-b ${border}`}>
            <th scope="col" className={`w-[22%] px-6 py-5 text-xs font-semibold uppercase tracking-[0.12em] ${head}`}>
              Versiones
            </th>
            {packs.map((p, i) => (
              <th
                key={p.code}
                scope="col"
                className={`px-6 py-5 font-display text-lg font-bold ${
                  i === 1 ? (dark ? "bg-violet/25 text-white" : "bg-violet-soft text-violet") : dark ? "text-white" : "text-ink"
                }`}
              >
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {packRows.map((row) => (
            <tr key={row.key} className={`border-b ${border}`}>
              <th scope="row" className={`px-6 py-4 font-medium ${head}`}>
                {row.label}
              </th>
              {packs.map((p, i) => (
                <td key={p.code} className={`px-6 py-4 ${cell} ${i === 1 ? (dark ? "bg-violet/25" : "bg-violet-soft/60") : ""}`}>
                  {String(p[row.key])}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th scope="row" className={`px-6 py-5 font-semibold ${dark ? "text-white" : "text-ink"}`}>
              Precio pack
            </th>
            {packs.map((p, i) => (
              <td
                key={p.code}
                className={`px-6 py-5 font-display text-xl font-bold ${
                  dark ? "text-white" : "text-violet"
                } ${i === 1 ? (dark ? "bg-violet/25" : "bg-violet-soft/60") : ""}`}
              >
                {p.price}/mes
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
