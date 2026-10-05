/** Nota destacada del Portfolio (p. ej. "Auditoría descontable"). */
export default function Callout({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-violet/20 border-l-4 border-l-violet bg-violet-soft/60 p-5 md:p-6">
      <p className="text-sm leading-relaxed text-ink">
        <strong className="font-semibold">{title}</strong> {text}
      </p>
    </div>
  );
}
