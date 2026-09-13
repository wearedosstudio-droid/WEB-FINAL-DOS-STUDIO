"use client";

import { useState } from "react";
import Container from "./ui/Container";

type Status = "idle" | "loading" | "success" | "error";

const services = [
  "Gestión de redes sociales",
  "Diseño web",
  "Branding",
  "Publicidad digital",
  "SEO",
  "Email marketing",
  "Automatización",
  "Consultoría estratégica",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("request-failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="border-t border-line py-24">
      <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Hablemos de tu próximo trimestre
          </h2>
          <p className="mt-4 max-w-sm text-graphite">
            Cuéntanos en qué está tu marca hoy y a dónde quieres llevarla.
            Respondemos en menos de 24 horas hábiles con los próximos pasos.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <div>
              <div className="text-graphite">Email</div>
              <div className="font-medium text-ink">wearedosstudio@gmail.com</div>
            </div>
            <div>
              <div className="text-graphite">Teléfono</div>
              <div className="font-medium text-ink">+34 684 34 29 84</div>
              <div className="font-medium text-ink">+34 635 37 27 54</div>
            </div>
            <div>
              <div className="text-graphite">Oficina</div>
              <div className="font-medium text-ink">Barcelona, España</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
                placeholder="tu@empresa.com"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="text-sm font-medium text-ink">
                Empresa
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="mt-2 w-full rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
                placeholder="Nombre de tu marca"
              />
            </div>
            <div>
              <label htmlFor="service" className="text-sm font-medium text-ink">
                Servicio de interés
              </label>
              <select
                id="service"
                name="service"
                className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona un servicio
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-ink">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-2 w-full resize-none rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
              placeholder="Cuéntanos brevemente tu objetivo"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-violet disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" ? "Enviando…" : "Enviar mensaje"}
          </button>

          {status === "success" && (
            <p className="text-sm font-medium text-violet">
              Mensaje enviado. Te responderemos muy pronto.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600">
              Algo falló al enviar el mensaje. Escríbenos directamente a
              wearedosstudio@gmail.com.
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
