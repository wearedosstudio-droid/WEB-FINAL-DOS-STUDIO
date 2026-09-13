const palettes = [
  { bg: "#1B0E66", a: "#5430FF", b: "#EDE9FF" },
  { bg: "#5430FF", a: "#1B0E66", b: "#FFFFFF" },
  { bg: "#0A0A0B", a: "#5430FF", b: "#EDE9FF" },
];

/**
 * Placeholder de proyecto construido con la geometría de marca (arcos y
 * círculos en violeta) en lugar de una imagen de stock genérica.
 */
export default function ProjectVisual({ variant = 0 }: { variant?: number }) {
  const p = palettes[variant % palettes.length];
  const flip = variant % 2 === 0;

  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill={p.bg} />
      <circle cx={flip ? 60 : 340} cy={flip ? 40 : 260} r="150" fill={p.a} opacity="0.5" />
      <path
        d={flip ? "M0 300 H180 A180 180 0 0 1 0 120 Z" : "M400 0 H220 A180 180 0 0 1 400 180 Z"}
        fill={p.b}
        opacity="0.9"
      />
      <circle cx={flip ? 320 : 80} cy={flip ? 70 : 230} r="10" fill={p.b} />
    </svg>
  );
}
