"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { BookOpen, ChevronDown, GraduationCap } from "lucide-react";
import { LEARNING } from "@/constants/configs";

const CATEGORIES: {
  key: "reference" | "guides";
  label: string;
  icon: React.ElementType;
}[] = [
  { key: "reference", label: "Reference", icon: BookOpen },
  { key: "guides", label: "Guides", icon: GraduationCap },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function LearningMegaMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isLearningActive = LEARNING.some(
    (l) => pathname === l.href || pathname.startsWith(l.href + "/")
  );

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const grouped = LEARNING.reduce(
    (acc, link) => {
      (acc[link.category as "reference" | "guides"] ??= []).push(link);
      return acc;
    },
    {} as Record<"reference" | "guides", typeof LEARNING>
  );

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`group relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
          isLearningActive || open
            ? "text-zinc-900 dark:text-white"
            : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-zinc-900/70"
        }`}
      >
        Learn
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
        {/* Active underline */}
        <span
          className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-linear-to-r from-purple-500 via-fuchsia-500 to-violet-500 transition-all duration-300 ${
            isLearningActive
              ? "w-full opacity-100"
              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
          }`}
        />
      </button>

      {/* Panel */}
      {open && (
        <div
          className="absolute left-1/2 top-full mt-3 w-130 -translate-x-1/2
            rounded-2xl border border-zinc-200/60 bg-white/95 shadow-xl shadow-zinc-200/50
            backdrop-blur-xl
            dark:border-zinc-800/60 dark:bg-zinc-950/95 dark:shadow-black/40
            animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {/* Arrow */}
          <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-zinc-200/60 bg-white dark:border-zinc-800/60 dark:bg-zinc-950" />

          <div className="grid grid-cols-2 gap-0 p-3">
            {CATEGORIES.map(({ key, label, icon: CatIcon }) => (
              <div key={key} className="p-2">
                {/* Category header */}
                <div className="mb-2 flex items-center gap-1.5 px-2">
                  <CatIcon className="h-3.5 w-3.5 text-purple-500" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {label}
                  </span>
                </div>

                {/* Links */}
                <ul className="space-y-0.5">
                  {grouped[key]?.map((link) => {
                    const Icon = link.icon;
                    const isActive =
                      pathname === link.href ||
                      pathname.startsWith(link.href + "/");

                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 ${
                            isActive
                              ? "bg-purple-50 dark:bg-purple-950/40"
                              : "hover:bg-zinc-100/80 dark:hover:bg-zinc-900/60"
                          }`}
                        >
                          {/* Icon bubble */}
                          <span
                            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors duration-150 ${
                              isActive
                                ? "bg-purple-100 dark:bg-purple-900/50"
                                : "bg-zinc-100 dark:bg-zinc-800 group-hover/item:bg-purple-100 dark:group-hover/item:bg-purple-900/40"
                            }`}
                          >
                            <Icon
                              className={`h-3.5 w-3.5 transition-colors duration-150 ${
                                isActive
                                  ? "text-purple-600 dark:text-purple-400"
                                  : "text-zinc-500 dark:text-zinc-400 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400"
                              }`}
                            />
                          </span>

                          {/* Text */}
                          <span className="flex flex-col">
                            <span
                              className={`text-sm font-medium leading-tight ${
                                isActive
                                  ? "text-purple-700 dark:text-purple-300"
                                  : "text-zinc-800 dark:text-zinc-200"
                              }`}
                            >
                              {link.label}
                            </span>
                            <span className="mt-0.5 text-xs leading-snug text-zinc-400 dark:text-zinc-500">
                              {link.description}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="border-t border-zinc-100 dark:border-zinc-800/60 px-5 py-3 flex items-center justify-between">
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              All learning resources in one place
            </p>
            <Link
              href="/learn"
              className="text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              Browse all →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}