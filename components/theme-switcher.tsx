"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="ml-4"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Sun className="hidden dark:block" />
      <Moon className="h-5 w-5 dark:hidden" />
    </Button>
  );
};

export default ThemeSwitcher;
