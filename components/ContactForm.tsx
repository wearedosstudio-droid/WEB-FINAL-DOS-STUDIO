"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";
import { getPlanByCode, priceSuffix, type Plan } from "@/lib/portfolio";
import { contact } from "@/lib/site";

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
  const [plan, setPlan] = useState<Plan | null>(null);

  // Plan elegido desde /servicios o /portfolio (?plan=AUD04).
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("plan");
    if (code) setPlan(getPlanByCode(code) ?? null);
  }, []);

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
    <section id="contacto" className="py-24">
      <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">Contacto</span>
          <h1 className="mt-6 text-balance font-display text-5xl font-bold tracking-tight md:text-6xl">
            Hablemos<span className="text-violet">.</span>
          </h1>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-graphite">
            Empezamos con una llamada de 30 minutos para entender tu negocio y
            decirte por dónde empezaríamos. Respondemos en menos de 24 horas
            hábiles.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <div>
              <div className="text-graphite">Email</div>
              <a href={`mailto:${contact.email}`} className="font-medium text-ink hover:text-violet">
                {contact.email}
              </a>
            </div>
            <div>
              <div className="text-graphite">Teléfono</div>
              {contact.phones.map((p) => (
                <a key={p.href} href={p.href} className="block font-medium text-ink hover:text-violet">
                  {p.label}
                </a>
              ))}
            </div>
            <div>
              <div className="text-graphite">Oficina</div>
              <div className="font-medium text-ink">Barcelona, España</div>
            </div>
          </div>

          <p className="mt-10 max-w-sm text-xs leading-relaxed text-graphite">
            Al enviar este formulario aceptas nuestra{" "}
            <Link href="/politica-de-privacidad" className="underline underline-offset-2 hover:text-violet">
              política de privacidad
            </Link>
            . Solo usamos tus datos para responder a tu consulta.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[2rem] border border-line bg-paper p-6 shadow-[0_30px_80px_-60px_rgba(20,18,42,0.6)] md:p-10"
        >
          {plan && (
            <div className="flex items-start justify-between gap-4 rounded-2xl bg-violet-soft p-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-violet">
                  Plan seleccionado
                </span>
                <p className="mt-1 text-sm font-semibold text-ink">
                  {plan.code} · {plan.name} — {plan.price} {priceSuffix(plan)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPlan(null)}
                className="text-xs font-medium text-graphite underline underline-offset-2 hover:text-ink"
              >
                Quitar
              </button>
              <input type="hidden" name="plan" value={`${plan.code} · ${plan.name}`} />
            </div>
          )}
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
                className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
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
                className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
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
                className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
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
              className="mt-2 w-full resize-none rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
              placeholder="Cuéntanos brevemente tu objetivo"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-deep disabled:opacity-60 sm:w-auto"
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
              Algo falló al enviar el mensaje. Escríbenos directamente a{" "}
              {contact.email}.
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
