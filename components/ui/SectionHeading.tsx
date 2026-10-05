/** Encabezado de sección: etiqueta, titular y entradilla opcionales. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  size = "lg",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  dark?: boolean;
  size?: "lg" | "sm";
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && <span className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</span>}
      <h2 className={`${size === "lg" ? "section-title" : "section-title-sm"} ${eyebrow ? "mt-6" : ""}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 max-w-xl text-lg leading-relaxed ${dark ? "text-white/70" : "text-graphite"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
