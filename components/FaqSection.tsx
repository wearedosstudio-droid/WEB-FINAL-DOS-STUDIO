import Link from "next/link";
import Container from "./ui/Container";
import Accordion from "./ui/Accordion";
import Reveal from "./ui/Reveal";
import { generalFaq } from "@/lib/faq";

export default function FaqSection() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-6">Preguntas frecuentes</h2>
          <p className="mt-6 max-w-sm text-graphite">
            Si tienes una duda que no está aquí, escríbenos directamente:
            solemos responder el mismo día.
          </p>
          <Link href="/contacto" className="btn-primary mt-8">
            Escríbenos <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={generalFaq} />
        </Reveal>
      </Container>
    </section>
  );
}
