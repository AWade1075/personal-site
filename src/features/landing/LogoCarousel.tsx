"use client";
import { motion } from "motion/react";
interface Logo {
  name: string;
  icon: string;
}

const logos: Logo[] = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "Next.js", icon: "▲" },
  { name: "JavaScript", icon: "⚡" },
  { name: "HTML", icon: "🏗️" },
  { name: "CSS", icon: "🎨" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "Tailwind", icon: "🌊" },
];

export const LogoCarousel = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-text-primary mb-6">
        Technologies
      </h2>

      <div className="relative w-full overflow-hidden rounded-lg border border-col-primary p-6">
        <motion.div
          className="carousel-track flex gap-8 "
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center shrink-0 w-24 h-24 rounded-lg bg-white/50 backdrop-blur-sm border transition-all duration-300"
            >
              <div className="text-4xl mb-2">{logo.icon}</div>
              <p className="text-xs font-medium text-text-secondary text-center whitespace-nowrap">
                {logo.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
