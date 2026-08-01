import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";
import banner from "@/assets/cover-banner.jpg";
import avatar from "@/assets/avatar.jpg";

const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
];

/** Banner + overlapping avatar + name / meta / social icon row. */
export function Cover() {
  return (
    <header id="top">
      <div className="relative">
        <img
          src={banner}
          alt=""
          aria-hidden
          width={1536}
          height={512}
          className="h-40 w-full object-cover sm:h-56"
        />
        <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center font-display text-lg italic text-on-media drop-shadow-lg sm:text-xl">
          {profile.motto}
        </p>
        <ThemeToggle className="absolute right-4 top-4 sm:right-6 sm:top-6" />
      </div>

      <div className="px-8 sm:px-10 ">
        <img
          src={avatar}
          alt={profile.name}
          width={816}
          height={816}
          className="mt-4 size-24 rounded-full border-2 border-background bg-muted object-cover sm:size-28"
        />

        <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 pb-8">
          <div className="min-w-0">
            <h1 className="font-display text-3xl italic tracking-tight sm:text-4xl">
              {profile.name.split(" ")[0]}
            </h1>
            <p className="mt-1 truncate text-sm text-subtle">{profile.metaLine}</p>
          </div>

          <ul className="flex shrink-0 items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-border bg-muted text-muted-foreground transition-colors duration-150 hover:border-border-strong hover:text-foreground"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
