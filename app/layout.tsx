import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MiamiBackground } from "@/components/MiamiBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus — Trade Crypto Like a Pro",
  description:
    "La plateforme de trading crypto la plus avancée. Exécution institutionnelle, frais de 0,02 %, IA prédictive et infrastructure ultra-rapide.",
  keywords: [
    "crypto",
    "trading",
    "bitcoin",
    "ethereum",
    "exchange",
    "DeFi",
    "Nexus",
  ],
  metadataBase: new URL("https://nexus.trade"),
  openGraph: {
    title: "Nexus — Trade Crypto Like a Pro",
    description:
      "Plateforme de trading crypto premium avec exécution institutionnelle.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${space.variable} ${mono.variable} dark`}
    >
      <body className="font-sans bg-background text-foreground antialiased">
        <MiamiBackground />
        {children}
      </body>
    </html>
  );
}
