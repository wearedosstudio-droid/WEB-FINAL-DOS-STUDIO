/** Datos globales del sitio, compartidos por metadata, JSON-LD y componentes. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://web10-seven.vercel.app").replace(/\/$/, "");

export const contact = {
  email: "wearedosstudio@gmail.com",
  phones: [
    { label: "+34 684 34 29 84", href: "tel:+34684342984" },
    { label: "+34 635 37 27 54", href: "tel:+34635372754" },
  ],
  city: "Barcelona, España",
};
