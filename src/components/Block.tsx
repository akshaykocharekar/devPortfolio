import type { ReactNode } from "react";
import { Reveal } from "./Reveal";


export function Block({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className="border-t border-dashed border-border px-6 py-10 sm:px-10"
    >
      {title && (
        <Reveal>
          <h2
            id={`${id}-heading`}
            className="font-display text-xl text-subtle sm:text-2xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
          )}
        </Reveal>
      )}
      <div className={title ? "mt-8" : ""}>{children}</div>
    </section>
  );
}
