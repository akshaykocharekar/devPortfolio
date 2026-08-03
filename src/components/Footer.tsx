import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-dashed border-border px-6 py-8 sm:px-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium">
            Thanks for stopping by.
          </p>

          <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
            This portfolio is continuously refined as I build new projects,
            explore modern technologies, and grow as a software engineer.
          </p>

          <p className="text-xs text-subtle">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <a
          href="#top"
          className="shrink-0 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}