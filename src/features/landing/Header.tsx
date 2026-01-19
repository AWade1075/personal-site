"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

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
    <header className="mb-8 border-b border-gray-200 pb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-text-primary mb-2">{name}</h1>
        <div>
          <button
            onClick={onToggleTheme}
            className="mt-4 px-4 py-2 bg-gray-200 rounded"
          >
            {isDarkTheme ? (
              <MoonIcon className="h-5 w-5 inline" />
            ) : (
              <SunIcon className="h-5 w-5 inline" />
            )}
          </button>
        </div>
      </div>
      <p className="text-xl text-text-primary mb-4">{title}</p>
      <div className="flex gap-4 text-sm text-text-primary">
        <a
          href={`mailto:${email}`}
          className="hover:text-col-primary underline font-bold"
        >
          {email}
        </a>

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-col-primary underline font-bold"
          >
            LinkedIn
          </a>
        )}
      </div>
    </header>
  );
};
