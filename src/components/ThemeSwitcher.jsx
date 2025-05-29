import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark"
    ).matches;

    const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(currentTheme);
    document.documentElement.classList.toggle("dark", currentTheme === "dark");

    // if (savedTheme) {
    //   setTheme(savedTheme);
    //   document.documentElement.classList.toggle("dark", savedTheme === "dark");
    // } else {
    //   setTheme(prefersDark ? "dark" : "light");
    //   document.documentElement.classList.toggle("dark", prefersDark);
    // }
  }, []);

  const toogleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div>
        <button
        onClick={toogleTheme}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-md"
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? (
          <MoonIcon className="w-6 h-6 text-gray-800" />
        ) : (
          <SunIcon className="w-6 h-6 text-yellow-400" />
        )}
      </button>
    </div>
    // <div onClick={toogleTheme} className="select-none">
    //   {theme === "light" ? "Modo light" : "Modo dark"}
    // </div>
  );
};

export default ThemeSwitcher;
