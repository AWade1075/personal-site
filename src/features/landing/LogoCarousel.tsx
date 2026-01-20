"use client";
import { Section } from "@/components";
import styles from "./LogoCarousel.module.css";
interface Logo {
  name: string;
  icon: string;
}

const logos: Logo[] = [
  { name: "React", icon: "icons8-react.svg" },
  { name: "TypeScript", icon: "icons8-typescript.svg" },
  { name: "Node.js", icon: "icons8-nodejs.svg" },
  { name: "Next.js", icon: "next.svg" },
  { name: "AWS", icon: "icons8-aws.svg" },
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
      <div className={styles.carouselContainer}>
        <div className={`${styles.carouselTrack} flex gap-8`}>
          {[...logos, ...logos].map((logo, index) => (
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
        </div>
      </div>
    </Section>
  );
};
