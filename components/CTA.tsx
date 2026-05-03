"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Sparkles } from "lucide-react";
import { Badge } from "./ui/Badge";

export function CTA() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-surface-2 via-surface-1 to-background p-12 text-center sm:p-20"
      >
        <div className="pointer-events-none absolute -top-20 left-1/2 h-96 w-[80%] -translate-x-1/2 rounded-full bg-accent-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-emerald-glow/20 blur-3xl" />
        <div
          aria-hidden
          className="absolute inset-0 bg-grid-pattern bg-[size:38px_38px] opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />

        <div className="relative">
          <Badge icon={<Sparkles size={12} />}>Offre de lancement</Badge>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Rejoignez le futur du trading.
            <br />
            <span className="gradient-text-premium italic">Aujourd'hui.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
            Créez votre compte en 90 secondes. Recevez 50 USDT offerts à votre
            premier dépôt.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" withArrow>
              Créer mon compte
            </Button>
            <Button variant="secondary" size="lg">
              Parler à un expert
            </Button>
          </div>
          <div className="mt-8 text-xs text-white/40">
            Aucune carte requise · Régulé MiCA · Assurance Lloyd's 500M$
          </div>
        </div>
      </motion.div>
    </section>
  );
}
