"use client";
import { Section } from "@/components";
import { motion } from "motion/react";
interface Logo {
  name: string;
  icon: string;
}

const logos: Logo[] = [
  { name: "React", icon: "icons8-react.svg" },
  { name: "TypeScript", icon: "icons8-typescript.svg" },
  { name: "Node.js", icon: "icons8-nodejs.svg" },
  { name: "Next.js", icon: "next.svg" },
  { name: "HTML", icon: "icons8-html-5.svg" },
  { name: "CSS", icon: "icons8-css.svg" },
  { name: "PostgreSQL", icon: "icons8-postgres.svg" },
  { name: "Docker", icon: "icons8-docker.svg" },
  { name: "Tailwind", icon: "icons8-tailwind-css.svg" },
  { name: "Python", icon: "icons8-python-48.png" },
];

export const LogoCarousel = () => {
  return (
    <Section header="Technologies" className="overflow-x-hidden">
      <motion.div
        className="carousel-track flex gap-8"
        animate={{ x: "-100%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center shrink-0 w-12 h-12 mr-4"
          >
            <img
              src={`/${logo.icon}`}
              alt={logo.name}
              title={logo.name}
              className="w-24 h-24"
            />
          </div>
        ))}
      </motion.div>
    </Section>
  );
};
