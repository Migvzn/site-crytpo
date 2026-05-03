"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 240, suffix: "B+", label: "Volume traité (USD)" },
  { value: 3.2, suffix: "M", label: "Traders actifs" },
  { value: 180, suffix: "+", label: "Cryptos disponibles" },
  { value: 0.4, suffix: " ms", label: "Latence d'exécution" },
];

function Counter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  const display =
    value < 10
      ? n.toFixed(1)
      : Math.round(n).toLocaleString();
  return (
    <span className="font-mono tabular-nums">
      {display}
      <span className="text-accent-300">{suffix}</span>
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section ref={ref} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-surface-2/80 to-surface/40 p-10 shadow-card sm:p-14">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} inView={inView} />
                </div>
                <div className="mt-2 text-sm text-white/55">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
