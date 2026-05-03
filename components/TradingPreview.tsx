"use client";

import { motion } from "framer-motion";
import { Activity, ArrowDownRight, ArrowUpRight, Search } from "lucide-react";
import { Badge } from "./ui/Badge";

// Deterministic seeded pseudo-random so SSR and CSR match
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const CANDLES = (() => {
  const rng = mulberry32(42);
  return Array.from({ length: 30 }).map((_, i) => {
    const x = 20 + i * 19;
    const open = 100 + Math.sin(i * 0.6) * 50 + rng() * 10;
    const close = open + (rng() - 0.4) * 30;
    const high = Math.max(open, close) + rng() * 10;
    const low = Math.min(open, close) - rng() * 10;
    const up = close > open;
    return {
      x,
      low: +low.toFixed(2),
      high: +high.toFixed(2),
      bodyY: +Math.min(open, close).toFixed(2),
      bodyH: +Math.max(2, Math.abs(close - open)).toFixed(2),
      color: up ? "#00FFB2" : "#FF6B7A",
    };
  });
})();

const orderbook = {
  asks: [
    { p: 112532.4, s: 0.412, total: 46362.36 },
    { p: 112528.1, s: 1.202, total: 135259.74 },
    { p: 112520.0, s: 0.085, total: 9564.2 },
    { p: 112515.7, s: 2.014, total: 226566.6 },
    { p: 112510.0, s: 0.357, total: 40166.07 },
  ],
  bids: [
    { p: 112498.2, s: 0.621, total: 69861.4 },
    { p: 112494.5, s: 1.84, total: 206989.88 },
    { p: 112488.2, s: 0.077, total: 8661.59 },
    { p: 112480.0, s: 3.21, total: 361060.8 },
    { p: 112472.4, s: 0.452, total: 50837.52 },
  ],
};

export function TradingPreview() {
  return (
    <section id="markets" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge icon={<Activity size={12} />}>Aperçu de la plateforme</Badge>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Une interface conçue pour la{" "}
            <span className="gradient-text">vitesse</span>.
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Données en temps réel, ordres avancés, vue multi-actifs. Tout ce
            dont vous avez besoin sur un seul écran.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto mt-16 w-full max-w-6xl"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-accent-500/30 via-emerald-glow/10 to-accent-500/20 opacity-60 blur-3xl" />

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface/90 shadow-card backdrop-blur-2xl">
            <Topbar />
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <Pairs />
              <ChartPanel />
              <OrderbookPanel />
            </div>
            <BottomBar />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Topbar() {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-surface-1/80 px-5 py-3">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-500/70" />
          <span className="h-3 w-3 rounded-full bg-amber-400/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-glow/70" />
        </div>
        <div className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 sm:flex">
          <Search size={12} />
          <span>nexus.trade / pro</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[11px] text-white/50">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-glow" />
        Connecté · Latence 0.4ms
      </div>
    </div>
  );
}

function Pairs() {
  const pairs = [
    { s: "BTC/USDT", p: 112488.2, c: 4.21 },
    { s: "ETH/USDT", p: 4123.55, c: 2.84 },
    { s: "SOL/USDT", p: 248.32, c: 6.12 },
    { s: "BNB/USDT", p: 712.4, c: -1.2 },
    { s: "XRP/USDT", p: 2.41, c: 3.05 },
    { s: "AVAX/USDT", p: 48.7, c: 5.4 },
    { s: "LINK/USDT", p: 22.18, c: 1.32 },
    { s: "DOGE/USDT", p: 0.42, c: -0.7 },
  ];
  return (
    <aside className="hidden border-r border-white/10 lg:col-span-3 lg:block">
      <div className="px-4 pb-2 pt-4 text-[11px] font-medium uppercase tracking-wider text-white/40">
        Paires populaires
      </div>
      <ul className="px-2">
        {pairs.map((p, i) => (
          <li
            key={p.s}
            className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
              i === 0 ? "bg-white/5" : "hover:bg-white/5"
            }`}
          >
            <span className="text-white/80">{p.s}</span>
            <span className="font-mono tabular-nums text-white/90">
              ${p.p.toLocaleString()}
            </span>
            <span
              className={`font-mono text-xs tabular-nums ${
                p.c >= 0 ? "text-emerald-glow" : "text-rose-400"
              }`}
            >
              {p.c >= 0 ? "+" : ""}
              {p.c}%
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ChartPanel() {
  return (
    <div className="border-b border-white/10 lg:col-span-6 lg:border-b-0 lg:border-r">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-xl font-semibold">BTC/USDT</span>
          <span className="font-mono text-2xl font-semibold tabular-nums text-emerald-glow">
            $112,488.20
          </span>
          <span className="rounded-md bg-emerald-glow/15 px-2 py-0.5 font-mono text-xs text-emerald-glow">
            +4.21%
          </span>
        </div>
        <div className="hidden items-center gap-1 sm:flex">
          {["1m", "15m", "1H", "4H", "1D", "1W"].map((t, i) => (
            <button
              key={t}
              className={`rounded px-2 py-1 text-[11px] ${
                i === 2
                  ? "bg-accent-500/20 text-accent-200"
                  : "text-white/50 hover:bg-white/5"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="relative h-72 px-2 py-3 sm:h-80">
        <Chart />
      </div>
    </div>
  );
}

function Chart() {
  return (
    <svg
      viewBox="0 0 600 280"
      preserveAspectRatio="none"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#00FFB2" />
          <stop offset="100%" stopColor="#7C5CFF" />
        </linearGradient>
      </defs>
      {[40, 90, 140, 190, 240].map((y) => (
        <line
          key={y}
          x1="0"
          x2="600"
          y1={y}
          y2={y}
          stroke="rgba(255,255,255,0.05)"
        />
      ))}

      {CANDLES.map((c, i) => (
        <g key={i} opacity="0.45">
          <line
            x1={c.x}
            x2={c.x}
            y1={c.low}
            y2={c.high}
            stroke={c.color}
            strokeWidth="1"
          />
          <rect
            x={c.x - 4}
            y={c.bodyY}
            width="8"
            height={c.bodyH}
            fill={c.color}
          />
        </g>
      ))}

      <path
        d="M0,200 C50,180 100,120 160,140 C220,160 260,80 320,90 C380,100 420,40 480,55 C540,70 580,30 600,40 L600,280 L0,280 Z"
        fill="url(#area)"
      />
      <path
        d="M0,200 C50,180 100,120 160,140 C220,160 260,80 320,90 C380,100 420,40 480,55 C540,70 580,30 600,40"
        fill="none"
        stroke="url(#line)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="600" cy="40" r="4" fill="#00FFB2">
        <animate
          attributeName="r"
          values="4;7;4"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

function OrderbookPanel() {
  return (
    <div className="lg:col-span-3">
      <div className="border-b border-white/10 px-4 py-3 text-[11px] font-medium uppercase tracking-wider text-white/40">
        Order book
      </div>
      <div className="grid grid-cols-3 px-4 pb-1 pt-2 text-[10px] uppercase tracking-wider text-white/40">
        <span>Prix</span>
        <span className="text-right">Taille</span>
        <span className="text-right">Total</span>
      </div>
      <div className="space-y-0.5 px-2">
        {orderbook.asks.map((o, i) => (
          <Row key={"a" + i} {...o} type="ask" />
        ))}
      </div>
      <div className="my-2 mx-4 flex items-center justify-between border-y border-white/10 py-2">
        <span className="font-mono text-sm font-semibold text-emerald-glow">
          112,500.10
        </span>
        <span className="text-[10px] text-white/40">spread 11.9</span>
      </div>
      <div className="space-y-0.5 px-2 pb-3">
        {orderbook.bids.map((o, i) => (
          <Row key={"b" + i} {...o} type="bid" />
        ))}
      </div>
    </div>
  );
}

function Row({
  p,
  s,
  total,
  type,
}: {
  p: number;
  s: number;
  total: number;
  type: "ask" | "bid";
}) {
  const color = type === "ask" ? "text-rose-400" : "text-emerald-glow";
  const bg = type === "ask" ? "bg-rose-500/5" : "bg-emerald-glow/5";
  return (
    <div className="relative grid grid-cols-3 px-2 py-1 text-[11px] font-mono tabular-nums">
      <span
        className={`absolute inset-y-0 right-0 ${bg}`}
        style={{ width: `${Math.min(100, total / 4000)}%` }}
      />
      <span className={`relative ${color}`}>{p.toLocaleString()}</span>
      <span className="relative text-right text-white/70">{s.toFixed(3)}</span>
      <span className="relative text-right text-white/50">
        {total.toLocaleString()}
      </span>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-surface-1/80 px-5 py-3 text-xs text-white/55">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <ArrowUpRight size={14} className="text-emerald-glow" /> Long ouvert ·
          0.42 BTC
        </span>
        <span className="flex items-center gap-1.5">
          <ArrowDownRight size={14} className="text-rose-400" /> Short fermé · +2.1%
        </span>
      </div>
      <div className="flex items-center gap-3 font-mono">
        <span>PnL <span className="text-emerald-glow">+$12,418.50</span></span>
        <span>Equity <span className="text-white">$284,902</span></span>
      </div>
    </div>
  );
}
