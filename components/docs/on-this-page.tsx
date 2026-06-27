"use client";

import { useEffect, useState } from "react";
import { type HeadingBlock } from "@/constants/docs";

export function OnThisPage({ headings }: { headings: HeadingBlock[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    headings.forEach(({ text }) => {
      const id = text.toLowerCase().replace(/\s+/g, "-");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="space-y-0.5">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-3 mb-3">
        On this page
      </p>
      {headings.map(({ text, level }) => {
        const id = text.toLowerCase().replace(/\s+/g, "-");
        const isActive = activeId === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            className={`flex items-center gap-2 rounded-lg py-1.5 text-xs font-medium transition-all duration-150 ${
              level === 3 ? "pl-6 pr-3" : "px-3"
            } ${
              isActive
                ? "text-purple-700 dark:text-purple-300"
                : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            {isActive && (
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
            )}
            {text}
          </a>
        );
      })}
    </nav>
  );
}