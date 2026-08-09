import { BookOpen, Download, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Block } from "./Block";
import { Reveal } from "./Reveal";

const documentation = [
  {
    number: "01",
    title: "Server Monitoring & SLO Stack",
    description:
      "Containerized observability stack for monitoring server health, collecting metrics, visualizing system performance and tracking service-level objectives with error budgets and burn-rate alerting.",
    topics: ["Docker Compose", "Prometheus", "Grafana", "SLOs"],
    github: "https://github.com/akshaykocharekar/monitoring-stack",
    doc: "#", // swap for a real file, e.g. `import doc01 from "@/assets/docs/monitoring-stack.pdf"`
  },
  {
    number: "02",
    title: "CI Pipeline",
    description:
      "Production-inspired continuous integration pipeline covering application builds, automated tests, security scanning and packaging using GitHub Actions.",
    topics: ["GitHub Actions", "CI", "Testing", "Security"],
    github: "https://github.com/akshaykocharekar/CI-Pipeline",
    doc: "#",
  },
  {
    number: "03",
    title: "Hardened Linux Server",
    description:
      "Production-style Ubuntu server deployed on AWS EC2, secured with SSH key authentication, a UFW firewall, Nginx, Fail2Ban and automatic security updates.",
    topics: ["AWS EC2", "Linux", "Nginx", "Fail2Ban", "SSH"],
    github: "https://github.com/akshaykocharekar/hardened-linux-server",
    doc: "#",
  },
  {
    number: "04",
    title: "Static Site Auto-Deploy",
    description:
      "Static website hosted on AWS S3 with deployments automated through GitHub Actions, content delivered via CloudFront and DNS managed through Cloudflare.",
    topics: ["AWS S3", "CloudFront", "GitHub Actions", "Cloudflare DNS"],
    github: "https://github.com/akshaykocharekar/static-site-auto-deploy",
    doc: "#",
  },
  {
    number: "05",
    title: "Multi-Service Docker App",
    description:
      "Containerized MERN application demonstrating Docker, Docker Compose, MongoDB, Redis, container networking, volumes and multi-service orchestration.",
    topics: ["Docker Compose", "MongoDB", "Redis", "Networking"],
    github: "https://github.com/akshaykocharekar/Multi-Service-docker-app",
    doc: "#",
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