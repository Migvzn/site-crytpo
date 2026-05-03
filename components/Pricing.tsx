"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "0",
    period: "/mois",
    desc: "Pour découvrir le trading crypto sans engagement.",
    features: [
      "Frais 0,10 % maker / 0,15 % taker",
      "Accès à 80+ cryptomonnaies",
      "Wallet sécurisé MPC",
      "Support 7j/7",
    ],
    cta: "Commencer gratuitement",
    highlight: false,
  },
  {
    name: "Pro",
    price: "29",
    period: "/mois",
    desc: "L'arme du trader actif. Tous les outils, frais réduits.",
    features: [
      "Frais 0,02 % maker / 0,05 % taker",
      "200+ cryptos · Futures jusqu'à 100x",
      "IA prédictive Quantum incluse",
      "Order book Level 3 + API illimitée",
      "Support prioritaire dédié",
    ],
    cta: "Passer à Pro",
    highlight: true,
  },
  {
    name: "Institutionnel",
    price: "Sur mesure",
    period: "",
    desc: "Liquidité dédiée et SLA pour fonds et trésoreries.",
    features: [
      "OTC desk & block trading",
      "Custody de niveau bancaire",
      "Reporting MiFID II / IFRS",
      "Account manager dédié",
      "API white-label",
    ],
    cta: "Contactez l'équipe",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-radial-spotlight opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-300">
            Tarifs
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Simple, transparent, <span className="gradient-text">premium</span>.
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Aucun frais caché. Annulez quand vous voulez. Économisez davantage
            avec le volume.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-3xl border p-8",
                t.highlight
                  ? "border-accent-500/40 bg-gradient-to-b from-accent-500/10 via-surface-2/60 to-surface/80 shadow-glow"
                  : "border-white/10 bg-surface/60"
              )}
            >
              {t.highlight && (
                <>
                  <div className="absolute -top-px left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-300 to-transparent" />
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-accent-500/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-200">
                    <Sparkles size={10} /> Le plus choisi
                  </span>
                </>
              )}
              <div>
                <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm text-white/55">{t.desc}</p>
              </div>
              <div className="mt-8 flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold tracking-tight">
                  {t.price.match(/^\d/) ? "€" : ""}
                  {t.price}
                </span>
                <span className="text-sm text-white/50">{t.period}</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/75">
                    <span
                      className={cn(
                        "mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full",
                        t.highlight
                          ? "bg-accent-500/30 text-accent-100"
                          : "bg-white/5 text-white/70"
                      )}
                    >
                      <Check size={12} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button
                  className="w-full"
                  variant={t.highlight ? "primary" : "secondary"}
                  withArrow
                >
                  {t.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
