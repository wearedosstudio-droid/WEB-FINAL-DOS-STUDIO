import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Nosotros: agencia de marketing digital en Barcelona",
  description:
    "Conoce a Dos Studio: dos socios fundadores en Barcelona que cubren estrategia, diseño, desarrollo y marketing digital, sin intermediarios.",
  alternates: { canonical: "/nosotros" },
};

const values = [
  {
    title: "Decisiones con datos",
    description:
      "Cada recomendación nace de un número, no de una tendencia. Medimos antes, durante y después.",
  },
  {
    title: "Un solo interlocutor",
    description:
      "Hablas directamente con quien ejecuta tu proyecto. No hay capas de account managers entre tú y el trabajo.",
  },
  {
    title: "Diseño que vende",
    description:
      "La estética siempre está al servicio de un objetivo de negocio, no al revés.",
  },
  {
    title: "Transparencia con números",
    description:
      "Si algo no está funcionando, lo decimos en el reporte del mes, no lo escondemos hasta la renovación.",
  },
];

const fits = [
  "Tienes un producto o servicio validado y quieres escalar su adquisición de clientes.",
  "Ya facturas en digital, pero sientes que no sabes qué canal realmente te trae resultados.",
  "Manejas varios proveedores o freelancers sueltos y necesitas una sola cabeza estratégica.",
  "Buscas un equipo pequeño y accesible, no una agencia grande con procesos lentos.",
];

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHero
          eyebrow="Nosotros"
          title={
            <>
              Un estudio pequeño, <span className="text-violet-light">a propósito.</span>
            </>
          }
          intro={
            <>
              <p>
                Dos Studio nace en 2026 en Barcelona. Somos dos socios
                fundadores que cubrimos, entre los dos, estrategia, diseño y
                desarrollo, sin capas intermedias ni equipos tercerizados.
              </p>
              <p className="mt-4 text-base text-white/65">
                Elegimos mantenernos pequeños porque creemos que así se trabaja
                mejor: cada cliente habla directamente con quien ejecuta su
                proyecto, y cada decisión se toma con el contexto completo de la
                cuenta.
              </p>
            </>
          }
          aside={
            <dl className="grid grid-cols-3 gap-3 lg:grid-cols-1">
              {[
                { value: "2", label: "socios fundadores" },
                { value: "2026", label: "año de fundación" },
                { value: "BCN", label: "sede del estudio" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-bold">{stat.value}</span>
                    <span className="mt-1 block text-xs text-white/60">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          }
        />

        <section className="py-20">
          <Container>
            <div className="max-w-lg">
              <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
                Cómo pensamos el trabajo con cada cliente
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="bg-paper p-8">
                  <h3 className="font-display text-lg font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-graphite">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-line py-20">
          <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
                Encajamos bien contigo si…
              </h2>
              <p className="mt-4 max-w-sm text-graphite">
                No somos la agencia correcta para todo el mundo, y preferimos
                decirlo antes de la primera llamada.
              </p>
            </div>
            <ul className="space-y-5">
              {fits.map((fit) => (
                <li key={fit} className="flex gap-4 rounded-xl border border-line p-5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                  <span className="text-sm leading-relaxed text-ink">{fit}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <CtaBanner
          eyebrow="¿Encajamos?"
          title={
            <>
              ¿Te ves reflejado en esto<span className="text-violet-light">?</span>
            </>
          }
          text="Hablemos de tu marca y de en qué punto está hoy. Empezamos con una llamada de 30 minutos."
          primary={{ href: "/contacto", label: "Agendar una llamada" }}
          secondary={{ href: "/portfolio", label: "Ver Portfolio" }}
        />
      </main>
      <Footer />
    </>
  );
}
