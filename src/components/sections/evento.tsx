"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

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

const eventDate = new Date("2026-07-16T09:00:00");

const sectionReveal = {
  hidden: { opacity: 0, y: 80, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const childReveal = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  },
});

export function Evento() {
  const countdown = useCountdown(eventDate);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.section
      ref={ref}
      id="evento"
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      variants={sectionReveal}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Background image */}
      <img
        src="/assets/BannerEventoLivro.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay — só lado esquerdo pro texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-prussian/95 via-prussian/50 via-[55%] to-transparent to-[70%]" />

      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Content — left aligned */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 w-full py-32 lg:py-40">
        <div className="max-w-2xl">
          <motion.p
            variants={childReveal(0.1)}
            className="text-gradient-subtle text-xs tracking-[0.5em] uppercase mb-6"
          >
            Lançamento Oficial
          </motion.p>

          <motion.h2
            variants={childReveal(0.2)}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.05] mb-8"
          >
            O evento que revela a nova{" "}
            <span className="font-serif italic text-gradient">
              estratégia
            </span>{" "}
            da gestão.
          </motion.h2>

          <motion.div
            variants={childReveal(0.3)}
            className="flex flex-wrap gap-6 mb-12"
          >
            <div className="flex items-center gap-3 text-white/70">
              <Calendar size={16} className="text-cyan-accent/70" />
              <span className="text-sm lg:text-base font-light tracking-wide">
                16 de Julho, 2026
              </span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <MapPin size={16} className="text-cyan-accent/70" />
              <span className="text-sm lg:text-base font-light tracking-wide">
                Arena da Baixada — Curitiba, PR
              </span>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            variants={childReveal(0.38)}
            className="flex gap-4 sm:gap-5 lg:gap-6 mb-12"
          >
            {[
              { value: countdown.days, label: "Dias" },
              { value: countdown.hours, label: "Horas" },
              { value: countdown.minutes, label: "Min" },
              { value: countdown.seconds, label: "Seg" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={childReveal(0.38 + i * 0.08)}
                className="text-center"
              >
                <div className="glass-card rounded-2xl w-18 h-18 sm:w-22 sm:h-22 lg:w-24 lg:h-24 flex items-center justify-center mb-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tabular-nums">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-white/35 text-[10px] sm:text-xs tracking-[0.15em] uppercase">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={childReveal(0.7)}>
            <a href="#" className="btn-giant">
              Reservar minha vaga
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
