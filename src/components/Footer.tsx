import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-dashed border-border px-6 py-8 sm:px-10">
      <p className="min-w-0 truncate text-xs text-subtle">
        © {new Date().getFullYear()} {profile.name}.
      </p>
      <a
        href="#top"
        className="shrink-0 text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground"
      >
        Back to top
      </a>
    </footer>
  );
}
