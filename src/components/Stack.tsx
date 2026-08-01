"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiPython, SiGnubash,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiSocketdotio, SiMongodb,
  SiDocker, SiLinux, SiUbuntu, SiGit, SiGithub, SiNginx, SiGithubactions,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6"; // no official AWS logo in simple-icons
import { skillGroups } from "@/data/portfolio";
import { Block } from "./Block";

const ICON_MAP: Record<string, { icon: React.ElementType; color: string }> = {
  // Cloud & DevOps
  "AWS EC2": { icon: FaAws, color: "#FF9900" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "Docker Compose": { icon: SiDocker, color: "#2496ED" },
  "Linux (Ubuntu)": { icon: SiUbuntu, color: "#E95420" },
  "Shell / Bash": { icon: SiGnubash, color: "#4EAA25" },
  "Git & GitHub": { icon: SiGithub, color: "#FFFFFF" },
  Nginx: { icon: SiNginx, color: "#009639" },
  "CI/CD fundamentals": { icon: SiGithubactions, color: "#2088FF" },
  "SSH & server admin": { icon: SiLinux, color: "#FCC624" },

  // Backend & Data
  "Node.js": { icon: SiNodedotjs, color: "#3C873A" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  "REST APIs": { icon: SiNodedotjs, color: "#3C873A" },
  "Socket.io": { icon: SiSocketdotio, color: "#FFFFFF" },
  "MongoDB Atlas": { icon: SiMongodb, color: "#47A248" },

  // Frontend
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },

  // Languages
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: SiPython, color: "#3776AB" },
  Bash: { icon: SiGnubash, color: "#4EAA25" },
};

const TABS = ["All", "Frontend", "Backend", "DevOps"] as const;
type Tab = (typeof TABS)[number];

// Map each visible tab to the actual group title(s) in your data file
const TAB_TO_GROUP: Record<Exclude<Tab, "All">, string[]> = {
  Frontend: ["Frontend"],
  Backend: ["Backend & Data"],
  DevOps: ["Cloud & DevOps"],
};

export function Stack() {
  const [active, setActive] = useState<Tab>("DevOps");

  const items =
    active === "All"
      ? skillGroups.flatMap((g) => g.items)
      : skillGroups
          .filter((g) => TAB_TO_GROUP[active].includes(g.title))
          .flatMap((g) => g.items);

  return (
    <Block id="skills">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <h2 className="font-serif text-2xl text-foreground">Tech Stack</h2>

        <div className="flex items-center gap-5 text-xs font-medium">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`transition-colors ${
                active === tab
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={active}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="mt-5 flex flex-wrap gap-2.5"
        >
          {items.map((item) => {
            const entry = ICON_MAP[item];
            const Icon = entry?.icon;
            return (
              <motion.li
                key={item}
                whileHover={{ y: -2 }}
                className="group flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                {Icon && (
                  <motion.span
                    className="flex h-3.5 w-3.5 items-center justify-center"
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Icon style={{ color: entry.color }} className="h-full w-full" />
                  </motion.span>
                )}
                {item}
              </motion.li>
            );
          })}
        </motion.ul>
      </AnimatePresence>
    </Block>
  );
}