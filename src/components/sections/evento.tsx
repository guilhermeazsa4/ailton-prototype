"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { BlurReveal } from "@/components/blur-reveal";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

const eventDate = new Date("2026-09-18T09:00:00");

export function Evento() {
  const countdown = useCountdown(eventDate);

  return (
    <section id="evento" className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-prussian" />

      {/* Dramatic glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-blue-accent/15 blur-[200px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-cyan-accent/8 blur-[150px]" />
      </div>

      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Section label */}
        <BlurReveal>
          <p className="text-cyan-accent text-xs tracking-[0.5em] uppercase mb-4 text-center">
            O Evento
          </p>
        </BlurReveal>

        {/* Stage image */}
        <BlurReveal delay={0.1}>
          <div className="relative aspect-[21/9] max-w-[1400px] mx-auto rounded-3xl overflow-hidden mb-20 lg:mb-28 border border-white/[0.06]">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
              alt="Palco do evento"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-prussian via-prussian/30 to-transparent" />
            <div className="absolute inset-0 bg-blue-accent/15 mix-blend-overlay" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[60%] bg-gradient-to-b from-cyan-accent/8 to-transparent blur-2xl" />
          </div>
        </BlurReveal>

        {/* Event info */}
        <div className="text-center max-w-4xl mx-auto">
          <BlurReveal delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.05] mb-8">
              A experiência que{" "}
              <span className="font-serif italic text-cyan-accent text-glow-cyan">
                redefine
              </span>{" "}
              a gestão.
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-8 mb-14">
              <div className="flex items-center gap-3 text-white/60">
                <Calendar size={18} className="text-cyan-accent/60" />
                <span className="text-lg lg:text-xl font-light tracking-wide">
                  18 de Setembro, 2026
                </span>
              </div>
              <div className="w-px h-6 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3 text-white/60">
                <MapPin size={18} className="text-cyan-accent/60" />
                <span className="text-lg lg:text-xl font-light tracking-wide">
                  São Paulo, SP
                </span>
              </div>
            </div>
          </BlurReveal>

          {/* Countdown */}
          <BlurReveal delay={0.4}>
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-16 lg:mb-20">
              {[
                { value: countdown.days, label: "Dias" },
                { value: countdown.hours, label: "Horas" },
                { value: countdown.minutes, label: "Min" },
                { value: countdown.seconds, label: "Seg" },
              ].map((item, i) => (
                <div key={item.label} className="text-center">
                  <div className="glass-card rounded-2xl w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center mb-3">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tabular-nums">
                      {String(item.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-white/30 text-xs tracking-[0.15em] uppercase">
                    {item.label}
                  </span>
                  {i < 3 && (
                    <span className="hidden" />
                  )}
                </div>
              ))}
            </div>
          </BlurReveal>

          {/* Giant CTA */}
          <BlurReveal delay={0.5}>
            <a href="#" className="btn-giant">
              Reservar minha vaga
              <ArrowRight size={20} />
            </a>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
}
