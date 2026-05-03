import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#04060B",
        foreground: "#F4F6FA",
        accent: {
          DEFAULT: "#7C5CFF",
          50: "#F1EEFF",
          100: "#E2DBFF",
          200: "#C4B7FF",
          300: "#A693FF",
          400: "#8970FF",
          500: "#7C5CFF",
          600: "#5E3DE0",
          700: "#4528B5",
          800: "#2E1B82",
          900: "#1A0F52",
        },
        emerald: {
          glow: "#00FFB2",
        },
        gold: {
          DEFAULT: "#F5C56B",
        },
        surface: {
          DEFAULT: "#0A0E18",
          1: "#0E1320",
          2: "#141A2B",
          3: "#1B2238",
        },
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-spotlight":
          "radial-gradient(600px circle at 50% 0%, rgba(124,92,255,0.18), transparent 70%)",
        "premium-gradient":
          "linear-gradient(135deg, #7C5CFF 0%, #00FFB2 100%)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(124, 92, 255, 0.6)",
        "glow-emerald": "0 0 80px -20px rgba(0, 255, 178, 0.45)",
        card: "0 30px 60px -30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee 50s linear infinite reverse",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
