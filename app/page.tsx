import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { TradingPreview } from "@/components/TradingPreview";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <Features />
      <TradingPreview />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
