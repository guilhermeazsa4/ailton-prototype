"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { BlurReveal } from "@/components/blur-reveal";

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.floor(eased * target);

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 10000, prefix: "+", suffix: "", label: "Profissionais impactados" },
  { value: 300, prefix: "+", suffix: "", label: "Palestras realizadas" },
  { value: 15, prefix: "+", suffix: "", label: "Anos de experiência" },
  { value: 8, prefix: "", suffix: "", label: "Livros publicados" },
];

export function Impacto() {
  return (
    <section id="impacto" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-prussian" />

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-blue-accent/8 blur-[200px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-cyan-accent/5 blur-[200px]" />
      </div>

      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20">
        <BlurReveal>
          <p className="text-cyan-accent/60 text-xs tracking-[0.4em] uppercase mb-6 text-center">
            Impacto
          </p>
        </BlurReveal>

        <BlurReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.1] mb-20 lg:mb-28 text-center max-w-3xl mx-auto">
            Números que refletem um{" "}
            <span className="font-serif italic text-cyan-accent">
              legado
            </span>
            .
          </h2>
        </BlurReveal>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, i) => (
            <BlurReveal key={metric.label} delay={0.15 * i}>
              <div className="text-center">
                <p className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-4 tabular-nums">
                  <AnimatedCounter
                    target={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </p>
                <p className="text-white/35 text-sm lg:text-base tracking-wide">
                  {metric.label}
                </p>
              </div>
            </BlurReveal>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-glow mt-24 lg:mt-32" />
      </div>
    </section>
  );
}
