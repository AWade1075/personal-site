"use client";

import React from "react";
import { MoonIcon, SunIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link } from "@/components";
import { AnimatedFont } from "@/components/AnimatedFont";

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  linkedin?: string;
}

export const Header = ({ name, title, email, linkedin }: HeaderProps) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  React.useEffect(() => {
    const isDark = localStorage.getItem("dark-theme") === "true";
    setIsDarkTheme(isDark);
    document.getElementById("root")?.classList.toggle("dark", isDark);
  }, []);

  const onToggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    localStorage.setItem("dark-theme", String(!isDarkTheme));
    document.getElementById("root")?.classList.toggle("dark", !isDarkTheme);
  };

  return (
    <header className="mb-8 border-b border-col-primary pb-8">
      <div className="flex justify-between items-center  flex-col sm:flex-row sm:gap-4 gap-2">
        <div className="flex grow ">
          <img
            src="/header-icon.png"
            alt="Adam Wade"
            className="w-24 h-24 rounded-full bg-background-secondary mr-4 border border-col-primary"
          ></img>
          <div>
            <h1 className="text-4xl font-bold text-text-primary mb-2">
              <AnimatedFont delay={2} text={name} />
            </h1>
            <p className="text-xl text-text-primary mb-2">{title}</p>
            <div className="flex flex-col gap-2 text-sm text-text-primary">
              <Link
                href={`mailto:${email}`}
                className="hover:text-col-primary underline font-bold whitespace-nowrap"
              >
                <EnvelopeIcon className="w-4 h-4 inline mr-1" />
                {email}
              </Link>

              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-col-primary underline font-bold"
              >
                <img
                  src="/icons8-linkedin.svg"
                  className="w-4 h-4 inline mr-1"
                />
                LinkedIn
              </Link>

              <Link
                href={
                  "https://www.credly.com/badges/b975fac2-5ee8-4ccb-8ffb-6bd3e9c65710/linked_in?t=t277mh"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-col-primary underline font-bold"
              >
                <img src="/icons8-aws.svg" className="w-4 h-4 inline mr-1" />
                AWS Certified Developer-Associate
              </Link>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={onToggleTheme}
            className="mt-4 px-4 py-2 bg-background-secondary border border-col-primary rounded"
          >
            {isDarkTheme ? (
              <MoonIcon className="h-5 w-5 inline text-col-primary" />
            ) : (
              <SunIcon className="h-5 w-5 inline  text-col-primary" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
