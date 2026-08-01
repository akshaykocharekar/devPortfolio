import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Block } from "./Block";
import { Reveal } from "./Reveal";
import easycommute from "@/assets/project-easycommute.jpg";
import server from "@/assets/project-server.jpg";
import logs from "@/assets/project-logs.jpg";

const images: Record<string, string> = { easycommute, server, logs };

/** "Proof of Work" — two-up project cards with preview art and tech chips. */
export function Projects() {
  return (
    <Block id="projects" title="Proof of Work">
  <div className="grid gap-4 sm:grid-cols-2">
    {projects.map((p, i) => (
      <Reveal key={p.name} delay={i * 80}>
        <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-muted/40 transition-colors duration-150 hover:border-border-strong">
          <div className="overflow-hidden border-b border-border">
            <img
              src={images[p.image]}
              alt={`${p.name} — ${p.subtitle}`}
              loading="lazy"
              width={1580}
              height={800}
              className="h-52 w-full object-cover opacity-85 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            />
          </div>

          <div className="flex flex-1 flex-col p-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2">
              <h3 className="truncate text-sm font-medium">{p.name}</h3>

              <a
                href={p.demo ?? p.github}
                aria-label={`Open ${p.name}`}
                className="shrink-0 text-subtle transition-colors duration-150 hover:text-foreground"
              >
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>

            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-subtle"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>
    ))}
  </div>
</Block>
  );
}
