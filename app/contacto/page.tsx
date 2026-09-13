import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos y te respondemos en menos de 24 horas hábiles con los próximos pasos.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
