/**
 * Fuente única de la oferta comercial de Dos Studio.
 *
 * Todo lo que hay aquí se transcribe del documento oficial
 * "Dos Studio · Portfolio 2026" (servicios, códigos, precios, cuotas,
 * compromisos, notas y condiciones). Lo consumen tanto /servicios
 * (servicios paquetizados) como /portfolio (portfolio completo), así que
 * cualquier cambio de tarifa se hace solo en este archivo.
 */

export type Fee = "Única" | "Mensual" | "Bajo consumo";

export type Commitment =
  | "Sin compromiso"
  | "Mensual"
  | "3 meses"
  | "6 meses"
  | "Anual";

export type Plan = {
  code: string;
  name: string;
  description: string;
  /** Precio tal como aparece en el Portfolio (sin IVA). */
  price: string;
  /** Columna "Consumo" del Portfolio. */
  unit: string;
  fee: Fee;
  commitment: Commitment;
};

export type PlanGroup = {
  title: string;
  plans: Plan[];
};

export type Category = {
  id: string;
  number: string;
  /** Título de la sección en el Portfolio. */
  title: string;
  /** Etiqueta corta para la navegación de /servicios. */
  navLabel: string;
  /** Página del documento original. */
  page: number;
  intro: string;
  includesTitle: string;
  includes: string[];
  problems: string[];
  /** Título del bloque de servicios en el Portfolio ("Servicios de auditoría"…). */
  servicesTitle: string;
  groups: PlanGroup[];
  callout?: { title: string; text: string };
  notes: string[];
};

export const portfolioMeta = {
  title: "Portfolio 2026",
  subtitle: "Servicios y planes",
  tagline: "Digital marketing · Barcelona",
  vatNote: "Precios sin IVA",
  /** PDF original, servido desde /public. */
  pdfHref: "/portfolio/dos-studio-portfolio-2026.pdf",
};

/* ------------------------------------------------------------------ */
/* Estructura y tipología de servicios (página 2)                       */
/* ------------------------------------------------------------------ */

export const structure = {
  intro:
    "Todos los servicios de Dos Studio están paquetizados: cada uno tiene un código, un alcance cerrado, un precio y unas condiciones de facturación y permanencia. Así sabéis exactamente qué contratáis y cuánto cuesta antes de empezar.",
  fees: [
    {
      type: "Única",
      definition: "Pago puntual por un proyecto o entregable con alcance cerrado.",
      appliesTo: "Auditorías y desarrollo web / ecommerce",
    },
    {
      type: "Mensual",
      definition: "Cuota fija mensual por un servicio continuado.",
      appliesTo: "Redes sociales, SEO, mantenimiento, estrategia y packs",
    },
    {
      type: "Bajo consumo",
      definition: "Se factura a final de mes según las horas consumidas.",
      appliesTo: "Trabajos fuera del alcance de un plan",
    },
  ],
  commitments: [
    {
      type: "Sin compromiso",
      definition: "Sin permanencia mínima.",
      why: "Proyectos únicos y horas sueltas",
    },
    {
      type: "Mensual",
      definition: "Se renueva cada mes; baja con 30 días de aviso.",
      why: "Servicios de mantenimiento",
    },
    {
      type: "3 meses",
      definition: "Permanencia mínima de 3 cuotas; después, mensual.",
      why: "Redes y estrategia necesitan tiempo para dar resultados",
    },
    {
      type: "6 meses",
      definition: "Permanencia mínima de 6 cuotas; después, mensual.",
      why: "SEO y packs: el posicionamiento es un trabajo de medio plazo",
    },
    {
      type: "Anual",
      definition: "Permanencia de 12 meses.",
      why: "Hosting y dominio",
    },
  ],
  readingColumns: [
    { label: "Código", example: "XX01" },
    { label: "Descripción", example: "Nombre del servicio y qué incluye" },
    { label: "Precio", example: "0€" },
    { label: "Consumo", example: "Unidad" },
    { label: "Cuota", example: "Única / Mensual" },
    { label: "Compromiso", example: "Duración mínima" },
  ],
  notes: [
    "Todos los precios indicados son sin IVA.",
    "Los servicios se prestan en horario laboral, de lunes a viernes.",
    "Cualquier trabajo fuera del alcance de un servicio se presupuesta antes de empezar.",
  ],
};

/* ------------------------------------------------------------------ */
/* Categorías de servicio (páginas 3 a 8)                               */
/* ------------------------------------------------------------------ */

export const categories: Category[] = [
  {
    id: "auditorias",
    number: "01",
    title: "Auditorías digitales",
    navLabel: "Auditorías",
    page: 3,
    intro:
      "Antes de proponer, entendemos qué está fallando. Una auditoría analiza vuestra presencia digital y termina siempre en lo mismo: problemas detectados, oportunidades, impacto en el negocio, servicio recomendado y prioridad.",
    includesTitle: "Qué analizamos",
    includes: [
      "Web: diseño, UX, móvil y velocidad",
      "SEO: palabras clave, indexación y contenido",
      "Redes: frecuencia, formatos y marca",
      "Competencia y propuesta de valor",
    ],
    problems: [
      "Una web que no genera contactos",
      "No aparecer en Google cuando os buscan",
      "Invertir en marketing sin saber qué funciona",
      "No saber por dónde empezar",
    ],
    servicesTitle: "Servicios de auditoría",
    groups: [
      {
        title: "Auditorías Dos Studio",
        plans: [
          {
            code: "AUD01",
            name: "Auditoría Express",
            description:
              "Web y SEO básico. Informe de 3 oportunidades prioritarias y vídeo explicativo.",
            price: "290 €",
            unit: "Auditoría",
            fee: "Única",
            commitment: "Sin compromiso",
          },
          {
            code: "AUD02",
            name: "Auditoría de Redes Sociales",
            description:
              "Perfiles, contenido, frecuencia, formatos, marca y 3 competidores.",
            price: "390 €",
            unit: "Auditoría",
            fee: "Única",
            commitment: "Sin compromiso",
          },
          {
            code: "AUD03",
            name: "Auditoría SEO",
            description:
              "Indexación, arquitectura, palabras clave, contenidos, SEO local y oportunidades.",
            price: "490 €",
            unit: "Auditoría",
            fee: "Única",
            commitment: "Sin compromiso",
          },
          {
            code: "AUD04",
            name: "Auditoría Digital Completa",
            description:
              "Web, UX, velocidad, SEO, redes, competencia y negocio. Plan de acción priorizado y reunión de presentación de 60 min.",
            price: "690 €",
            unit: "Auditoría",
            fee: "Única",
            commitment: "Sin compromiso",
          },
        ],
      },
    ],
    callout: {
      title: "Auditoría descontable.",
      text: "Si en los 60 días siguientes contratáis un servicio de Dos Studio, el importe de la auditoría se descuenta del primer pago. Con cualquier Pack Dos Studio, la Auditoría Digital Completa está incluida.",
    },
    notes: [],
  },
  {
    id: "web-ecommerce",
    number: "02",
    title: "Desarrollo web y ecommerce",
    navLabel: "Web & Ecommerce",
    page: 4,
    intro:
      "Webs a medida, rápidas y pensadas para convertir visitas en contactos o ventas. Proyectos con alcance cerrado y pago único: sabéis qué recibís y cuánto cuesta antes de empezar.",
    includesTitle: "",
    includes: [],
    problems: [],
    servicesTitle: "Servicios para proyectos web",
    groups: [
      {
        title: "Webs corporativas",
        plans: [
          {
            code: "WEB01",
            name: "Landing de campaña",
            description:
              "Una página orientada a una acción: formulario, WhatsApp y medición de conversiones.",
            price: "590 €",
            unit: "Proyecto",
            fee: "Única",
            commitment: "Sin compromiso",
          },
          {
            code: "WEB02",
            name: "Web One Page",
            description:
              "Diseño personalizado, responsive, SEO básico, formulario, WhatsApp y textos legales.",
            price: "890 €",
            unit: "Proyecto",
            fee: "Única",
            commitment: "Sin compromiso",
          },
          {
            code: "WEB03",
            name: "Web Corporativa",
            description:
              "Hasta 8 páginas, diseño personalizado, blog, SEO inicial, formularios, Analytics y optimización de velocidad.",
            price: "1.890 €",
            unit: "Proyecto",
            fee: "Única",
            commitment: "Sin compromiso",
          },
          {
            code: "WEB04",
            name: "Web Corporativa Pro",
            description:
              "Hasta 15 páginas, 2 idiomas, landings por servicio, integración con CRM o newsletter y SEO por página.",
            price: "3.490 €",
            unit: "Proyecto",
            fee: "Única",
            commitment: "Sin compromiso",
          },
        ],
      },
      {
        title: "Ecommerce",
        plans: [
          {
            code: "ECO01",
            name: "Ecommerce Start",
            description:
              "Shopify o WooCommerce, hasta 50 productos, métodos de pago, envíos, SEO inicial y formación.",
            price: "2.900 €",
            unit: "Proyecto",
            fee: "Única",
            commitment: "Sin compromiso",
          },
          {
            code: "ECO02",
            name: "Ecommerce Pro",
            description:
              "Hasta 300 productos, filtros, 2 idiomas, integraciones (facturación, envíos) y SEO de categorías.",
            price: "5.400 €",
            unit: "Proyecto",
            fee: "Única",
            commitment: "Sin compromiso",
          },
        ],
      },
    ],
    notes: [
      "Forma de pago: 50 % al inicio del proyecto y 50 % a la entrega.",
      "Textos, imágenes e identidad corporativa los aporta el cliente, salvo que se contrate su creación.",
      "Dominio y hosting no incluidos: ver Mantenimiento web (HST01).",
    ],
  },
  {
    id: "mantenimiento",
    number: "03",
    title: "Mantenimiento web",
    navLabel: "Mantenimiento",
    page: 5,
    intro:
      "Una web sin mantenimiento se vuelve lenta, insegura y se queda desactualizada. Con una cuota mensual nos ocupamos de que funcione siempre y de los cambios del día a día.",
    includesTitle: "Qué incluye",
    includes: [
      "Actualizaciones de plataforma y plugins",
      "Copias de seguridad y restauración",
      "Seguridad y monitorización",
      "Pequeños cambios de contenido",
    ],
    problems: [
      "Webs caídas o hackeadas",
      "Depender de alguien para cada cambio",
      "Pérdida de datos sin copia",
      "Webs que se degradan con el tiempo",
    ],
    servicesTitle: "Planes de mantenimiento",
    groups: [
      {
        title: "Mantenimiento web y ecommerce",
        plans: [
          {
            code: "MNT01",
            name: "Mantenimiento Esencial",
            description:
              "Actualizaciones, copia de seguridad diaria, seguridad y hasta 1 h de cambios al mes. Respuesta en 48 h laborables.",
            price: "49 €",
            unit: "Web",
            fee: "Mensual",
            commitment: "Mensual",
          },
          {
            code: "MNT02",
            name: "Mantenimiento Pro",
            description:
              "Todo lo de Esencial, hasta 3 h de cambios al mes, informe mensual de rendimiento. Respuesta en 24 h laborables.",
            price: "119 €",
            unit: "Web",
            fee: "Mensual",
            commitment: "Mensual",
          },
          {
            code: "MNT03",
            name: "Mantenimiento Ecommerce",
            description:
              "Todo lo de Pro, hasta 5 h al mes de gestión de catálogo y monitorización de pagos y pedidos.",
            price: "189 €",
            unit: "Tienda",
            fee: "Mensual",
            commitment: "Mensual",
          },
          {
            code: "HST01",
            name: "Hosting gestionado y dominio",
            description:
              "Alojamiento, certificado SSL, dominio y cuentas de correo básicas.",
            price: "25 €",
            unit: "Web",
            fee: "Mensual",
            commitment: "Anual",
          },
        ],
      },
    ],
    notes: [
      "Las horas de cambios no son acumulables de un mes a otro.",
      "Las horas adicionales se facturan como HRS01.",
    ],
  },
  {
    id: "redes-sociales",
    number: "04",
    title: "Redes sociales",
    navLabel: "Redes sociales",
    page: 6,
    intro:
      "Gestión completa de vuestras redes con una estrategia orientada a negocio: qué publicar, para quién y con qué objetivo. Nos ocupamos de la estrategia, el diseño, el vídeo, la publicación y el informe mensual.",
    includesTitle: "Todos los planes incluyen",
    includes: [
      "Estrategia y calendario editorial mensual",
      "Diseño gráfico y edición de vídeo",
      "Copywriting y publicación",
      "Informe mensual de resultados",
    ],
    problems: [
      "Publicar sin estrategia ni constancia",
      "Una imagen de marca inconsistente",
      "Falta de tiempo para crear contenido",
      "No saber si las redes traen clientes",
    ],
    servicesTitle: "Planes de redes sociales",
    groups: [
      {
        title: "Gestión de redes sociales",
        plans: [
          {
            code: "RS01",
            name: "Plan Starter",
            description: "1 red social. 8 publicaciones al mes (2 de ellas en vídeo).",
            price: "490 €",
            unit: "Mes",
            fee: "Mensual",
            commitment: "3 meses",
          },
          {
            code: "RS02",
            name: "Plan Growth",
            description:
              "Instagram, TikTok y LinkedIn. 12 publicaciones y 4 vídeos al mes, más stories.",
            price: "890 €",
            unit: "Mes",
            fee: "Mensual",
            commitment: "3 meses",
          },
          {
            code: "RS03",
            name: "Plan Premium",
            description:
              "Hasta 4 redes. 16 publicaciones y 8 vídeos al mes, estrategia avanzada, gestión de comunidad y reunión mensual.",
            price: "1.390 €",
            unit: "Mes",
            fee: "Mensual",
            commitment: "3 meses",
          },
        ],
      },
      {
        title: "Complementos de redes sociales",
        plans: [
          {
            code: "RS10",
            name: "Gestión de comunidad",
            description:
              "Respuesta a comentarios y mensajes directos en horario laboral. Para Starter y Growth.",
            price: "190 €",
            unit: "Mes",
            fee: "Mensual",
            commitment: "3 meses",
          },
          {
            code: "RS11",
            name: "Jornada de producción mensual",
            description:
              "Media jornada de foto y vídeo en vuestras instalaciones para generar contenido propio.",
            price: "390 €",
            unit: "Mes",
            fee: "Mensual",
            commitment: "3 meses",
          },
        ],
      },
    ],
    notes: ["La inversión en publicidad pagada en redes no está incluida."],
  },
  {
    id: "seo",
    number: "05",
    title: "SEO",
    navLabel: "SEO",
    page: 7,
    intro:
      "Que os encuentren quienes ya están buscando lo que hacéis. Trabajamos el posicionamiento técnico, el contenido y la presencia local para atraer visitas cualificadas de forma continuada, sin depender de la publicidad.",
    includesTitle: "Qué incluye",
    includes: [
      "Estudio y seguimiento de palabras clave",
      "SEO técnico y optimización on-page",
      "Contenidos optimizados para buscadores",
      "Informe mensual de posiciones y tráfico",
    ],
    problems: [
      "La competencia aparece y vosotros no",
      "Una web con pocas visitas",
      "Dependencia total de los anuncios",
      "Invisibilidad en Google Maps",
    ],
    servicesTitle: "Planes de SEO",
    groups: [
      {
        title: "Posicionamiento SEO",
        plans: [
          {
            code: "SEO01",
            name: "SEO Local",
            description:
              "Ficha de Google Business, 1 ubicación, hasta 10 palabras clave, optimización de 5 páginas y 1 artículo al mes.",
            price: "390 €",
            unit: "Mes",
            fee: "Mensual",
            commitment: "6 meses",
          },
          {
            code: "SEO02",
            name: "SEO Growth",
            description:
              "Hasta 30 palabras clave, SEO técnico continuo, enlazado interno y 2 artículos al mes.",
            price: "690 €",
            unit: "Mes",
            fee: "Mensual",
            commitment: "6 meses",
          },
          {
            code: "SEO03",
            name: "SEO Pro",
            description:
              "Hasta 60 palabras clave, 4 artículos al mes, estrategia de enlaces, análisis de competencia y reunión mensual.",
            price: "1.190 €",
            unit: "Mes",
            fee: "Mensual",
            commitment: "6 meses",
          },
        ],
      },
    ],
    callout: {
      title: "Por qué 6 meses.",
      text: "El SEO es un trabajo acumulativo: los primeros resultados suelen verse a partir del tercer mes. Comprometernos a medio plazo es la única forma honesta de trabajarlo.",
    },
    notes: [
      "El punto de partida de cada plan es la Auditoría SEO (AUD03), descontable al contratar.",
    ],
  },
  {
    id: "estrategia",
    number: "06",
    title: "Estrategia digital",
    navLabel: "Estrategia",
    page: 8,
    intro:
      "Para empresas que no tienen departamento de marketing, o que tienen equipo pero les falta dirección. Definimos objetivos, prioridades y presupuesto, coordinamos a quien ejecuta y medimos lo que funciona.",
    includesTitle: "Qué incluye",
    includes: [
      "Plan de marketing y prioridades trimestrales",
      "Sesiones de trabajo con dirección",
      "Coordinación de proveedores y canales",
      "Cuadro de mando con los KPI del negocio",
    ],
    problems: [
      "Acciones sueltas sin un plan común",
      "No saber en qué invertir primero",
      "Proveedores sin coordinación",
      "Decisiones sin datos",
    ],
    servicesTitle: "Servicios de estrategia",
    groups: [
      {
        title: "Consultoría y dirección de marketing",
        plans: [
          {
            code: "EST01",
            name: "Consultoría estratégica",
            description: "1 sesión mensual de 2 h, plan de acción y seguimiento por email.",
            price: "390 €",
            unit: "Mes",
            fee: "Mensual",
            commitment: "3 meses",
          },
          {
            code: "EST02",
            name: "Dirección de marketing externa",
            description:
              "2 sesiones al mes, plan trimestral, coordinación de canales y proveedores, cuadro de mando e informe mensual.",
            price: "990 €",
            unit: "Mes",
            fee: "Mensual",
            commitment: "3 meses",
          },
        ],
      },
    ],
    notes: [],
  },
];

/** Trabajos fuera de plan (página 8). */
export const hourly = {
  title: "Trabajos fuera de plan",
  intro:
    "Para necesidades no incluidas en un plan: cambios puntuales, piezas gráficas o desarrollos pequeños. Se facturan a final de mes según el tiempo empleado, con un mínimo de 30 minutos.",
  groupTitle: "Facturable por horas",
  plan: {
    code: "HRS01",
    name: "Hora de diseño, desarrollo o marketing",
    description: "Trabajos fuera del alcance de un plan, con presupuesto previo.",
    price: "55 €",
    unit: "Hora",
    fee: "Bajo consumo",
    commitment: "Sin compromiso",
  } satisfies Plan,
};

/* ------------------------------------------------------------------ */
/* Packs Dos Studio (página 9)                                          */
/* ------------------------------------------------------------------ */

export type Pack = {
  code: string;
  name: string;
  audience: string;
  description: string;
  maintenance: string;
  seo: string;
  social: string;
  strategy: string;
  audit: string;
  separatePrice: string;
  price: string;
  fee: Fee;
  commitment: Commitment;
};

export const packsIntro = {
  title: "Packs Dos Studio",
  intro:
    "Web, SEO y redes funcionan mejor juntos. Los packs combinan nuestros servicios mensuales en una sola cuota, con una estrategia común, un único interlocutor y un precio menor que contratarlos por separado.",
  page: 9,
  note:
    "¿Necesitáis también una web nueva? Al contratar un pack, el proyecto web (WEB01 a ECO02) tiene un 10 % de descuento.",
};

export const packs: Pack[] = [
  {
    code: "PCK01",
    name: "Presencia",
    audience: "Empresas que empiezan a cuidar su presencia digital",
    description: "MNT02 + SEO01 + RS01 + revisión trimestral.",
    maintenance: "MNT02 Pro",
    seo: "SEO01 Local",
    social: "RS01 Starter",
    strategy: "Revisión trimestral",
    audit: "Incluida",
    separatePrice: "999 €/mes",
    price: "849 €",
    fee: "Mensual",
    commitment: "6 meses",
  },
  {
    code: "PCK02",
    name: "Crecimiento",
    audience: "Empresas que quieren captar clientes de forma constante",
    description: "MNT02 + SEO02 + RS02 + revisión trimestral.",
    maintenance: "MNT02 Pro",
    seo: "SEO02 Growth",
    social: "RS02 Growth",
    strategy: "Revisión trimestral",
    audit: "Incluida",
    separatePrice: "1.699 €/mes",
    price: "1.390 €",
    fee: "Mensual",
    commitment: "6 meses",
  },
  {
    code: "PCK03",
    name: "Liderazgo",
    audience: "Empresas que quieren liderar su sector en digital",
    description: "MNT02 + SEO03 + RS03 + EST01.",
    maintenance: "MNT02 Pro",
    seo: "SEO03 Pro",
    social: "RS03 Premium",
    strategy: "EST01 Consultoría",
    audit: "Incluida",
    separatePrice: "3.089 €/mes",
    price: "2.490 €",
    fee: "Mensual",
    commitment: "6 meses",
  },
];

/** Filas de la tabla comparativa de packs, en el orden del Portfolio. */
export const packRows: { label: string; key: keyof Pack }[] = [
  { label: "Para quién", key: "audience" },
  { label: "Mantenimiento web", key: "maintenance" },
  { label: "SEO", key: "seo" },
  { label: "Redes sociales", key: "social" },
  { label: "Estrategia", key: "strategy" },
  { label: "Auditoría Completa", key: "audit" },
  { label: "Precio por separado", key: "separatePrice" },
];

/* ------------------------------------------------------------------ */
/* Condiciones y contacto (página 10)                                   */
/* ------------------------------------------------------------------ */

export const conditions = [
  {
    title: "Facturación",
    items: [
      "Cuotas mensuales: por adelantado, del 1 al 5 de cada mes.",
      "Proyectos web: 50 % al inicio y 50 % a la entrega.",
      "Horas: a final de mes según consumo.",
      "Todos los precios son sin IVA.",
    ],
  },
  {
    title: "Permanencia y bajas",
    items: [
      "Cumplido el compromiso, los servicios pasan a mensuales.",
      "Las bajas se comunican con 30 días de antelación.",
      "Los cambios de plan se aplican al mes siguiente.",
    ],
  },
  {
    title: "Alcance",
    items: [
      "Cada servicio incluye lo descrito en su código.",
      "Lo que quede fuera se presupuesta antes de empezar.",
      "La inversión publicitaria no está incluida.",
    ],
  },
  {
    title: "Propiedad",
    items: [
      "La web, los contenidos y las cuentas son del cliente una vez abonados.",
      "Los accesos se entregan al finalizar el proyecto.",
    ],
  },
];

export const contactClosing = {
  title: "Hablemos.",
  text: "Empezamos con una llamada de 30 minutos para entender vuestro negocio y deciros por dónde empezaríamos.",
};

/* ------------------------------------------------------------------ */
/* Utilidades                                                           */
/* ------------------------------------------------------------------ */

/** Sufijo legible del precio según la columna "Consumo". */
export function priceSuffix(plan: Pick<Plan, "fee" | "unit">): string {
  if (plan.fee === "Bajo consumo") return "/ hora";
  if (plan.fee === "Mensual") return "/ mes";
  return "pago único";
}

/** Todos los planes con código, para buscar por código (p. ej. en el formulario). */
export const allPlans: Plan[] = [
  ...categories.flatMap((c) => c.groups.flatMap((g) => g.plans)),
  hourly.plan,
  ...packs.map((p) => ({
    code: p.code,
    name: `Pack ${p.name}`,
    description: p.description,
    price: p.price,
    unit: "Mes",
    fee: p.fee,
    commitment: p.commitment,
  })),
];

export function getPlanByCode(code: string): Plan | undefined {
  return allPlans.find((p) => p.code === code.toUpperCase());
}

/** Disciplina de /servicios/[slug] → categoría con tarifa publicada en el Portfolio. */
export const pricedCategoryBySlug: Record<string, string> = {
  "gestion-redes-sociales": "redes-sociales",
  "diseno-web": "web-ecommerce",
  seo: "seo",
  "consultoria-estrategica": "estrategia",
};

/** Precio "desde" de una categoría, calculado a partir de sus planes. */
export function startingPrice(categoryId: string): Plan | undefined {
  const category = categories.find((c) => c.id === categoryId);
  if (!category) return undefined;
  const plans = category.groups[0]?.plans ?? [];
  return plans.reduce<Plan | undefined>((min, p) => {
    const value = (x: Plan) => Number(x.price.replace(/[^\d]/g, ""));
    return !min || value(p) < value(min) ? p : min;
  }, undefined);
}
