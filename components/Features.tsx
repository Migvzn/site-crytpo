"use client";

import { motion } from "framer-motion";
import {
  Brain,
  ChartCandlestick,
  Layers,
  Lock,
  Rocket,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA prédictive Quantum",
    desc: "Modèles entraînés sur 10 ans de données on-chain pour anticiper les mouvements du marché avec 87% de précision.",
    accent: "from-accent-500/30 to-transparent",
  },
  {
    icon: ChartCandlestick,
    title: "Trading institutionnel",
    desc: "Order book unifié, exécution sub-milliseconde, agrégation de liquidité multi-exchanges.",
    accent: "from-emerald-glow/30 to-transparent",
  },
  {
    icon: Lock,
    title: "Sécurité de niveau bancaire",
    desc: "Cold storage 98%, MPC wallet, audits SOC 2 Type II, assurance Lloyd's de 500M$.",
    accent: "from-gold/30 to-transparent",
  },
  {
    icon: Layers,
    title: "DeFi unifié",
    desc: "Staking, lending, yield farming et perpétuels jusqu'à 100x — le tout dans une interface unique.",
    accent: "from-accent-500/30 to-transparent",
  },
  {
    icon: Wallet,
    title: "Multi-chain natif",
    desc: "Bitcoin, Ethereum, Solana, BSC, Arbitrum, Base, Polygon — bridges intégrés sans friction.",
    accent: "from-emerald-glow/30 to-transparent",
  },
  {
    icon: Rocket,
    title: "Frais ultra-bas",
    desc: "0,02 % de frais maker, 0,05 % taker. Aucun frais caché. Réductions volume jusqu'à 60 %.",
    accent: "from-gold/30 to-transparent",
  },
];

export function Features() {
  return (
    <section
      id="trading"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-[0.2em] text-accent-300"
          >
            Pourquoi Nexus
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            Une infrastructure pensée pour la <span className="gradient-text">performance</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-white/60"
          >
            Tout ce dont un trader pro a besoin pour exécuter, analyser et
            gagner — sans compromis.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-glow"
            >
              <div
                className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-radial blur-3xl opacity-60 bg-gradient-to-br ${f.accent}`}
              />
              <div className="relative">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-white shadow-inner">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                  {f.desc}
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
