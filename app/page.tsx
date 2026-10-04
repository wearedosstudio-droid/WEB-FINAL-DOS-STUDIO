import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import BlogPreview from "@/components/BlogPreview";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Services />
        <div className="h-3 md:h-4" />
        <About />
        <Process />
        <BlogPreview />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
