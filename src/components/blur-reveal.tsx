"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function BlurReveal({
  children,
  delay = 0,
  className = "",
  margin = "-80px",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  margin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: margin as any });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 40, filter: "blur(10px)" }
      }
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
