import { Flame, Leaf, Sparkles, Box } from "lucide-react";
import { DishThumb } from "./dish-thumb";
import type { MenuItem, Category } from "@/lib/menu-data";

const tagConfig = {
  vegan: { label: "Vegan", icon: Leaf, className: "text-green-400 border-green-400/30" },
  ljuto: { label: "Ljuto", icon: Flame, className: "text-ember-400 border-ember-400/30" },
  preporuka: { label: "Preporuka", icon: Sparkles, className: "text-amber-300 border-amber-300/30" },
};

export function ItemCard({
  item,
  category,
  onSelect,
}: {
  item: MenuItem;
  category: Category;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className="flex w-full items-start gap-4 rounded-2xl border border-border bg-card p-3 text-left transition-colors active:border-ember-500/40"
    >
      <DishThumb icon={category.icon} size="sm" />

      <div className="min-w-0 flex-1 py-0.5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base leading-snug">{item.name}</h3>
          <span className="shrink-0 font-display text-base text-ember-300">
            {item.price} din
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {item.description}
        </p>

        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          {item.tags?.map((tag) => {
            const t = tagConfig[tag];
            return (
              <span
                key={tag}
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] ${t.className}`}
              >
                <t.icon className="h-3 w-3" />
                {t.label}
              </span>
            );
          })}
          <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
            <Box className="h-3 w-3" />
            AR
          </span>
        </div>
      </div>
    </button>
  );
}
