"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./ui/Container";

const stats = [
  { value: "3.2×", label: "ROAS promedio en cuentas de pago gestionadas" },
  { value: "48", label: "marcas activas en gestión mensual" },
  { value: "6 años", label: "operando en el mercado hispanohablante" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-20">
      <Container className="grid items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight md:text-6xl"
          >
            Marketing digital que se sostiene con datos, no con suerte.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-lg text-graphite"
          >
            Somos Dos Studio: un equipo de estrategas, diseñadores y
            especialistas en performance que convierte marcas en negocios que
            crecen mes a mes, en digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contacto"
              className="rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-ink"
            >
              Cuéntanos tu proyecto
            </Link>
            <Link
              href="/proyectos"
              className="text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-violet"
            >
              Ver proyectos recientes
            </Link>
          </motion.div>

          <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-ink md:text-3xl">
                  {stat.value}
                </div>
                <p className="mt-1.5 text-xs leading-snug text-graphite">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <motion.svg
            viewBox="0 0 100 100"
            className="h-full w-full"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M8 8 H54 A46 46 0 0 1 8 54 Z"
              fill="#5430FF"
              variants={{
                hidden: { opacity: 0, x: -18, y: 12, rotate: -8 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
                },
              }}
              style={{ transformOrigin: "8px 8px" }}
            />
            <motion.path
              d="M8 54 V92 H50 A38 38 0 0 0 8 54 Z"
              fill="#1B0E66"
              variants={{
                hidden: { opacity: 0, x: 18, y: -12, rotate: 8 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 },
                },
              }}
              style={{ transformOrigin: "8px 92px" }}
            />
          </motion.svg>
          <div className="absolute inset-x-0 -bottom-6 mx-auto h-10 w-3/4 rounded-full bg-violet-soft blur-2xl" />
        </div>
      </Container>
    </section>
  );
}
