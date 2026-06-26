"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const partners = [
  { name: "SECOVI", width: 130, render: (
    <svg viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="4" width="8" height="28" rx="2" fill="#ffffff" opacity="0.7"/>
      <text x="16" y="27" fill="#ffffff" fontFamily="var(--font-jakarta)" fontSize="24" fontWeight="800" letterSpacing="4">SECOVI</text>
    </svg>
  )},
  { name: "AABIC", width: 110, render: (
    <svg viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="27" fill="#ffffff" fontFamily="var(--font-jakarta)" fontSize="26" fontWeight="800" letterSpacing="5">AABIC</text>
    </svg>
  )},
  { name: "SíndicoNet", width: 150, render: (
    <svg viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="27" fill="#ffffff" fontFamily="var(--font-jakarta)" fontSize="22" fontWeight="700">Síndico</text>
      <text x="80" y="27" fill="#ffffff" fontFamily="var(--font-jakarta)" fontSize="22" fontWeight="300">Net</text>
    </svg>
  )},
  { name: "ABADI", width: 110, render: (
    <svg viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="27" fill="#ffffff" fontFamily="var(--font-jakarta)" fontSize="26" fontWeight="800" letterSpacing="6">ABADI</text>
    </svg>
  )},
  { name: "Graiche", width: 120, render: (
    <svg viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="28" fill="#ffffff" fontFamily="var(--font-cormorant)" fontSize="30" fontWeight="600" fontStyle="italic">Graiche</text>
    </svg>
  )},
  { name: "CIPA", width: 100, render: (
    <svg viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="18" r="12" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.6"/>
      <text x="32" y="27" fill="#ffffff" fontFamily="var(--font-jakarta)" fontSize="26" fontWeight="800" letterSpacing="3">CIPA</text>
    </svg>
  )},
  { name: "APSA", width: 100, render: (
    <svg viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="27" fill="#ffffff" fontFamily="var(--font-jakarta)" fontSize="28" fontWeight="800" letterSpacing="6">APSA</text>
    </svg>
  )},
  { name: "Lello", width: 90, render: (
    <svg viewBox="0 0 90 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="28" fill="#ffffff" fontFamily="var(--font-cormorant)" fontSize="32" fontWeight="500" letterSpacing="2">Lello</text>
    </svg>
  )},
  { name: "SIPCES", width: 120, render: (
    <svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="8" width="4" height="20" rx="1" fill="#ffffff" opacity="0.5"/>
      <text x="10" y="27" fill="#ffffff" fontFamily="var(--font-jakarta)" fontSize="24" fontWeight="700" letterSpacing="5">SIPCES</text>
    </svg>
  )},
  { name: "CondoSC", width: 130, render: (
    <svg viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="27" fill="#ffffff" fontFamily="var(--font-jakarta)" fontSize="22" fontWeight="600">Condo</text>
      <text x="66" y="27" fill="#ffffff" fontFamily="var(--font-jakarta)" fontSize="22" fontWeight="800">SC</text>
    </svg>
  )},
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
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setDisplay(Math.min(Math.round(increment * step), value));
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
    <section className="relative py-20 lg:py-28 overflow-hidden border-y border-white/[0.04]">
      <div className="absolute inset-0 bg-[var(--color-bg-light)]" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10">
        {/* Scrolling logos */}
        <div className="mb-16 lg:mb-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="shrink-0 opacity-60 hover:opacity-90 transition-opacity duration-500 mx-8 lg:mx-12"
                style={{ width: p.width }}
              >
                {p.render}
              </div>
            ))}
          </div>
        </div>

        {/* Animated numbers */}
        <div
          ref={ref}
          className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gradient mb-3 tabular-nums">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="text-white/50 text-sm sm:text-base tracking-[0.08em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
