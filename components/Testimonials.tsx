"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  {
    quote:
      "Nexus a réduit nos coûts d'exécution de 64 % et nous offre une transparence inégalée sur le marché. C'est devenu notre venue principale.",
    author: "Élise Marchand",
    role: "CIO, Helios Capital",
    badge: "Hedge fund · 1.2B$ AUM",
  },
  {
    quote:
      "L'IA prédictive est bluffante. Mes signaux discrétionnaires sont maintenant validés en temps réel par un modèle qui voit ce que je ne vois pas.",
    author: "Karim Benali",
    role: "Trader prop, ex-Goldman Sachs",
    badge: "Quant trading desk",
  },
  {
    quote:
      "Une UI soignée jusqu'au pixel, des frais imbattables et un support qui répond en moins de 30 secondes. Je n'ai jamais vu ça ailleurs.",
    author: "Sofia Lindqvist",
    role: "Fondatrice, ChainBridge DAO",
    badge: "DeFi protocol",
  },
];

const logos = ["Coindesk", "Bloomberg", "TechCrunch", "Forbes", "WIRED", "Reuters"];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-300">
            Approuvé par les pros
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Choisi par les <span className="gradient-text">leaders</span> du marché
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.figure
              key={it.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="relative flex flex-col rounded-3xl border border-white/10 bg-surface/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
            >
              <Quote className="h-7 w-7 text-accent-400/60" />
              <blockquote className="mt-5 text-[15px] leading-relaxed text-white/80">
                "{it.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-accent-500 to-emerald-glow text-sm font-bold text-background">
                  {it.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {it.author}
                  </div>
                  <div className="text-xs text-white/50">{it.role}</div>
                </div>
                <span className="ml-auto rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-white/50">
                  {it.badge}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {logos.map((l) => (
            <span
              key={l}
              className="font-display text-lg font-medium tracking-widest text-white/40"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
