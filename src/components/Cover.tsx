import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FiMail, FiDownload } from "react-icons/fi";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";
import banner from "@/assets/cover-banner2.gif";
import avatar from "@/assets/scuba-cat.gif";
import resume from "@/assets/resume.pdf";

const socials = [
  { label: "GitHub", href: profile.github, icon: SiGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: FiMail },
];

export function Cover() {
  return (
    <header id="top">
      <div className="relative">
        <img
          src={banner}
          alt=""
          aria-hidden
          width={1536}
          height={202}
          className="h-20 w-full object-cover sm:h-40"
        />

        <ThemeToggle className="absolute right-4 top-4 sm:right-6 sm:top-6" />
      </div>

      <div className="px-6 py-5 sm:px-10 sm:py-6">
        <div className="flex flex-col gap-5">

          {/* Avatar + Name */}
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt={profile.name}
              width={600}
              height={600}
              className="size-12 rounded-full border-2 border-background bg-muted object-cover sm:size-20"
            />

            <div className="min-w-0">
              <h1 className="font-display text-2xl italic tracking-tight">
                {profile.name.split(" ")[0]}
              </h1>

              <p className="mt-1 text-sm leading-5 text-subtle">
                {profile.metaLine}
              </p>
            </div>
          </div>

          {/* Resume + Socials */}
       <div className="flex items-center justify-between gap-3">

  <a
    href={resume}
    download
    className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-raised"
  >
    <FiDownload className="size-3.5" />
    <span>Resume</span>
  </a>

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
      </div>
    </header>
  );
}