"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";

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
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const childReveal = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
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
      className="premium-mist-bg relative min-h-[100svh] flex items-center overflow-hidden"
      variants={sectionReveal}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Background image — só desktop, no mobile/tablet a foto vai abaixo do conteúdo */}
      <Image
        src="/assets/BannerAilsonArena.webp"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 100vw, 0px"
        className="hidden object-cover object-center lg:block"
      />

      {/* Dark overlay — só lado esquerdo pro texto (só desktop) */}
      <div className="absolute inset-0 hidden bg-gradient-to-l from-prussian/95 via-prussian/50 via-[55%] to-transparent to-[70%] lg:block" />

      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Content — left aligned */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 w-full pt-16 pb-0 lg:py-40">
        <div className="max-w-3xl mx-auto text-center lg:ml-auto lg:mr-0 lg:text-right">
          <motion.p
            variants={childReveal(0.1)}
            className="text-gradient-subtle text-sm font-medium tracking-[0.45em] uppercase mb-6 sm:text-base"
          >
            Novo Lançamento
          </motion.p>

          <motion.h2
            variants={childReveal(0.2)}
            className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[3.8rem] 3xl:text-[4.4rem] font-light text-white leading-[1.08] mb-8"
          >
            O evento de lançamento<br className="hidden sm:inline lg:hidden" /> que <span className="font-bold text-gradient">mudará o jogo</span>.
          </motion.h2>

          <motion.p
            variants={childReveal(0.25)}
            className="mx-auto mb-8 max-w-xl text-base font-light leading-relaxed text-white sm:text-lg lg:ml-auto lg:mr-0"
          >
            O maior evento de gestão condominial de Curitiba. Palestra, lançamento e networking com Ailton Tertuliano ao vivo.
          </motion.p>

          <motion.div
            variants={childReveal(0.3)}
            className="flex flex-wrap gap-6 mb-12 justify-center lg:justify-end"
          >
            <div className="flex items-center gap-3 text-white">
              <Calendar size={16} aria-hidden="true" className="text-cyan-accent/70" />
              <span className="text-sm lg:text-base font-bold tracking-wide">
                16 de Julho, 2026
              </span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <MapPin size={16} aria-hidden="true" className="text-cyan-accent/70" />
              <span className="text-sm lg:text-base font-bold tracking-wide">
                Arena da Baixada | Curitiba, PR
              </span>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            variants={childReveal(0.38)}
            className="grid grid-cols-4 gap-2 justify-items-center mb-12 sm:flex sm:items-center sm:justify-center sm:gap-5 lg:justify-end lg:gap-6"
          >
            {[
              { value: countdown.days, label: "Dias" },
              { value: countdown.hours, label: "Horas" },
              { value: countdown.minutes, label: "Min" },
              { value: countdown.seconds, label: "Seg" },
            ].map((item, i, arr) => (
              <motion.div key={item.label} className="contents">
                <motion.div
                  variants={childReveal(0.38 + i * 0.08)}
                  className="text-center"
                >
                  <div className="relative group w-16 h-16 sm:w-22 sm:h-22 lg:w-24 lg:h-24 3xl:w-28 3xl:h-28 mb-2">
                    <div className="glass-premium rounded-2xl h-full flex items-center justify-center">
                      <span className="text-[1.45rem] sm:text-[2rem] lg:text-[2.4rem] font-black tabular-nums" style={{ background: "linear-gradient(135deg, #f9d95a, #efae04)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 12px rgba(239,174,4,0.3))" }}>
                        {String(item.value).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <span className="text-white text-[10px] sm:text-xs tracking-[0.15em] uppercase font-medium">
                    {item.label}
                  </span>
                </motion.div>

                {i < arr.length - 1 && (
                  <span className="hidden text-2xl sm:inline-block sm:text-3xl lg:text-4xl font-semibold text-cyan-accent -mt-6">
                    :
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={childReveal(0.7)}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-end"
          >
            <a href="#" className="btn-cta-primary sm:order-2">
              Reservar minha vaga
            </a>
            <a href="#livros" className="btn-cta-glass sm:order-1">
              Conhecer obra
            </a>
          </motion.div>

          <motion.div
            variants={childReveal(0.8)}
            className="mt-6 flex justify-center lg:hidden"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-11 h-11" style={{ filter: "drop-shadow(0 0 12px rgba(239,174,4,0.3))" }}>
                <defs>
                  <linearGradient id="arrow-grad-evento" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffe89a" />
                    <stop offset="50%" stopColor="#efae04" />
                    <stop offset="100%" stopColor="#c28f03" />
                  </linearGradient>
                </defs>
                <path d="M12 6L12 18M12 18L17 13M12 18L7 13" stroke="url(#arrow-grad-evento)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Foto abaixo do conteúdo — mobile e tablet */}
        <motion.div
          variants={childReveal(0.8)}
          className="relative -mx-6 sm:-mx-10 mt-12 h-[70vh] overflow-hidden lg:hidden"
        >
          <Image
            src="/assets/BannerAilsonArena.webp"
            alt="Ailton Tertuliano no evento de gestão condominial em Curitiba"
            fill
            sizes="(min-width: 1024px) 0px, 100vw"
            className="object-cover object-[10%_center]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
