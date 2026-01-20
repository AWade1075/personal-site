"use client";
import { motion, useInView } from "motion/react";
import React from "react";

export const ScrollViewer = ({ children }: { children: React.ReactNode }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: "some", once: true });
  return (
    <motion.div
      ref={containerRef}
      animate={{ opacity: isInView ? 1 : 0 }}
      whileInView={"onscreen"}
      initial="offscreen"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
