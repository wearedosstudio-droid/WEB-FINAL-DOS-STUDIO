export type Project = {
  name: string;
  category: string;
  result: string;
  variant: number;
};

export const projects: Project[] = [
  {
    name: "Nortia Finance",
    category: "Fintech · Performance + Web",
    result: "+61% en leads calificados en 4 meses",
    variant: 0,
  },
  {
    name: "Cala Studio",
    category: "Retail de moda · Branding + Social",
    result: "x2.4 en tasa de conversión de Instagram Shop",
    variant: 1,
  },
  {
    name: "Verde Cocina",
    category: "Food · SEO + Email marketing",
    result: "+38% de tráfico orgánico en 6 meses",
    variant: 2,
  },
  {
    name: "Rumbo Salud",
    category: "Clínicas · Automatización + Ads",
    result: "-32% en costo por cita agendada",
    variant: 0,
  },
  {
    name: "Alto Coworking",
    category: "Real estate · Diseño web",
    result: "Nuevo sitio con +90 en Core Web Vitals",
    variant: 1,
  },
  {
    name: "Marea Beauty",
    category: "Cosmética · Consultoría estratégica",
    result: "Plan trimestral que ordenó 5 canales en uno",
    variant: 2,
  },
];
