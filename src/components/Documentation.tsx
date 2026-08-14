import { BookOpen, Download, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Block } from "./Block";
import { Reveal } from "./Reveal";


const documentation = [
{
  number: "02",
  title: "Kubernetes Zero-Downtime Deployment",
  description:
    "Multi-node Kubernetes deployment demonstrating rolling updates, readiness and liveness probes, NGINX Ingress routing, rollout protection, failure simulation and rollback without intentionally reducing available application replicas.",
  topics: [
    "Kubernetes",
    "Kind",
    "Deployments",
    "Services",
    "Ingress",
    "Readiness & Liveness Probes",
    "Rolling Updates",
    "Rollback",
  ],
  github: "https://github.com/akshaykocharekar/k8s-zero-downtime",
  doc: "src/assets/Kubernetes_Zero_Downtime_Project_Report.docx",
},
  

];

export function Documentation() {
  return (
    <Block
      id="documentation"
      title="Project Documentation"
      subtitle="Notes, architecture decisions and operational documentation from projects I've built."
    >
      <div className="space-y-4">
        {documentation.map((project, index) => (
          <Reveal key={project.title} delay={index * 80}>
            <article className="card-surface group flex flex-col gap-5 p-6">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-muted text-accent">
                  <BookOpen className="size-4" aria-hidden />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                    Doc {project.number}
                  </p>
                  <h3 className="mt-1 font-display text-lg text-foreground transition-colors duration-200 group-hover:text-accent sm:text-xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-subtle"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={project.doc}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-raised"
                >
                  <Download className="size-3.5" aria-hidden />
                  <span>Download doc</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-muted text-muted-foreground transition-colors duration-150 hover:border-border-strong hover:text-foreground"
                >
                  <SiGithub className="size-4" aria-hidden />
                </a>
              </div>
            </article>
          </Reveal>
        ))}

        {/* More coming soon — ghost card, same shape as the real ones */}
        <Reveal delay={documentation.length * 80}>
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border p-8 text-center">
            <Sparkles className="size-5 text-accent" aria-hidden />
            <p className="font-display text-lg italic text-muted-foreground">
              More write-ups coming soon.
            </p>
            <p className="text-xs text-subtle">
              Documenting new projects as I build and ship them.
            </p>
          </div>
        </Reveal>
      </div>
    </Block>
  );
}