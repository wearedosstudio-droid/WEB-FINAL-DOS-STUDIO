const platforms = [
  "Meta Ads",
  "Google Ads",
  "TikTok",
  "LinkedIn",
  "Instagram",
  "Shopify",
  "WordPress",
  "Google Analytics",
  "HubSpot",
  "Klaviyo",
  "Mailchimp",
  "Webflow",
];

/**
 * Cinta infinita con las plataformas con las que trabaja el estudio.
 * Se muestran como texto (no logotipos de terceros) para evitar
 * insinuar alianzas oficiales.
 */
export default function PlatformMarquee({ className = "" }: { className?: string }) {
  const row = [...platforms, ...platforms];

  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] ${className}`}
    >
      <ul className="flex w-max animate-marquee items-center gap-12 pr-12 hover:[animation-play-state:paused]">
        {row.map((name, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= platforms.length}
            className="flex items-center gap-3 whitespace-nowrap font-display text-xl font-semibold text-white/70 md:text-2xl"
          >
            <span className="h-2 w-2 rotate-45 rounded-[2px] bg-violet-soft/60" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
