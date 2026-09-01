"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { categories, items, type MenuItem } from "@/lib/menu-data";
import { CategoryTabs } from "@/components/menu/category-tabs";
import { ItemCard } from "@/components/menu/item-card";
import { ItemSheet } from "@/components/menu/item-sheet";

export default function MenuPage() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const isClickScroll = useRef(false);

  const grouped = useMemo(
    () =>
      categories.map((c) => ({
        category: c,
        items: items.filter((i) => i.categoryId === c.id),
      })),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScroll.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    categories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function handleSelectCategory(id: string) {
    setActiveId(id);
    isClickScroll.current = true;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => {
      isClickScroll.current = false;
    }, 600);
  }

  const selectedCategory = selectedItem
    ? categories.find((c) => c.id === selectedItem.categoryId) ?? null
    : null;

  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 z-0 grain-overlay" />

      <div className="relative z-10 mx-auto max-w-md">
        <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
          <div className="flex items-center justify-between px-4 pt-4">
            <Link
              href="/"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Nazad"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div className="text-center">
              <p className="font-display text-lg leading-none">Kod Vatre</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Roštilj &amp; vino
              </p>
            </div>
            {/* <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
              Sto 4
            </span> */}
          </div>

          <CategoryTabs
            categories={categories}
            activeId={activeId}
            onSelect={handleSelectCategory}
          />
        </header>

        <main className="px-4 pb-24">
          {grouped.map(({ category, items: catItems }) => (
            <section
              key={category.id}
              id={category.id}
              style={{ scrollMarginTop: "7.5rem" }}
              className="pt-7 first:pt-5"
            >
              <h2 className="mb-3 flex items-center gap-2 font-display text-xl">
                <category.icon className="h-5 w-5 text-ember-400" />
                {category.label}
              </h2>
              <div className="flex flex-col gap-3">
                {catItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    category={category}
                    onSelect={() => setSelectedItem(item)}
                  />
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>

      <ItemSheet
        item={selectedItem}
        category={selectedCategory}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
