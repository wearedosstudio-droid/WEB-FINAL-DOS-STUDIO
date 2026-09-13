type ArcProps = {
  className?: string;
  color?: string;
  /** Rotación en grados para reorientar el cuarto de círculo */
  rotate?: number;
};

/**
 * Cuarto de círculo: el rasgo geométrico base del isotipo, reutilizado
 * como motivo decorativo consistente en toda la web (nunca como blob
 * genérico de gradiente).
 */
export default function Arc({ className, color = "#5430FF", rotate = 0 }: ArcProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path d="M0 0 H100 A100 100 0 0 1 0 100 Z" fill={color} />
    </svg>
  );
}
