export type ProcessStep = {
  number: string;
  title: string;
  summary: string;
  duration: string;
  description: string;
  deliverables: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
    summary:
      "Auditamos tus canales actuales, tu competencia y tu histórico de datos para entender de dónde parte el proyecto de verdad.",
    duration: "Semana 1",
    description:
      "Antes de proponer nada, revisamos qué está pasando de verdad: qué canales tienes activos, cómo se comporta tu competencia directa y qué dicen tus datos históricos. La mayoría de los planes de marketing fallan porque parten de suposiciones, no de un diagnóstico real.",
    deliverables: [
      "Auditoría de canales activos (orgánico y pago)",
      "Análisis de competencia directa",
      "Informe de hallazgos con oportunidades priorizadas",
    ],
  },
  {
    number: "02",
    title: "Estrategia",
    summary:
      "Definimos objetivos trimestrales, prioridades por canal y los indicadores que vamos a revisar cada mes contigo.",
    duration: "Semana 2",
    description:
      "Con el diagnóstico en mano, definimos qué vamos a lograr en los próximos 90 días, en qué canales y con qué presupuesto. Todo objetivo lleva un indicador medible asociado, para que revisar el avance no sea una opinión sino un número.",
    deliverables: [
      "Plan estratégico trimestral por canal",
      "KPIs definidos y línea base de partida",
      "Presupuesto sugerido por canal",
    ],
  },
  {
    number: "03",
    title: "Producción",
    summary:
      "Diseño, contenido, campañas y automatizaciones se ejecutan bajo un mismo calendario, sin piezas sueltas.",
    duration: "Continuo",
    description:
      "Aquí es donde el plan se vuelve real: contenido, diseño, campañas y automatizaciones se producen bajo un mismo calendario editorial y de campañas, coordinados por un solo estratega de cuenta para que nada se ejecute de forma aislada.",
    deliverables: [
      "Calendario editorial y de campañas compartido",
      "Producción de piezas de diseño y contenido",
      "Configuración de automatizaciones y campañas pagas",
    ],
  },
  {
    number: "04",
    title: "Medición",
    summary:
      "Reportamos resultados en lenguaje de negocio, no solo de métricas, y ajustamos lo que no está funcionando.",
    duration: "Mensual",
    description:
      "Cada mes te mostramos qué funcionó y qué no, traducido a lo que realmente le importa a tu negocio: leads, ventas, costo de adquisición. Lo que no cumple el objetivo se ajusta o se reemplaza, sin esperar al siguiente trimestre.",
    deliverables: [
      "Reporte mensual en lenguaje de negocio",
      "Comparativa contra los KPIs definidos",
      "Plan de ajuste para el mes siguiente",
    ],
  },
  {
    number: "05",
    title: "Escalado",
    summary:
      "Una vez el canal es rentable, invertimos más presupuesto y sumamos nuevos canales con el mismo criterio.",
    duration: "A partir del trimestre 2",
    description:
      "Cuando un canal demuestra ser rentable de forma sostenida, aumentamos la inversión ahí antes de abrir uno nuevo. Preferimos escalar lo que ya funciona a dispersar presupuesto en canales sin validar.",
    deliverables: [
      "Propuesta de escalado de presupuesto por canal",
      "Evaluación de nuevos canales a incorporar",
      "Plan trimestral actualizado",
    ],
  },
];
