import { ArrowUpRight, Github, ImageOff } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Block } from "./Block";
import { Reveal } from "./Reveal";
import easycommute from "@/assets/project-easycommute.png";
import server from "@/assets/project-server.jpg";
import logs from "@/assets/project-logs.jpg";

const images: Record<string, string> = { easycommute, server, logs };

function TechChips({ tech }: { tech: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-subtle"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Renders the project screenshot, or a quiet placeholder when no image asset exists yet. */
function ProjectMedia({
  image,
  alt,
  imgClassName,
}: {
  image: string;
  alt: string;
  imgClassName: string;
}) {
  const src = images[image];

  if (!src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-muted/50 text-subtle ${imgClassName}`}
      >
        <ImageOff className="size-6" aria-hidden />
        <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
          Preview coming soon
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={1580}
      height={800}
      className={imgClassName}
    />
  );
}

function ProjectLinks({ github, demo }: { github: string; demo: string | null }) {
  return (
    <div className="flex items-center gap-3">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-accent transition-opacity hover:opacity-80"
        >
          Live demo
          <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      )}
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        aria-label="View source on GitHub"
        className="inline-flex items-center gap-1 text-xs text-subtle transition-colors hover:text-foreground"
      >
        <Github className="size-3.5" aria-hidden />
        {!demo && "Source"}
      </a>
    </div>
  );
}

/** "Proof of Work" — featured hero card plus a tighter grid for the rest. */
export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Block id="projects" title="Proof of Work">
      <div className="space-y-4">
        {featured.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="card-surface group grid overflow-hidden sm:grid-cols-2">
              <div className="relative overflow-hidden">
                <ProjectMedia
                  image={p.image}
                  alt={`${p.name} — ${p.subtitle}`}
                  imgClassName="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-full"
                />
              </div>

              <div className="flex flex-col justify-center gap-3 p-6">
                <span className="w-fit rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  Featured
                </span>

                <div>
                  <h3 className="text-lg font-medium">{p.name}</h3>
                  <p className="text-sm text-subtle">{p.subtitle}</p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <TechChips tech={p.tech} />

                <div className="pt-1">
                  <ProjectLinks github={p.github} demo={p.demo} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article className="card-surface group flex h-full flex-col overflow-hidden">
                <div className="overflow-hidden">
                  <ProjectMedia
                    image={p.image}
                    alt={`${p.name} — ${p.subtitle}`}
                    imgClassName="aspect-video w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div>
                    <h3 className="text-sm font-medium">{p.name}</h3>
                    <p className="text-xs text-subtle">{p.subtitle}</p>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <TechChips tech={p.tech} />

                  <div className="pt-1">
                    <ProjectLinks github={p.github} demo={p.demo} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Block>
  );
}