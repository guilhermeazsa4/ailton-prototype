"use client";

import { Quote } from "lucide-react";
import { BlurReveal } from "@/components/blur-reveal";

const testimonials = [
  {
    name: "Marcos Oliveira",
    role: "Síndico Profissional",
    text: "Ailton transformou minha visão sobre gestão condominial. Seus livros e palestras me deram ferramentas práticas que aplico diariamente.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Patricia Santos",
    role: "Diretora de Administradora",
    text: "Participar do evento foi um divisor de águas para nossa empresa. A metodologia apresentada elevou o padrão dos nossos serviços.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Ricardo Almeida",
    role: "Gestor Condominial",
    text: "O conteúdo do Ailton não é apenas teórico — é aplicável, estratégico e transformador. Recomendo a todos os profissionais da área.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
];

export function Depoimentos() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 gradient-section" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20">
        <BlurReveal>
          <p className="text-cyan-accent/60 text-xs tracking-[0.4em] uppercase mb-6">
            Depoimentos
          </p>
        </BlurReveal>

        <BlurReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.1] mb-16 lg:mb-24 max-w-2xl">
            Vozes que confirmam o{" "}
            <span className="font-serif italic text-cyan-accent">impacto</span>.
          </h2>
        </BlurReveal>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <BlurReveal key={t.name} delay={0.15 * i}>
              <div className="glass-card rounded-2xl p-8 lg:p-10 h-full flex flex-col group hover:border-cyan-accent/15 transition-all duration-500">
                <Quote
                  size={28}
                  className="text-cyan-accent/20 mb-6 group-hover:text-cyan-accent/40 transition-colors duration-500"
                />

                <p className="text-white/55 text-base lg:text-lg leading-[1.8] mb-8 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/[0.08] flex-shrink-0"
                  />
                  <div>
                    <p className="text-white font-medium text-sm">
                      {t.name}
                    </p>
                    <p className="text-white/30 text-xs tracking-wide">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
