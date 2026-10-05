import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Qué cookies utiliza el sitio web de Dos Studio y para qué.",
};

export default function PoliticaCookiesPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-2xl">
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Política de cookies
              </h1>
              <p className="mt-3 text-sm text-graphite">
                Última actualización: octubre de 2026
              </p>

              <div className="mt-10 space-y-8 text-sm leading-relaxed text-graphite">
                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    1. Qué son las cookies
                  </h2>
                  <p className="mt-3">
                    Las cookies son pequeños archivos de texto que los sitios
                    web almacenan en tu dispositivo cuando los visitas.
                    Permiten, entre otras cosas, recordar tus preferencias y
                    entender cómo se usa el sitio.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    2. Qué cookies utiliza este sitio
                  </h2>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-line">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-violet-soft/60 text-ink">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Tipo</th>
                          <th className="px-4 py-3 font-semibold">Finalidad</th>
                          <th className="px-4 py-3 font-semibold">Duración</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line">
                        <tr>
                          <td className="px-4 py-3 font-medium text-ink">Técnicas</td>
                          <td className="px-4 py-3">
                            Necesarias para el funcionamiento básico del
                            sitio, como recordar tu elección sobre cookies.
                          </td>
                          <td className="px-4 py-3">Hasta 12 meses</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-ink">Analíticas</td>
                          <td className="px-4 py-3">
                            Nos ayudan a entender cómo se navega el sitio
                            (páginas más visitadas, tiempo de permanencia) de
                            forma agregada y anónima.
                          </td>
                          <td className="px-4 py-3">Hasta 24 meses</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    3. Cómo gestionar las cookies
                  </h2>
                  <p className="mt-3">
                    Al entrar al sitio por primera vez, te mostramos un
                    aviso donde puedes aceptar o rechazar el uso de cookies
                    no esenciales. Puedes cambiar tu elección en cualquier
                    momento borrando las cookies almacenadas desde la
                    configuración de tu navegador.
                  </p>
                  <p className="mt-3">
                    La mayoría de los navegadores permiten gestionar las
                    cookies desde su configuración de privacidad: puedes
                    bloquearlas, eliminarlas o configurar avisos antes de
                    que se almacenen, aunque esto puede afectar al
                    funcionamiento de algunas partes del sitio.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    4. Más información
                  </h2>
                  <p className="mt-3">
                    Si tienes dudas sobre el uso de cookies en este sitio,
                    puedes escribirnos a wearedosstudio@gmail.com.
                  </p>
                </section>

                <p className="text-xs italic">
                  Nota: esta política describe el uso previsto de cookies.
                  Si en el futuro se incorporan herramientas de analítica o
                  publicidad concretas (por ejemplo, Google Analytics o
                  píxeles de redes sociales), esta tabla debe actualizarse
                  para reflejar exactamente qué cookies de terceros se
                  instalan.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
