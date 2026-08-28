"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ScanLine, Sparkles, TrendingUp, Utensils } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

const categories = [
  "Predjela",
  "Roštilj",
  "Testenine",
  "Riba",
  "Vegan",
  "Deserti",
  "Vina",
  "Kokteli",
];

const features = [
  {
    title: "Skeniraj i vidi jelo",
    body: "Gost skenira QR na stolu i jelo se pojavljuje u punoj veličini, na njegovom stolu, pre nego što poruči.",
    icon: ScanLine,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Veći prosečan račun",
    body: "Vizuelizacija poznatih jela povećava prodaju dodataka i skupljih porcija.",
    icon: TrendingUp,
    span: "md:col-span-1",
  },
  {
    title: "Bez tuđe aplikacije",
    body: "Radi direktno u browseru, ništa se ne instalira.",
    icon: Sparkles,
    span: "md:col-span-1",
  },
  {
    title: "Meni koji se menja u sekundi",
    body: "Ažuriraj cene, sastojke ili sezonsku ponudu iz jednog panela — bez novog štampanja.",
    icon: Utensils,
    span: "md:col-span-2",
  },
];

export default function Home() {
  return (
    <div className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 grain-overlay" />

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-ember-500" />
          <span className="font-display text-lg tracking-tight">AR Meni</span>
        </div>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#kako-radi" className="hover:text-foreground transition-colors">
            Kako radi
          </a>
          <a href="#prednosti" className="hover:text-foreground transition-colors">
            Prednosti
          </a>
          <a href="#kontakt" className="hover:text-foreground transition-colors">
            Kontakt
          </a>
          <Link href="/meni" className="hover:text-foreground transition-colors">
            Demo meni
          </Link>
        </nav>
        <Button size="sm">Zakaži demo</Button>
      </header>

      <section className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-ember-400" />
            AR za restorane
          </span>

          <h1 className="mt-6 text-balance font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Meni koji gost{" "}
            <span className="text-ember-400">vidi na stolu</span>, pre nego
            što poruči.
          </h1>

          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            AR Meni pretvara običan QR kod u proširenu realnost: jelo se
            pojavi na stolu u realnoj veličini, gost odlučuje brže, a vi
            prodajete više.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button size="lg">
              Zakaži demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Link
              href="/meni"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Pogledaj kako radi
            </Link>
          </div>

          <dl className="mt-16 flex gap-10">
            {[
              ["40%", "veći prosečan račun"],
              ["2.3x", "brže odlučivanje gostiju"],
              ["120+", "restorana koristi"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl text-foreground">
                  {value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-ember-500/20 blur-3xl" />

          <div className="relative aspect-[9/16] rounded-[2.5rem] border border-border bg-card p-3 shadow-2xl">
            <div className="relative h-full overflow-hidden rounded-[1.85rem] bg-gradient-to-b from-clay-900 via-background to-background">
              <div className="flex items-center justify-between px-5 pt-5 text-xs text-muted-foreground">
                <span>Sto 12</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ember-400/40 px-2.5 py-1 text-ember-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember-400" />
                  AR aktivan
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-40 w-40">
                  <div className="absolute inset-0 rounded-full bg-ember-500/30 blur-2xl" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-ember-400 to-ember-700" />
                  <div className="absolute inset-9 rounded-full bg-clay-100/90" />
                  <div className="absolute inset-[3.2rem] rounded-full bg-gradient-to-br from-ember-300 to-ember-600" />
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border/60 bg-background/70 p-4 backdrop-blur">
                <p className="font-display text-base">Riblja čorba</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Domaća, sa svežim povrćem · 890 din
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="relative overflow-hidden border-y border-border py-5">
        <div className="flex w-max animate-marquee gap-10">
          {[...categories, ...categories].map((c, i) => (
            <span
              key={i}
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <section id="prednosti" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <span className="text-xs uppercase tracking-widest text-ember-400">
          Zašto AR Meni
        </span>
        <h2 className="mt-4 max-w-xl text-balance font-display text-4xl leading-tight tracking-tight">
          Digitalni meni koji stvarno menja odluku gosta.
        </h2>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-3">
          {features.map(({ title, body, icon: Icon, span }) => (
            <div
              key={title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors hover:border-ember-500/40 ${span}`}
            >
              <Icon className="h-6 w-6 text-ember-400" />
              <div>
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="relative mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-ember-500/20 blur-3xl" />
          <h2 className="relative text-balance font-display text-4xl tracking-tight sm:text-5xl">
            Spremni da vaš meni oživi?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-muted-foreground">
            Zakažite kratak demo i za 15 minuta vidite kako AR Meni izgleda
            na vašim jelima.
          </p>
          <Button size="lg" className="relative mt-8">
            Zakaži demo <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <footer className="relative border-t border-border py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AR Meni. Sva prava zadržana.
      </footer>
    </div>
  );
}
