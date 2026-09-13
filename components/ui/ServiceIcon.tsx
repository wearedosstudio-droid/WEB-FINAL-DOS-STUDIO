const iconProps = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const icons: Record<string, React.ReactNode> = {
  "gestion-redes-sociales": (
    <svg {...iconProps}>
      <circle cx="7" cy="12" r="3.2" />
      <circle cx="17" cy="6" r="2.4" />
      <circle cx="17" cy="18" r="2.4" />
      <path d="M9.8 10.6 14.8 7.2M9.8 13.4 14.8 16.8" />
    </svg>
  ),
  "diseno-web": (
    <svg {...iconProps}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
      <path d="M3.5 8.5h17" />
      <circle cx="6.3" cy="6.5" r="0.4" fill="currentColor" />
    </svg>
  ),
  branding: (
    <svg {...iconProps}>
      <path d="M4 4 H14 A6 6 0 0 1 8 14 Z" fill="currentColor" stroke="none" opacity="0.9" />
      <path d="M4 14 V20 H10 A6 6 0 0 0 4 14 Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  "publicidad-digital": (
    <svg {...iconProps}>
      <path d="M4 10v4h4l6 4V6l-6 4Z" />
      <path d="M17.5 9.5a4 4 0 0 1 0 5" />
    </svg>
  ),
  seo: (
    <svg {...iconProps}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.3 15.3 20 20" />
    </svg>
  ),
  "email-marketing": (
    <svg {...iconProps}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </svg>
  ),
  automatizacion: (
    <svg {...iconProps}>
      <circle cx="8" cy="8" r="2.6" />
      <circle cx="16" cy="16" r="2.6" />
      <path d="M10.5 9.5 13.5 14.5" />
    </svg>
  ),
  "consultoria-estrategica": (
    <svg {...iconProps}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <circle cx="12" cy="12" r="4.6" />
    </svg>
  ),
};

export default function ServiceIcon({
  slug,
  className = "h-6 w-6",
}: {
  slug: string;
  className?: string;
}) {
  return <div className={className}>{icons[slug] ?? null}</div>;
}
