"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Container from "./ui/Container";
import PlatformMarquee from "./PlatformMarquee";

const words = ["estrategia", "datos", "diseño", "contenido"];

const ease = [0.16, 1, 0.3, 1] as const;

const chips = [
  { label: "Estrategia", className: "-left-10 top-[14%]", delay: 0.7 },
  { label: "Performance", className: "-right-8 top-[46%]", delay: 0.85 },
  { label: "Contenido", className: "-left-6 bottom-[12%]", delay: 1 },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="px-3 pb-3 md:px-4">
      <div className="bg-brand-glow relative overflow-hidden rounded-[2rem] text-white md:rounded-[2.5rem]">
        <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_30%,black,transparent)]" />

        <Container className="relative grid items-center gap-14 pb-16 pt-16 md:grid-cols-[1.2fr_0.8fr] md:pb-20 md:pt-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="eyebrow-dark"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-soft" />
              Estudio de marketing digital · Barcelona
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="mt-7 font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.25rem]"
            >
              Hacemos crecer marcas con{" "}
              <span className="relative inline-flex overflow-hidden pb-1 align-bottom">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={words[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="inline-block bg-gradient-to-r from-white to-violet-soft/70 bg-clip-text text-transparent"
                  >
                    {words[index]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mt-7 max-w-lg text-lg leading-relaxed text-white/75"
            >
              Estrategia, diseño y performance bajo un mismo equipo. Dos socios
              que acompañan cada cuenta de principio a fin, con métricas reales
              y sin intermediarios.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link href="/contacto" className="btn-light">
                Cuéntanos tu proyecto <span aria-hidden="true">→</span>
              </Link>
              <Link href="/servicios" className="btn-ghost-light">
                Ver servicios
              </Link>
            </motion.div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-md md:block">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="relative aspect-square rounded-[2.5rem] bg-paper p-16 shadow-[0_40px_120px_-30px_rgba(10,10,11,0.6)]"
            >
              <div className="relative mx-auto aspect-[537/615] h-full animate-float">
                <motion.img
                  src="/brand/isotype-piece-a.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-contain"
                  initial={{ opacity: 0, x: -24, y: 16, rotate: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.35 }}
                />
                <motion.img
                  src="/brand/isotype-piece-b.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-contain"
                  initial={{ opacity: 0, x: 24, y: -16, rotate: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.55 }}
                />
              </div>
            </motion.div>

            {chips.map((chip) => (
              <motion.span
                key={chip.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease, delay: chip.delay }}
                className={`absolute ${chip.className} flex items-center gap-2 rounded-full bg-paper px-4 py-2.5 text-sm font-semibold text-ink shadow-[0_16px_40px_-12px_rgba(10,10,11,0.5)]`}
              >
                <span className="h-2 w-2 rounded-full bg-violet" />
                {chip.label}
              </motion.span>
            ))}
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
