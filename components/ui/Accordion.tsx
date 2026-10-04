"use client";

import { useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen ? "border-violet/30 bg-violet-soft/60" : "border-line bg-paper hover:border-violet/30"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-base font-semibold text-ink">
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl transition-all duration-300 ${
                  isOpen ? "rotate-45 bg-violet text-white" : "bg-violet-soft text-violet"
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-graphite">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
