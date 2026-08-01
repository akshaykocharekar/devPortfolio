import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

function apply(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

/** Token-driven light/dark switch. Persists choice, falls back to OS preference. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme =
      stored ?? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(initial);
    apply(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    apply(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={`group grid size-9 shrink-0 place-items-center rounded-full border border-border bg-card/80 text-muted-foreground backdrop-blur-md transition-colors duration-150 hover:border-border-strong hover:text-foreground ${className}`}
    >
      <span
        className="relative grid size-4 place-items-center"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        <Sun
          className={`absolute size-4 transition-all duration-300 ${
            isDark ? "scale-50 opacity-0" : "scale-100 opacity-100"
          }`}
          aria-hidden
        />
        <Moon
          className={`absolute size-4 transition-all duration-300 ${
            isDark ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
          aria-hidden
        />
      </span>
    </button>
  );
}
