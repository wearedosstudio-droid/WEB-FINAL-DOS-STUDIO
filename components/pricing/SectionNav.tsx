"use client";

import { useEffect, useRef, useState } from "react";

export type SectionNavItem = { id: string; label: string; number?: string };

/**
 * Navegación por secciones con resaltado de la sección visible.
 * - "bar": barra horizontal fija bajo el header (/servicios).
 * - "toc": índice vertical lateral (/portfolio).
 */
export default function SectionNav({
  items,
  variant = "bar",
  label = "Secciones",
}: {
  items: SectionNavItem[];
  variant?: "bar" | "toc";
  label?: string;
}) {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  // Mantiene visible el elemento activo en la barra horizontal (móvil).
  useEffect(() => {
    if (variant !== "bar") return;
    const list = listRef.current;
    const el = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !el) return;
    list.scrollTo({
      left: el.offsetLeft - list.clientWidth / 2 + el.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active, variant]);

  if (variant === "toc") {
    return (
      <nav aria-label={label}>
        <ul ref={listRef} className="space-y-1 border-l border-line">
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-id={item.id}
                  aria-current={isActive ? "true" : undefined}
                  className={`-ml-px flex items-baseline gap-3 border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                    isActive
                      ? "border-violet font-semibold text-ink"
                      : "border-transparent text-graphite hover:text-ink"
                  }`}
                >
                  {item.number && (
                    <span className={`font-mono text-[11px] ${isActive ? "text-violet" : "text-graphite/70"}`}>
                      {item.number}
                    </span>
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label={label} className="sticky top-20 z-40 border-y border-line bg-paper/90 backdrop-blur">
      <ul
        ref={listRef}
        className="container-content relative flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                data-id={item.id}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "bg-violet text-white" : "text-graphite hover:bg-violet-soft hover:text-violet"
                }`}
              >
                {item.number && (
                  <span className={`font-mono text-[11px] ${isActive ? "text-white/70" : "text-violet"}`}>
                    {item.number}
                  </span>
                )}
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
