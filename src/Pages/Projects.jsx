import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FloatingDock } from "../components/FloatingDock";

const projects = [
  {
    title: "Yudoku",
    description: "The YouTube Course Experience Platform",
    tech: ["Next.js", "Vercel", "Prisma", "Tailwind", "PostgreSQL"],
    icons: ["🟦", "⚡️", "🔳", "🌊", "🐘"],
    github: "#",
    live: "#",
  },
  {
    title: "Hookinator",
    description: "Webhook Toolkit for Developers",
    tech: ["Next.js", "Go", "Tailwind", "PostgreSQL"],
    icons: ["🟦", "💙", "🌊", "🐘"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-start px-4 py-10">
      <div className="w-full max-w-2xl space-y-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold">
          <span className="text-blue-500 mr-1">&gt;</span>my projects
        </h2>

        {/* Projects List */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-700 bg-zinc-900/50 p-4"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            >
              <div className="flex justify-between items-start">
                <div className="text-lg font-semibold">{project.title}</div>
                <div className="flex gap-3 text-zinc-300">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub className="hover:text-blue-400" />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt className="hover:text-blue-400" />
                  </a>
                </div>
              </div>

              <p className="text-sm text-zinc-400 mt-1 mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((stack, j) => (
                  <div
                    key={j}
                    className="px-3 py-1 rounded-full bg-zinc-800 text-xs border border-zinc-700"
                  >
                    {stack}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Dock */}
        <div className="flex justify-center">
          <FloatingDock />
        </div>
      </div>
    </div>
  );
};

export default Projects;
