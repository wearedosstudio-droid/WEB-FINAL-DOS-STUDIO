import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Problems from "@/components/Problems";
import About from "@/components/About";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import FaqSection from "@/components/FaqSection";
import ExploreCards from "@/components/ExploreCards";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { generalFaq } from "@/lib/faq";

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: generalFaq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <ValueProposition />
        <Problems />
        <div className="h-3 md:h-4" />
        <About />
        <Process />
        <Services />
        <Differentiators />
        <FaqSection />
        <ExploreCards />
        <CtaBanner />
        <FaqJsonLd />
      </main>
      <Footer />
    </>
  );
}
