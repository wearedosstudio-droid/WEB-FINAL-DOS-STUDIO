import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Habla con Dos Studio, agencia de marketing digital en Barcelona. Empezamos con una llamada de 30 minutos y respondemos en menos de 24 horas hábiles.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
