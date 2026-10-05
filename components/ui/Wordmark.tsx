/** Firma tipográfica "Dos Studio." con el punto en violeta, como en el Portfolio. */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      Dos Studio<span className="text-violet">.</span>
    </span>
  );
}
