import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Block } from "./Block";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Block id="education" title="Education">
      <ul className="space-y-5">
        {education.map((e, i) => (
          <Reveal as="li" key={e.school} delay={i * 80}>
            <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-muted text-accent">
                <GraduationCap className="size-4" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-medium">{e.degree}</h3>
                <p className="text-sm text-subtle">
                  {e.school} · {e.place}
                </p>
              </div>
              <p className="shrink-0 text-sm text-muted-foreground">{e.period}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Block>
  );
}
