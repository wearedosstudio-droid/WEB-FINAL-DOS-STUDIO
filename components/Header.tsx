"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logomark from "./ui/Logomark";
import Container from "./ui/Container";
import ServiceIcon from "./ui/ServiceIcon";
import { services } from "@/lib/services";

const links = [
  { href: "/proceso", label: "Proceso" },
  { href: "/blog", label: "Blog" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open || megaOpen
          ? "border-b border-line bg-paper/95 shadow-[0_8px_30px_-20px_rgba(27,14,102,0.35)] backdrop-blur"
          : "border-b border-transparent bg-paper"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Logomark className="h-7" />
          <span className="font-display text-lg font-bold tracking-tight">
            Dos Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              href="/servicios"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-violet-soft hover:text-violet"
              aria-haspopup="true"
              aria-expanded={megaOpen}
              onFocus={() => setMegaOpen(true)}
            >
              Servicios
              <svg
                viewBox="0 0 12 12"
                className={`h-3 w-3 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="m3 4.5 3 3 3-3" />
              </svg>
            </Link>

            <div
              className={`absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                megaOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="grid grid-cols-[1fr_240px] overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_30px_80px_-30px_rgba(27,14,102,0.45)]">
                <ul className="grid grid-cols-2 gap-1 p-4">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/servicios/${service.slug}`}
                        onClick={() => setMegaOpen(false)}
                        onBlur={(e) => {
                          if (!e.currentTarget.closest("nav")?.contains(e.relatedTarget as Node)) {
                            setMegaOpen(false);
                          }
                        }}
                        className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-violet-soft"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-soft text-violet transition-colors group-hover:bg-violet group-hover:text-white">
                          <ServiceIcon slug={service.slug} className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-ink">
                            {service.title}
                          </span>
                          <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-graphite">
                            {service.tagline}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="bg-brand-glow flex flex-col justify-between p-6 text-white">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                      ¿Por dónde empiezo?
                    </span>
                    <p className="mt-3 font-display text-lg font-bold leading-snug">
                      Te ayudamos a elegir el servicio que mueve tu negocio hoy.
                    </p>
                  </div>
                  <Link
                    href="/contacto"
                    onClick={() => setMegaOpen(false)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white"
                  >
                    Agenda una llamada <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-violet-soft hover:text-violet"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contacto"
            className="rounded-full bg-violet px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-deep"
          >
            Empezar un proyecto
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <div className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-ink transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-6 bg-ink transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </Container>

      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <span className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-[0.12em] text-graphite">
              Servicios
            </span>
            <div className="grid grid-cols-2 gap-1">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-ink hover:bg-violet-soft"
                >
                  <span className="text-violet">
                    <ServiceIcon slug={service.slug} className="h-4 w-4" />
                  </span>
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="my-2 h-px bg-line" />
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-ink hover:bg-violet-soft"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-violet px-5 py-3 text-center text-base font-medium text-white"
            >
              Empezar un proyecto
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
