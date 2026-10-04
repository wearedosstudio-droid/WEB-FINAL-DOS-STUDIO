type LogomarkProps = {
  className?: string;
};

/**
 * Isotipo real de Dos Studio, recortado con transparencia verdadera a
 * partir del archivo de marca original (public/brand/isotype.png).
 * Proporción nativa 537×615 — el className controla la altura, el ancho
 * se ajusta solo.
 */
export default function Logomark({ className = "h-7" }: LogomarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/isotype.png"
      alt="Dos Studio"
      width={537}
      height={615}
      className={`w-auto ${className}`}
    />
  );
}
