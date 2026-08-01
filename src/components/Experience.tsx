import { useState } from "react";
import { ChevronDown, Terminal } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Block } from "./Block";
import { Reveal } from "./Reveal";

/** Experience rows: logo mark, role, period, expandable detail list. */
export function Experience() {
  const [open, setOpen] = useState<string | null>(experience[0]?.title ?? null);

  return (
    <Block id="experience" title="Professional Experience">
      <ul className="space-y-6">
        {experience.map((job, i) => {
          const isOpen = open === job.title;
          return (
            <Reveal as="li" key={job.title} delay={i * 90}>
              <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-muted text-accent">
                  <Terminal className="size-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-medium">{job.title}</h3>
                  <p className="truncate text-sm text-subtle">{job.org}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : job.title)}
                  aria-expanded={isOpen}
                  className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  <span className="hidden sm:inline">{job.period}</span>
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
              </div>

              {isOpen && (
                <ul className="animate-fade-in mt-5 space-y-3 pl-15">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-subtle" aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          );
        })}
      </ul>
    </Block>
  );
}
