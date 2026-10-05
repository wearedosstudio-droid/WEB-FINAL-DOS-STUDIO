import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo Dos Studio recoge, usa y protege tus datos personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-2xl">
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Política de privacidad
              </h1>
              <p className="mt-3 text-sm text-graphite">
                Última actualización: octubre de 2026
              </p>

              <div className="mt-10 space-y-8 text-sm leading-relaxed text-graphite">
                <p>
                  En Dos Studio nos tomamos en serio la protección de tus
                  datos personales. Esta política explica qué información
                  recogemos, con qué finalidad y qué derechos tienes sobre
                  ella, en cumplimiento del Reglamento (UE) 2016/679 (RGPD) y
                  la Ley Orgánica 3/2018 de Protección de Datos Personales y
                  garantía de los derechos digitales (LOPDGDD).
                </p>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    1. Responsable del tratamiento
                  </h2>
                  <div className="mt-3 rounded-2xl border border-line p-6">
                    <ul className="space-y-2 text-ink">
                      <li><strong>Responsable:</strong> Dos Studio</li>
                      <li><strong>Correo de contacto:</strong> wearedosstudio@gmail.com</li>
                      <li><strong>Domicilio:</strong> Barcelona, España</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    2. Qué datos recogemos
                  </h2>
                  <p className="mt-3">
                    A través del formulario de contacto de este sitio web
                    recogemos únicamente los datos que facilitas
                    voluntariamente: nombre, correo electrónico, empresa (si
                    procede), servicio de interés y el contenido de tu
                    mensaje.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    3. Con qué finalidad tratamos tus datos
                  </h2>
                  <p className="mt-3">
                    Tratamos tus datos exclusivamente para responder a tu
                    consulta o solicitud de información sobre nuestros
                    servicios, y, si así lo autorizas expresamente, para
                    enviarte comunicaciones comerciales relacionadas con Dos
                    Studio.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    4. Base legal del tratamiento
                  </h2>
                  <p className="mt-3">
                    La base legal para el tratamiento de tus datos es el
                    consentimiento que nos otorgas al rellenar y enviar el
                    formulario de contacto.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    5. Durante cuánto tiempo conservamos tus datos
                  </h2>
                  <p className="mt-3">
                    Conservamos tus datos únicamente durante el tiempo
                    necesario para atender tu consulta y, en caso de iniciar
                    una relación comercial, durante el tiempo que dicha
                    relación se mantenga activa y, posteriormente, durante
                    los plazos de prescripción legal aplicables.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    6. A quién cedemos tus datos
                  </h2>
                  <p className="mt-3">
                    No cedemos tus datos personales a terceros, salvo
                    obligación legal. Podemos utilizar proveedores de
                    servicios tecnológicos (por ejemplo, de alojamiento web o
                    envío de correo electrónico) que actúan como encargados
                    del tratamiento, bajo contrato y conforme a la normativa
                    vigente.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    7. Tus derechos
                  </h2>
                  <p className="mt-3">
                    Tienes derecho a acceder, rectificar y suprimir tus
                    datos, así como otros derechos como la limitación u
                    oposición al tratamiento, la portabilidad de los datos y
                    a no ser objeto de decisiones automatizadas. Puedes
                    ejercer estos derechos escribiendo a
                    wearedosstudio@gmail.com, indicando el derecho que deseas
                    ejercer y adjuntando copia de un documento que acredite
                    tu identidad.
                  </p>
                  <p className="mt-3">
                    Si consideras que tus derechos no han sido debidamente
                    atendidos, tienes derecho a presentar una reclamación
                    ante la Agencia Española de Protección de Datos
                    (www.aepd.es).
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    8. Seguridad de los datos
                  </h2>
                  <p className="mt-3">
                    Adoptamos las medidas técnicas y organizativas razonables
                    para proteger tus datos personales y evitar su pérdida,
                    uso indebido, alteración, acceso no autorizado o robo.
                  </p>
                </section>

                <p className="text-xs italic">
                  Nota: este documento es una plantilla general orientativa.
                  Antes de publicar el sitio, recomendamos revisarla con un
                  asesor legal para adaptarla a la forma jurídica exacta de
                  Dos Studio, a las herramientas concretas que utilice (por
                  ejemplo, proveedor de hosting o de email marketing) y a
                  cualquier particularidad de su actividad.
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
