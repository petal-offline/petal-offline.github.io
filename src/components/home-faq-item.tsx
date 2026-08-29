"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type HomeFaqItemProps = {
  q: string;
  a: string;
  link?: { text: string; href: string };
};

export function HomeFaqItem({ q, a, link }: HomeFaqItemProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-zinc-200/80 last:border-0">
      <h3>
        <button
          id={triggerId}
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="group flex w-full items-center justify-between gap-4 py-5 text-left"
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span className="text-base font-semibold text-zinc-900 transition-colors duration-200 group-hover:text-pink-500 md:text-lg">
            {q}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${open ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-sm leading-relaxed text-zinc-600 md:text-base">
            {a}
            {link && (
              <>
                {" "}
                <Link href={link.href} className="font-medium text-pink-500 underline decoration-pink-200 underline-offset-4 transition-colors hover:text-pink-600">
                  {link.text} →
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
