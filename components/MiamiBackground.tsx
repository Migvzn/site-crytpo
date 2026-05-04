"use client";

import { useEffect, useRef } from "react";

export function MiamiBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = { x: number; y: number; r: number; tw: number; ph: number };
    let stars: Star[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isMobile = width < 768;
      const count = isMobile ? 60 : 140;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height * 0.55,
        r: Math.random() * 1.4 + 0.2,
        tw: 0.5 + Math.random() * 1.5,
        ph: Math.random() * Math.PI * 2,
      }));
    };

    const drawSky = () => {
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, "#0B0B2B");
      grad.addColorStop(0.35, "#3B0764");
      grad.addColorStop(0.55, "#9D174D");
      grad.addColorStop(0.7, "#FF1493");
      grad.addColorStop(0.85, "#FF6B35");
      grad.addColorStop(1, "#0B0B2B");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    };

    const drawSun = (t: number) => {
      const cx = width / 2;
      const horizon = height * 0.6;
      const baseR = Math.min(width, height) * 0.22;
      const pulse = 1 + Math.sin(t * 0.0012) * 0.04;
      const r = baseR * pulse;

      const sunGrad = ctx.createLinearGradient(cx, horizon - r, cx, horizon + r);
      sunGrad.addColorStop(0, "#FFE94A");
      sunGrad.addColorStop(0.5, "#FF6EC7");
      sunGrad.addColorStop(1, "#6A0DAD");

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, horizon, r, 0, Math.PI * 2);
      ctx.fillStyle = sunGrad;
      ctx.shadowColor = "#FF1493";
      ctx.shadowBlur = 80;
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      const stripes = 8;
      for (let i = 0; i < stripes; i++) {
        const y = horizon + r * 0.15 + i * (r * 0.11);
        const h = 2 + i * 1.6;
        ctx.fillRect(cx - r, y, r * 2, h);
      }
      ctx.restore();
    };

    const drawSkyline = () => {
      const horizon = height * 0.6;
      ctx.save();
      ctx.fillStyle = "#1a0a2e";
      ctx.shadowColor = "#FF1493";
      ctx.shadowBlur = 18;

      const buildings = [
        { x: 0.05, w: 0.06, h: 0.18 },
        { x: 0.12, w: 0.05, h: 0.12 },
        { x: 0.18, w: 0.07, h: 0.22 },
        { x: 0.27, w: 0.04, h: 0.1 },
        { x: 0.33, w: 0.06, h: 0.16 },
        { x: 0.62, w: 0.05, h: 0.14 },
        { x: 0.69, w: 0.07, h: 0.2 },
        { x: 0.78, w: 0.05, h: 0.11 },
        { x: 0.85, w: 0.06, h: 0.17 },
        { x: 0.93, w: 0.05, h: 0.13 },
      ];

      buildings.forEach((b) => {
        const x = b.x * width;
        const w = b.w * width;
        const h = b.h * height;
        ctx.fillRect(x, horizon - h, w, h);
      });
      ctx.restore();

      ctx.save();
      buildings.forEach((b) => {
        const x = b.x * width;
        const w = b.w * width;
        const h = b.h * height;
        const cols = Math.max(2, Math.floor(w / 8));
        const rows = Math.max(3, Math.floor(h / 10));
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            if (Math.random() > 0.55) continue;
            const wx = x + 2 + i * (w / cols);
            const wy = horizon - h + 4 + j * (h / rows);
            ctx.fillStyle = Math.random() > 0.5 ? "#00F0FF" : "#FFE94A";
            ctx.globalAlpha = 0.6 + Math.random() * 0.4;
            ctx.fillRect(wx, wy, 2, 2);
          }
        }
      });
      ctx.restore();
    };

    const drawStars = (t: number) => {
      ctx.save();
      stars.forEach((s) => {
        const a = 0.35 + Math.sin(t * 0.002 * s.tw + s.ph) * 0.4;
        ctx.globalAlpha = Math.max(0, a);
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    };

    const drawGrid = (t: number) => {
      const horizon = height * 0.6;
      const vp = { x: width / 2, y: horizon };
      const gridH = height - horizon;
      const speed = (t * 0.00018) % 1;

      ctx.save();
      ctx.strokeStyle = "#FF1493";
      ctx.shadowColor = "#FF1493";
      ctx.shadowBlur = 14;
      ctx.lineWidth = 1.2;

      const lines = 22;
      for (let i = 0; i <= lines; i++) {
        const xn = (i / lines) * 2 - 1;
        const x = vp.x + xn * width * 1.2;
        ctx.beginPath();
        ctx.moveTo(vp.x, vp.y);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      const rows = 14;
      for (let i = 0; i < rows; i++) {
        const p = (i + speed) / rows;
        const ease = Math.pow(p, 2.4);
        const y = vp.y + ease * gridH;
        const stretch = 1 + ease * 6;
        ctx.globalAlpha = Math.min(1, p * 1.2);
        ctx.beginPath();
        ctx.moveTo(vp.x - width * stretch, y);
        ctx.lineTo(vp.x + width * stretch, y);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawPalm = (x: number, baseY: number, scale: number, sway: number) => {
      ctx.save();
      ctx.translate(x, baseY);
      ctx.rotate(sway);
      ctx.fillStyle = "#000";
      ctx.shadowColor = "#FF6EC7";
      ctx.shadowBlur = 10;

      ctx.beginPath();
      ctx.moveTo(-4 * scale, 0);
      ctx.quadraticCurveTo(-2 * scale, -120 * scale, 6 * scale, -200 * scale);
      ctx.lineTo(10 * scale, -200 * scale);
      ctx.quadraticCurveTo(2 * scale, -120 * scale, 4 * scale, 0);
      ctx.fill();

      const fronds = 7;
      for (let i = 0; i < fronds; i++) {
        const angle = (i / (fronds - 1)) * Math.PI - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(6 * scale, -200 * scale);
        const cx = Math.cos(angle) * 70 * scale;
        const cy = Math.sin(angle) * 30 * scale - 220 * scale;
        const ex = Math.cos(angle) * 110 * scale;
        const ey = Math.sin(angle) * 50 * scale - 200 * scale;
        ctx.quadraticCurveTo(cx, cy, ex, ey);
        ctx.lineWidth = 6 * scale;
        ctx.strokeStyle = "#000";
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawPalms = (t: number) => {
      const horizon = height * 0.6;
      const sway = Math.sin(t * 0.0009) * 0.03;
      const sway2 = Math.sin(t * 0.0011 + 1) * 0.03;
      const isMobile = width < 768;
      const scale = isMobile ? 0.7 : 1;
      drawPalm(width * 0.08, horizon + 40, scale, sway);
      drawPalm(width * 0.92, horizon + 40, scale, -sway2);
      if (!isMobile) {
        drawPalm(width * 0.18, horizon + 60, scale * 0.7, sway * 1.2);
        drawPalm(width * 0.82, horizon + 60, scale * 0.7, -sway2 * 1.2);
      }
    };

    const carState = { x: -200, lastSpawn: 0 };
    const drawCar = (t: number) => {
      if (width < 768) return;
      const horizon = height * 0.6;
      if (carState.x > width + 200) {
        if (t - carState.lastSpawn > 12000) {
          carState.x = -200;
          carState.lastSpawn = t;
        }
        return;
      }
      carState.x += 1.4;
      const y = horizon + (height - horizon) * 0.35;
      const w = 70;
      const h = 18;

      ctx.save();
      ctx.translate(carState.x, y);
      ctx.shadowColor = "#FF1493";
      ctx.shadowBlur = 30;
      ctx.fillStyle = "#FF1493";
      ctx.fillRect(-w / 2, -h, w, h);
      ctx.fillStyle = "#FFE94A";
      ctx.fillRect(w / 2 - 6, -h + 2, 4, 3);

      ctx.globalAlpha = 0.4;
      ctx.fillStyle = "#FF1493";
      for (let i = 1; i < 14; i++) {
        ctx.globalAlpha = 0.4 / i;
        ctx.fillRect(-w / 2 - i * 8, -h + 4, 8, h - 6);
      }
      ctx.restore();
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = (t: number) => {
      drawSky();
      drawStars(t);
      drawSun(t);
      drawSkyline();
      drawGrid(t);
      drawPalms(t);
      drawCar(t);

      if (!reduceMotion) raf = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(render);
    if (reduceMotion) render(0);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(4,6,11,0.55)_100%)]" />
      <div className="absolute inset-0 miami-scanlines" />
      <div className="absolute inset-0 miami-grain" />
    </div>
  );
}
