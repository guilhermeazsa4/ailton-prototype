"use client";

import { BookOpen, Users, GraduationCap, Lightbulb } from "lucide-react";
import { BlurReveal } from "@/components/blur-reveal";

const roles = [
  {
    icon: BookOpen,
    title: "Autor",
    desc: "8 livros publicados sobre gestão condominial e liderança.",
  },
  {
    icon: Users,
    title: "Consultor",
    desc: "Assessoria estratégica para gestores e administradoras.",
  },
  {
    icon: GraduationCap,
    title: "Teólogo",
    desc: "Formação que amplia a visão sobre pessoas e comunidades.",
  },
  {
    icon: Lightbulb,
    title: "Mentor",
    desc: "Desenvolvimento de líderes no mercado condominial.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative py-32 lg:py-48">
      {/* Subtle background */}
      <div className="absolute inset-0 gradient-dark-subtle" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Section label */}
        <BlurReveal>
          <p className="text-gradient-subtle text-xs tracking-[0.4em] uppercase mb-6">
            Sobre
          </p>
        </BlurReveal>

        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 xl:gap-28 items-start">
          {/* Left: Editorial content */}
          <div>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] mb-10">
                Conhecimento que transforma gestão em{" "}
                <span className="font-bold text-gradient">
                  liderança
                </span>
                .
              </h2>
            </BlurReveal>

            <BlurReveal delay={0.2}>
              <p className="text-white/45 text-base lg:text-lg leading-[1.8] mb-8 max-w-xl">
                Com mais de 15 anos dedicados ao universo condominial, Ailton
                Tertuliano consolidou-se como uma das referências mais
                respeitadas do Brasil na formação de síndicos, gestores e
                líderes comunitários.
              </p>
            </BlurReveal>

            <BlurReveal delay={0.3}>
              <p className="text-white/35 text-base leading-[1.8] max-w-xl">
                Autor de 8 livros, palestrante em mais de 300 eventos e mentor
                de milhares de profissionais, sua missão é elevar o padrão da
                gestão condominial brasileira através do conhecimento, da ética
                e da excelência.
              </p>
            </BlurReveal>
          </div>

          {/* Right: Photo */}
          <BlurReveal delay={0.3} className="hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.06]">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
                alt="Ailton Tertuliano - Editorial"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-prussian/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-blue-accent/10 mix-blend-overlay" />
              <div className="absolute -inset-8 bg-blue-accent/5 blur-3xl -z-10 rounded-full" />
            </div>
          </BlurReveal>
        </div>

        {/* Role cards */}
        <div className="mt-24 lg:mt-36 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {roles.map((role, i) => (
            <BlurReveal key={role.title} delay={0.1 * i}>
              <div className="glass-card rounded-2xl p-6 lg:p-8 group hover:border-cyan-accent/20 transition-all duration-500">
                <role.icon
                  size={24}
                  className="text-cyan-accent/60 mb-5 group-hover:text-cyan-accent transition-colors duration-500"
                />
                <h3 className="text-white font-medium text-lg mb-2">
                  {role.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed">
                  {role.desc}
                </p>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
