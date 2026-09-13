type LogomarkProps = {
  className?: string;
  color?: string;
};

/**
 * Recreación vectorial del isotipo de Dos Studio (la "D" geométrica).
 * Se reconstruyó en SVG a partir del PNG de marca para poder usarlo
 * de forma nítida en cualquier tamaño (favicon, header, motivos decorativos).
 */
export default function Logomark({ className, color = "#5430FF" }: LogomarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 8 H54 A46 46 0 0 1 8 54 Z" fill={color} />
      <path d="M8 54 V92 H50 A38 38 0 0 0 8 54 Z" fill={color} />
    </svg>
  );
}
