export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  stat: { value: string; label: string };
  steps: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "gestion-redes-sociales",
    title: "Gestión de redes sociales",
    tagline: "Comunidad activa, contenido con criterio y una marca reconocible en cada feed.",
    summary:
      "Calendarios editoriales, comunidad activa y contenido nativo por plataforma, pensado para generar conversación real, no solo alcance.",
    description:
      "Gestionamos tus redes como un canal de negocio, no como un escaparate. Cada pieza responde a un objetivo del mes — reconocimiento, consideración o conversión — y se adapta al lenguaje real de cada plataforma en lugar de repetir el mismo contenido en todas.",
    deliverables: [
      "Calendario editorial mensual alineado a objetivos de negocio",
      "Producción de contenido nativo por plataforma (Instagram, TikTok, LinkedIn)",
      "Gestión de comunidad y respuesta a mensajes en horario comercial",
      "Reporte mensual de alcance, interacción y crecimiento de comunidad",
      "Sesión de contenido en formato foto/video una vez al mes",
    ],
    idealFor:
      "Marcas que ya tienen presencia en redes pero necesitan constancia, dirección creativa y una lectura clara de qué está funcionando.",
    stat: { value: "+2.8x", label: "crecimiento promedio de interacción en 6 meses" },
    steps: [
      { title: "Auditoría de canales", description: "Revisamos tu historial, tu competencia directa y qué formatos ya funcionan con tu audiencia." },
      { title: "Línea editorial", description: "Definimos pilares de contenido, tono de voz y una cadencia de publicación sostenible." },
      { title: "Producción y gestión", description: "Ejecutamos el calendario, gestionamos la comunidad y ajustamos según el desempeño semanal." },
    ],
  },
  {
    slug: "diseno-web",
    title: "Diseño web",
    tagline: "Sitios rápidos, medibles y construidos para convertir, no solo para verse bien.",
    summary:
      "Sitios y tiendas rápidos, medibles y fáciles de mantener, construidos sobre una base técnica sólida en lugar de plantillas genéricas.",
    description:
      "Diseñamos y desarrollamos sitios web con una arquitectura pensada desde el primer día para SEO, velocidad de carga y conversión. Nada de plantillas genéricas: cada sección responde a cómo navega y decide tu cliente real.",
    deliverables: [
      "Arquitectura de sitio y mapa de páginas orientado a conversión",
      "Diseño UI a medida sobre tu sistema de marca",
      "Desarrollo con estándares actuales de rendimiento y accesibilidad",
      "Integración de formularios, CRM y herramientas de analítica",
      "Capacitación para que tu equipo edite contenido sin depender de nosotros",
    ],
    idealFor:
      "Negocios que necesitan un sitio nuevo, o que están perdiendo leads por un sitio lento, desactualizado o difícil de mantener.",
    stat: { value: "+90", label: "puntaje promedio en Core Web Vitals de los sitios que entregamos" },
    steps: [
      { title: "Descubrimiento", description: "Entendemos tu producto, tu proceso de venta y qué debe lograr el sitio en los primeros 3 meses." },
      { title: "Diseño y prototipo", description: "Diseñamos cada página clave y la validamos contigo antes de escribir una sola línea de código." },
      { title: "Desarrollo y lanzamiento", description: "Construimos, probamos en distintos dispositivos y publicamos con métricas ya conectadas." },
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    tagline: "Una identidad que se reconoce igual en un post, un empaque o una factura.",
    summary:
      "Identidad verbal y visual coherente: naming, sistema de marca, tono de voz y lineamientos que se sostienen en cada punto de contacto.",
    description:
      "Construimos marcas que no dependen de quién esté diseñando ese día. Definimos un sistema — visual y verbal — lo suficientemente claro como para que cualquier persona de tu equipo pueda aplicarlo con criterio.",
    deliverables: [
      "Estrategia de marca: propósito, posicionamiento y arquetipo",
      "Identidad visual (logotipo, paleta, tipografía, sistema gráfico)",
      "Tono de voz y guía de comunicación",
      "Manual de marca aplicado a redes, papelería y punto de venta",
      "Plantillas listas para uso interno de tu equipo",
    ],
    idealFor:
      "Marcas naciendo desde cero, o negocios en crecimiento cuya identidad actual ya no representa lo que realmente venden.",
    stat: { value: "14", label: "sistemas de marca completos entregados en los últimos dos años" },
    steps: [
      { title: "Estrategia", description: "Entrevistas, análisis de competencia y definición de posicionamiento antes de diseñar nada." },
      { title: "Sistema de marca", description: "Construimos la identidad visual y verbal completa, con variaciones para cada uso real." },
      { title: "Manual y aplicación", description: "Entregamos lineamientos claros y aplicamos el sistema en tus canales principales." },
    ],
  },
  {
    slug: "publicidad-digital",
    title: "Publicidad digital",
    tagline: "Presupuesto invertido con un objetivo de costo por resultado, no solo de alcance.",
    summary:
      "Meta, Google y TikTok Ads gestionados con foco en costo por resultado, con pruebas creativas continuas y optimización semanal.",
    description:
      "Gestionamos tu inversión publicitaria como una cuenta de resultados: cada campaña tiene una meta de costo por lead o por venta, y se apaga o escala según cumpla o no ese número, no según intuición.",
    deliverables: [
      "Estructura de cuentas y campañas en Meta Ads, Google Ads y/o TikTok Ads",
      "Pruebas A/B continuas de creatividades y públicos",
      "Optimización semanal de presupuesto según costo por resultado",
      "Configuración de tracking y atribución de conversiones",
      "Reporte quincenal con lectura de negocio, no solo métricas de plataforma",
    ],
    idealFor:
      "Marcas que ya venden en digital y necesitan que la inversión publicitaria sea predecible y rentable, no una caja negra.",
    stat: { value: "3.2×", label: "ROAS promedio en cuentas de pago gestionadas" },
    steps: [
      { title: "Configuración", description: "Instalamos tracking correcto y estructuramos campañas desde cero o auditamos las existentes." },
      { title: "Pruebas creativas", description: "Lanzamos variaciones de anuncios y públicos para encontrar qué combinación realmente rinde." },
      { title: "Optimización semanal", description: "Ajustamos presupuesto y pausamos lo que no cumple el costo por resultado objetivo." },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    tagline: "Posicionamiento que no depende de un solo cambio de algoritmo.",
    summary:
      "Arquitectura, contenido y autoridad de dominio trabajados a la vez, para ranking que no dependa de un solo cambio de algoritmo.",
    description:
      "Trabajamos SEO técnico, de contenido y de autoridad en paralelo. No prometemos posición número uno en una palabra clave suelta: construimos tráfico orgánico sostenible que sigue creciendo mes a mes.",
    deliverables: [
      "Auditoría técnica completa (velocidad, indexación, estructura)",
      "Investigación y arquitectura de palabras clave por intención de búsqueda",
      "Plan de contenido optimizado para SEO, con calendario mensual",
      "Estrategia de enlazado interno y externo",
      "Reporte mensual de posiciones, tráfico orgánico y conversiones",
    ],
    idealFor:
      "Negocios que dependen demasiado de canales pagos y quieren un canal de adquisición propio a mediano plazo.",
    stat: { value: "+38%", label: "de tráfico orgánico promedio en 6 meses" },
    steps: [
      { title: "Auditoría", description: "Revisamos la salud técnica del sitio y dónde estás perdiendo posiciones frente a tu competencia." },
      { title: "Arquitectura y contenido", description: "Reestructuramos lo necesario y publicamos contenido pensado para intención de búsqueda real." },
      { title: "Autoridad y seguimiento", description: "Construimos enlaces relevantes y medimos evolución mes a mes." },
    ],
  },
  {
    slug: "email-marketing",
    title: "Email marketing",
    tagline: "El canal con mejor retorno cuando se segmenta bien, en lugar de disparar a toda tu lista.",
    summary:
      "Automatizaciones de bienvenida, recuperación y fidelización, con segmentación real y copys que se leen antes de borrarse.",
    description:
      "Diseñamos flujos automáticos y campañas puntuales que tratan a cada segmento de tu lista de forma distinta, en lugar de mandar el mismo correo a todo el mundo. El objetivo siempre es ingreso incremental, no solo tasa de apertura.",
    deliverables: [
      "Automatización de bienvenida, carrito abandonado y post-compra",
      "Segmentación de base según comportamiento e intereses",
      "Diseño de plantillas responsive alineadas a tu marca",
      "Calendario de campañas puntuales (lanzamientos, promociones)",
      "Reporte mensual de ingresos atribuidos al canal",
    ],
    idealFor:
      "Ecommerce y negocios con base de clientes propia que hoy no está siendo aprovechada más allá de un newsletter esporádico.",
    stat: { value: "1 de cada 4", label: "ventas recurrentes proviene de flujos automatizados en cuentas activas" },
    steps: [
      { title: "Segmentación", description: "Ordenamos tu base según comportamiento real de compra e interés." },
      { title: "Automatizaciones", description: "Construimos los flujos que trabajan solos: bienvenida, recuperación, fidelización." },
      { title: "Campañas y medición", description: "Sumamos campañas puntuales y medimos ingreso incremental generado por el canal." },
    ],
  },
  {
    slug: "automatizacion",
    title: "Automatización",
    tagline: "Que ningún lead se enfríe esperando una tarea manual.",
    summary:
      "Flujos que conectan formularios, CRM y campañas, para que ningún lead se enfríe esperando una tarea manual.",
    description:
      "Conectamos las herramientas que ya usas — formularios, CRM, WhatsApp, email — para que la información fluya sola y tu equipo comercial reciba leads listos para trabajar, no listas de contactos sin contexto.",
    deliverables: [
      "Mapeo de tu proceso comercial actual y puntos de fuga",
      "Automatización de asignación y seguimiento de leads en tu CRM",
      "Conexión entre formularios web, WhatsApp y email marketing",
      "Alertas automáticas para tu equipo comercial",
      "Documentación clara de cada flujo para tu equipo interno",
    ],
    idealFor:
      "Equipos comerciales que reciben leads pero los gestionan manualmente, con riesgo de perder oportunidades por demora.",
    stat: { value: "-40%", label: "en tiempo promedio de primera respuesta a un lead" },
    steps: [
      { title: "Mapeo", description: "Revisamos tu proceso actual de principio a fin y detectamos dónde se pierden leads." },
      { title: "Construcción de flujos", description: "Conectamos tus herramientas para automatizar asignación, seguimiento y alertas." },
      { title: "Ajuste continuo", description: "Monitoreamos el flujo real de leads y ajustamos reglas según resultados." },
    ],
  },
  {
    slug: "consultoria-estrategica",
    title: "Consultoría estratégica",
    tagline: "Cuando el reto no es ejecutar más, sino decidir qué ejecutar primero.",
    summary:
      "Diagnóstico, plan trimestral y prioridades claras cuando el reto no es ejecutar más, sino decidir qué ejecutar primero.",
    description:
      "Trabajamos como el criterio externo que le falta a muchos equipos de marketing internos: revisamos qué está pasando en todos tus canales a la vez y entregamos un plan trimestral con prioridades claras, no una lista infinita de recomendaciones.",
    deliverables: [
      "Diagnóstico integral de todos los canales activos",
      "Plan estratégico trimestral con prioridades y responsables",
      "Definición de KPIs por canal y por objetivo de negocio",
      "Sesión mensual de seguimiento y ajuste de plan",
      "Acompañamiento a tu equipo interno o a otras agencias que ya trabajan contigo",
    ],
    idealFor:
      "Equipos con varios canales activos (y a veces varias agencias) que necesitan una sola cabeza estratégica ordenando el conjunto.",
    stat: { value: "5→1", label: "canales dispersos ordenados bajo un mismo plan trimestral, en promedio" },
    steps: [
      { title: "Diagnóstico", description: "Revisamos cada canal activo, su rendimiento real y dónde hay solapamiento o vacíos." },
      { title: "Plan trimestral", description: "Definimos prioridades, KPIs y un plan de trabajo claro para los siguientes 90 días." },
      { title: "Seguimiento", description: "Nos reunimos mensualmente para ajustar el plan según lo que los datos muestran." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
