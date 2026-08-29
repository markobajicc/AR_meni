"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Flame, Leaf, Sparkles, X } from "lucide-react";
import { DishThumb } from "./dish-thumb";
import type { Category, MenuItem } from "@/lib/menu-data";

const Dish3DViewer = dynamic(() => import("./dish-3d-viewer"), {
  ssr: false,
  loading: () => (
    <div className="aspect-square w-full animate-pulse rounded-3xl border border-border bg-card" />
  ),
});

const tagConfig = {
  vegan: { label: "Vegan", icon: Leaf },
  ljuto: { label: "Ljuto", icon: Flame },
  preporuka: { label: "Preporuka", icon: Sparkles },
};

export function ItemSheet({
  item,
  category,
  onClose,
}: {
  item: MenuItem | null;
  category: Category | null;
  onClose: () => void;
}) {
  const open = !!item && !!category;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="fixed inset-x-0 bottom-0 z-50 mx-auto max-h-[88vh] w-full max-w-md overflow-y-auto rounded-t-[2rem] border-t border-border bg-background p-5 pb-8"
          >
            <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-muted" />

            <div className="relative">
              {item!.model3d ? (
                <Dish3DViewer model3d={item!.model3d} name={item!.name} />
              ) : (
                <div className="relative">
                  <DishThumb icon={category!.icon} size="lg" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5 text-ember-400" />
                    3D / AR prikaz — uskoro
                  </span>
                </div>
              )}

              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-muted-foreground backdrop-blur"
                aria-label="Zatvori"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
              {category!.label}
            </p>
            <h2 className="mt-1 font-display text-2xl">{item!.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {item!.description}
            </p>

            {item!.tags && item!.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item!.tags.map((tag) => {
                  const t = tagConfig[tag];
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      <t.icon className="h-3 w-3" />
                      {t.label}
                    </span>
                  );
                })}
              </div>
            )}

            <div className="mt-6 flex items-center justify-between">
              <span className="font-display text-2xl text-ember-300">
                {item!.price} din
              </span>
            </div>

            {!item!.model3d && (
              <button
                disabled
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-dashed border-border py-3.5 text-sm text-muted-foreground"
              >
                <Box className="h-4 w-4" />
                Pogledaj u AR / 3D
                <span className="ml-1 rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wide">
                  Uskoro
                </span>
              </button>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
