"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

const navLinks = [
  { label: "Marchés", href: "#markets" },
  { label: "Trading", href: "#trading" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Institutionnel", href: "#enterprise" },
  { label: "Apprendre", href: "#learn" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500",
          scrolled
            ? "border-white/10 bg-background/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            : "border-white/5 bg-white/[0.02] backdrop-blur-xl"
        )}
      >
        <Link href="#" className="group flex items-center gap-2.5 pl-2">
          <Logo />
          <span className="font-display text-lg font-semibold tracking-tight">
            Nexus
          </span>
          <span className="ml-1 hidden rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-white/50 sm:inline-block">
            Pro
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm">
            Connexion
          </Button>
          <Button variant="primary" size="sm" withArrow>
            Commencer
          </Button>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-6xl rounded-3xl border border-white/10 bg-background/95 p-6 backdrop-blur-2xl md:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
              <Button variant="secondary" size="md">
                Connexion
              </Button>
              <Button variant="primary" size="md" withArrow>
                Commencer
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo() {
  return (
    <div className="relative flex h-9 w-9 items-center justify-center">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-500 via-accent-300 to-emerald-glow opacity-80 blur-md" />
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-accent-600 to-accent-800 shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M5 7L12 3L19 7L19 17L12 21L5 17V7Z"
            stroke="white"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M5 7L12 11L19 7M12 11V21"
            stroke="white"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
