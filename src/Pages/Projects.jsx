import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { FloatingDock } from "../components/FloatingDock";

const techIcons = {
  JavaScript: <SiJavascript className="text-yellow-300" />,
  React: <FaReact className="text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-green-400" />,
  Express: <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
};

const projects = [
  {
    title: "Github Repositories",
    description: "",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/akshaykocharekar",
    live: "https://github.com/akshaykocharekar",
  },
];

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-black text-white flex justify-center items-start px-4 py-10"
    >
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
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub className="hover:text-blue-400" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt className="hover:text-blue-400" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-zinc-400 mt-1 mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-xs border border-zinc-700"
                  >
                    {techIcons[tech]}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Dock */}
        <div className="flex justify-center mt-10">
          <FloatingDock />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
