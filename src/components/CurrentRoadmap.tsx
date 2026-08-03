import { Block } from "./Block";
import { Reveal } from "./Reveal";

const principles = [
  {
    hash: "a1c9f2e",
    text: "Build real-world projects instead of tutorial clones.",
  },
  {
    hash: "7d3b810",
    text: "Document every project with architecture, screenshots, and clear documentation.",
  },
  {
    hash: "f92e4aa",
    text: "Follow industry-standard Git and GitHub workflows.",
  },
  {
    hash: "1c77bde",
    text: "Prioritize understanding systems over memorizing commands.",
  },
  {
    hash: "4b0f2ad",
    text: "Continuously refine projects through iteration and feedback.",
  },
];

export function CurrentRoadmap() {
  return (
    <Block id="approach" title="Engineering Philosophy" subtitle="How I Build">
      <Reveal>
        <article className="card-surface p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
            git log --oneline --philosophy
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            I approach learning by building production-inspired projects that
            emphasize practical problem solving, clean engineering practices,
            and continuous improvement. Every project is treated as an
            opportunity to deepen my understanding while maintaining
            professional documentation and version control.
          </p>

          <div className="relative mt-8">
            <div
              aria-hidden
              className="absolute left-[3px] top-2 bottom-2 w-px bg-border"
            />
            <ol className="space-y-1">
              {principles.map(({ hash, text }) => (
                <li
                  key={hash}
                  className="group relative flex items-start gap-4 rounded-lg py-3 pl-6 pr-3 transition-colors duration-200 hover:bg-muted/30"
                >
                  <span
                    aria-hidden
                    className="absolute left-[3px] top-[1.35rem] h-[7px] w-[7px] -translate-x-1/2 rounded-full border-2 border-border bg-background transition-colors duration-200 group-hover:border-primary group-hover:bg-primary"
                  />
                  <span className="mt-0.5 shrink-0 font-mono text-[10px] tracking-wider text-muted-foreground/50">
                    {hash}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {text}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-3 flex items-center gap-2 pl-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
              <span aria-hidden>↻</span>
              <span>iterate — back to HEAD</span>
            </div>
          </div>
        </article>
      </Reveal>
    </Block>
  );
}