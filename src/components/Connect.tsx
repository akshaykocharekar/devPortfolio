import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Block } from "./Block";
import { Reveal } from "./Reveal";

const pills = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Mail", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Call", href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
];

/** Closing call-to-action plus platform pills. */
export function Connect() {
  return (
    <>
      
      <Block id="contact" title="Let's connect" subtitle="Find me on these platforms">
        <Reveal>
          <ul className="flex flex-wrap gap-2">
            {pills.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground transition-colors duration-150 hover:border-border-strong hover:text-foreground"
                >
                  <Icon className="size-4" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Block>
    </>
  );
}
