import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

function apply(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

// Extend the DOM type since startViewTransition isn't in all TS lib versions yet
interface ViewTransitionDocument extends Document {
  startViewTransition?: (callback: () => void) => {
    ready: Promise<void>;
    finished: Promise<void>;
  };
}

/** Token-driven light/dark switch. Persists choice, falls back to OS preference,
 *  and animates the change as a circular reveal expanding from the toggle. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

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
    const doc = document as ViewTransitionDocument;

    // Respect reduced-motion users and unsupported browsers: just swap instantly
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!doc.startViewTransition || reduceMotion) {
      setTheme(next);
      apply(next);
      localStorage.setItem(STORAGE_KEY, next);
      return;
    }

    // Figure out the origin point (the button) and how far the circle must
    // travel to cover the whole viewport.
    const btn = btnRef.current;
    const { x, y, width, height } = btn?.getBoundingClientRect() ?? {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      width: 0,
      height: 0,
    };
    const cx = x + width / 2;
    const cy = y + height / 2;
    const radius = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy)
    );

    const transition = doc.startViewTransition(() => {
      setTheme(next);
      apply(next);
      localStorage.setItem(STORAGE_KEY, next);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${cx}px ${cy}px)`,
            `circle(${radius}px at ${cx}px ${cy}px)`,
          ],
        },
        {
          duration: 550,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const isDark = theme === "dark";

  return (
    <button
      ref={btnRef}
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