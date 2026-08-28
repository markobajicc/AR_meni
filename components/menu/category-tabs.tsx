"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/menu-data";

export function CategoryTabs({
  categories,
  activeId,
  onSelect,
}: {
  categories: Category[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    refs.current[activeId]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId]);

  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto px-4 py-3">
      {categories.map((c) => {
        const active = c.id === activeId;
        return (
          <button
            key={c.id}
            ref={(el) => {
              refs.current[c.id] = el;
            }}
            onClick={() => onSelect(c.id)}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm transition-colors",
              active
                ? "border-ember-500 bg-ember-500 text-white"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            <c.icon className="h-3.5 w-3.5" />
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
