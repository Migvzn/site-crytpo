"use client";

import { motion } from "framer-motion";

const coins = [
  { sym: "BTC", name: "Bitcoin", price: 112488.2, change: 4.21, color: "#F7931A" },
  { sym: "ETH", name: "Ethereum", price: 4123.55, change: 2.84, color: "#627EEA" },
  { sym: "SOL", name: "Solana", price: 248.32, change: 6.12, color: "#9945FF" },
  { sym: "BNB", name: "BNB", price: 712.4, change: -1.2, color: "#F0B90B" },
  { sym: "XRP", name: "XRP", price: 2.41, change: 3.05, color: "#23292F" },
  { sym: "ADA", name: "Cardano", price: 1.24, change: 0.96, color: "#0033AD" },
  { sym: "AVAX", name: "Avalanche", price: 48.7, change: 5.4, color: "#E84142" },
  { sym: "DOGE", name: "Dogecoin", price: 0.42, change: -0.7, color: "#C2A633" },
  { sym: "LINK", name: "Chainlink", price: 22.18, change: 1.32, color: "#2A5ADA" },
  { sym: "MATIC", name: "Polygon", price: 1.08, change: 2.0, color: "#8247E5" },
];

export function Ticker() {
  const items = [...coins, ...coins];
  return (
    <div className="relative isolate border-y border-white/5 bg-surface/50 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex w-max gap-10 py-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        {items.map((c, i) => (
          <div key={i} className="flex items-center gap-3 px-2 text-sm">
            <span
              className="grid h-7 w-7 place-items-center rounded-full text-[11px] font-bold"
              style={{
                background: `linear-gradient(135deg, ${c.color}, ${c.color}AA)`,
                color: "#fff",
              }}
            >
              {c.sym[0]}
            </span>
            <span className="font-medium text-white/80">{c.sym}</span>
            <span className="font-mono tabular-nums text-white">
              ${c.price.toLocaleString()}
            </span>
            <span
              className={`font-mono text-xs tabular-nums ${
                c.change >= 0 ? "text-emerald-glow" : "text-rose-400"
              }`}
            >
              {c.change >= 0 ? "▲" : "▼"} {Math.abs(c.change).toFixed(2)}%
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
