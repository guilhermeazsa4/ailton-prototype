"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const logos = [
  "SíndicoNet",
  "AABIC",
  "SECOVI",
  "ABADI",
  "SIPCES",
  "CondomínioSC",
  "APSA",
  "CIPA",
];

const stats = [
  { value: 8, suffix: "", label: "Livros publicados" },
  { value: 300, suffix: "+", label: "Palestras realizadas" },
  { value: 10000, suffix: "+", label: "Profissionais impactados" },
  { value: 15, suffix: "+", label: "Anos de experiência" },
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setDisplay(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted = value >= 1000
    ? display.toLocaleString("pt-BR")
    : String(display);

  return (
    <span>
      {formatted}{suffix}
    </span>
  );
}

export function Credibilidade() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden border-y border-white/[0.04]">
      <div className="absolute inset-0 bg-[var(--color-bg-light)]" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10">
        {/* Scrolling logos */}
        <div className="mb-14 lg:mb-16 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-white/20 text-sm tracking-[0.15em] uppercase font-medium shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08]" />
                {name}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Animated numbers */}
        <div
          ref={ref}
          className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2 tabular-nums">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="text-white/30 text-xs sm:text-sm tracking-[0.1em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
