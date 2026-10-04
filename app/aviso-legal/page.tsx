import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Información legal del titular del sitio web de Dos Studio.",
};

export default function AvisoLegalPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-2xl">
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Aviso legal
              </h1>
              <p className="mt-3 text-sm text-graphite">
                Última actualización: octubre de 2026
              </p>

              <div className="mt-10 space-y-8 text-sm leading-relaxed text-graphite">
                <p>
                  En cumplimiento del deber de información recogido en el
                  artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios
                  de la Sociedad de la Información y de Comercio Electrónico
                  (LSSI-CE), se indican a continuación los datos identificativos
                  del titular de este sitio web:
                </p>

                <div className="rounded-2xl border border-line p-6">
                  <ul className="space-y-2 text-ink">
                    <li><strong>Denominación:</strong> Dos Studio</li>
                    <li><strong>Correo electrónico de contacto:</strong> wearedosstudio@gmail.com</li>
                    <li><strong>Teléfonos de contacto:</strong> +34 684 34 29 84 / +34 635 37 27 54</li>
                    <li><strong>Domicilio:</strong> Barcelona, España</li>
                  </ul>
                </div>

                <p className="text-xs italic">
                  Nota: este apartado debe completarse con la razón social
                  exacta, el NIF/CIF y el domicilio social completo de Dos
                  Studio antes de publicar el sitio, conforme a lo exigido por
                  la LSSI-CE. Si Dos Studio opera como autónomo o sociedad
                  mercantil, debe figurar aquí el dato correspondiente.
                </p>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    1. Objeto
                  </h2>
                  <p className="mt-3">
                    El presente aviso legal regula el uso del sitio web
                    dosstudio.com (en adelante, "el sitio web"), del que es
                    titular Dos Studio. La navegación por el sitio web supone
                    la aceptación plena de este aviso legal.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    2. Condiciones de uso
                  </h2>
                  <p className="mt-3">
                    El usuario se compromete a hacer un uso adecuado y lícito
                    del sitio web, así como de los contenidos y servicios que
                    se ofrecen en él, de conformidad con la legislación
                    vigente, este aviso legal, las buenas costumbres y el
                    orden público.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    3. Propiedad intelectual e industrial
                  </h2>
                  <p className="mt-3">
                    Todos los contenidos del sitio web, entendiendo por estos
                    a título enunciativo pero no limitativo, los textos,
                    fotografías, gráficos, imágenes, iconos, tecnología,
                    software, así como su diseño gráfico y códigos fuente,
                    constituyen una obra cuya propiedad pertenece a Dos
                    Studio, sin que puedan entenderse cedidos al usuario
                    ninguno de los derechos de explotación sobre los mismos
                    más allá de lo estrictamente necesario para el correcto
                    uso del sitio web.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    4. Exclusión de responsabilidad
                  </h2>
                  <p className="mt-3">
                    Dos Studio no se hace responsable de los daños y
                    perjuicios de cualquier naturaleza que pudieran derivarse
                    de la falta de disponibilidad o de continuidad del
                    funcionamiento del sitio web, ni de los errores en el
                    acceso a sus distintas páginas o contenidos.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    5. Legislación aplicable
                  </h2>
                  <p className="mt-3">
                    Las presentes condiciones se rigen por la legislación
                    española. Para la resolución de cualquier controversia
                    que pudiera derivarse del acceso o uso del sitio web, las
                    partes se someten a los juzgados y tribunales de
                    Barcelona, España, salvo que la normativa aplicable
                    disponga otra cosa.
                  </p>
                </section>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
