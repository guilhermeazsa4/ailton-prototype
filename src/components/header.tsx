"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Evento", href: "#evento" },
  { label: "Livros", href: "#livros" },
  { label: "Impacto", href: "#impacto" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[rgba(5,10,48,0.88)] backdrop-blur-2xl border-b border-[rgba(0,255,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 flex items-center justify-between h-20 lg:h-24">
        <a
          href="#"
          className="relative text-white font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase"
        >
          Ailton Tertuliano
        </a>

        <nav className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/50 hover:text-cyan-accent text-[0.8125rem] tracking-[0.08em] uppercase transition-colors duration-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white/70 hover:text-white transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[rgba(5,10,48,0.95)] backdrop-blur-2xl border-t border-[rgba(0,255,255,0.06)] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/60 hover:text-cyan-accent text-sm tracking-[0.1em] uppercase transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
