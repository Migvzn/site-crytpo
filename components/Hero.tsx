"use client";

import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { ErrorBoundary } from "./ui/ErrorBoundary";

const Spline = lazy(() => import("@splinetool/react-spline"));

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-radial-spotlight" />
      <div className="glow-orb -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 bg-accent-500/40" />
      <div className="glow-orb top-40 right-0 h-[360px] w-[360px] bg-emerald-glow/20" />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge icon={<Sparkles size={12} />}>
              Nouveau · Moteur d'IA prédictive v3
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">Tradez la crypto</span>
            <br />
            <span className="text-white/95">avec une </span>
            <span className="gradient-text-premium italic">précision</span>
            <br />
            <span className="text-white/95">institutionnelle.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/65"
          >
            Nexus combine une exécution sub-milliseconde, des frais de
            <span className="mx-1 rounded-md bg-white/5 px-1.5 py-0.5 font-mono text-[0.95em] text-emerald-glow">
              0.02%
            </span>
            et une IA prédictive entraînée sur 10 ans de données on-chain. La
            plateforme préférée des traders pros et des fonds institutionnels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" withArrow>
              Ouvrir un compte gratuit
            </Button>
            <Button size="lg" variant="secondary">
              Voir la démo live
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            <Trust icon={<ShieldCheck size={14} />} label="Régulé MiCA" />
            <Trust icon={<Zap size={14} />} label="Latence 0.4 ms" />
            <Trust icon={<Sparkles size={14} />} label="ISO 27001" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative lg:col-span-5"
        >
          <SplineStage />
          <FloatingPriceCard />
          <FloatingStatsCard />
        </motion.div>
      </div>
    </section>
  );
}

function Trust({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-white/60">
      <span className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-accent-300">
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
}

function SplineFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Concentric rings */}
      <div className="absolute h-[88%] w-[88%] rounded-full border border-white/5" />
      <div className="absolute h-[70%] w-[70%] rounded-full border border-accent-500/20" />
      <div className="absolute h-[52%] w-[52%] rounded-full border border-emerald-glow/15" />
      <div className="absolute h-[34%] w-[34%] rounded-full border border-white/10 animate-spin-slow" />

      {/* Glow orb sphere */}
      <div className="relative h-44 w-44 animate-float">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-400 via-accent-600 to-accent-800 blur-[2px]" />
        <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/40 via-transparent to-transparent" />
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.5),0_0_120px_-10px_rgba(124,92,255,0.7)]" />
        <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-white/30 blur-md" />
      </div>

      {/* Floating coin chips */}
      <div className="absolute top-10 right-12 h-12 w-12 animate-float rounded-full bg-gradient-to-br from-[#F7931A] to-[#FFB347] shadow-glow flex items-center justify-center text-xl font-bold text-[#1a1100]">
        ₿
      </div>
      <div className="absolute bottom-16 left-12 h-10 w-10 animate-float rounded-full bg-gradient-to-br from-[#627EEA] to-[#3C5AC8] shadow-glow flex items-center justify-center text-sm font-bold text-white" style={{ animationDelay: '1s' }}>
        Ξ
      </div>
      <div className="absolute bottom-24 right-8 h-9 w-9 animate-float rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195] shadow-glow flex items-center justify-center text-xs font-bold text-white" style={{ animationDelay: '2s' }}>
        S
      </div>

      {/* Particle dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/40 animate-pulse-glow"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

function SplineStage() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-surface-2 via-surface to-background shadow-card">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent-500/10 via-transparent to-emerald-glow/10" />
      <ErrorBoundary fallback={<SplineFallback />}>
        <Suspense fallback={<SplineFallback />}>
          <Spline
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="!h-full !w-full"
          />
        </Suspense>
      </ErrorBoundary>
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
    </div>
  );
}

function FloatingPriceCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-6 top-10 hidden w-60 rounded-2xl glass-strong p-4 shadow-card sm:block"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#F7931A] to-[#FFB347] text-[#1a1100] font-bold">
          ₿
        </div>
        <div>
          <div className="text-xs text-white/50">Bitcoin</div>
          <div className="font-mono text-base font-semibold tabular-nums">
            $112,488.20
          </div>
        </div>
        <div className="ml-auto rounded-md bg-emerald-glow/15 px-2 py-1 font-mono text-[11px] font-semibold text-emerald-glow">
          +4.21%
        </div>
      </div>
      <Sparkline />
    </motion.div>
  );
}

function FloatingStatsCard() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-4 -right-4 hidden w-64 rounded-2xl glass-strong p-4 shadow-card sm:block"
    >
      <div className="flex items-center justify-between text-xs text-white/50">
        <span>Volume 24h</span>
        <span className="text-emerald-glow">● Live</span>
      </div>
      <div className="mt-1 font-mono text-2xl font-semibold tabular-nums">
        $48.2B
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
        {[
          ["BTC", "62%"],
          ["ETH", "21%"],
          ["ALT", "17%"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="rounded-lg border border-white/10 bg-white/[0.02] px-2 py-1.5"
          >
            <div className="text-white/50">{k}</div>
            <div className="font-mono text-white">{v}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 200 50" className="mt-3 h-10 w-full">
      <defs>
        <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#00FFB2" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00FFB2" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,40 L20,32 L40,36 L60,22 L80,28 L100,18 L120,24 L140,12 L160,18 L180,8 L200,14 L200,50 L0,50 Z"
        fill="url(#lg)"
      />
      <path
        d="M0,40 L20,32 L40,36 L60,22 L80,28 L100,18 L120,24 L140,12 L160,18 L180,8 L200,14"
        fill="none"
        stroke="#00FFB2"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
