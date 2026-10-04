"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "dos-studio-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(value: "accepted" | "rejected") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // si el navegador bloquea localStorage, simplemente no persistimos la elección
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-line bg-paper/95 backdrop-blur">
      <div className="container-content flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm text-graphite">
          Usamos cookies técnicas y analíticas para mejorar tu experiencia en
          este sitio. Puedes aceptarlas o rechazarlas; en cualquier caso, el
          sitio seguirá funcionando con normalidad.{" "}
          <Link
            href="/politica-de-cookies"
            className="font-medium text-ink underline underline-offset-2 hover:text-violet"
          >
            Más información
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => decide("rejected")}
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-violet hover:text-violet"
          >
            Rechazar
          </button>
          <button
            onClick={() => decide("accepted")}
            className="rounded-full bg-violet px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-deep"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
