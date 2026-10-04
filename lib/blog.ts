export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  variant: number;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-elegir-el-canal-de-adquisicion-adecuado",
    title: "Cómo elegir el canal de adquisición adecuado para tu negocio",
    excerpt:
      "SEO, publicidad paga, redes sociales, email... no todos los canales sirven en la misma etapa. Una forma simple de decidir por dónde empezar.",
    category: "Estrategia",
    date: "2026-09-02",
    readTime: "6 min de lectura",
    variant: 0,
    content: [
      "Uno de los errores más comunes al empezar a invertir en marketing digital es intentar estar en todos los canales a la vez. El resultado casi siempre es el mismo: presupuesto disperso, ningún canal con suficiente inversión para dar señal real, y la sensación de que \"el marketing no funciona\".",
      "Antes de elegir un canal, conviene responder tres preguntas: ¿tu producto resuelve un problema que la gente ya está buscando activamente, o hay que despertar el interés? ¿Cuánto puedes esperar para ver resultados — necesitas ventas este mes o puedes invertir en construir un activo a 6 meses? ¿Tienes ya una base de clientes que no estás aprovechando?",
      "Si la gente ya busca lo que vendes, SEO y SEM suelen ser el punto de partida más eficiente: capturan una demanda que ya existe. Si tu producto necesita ser descubierto — es nuevo, es una categoría poco conocida — la publicidad en redes sociales suele rendir mejor, porque permite mostrarlo a quien aún no lo estaba buscando.",
      "Si ya tienes clientes o una lista de contactos y no les estás vendiendo nada más allá de la compra inicial, el email marketing suele ser el canal con mejor retorno por euro invertido, simplemente porque ya existe una relación de confianza previa.",
      "La recomendación práctica: elige un canal principal, dale presupuesto y tiempo suficiente para generar datos reales (al menos 8 a 12 semanas), y solo entonces decide si sumar un segundo canal. Escalar lo que funciona casi siempre rinde más que dispersar la apuesta desde el día uno.",
    ],
  },
  {
    slug: "seo-vs-sem-que-conviene-segun-tu-etapa",
    title: "SEO vs. SEM: qué conviene según la etapa de tu negocio",
    excerpt:
      "No es una pregunta de cuál es mejor, sino de cuál resuelve lo que necesitas ahora. Una guía corta para decidir sin perder meses.",
    category: "SEO",
    date: "2026-09-16",
    readTime: "5 min de lectura",
    variant: 1,
    content: [
      "SEO y SEM compiten por el mismo espacio — los resultados de búsqueda — pero funcionan de forma casi opuesta. SEM (publicidad en buscadores) da visibilidad inmediata mientras pagas; SEO construye visibilidad que permanece, pero toma tiempo en madurar.",
      "Si necesitas ventas esta semana — un lanzamiento, una fecha comercial puntual, validar si existe demanda real para un producto nuevo — SEM es la herramienta correcta. Te da datos en días, no en meses.",
      "Si tu negocio ya tiene cierta estabilidad y quieres reducir la dependencia de pagar por cada clic a largo plazo, SEO es la inversión que tiene sentido. El problema es que mucha gente lo abandona a los dos meses porque no ve resultados inmediatos, cuando en realidad recién empieza a dar señal entre el mes 3 y el mes 6.",
      "La combinación más sana, cuando el presupuesto lo permite, es usar SEM para generar ventas mientras el trabajo de SEO madura en segundo plano. Así no dependes de un solo canal mientras construyes el que te va a dar estabilidad a futuro.",
      "Lo que no tiene sentido es invertir en SEO esperando resultados de SEM, ni invertir en SEM esperando que el gasto baje solo con el tiempo — son herramientas distintas, para momentos distintos del negocio.",
    ],
  },
  {
    slug: "que-revisar-antes-de-rediseñar-tu-web",
    title: "Qué revisar antes de rediseñar la web de tu marca",
    excerpt:
      "Un rediseño mal planteado puede hacerte perder el poco posicionamiento que ya tenías. Esto es lo primero que hay que mirar.",
    category: "Diseño web",
    date: "2026-09-25",
    readTime: "7 min de lectura",
    variant: 2,
    content: [
      "\"Nuestra web se ve anticuada\" es casi siempre el motivo que dispara un rediseño. El problema es que la estética suele ser el síntoma menos importante: antes de rediseñar vale la pena entender qué está pasando realmente con el sitio actual.",
      "Lo primero es revisar los datos: ¿de dónde viene el tráfico que ya tienes? ¿Qué páginas generan más conversiones, aunque se vean desactualizadas? Rediseñar sin mirar esto es arriesgarte a perder justamente lo que sí estaba funcionando.",
      "Segundo, revisa el posicionamiento orgánico actual. Un rediseño que cambia URLs, estructura o contenido sin un plan de redirecciones puede borrar meses o años de trabajo de SEO en cuestión de días. Esto es, con diferencia, el error más costoso y más común.",
      "Tercero, define qué debe lograr el sitio nuevo que el actual no logra. \"Que se vea más profesional\" no es un objetivo medible. \"Reducir la tasa de rebote en la página de servicios\" o \"aumentar los formularios completados\" sí lo es, y permite diseñar con un criterio claro en vez de solo gusto estético.",
      "Un rediseño bien planteado no es un proyecto de diseño, es un proyecto de negocio con una capa de diseño encima. Empezar por los datos, no por el mood board, es lo que separa un sitio nuevo que mejora resultados de uno que simplemente se ve distinto.",
    ],
  },
  {
    slug: "automatizacion-de-marketing-por-donde-empezar",
    title: "Automatización de marketing: por dónde empezar sin complicarte",
    excerpt:
      "No hace falta un sistema complejo para empezar a automatizar. Estos son los tres flujos con mejor retorno para arrancar.",
    category: "Automatización",
    date: "2026-10-01",
    readTime: "5 min de lectura",
    variant: 0,
    content: [
      "Automatización suena a un proyecto grande y técnico, pero la mayoría de los negocios obtienen el 80% del beneficio con apenas tres flujos bien configurados, no con un sistema complejo de decenas de reglas.",
      "El primero es la respuesta inmediata a un nuevo lead. Si alguien llena un formulario y recibe respuesta recién al día siguiente, ya perdiste una parte de ese interés. Un flujo simple que confirme recepción y avise a tu equipo comercial al instante suele ser la automatización con mejor retorno de todas.",
      "El segundo es la recuperación de interés: alguien que visitó tu web, pidió información o abandonó un carrito, y no volvió. Un recordatorio automático en las 24 a 48 horas siguientes recupera una parte significativa de esas oportunidades sin que nadie tenga que acordarse manualmente de escribirles.",
      "El tercero es la bienvenida: el primer contacto automático que recibe alguien apenas se suscribe o se convierte en cliente. Es el momento de mayor atención que vas a tener con esa persona — vale la pena que esté bien pensado, no que sea un mensaje genérico.",
      "La recomendación es empezar por estos tres, medir su impacto real durante un mes, y recién después evaluar si tiene sentido sumar flujos más complejos. La automatización rinde cuando resuelve una fricción real, no cuando se añade por añadir.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
