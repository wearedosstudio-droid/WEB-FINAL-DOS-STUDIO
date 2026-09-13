import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Arc from "@/components/ui/Arc";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo detrás de Dos Studio y cómo pensamos el marketing digital.",
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
      "Un estratega acompaña tu cuenta de punta a punta. Nada se pierde entre equipos ni entre herramientas.",
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
  "Buscas un equipo que reporte en números de negocio, no solo en métricas de vanidad.",
];

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-line py-20">
          <Arc
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 opacity-[0.06]"
            rotate={180}
          />
          <Container>
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-violet">Nosotros</span>
              <h1 className="text-balance mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                El equipo de marketing que tu marca contrataría
                internamente, sin tener que armarlo
              </h1>
              <p className="mt-6 text-lg text-graphite">
                Dos Studio nació en 2020 de la unión de dos disciplinas que
                casi nunca conviven bien: la estrategia de negocio y el
                diseño de marca. Hoy somos un equipo de 14 personas entre
                estrategas, diseñadores, redactores y especialistas en
                performance, trabajando para marcas de Latinoamérica y
                España.
              </p>
              <p className="mt-4 max-w-xl text-graphite">
                No vendemos horas ni entregables sueltos: construimos un
                sistema de marketing que se ajusta cada mes según lo que los
                datos van mostrando.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {[
                { value: "14", label: "personas en el equipo" },
                { value: "2020", label: "año de fundación" },
                { value: "48", label: "marcas activas" },
                { value: "6 años", label: "en el mercado" },
              ].map((stat) => (
                <div key={stat.label} className="bg-paper p-6">
                  <div className="font-display text-2xl font-bold">
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-graphite">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

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

        <section className="border-t border-line bg-ink py-20 text-white">
          <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                ¿Te ves reflejado en esto?
              </h2>
              <p className="mt-3 max-w-md text-white/70">
                Hablemos de tu marca y de en qué punto está hoy.
              </p>
            </div>
            <Link
              href="/contacto"
              className="whitespace-nowrap rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Escríbenos
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
