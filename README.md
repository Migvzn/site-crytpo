# Nexus — Premium Crypto Trading Site

Site de trading crypto premium construit avec **Next.js 15**, **Tailwind CSS**, **Framer Motion** et une scène 3D **Spline**.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript strict
- Tailwind CSS 3 (design system custom : couleurs, ombres, animations)
- Framer Motion (animations fluides)
- @splinetool/react-spline (hero 3D)
- lucide-react (icônes)

## Sections

- Navbar flottante avec effet glassmorphism au scroll
- Hero avec scène Spline 3D + cartes flottantes (prix BTC live, volume 24h)
- Ticker animé multi-cryptos
- Stats animées (compteurs)
- Features (6 cartes premium avec hover glow)
- Aperçu trading (chart + order book live-style)
- Tarifs (Starter / Pro / Institutionnel)
- Témoignages + logos presse
- CTA final + Footer avec newsletter

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Personnaliser la scène Spline

Dans `components/Hero.tsx`, remplacez l'URL `scene` par votre propre scène Spline :

```tsx
<Spline scene="https://prod.spline.design/VOTRE_ID/scene.splinecode" />
```

## Build

```bash
npm run build && npm start
```
