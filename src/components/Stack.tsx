import { skillGroups } from "@/data/portfolio";
import { Block } from "./Block";
import { Reveal } from "./Reveal";

/** "Stack I use" — flat grouped chip lists, no cards. */
export function Stack() {
  return (
    <Block
      id="skills"
      title="Stack I use"
      subtitle="Technologies I work with to ship and run real systems"
    >
      <div className="space-y-7">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
              {group.title}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground transition-colors duration-150 hover:border-border-strong hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Block>
  );
}
