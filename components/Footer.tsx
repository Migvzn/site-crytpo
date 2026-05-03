import { Github, Twitter, Linkedin, Send } from "lucide-react";

const cols = [
  {
    title: "Produits",
    links: ["Spot trading", "Futures", "Staking", "Earn", "OTC desk", "API"],
  },
  {
    title: "Entreprise",
    links: ["À propos", "Carrières", "Presse", "Partenaires", "Blog", "Contact"],
  },
  {
    title: "Légal",
    links: [
      "Conditions",
      "Confidentialité",
      "Cookies",
      "Régulation MiCA",
      "Audits",
    ],
  },
  {
    title: "Apprendre",
    links: ["Académie", "Glossaire", "Guides PDF", "Webinaires", "Documentation"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/20 bg-gradient-to-br from-accent-600 to-accent-800">
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
              <span className="font-display text-lg font-semibold">Nexus</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              La plateforme de trading crypto la plus performante au monde.
              Pensée par des traders, pour des traders.
            </p>

            <form className="mt-8 flex max-w-sm items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 pl-4 focus-within:border-accent-500/40">
              <input
                type="email"
                placeholder="votre@email.com"
                className="h-9 flex-1 bg-transparent text-sm placeholder:text-white/35 focus:outline-none"
              />
              <button
                aria-label="S'inscrire"
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-black transition hover:scale-105"
              >
                <Send size={14} />
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              {[Twitter, Github, Linkedin].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  <Ic size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-semibold text-white">{c.title}</h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-white/55 transition hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-7 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Nexus Trade SA. Tous droits réservés.</span>
          <span>
            Le trading de cryptomonnaies comporte des risques. Investissez avec
            précaution.
          </span>
        </div>

        <div
          aria-hidden
          className="pointer-events-none select-none pb-4 pt-10 text-center font-display text-[14vw] font-bold leading-none tracking-tighter text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(124,92,255,0.18), rgba(0,255,178,0.05) 60%, transparent 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          NEXUS
        </div>
      </div>
    </footer>
  );
}
