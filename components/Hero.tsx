"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./ui/Container";
import PlatformMarquee from "./PlatformMarquee";

const ease = [0.16, 1, 0.3, 1] as const;

/** Los siete ejes del ecosistema digital que trabaja Dos Studio. */
const nodes = ["Estrategia", "Web", "SEO", "Contenido", "Marketing", "Datos", "Crecimiento"];

function EcosystemDiagram() {
  const radius = 42; // % del contenedor
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
      {/* órbitas */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="0.25" />
        <circle
          cx="50"
          cy="50"
          r="29"
          fill="none"
          stroke="rgba(140,116,255,0.35)"
          strokeWidth="0.25"
          strokeDasharray="1 1.6"
          className="origin-center animate-[spin_60s_linear_infinite] motion-reduce:animate-none"
        />
        {nodes.map((_, i) => {
          const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={50 + Math.cos(a) * radius}
              y2={50 + Math.sin(a) * radius}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.06, ease }}
            />
          );
        })}
      </svg>

      {/* núcleo: isotipo */}
      <div className="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="flex h-full w-full items-center justify-center rounded-[28%] bg-paper shadow-[0_30px_80px_-20px_rgba(84,48,255,0.65)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/isotype.png" alt="" width={537} height={615} className="h-[52%] w-auto" />
        </motion.div>
      </div>

      {/* nodos */}
      {nodes.map((label, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const left = 50 + Math.cos(a) * radius;
        const top = 50 + Math.sin(a) * radius;
        const isGrowth = label === "Crecimiento";
        return (
          <span
            key={label}
            style={{ left: `${left}%`, top: `${top}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.7 + i * 0.08 }}
              className={`block whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${
                isGrowth
                  ? "bg-violet text-white shadow-[0_12px_30px_-10px_rgba(84,48,255,0.9)]"
                  : "border border-white/15 bg-midnight text-white/90"
              }`}
            >
              {label}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="px-3 pb-3 md:px-4">
      <div className="bg-brand-glow relative overflow-hidden rounded-[2rem] text-white md:rounded-[2.5rem]">
        <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_30%,black,transparent)]" />

        <Container className="relative grid items-center gap-14 pb-16 pt-16 md:pb-24 md:pt-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="eyebrow-dark"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-light" />
              Agencia de marketing digital · Barcelona
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease }}
              className="mt-7 text-balance font-display text-[2.7rem] font-bold leading-[1.02] tracking-tight sm:text-6xl xl:text-[5rem]"
            >
              Construimos y hacemos crecer tu{" "}
              <span className="text-violet-light">ecosistema digital.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/75"
            >
              Estrategia, web, SEO, contenido y datos trabajando como un solo
              sistema. Dos socios al frente de cada proyecto y servicios con
              precio y alcance cerrados antes de empezar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link href="/contacto" className="btn-light">
                Agendar una llamada <span aria-hidden="true">→</span>
              </Link>
              <Link href="/servicios" className="btn-ghost-light">
                Ver servicios y tarifas
              </Link>
            </motion.div>

            {/* En móvil, los ejes del ecosistema como lista compacta */}
            <ul className="mt-12 flex flex-wrap gap-2 lg:hidden" aria-label="Qué trabajamos">
              {nodes.map((n) => (
                <li
                  key={n}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                    n === "Crecimiento" ? "bg-violet text-white" : "border border-white/15 text-white/80"
                  }`}
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <EcosystemDiagram />
          </div>
        </Container>

        <div className="relative border-t border-white/10 py-8">
          <Container>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
              Trabajamos con las plataformas que mueven tu negocio
            </p>
          </Container>
          <PlatformMarquee className="mt-6" />
        </div>
      </div>
    </section>
  );
}
