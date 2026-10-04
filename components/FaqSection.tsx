import Container from "./ui/Container";
import Accordion from "./ui/Accordion";
import { generalFaq } from "@/lib/faq";

export default function FaqSection() {
  return (
    <section className="border-t border-line py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 max-w-sm text-graphite">
            Si tienes una duda que no está aquí, escríbenos directamente —
            solemos responder el mismo día.
          </p>
        </div>
        <Accordion items={generalFaq} />
      </Container>
    </section>
  );
}
