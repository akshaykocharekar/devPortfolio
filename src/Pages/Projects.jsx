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
    title: "EasyCommute",
    description:
      "Real-time ride-sharing platform with live tracking, payments, and map integration.",
    tech: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "socket.io",
      "live payment integration",
      "leaflet maps",
    ],
    github: "https://github.com/akshaykocharekar/easyCommute",
    live: "https://easy-commute-one.vercel.app/",
  },
];

const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const pageTransition = {
  duration: 0.5,
  ease: "easeOut",
};

const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-black text-white flex justify-center px-4 py-12"
    >
      <div className="w-full max-w-3xl space-y-10">
        {/* Heading */}
        <div className="flex items-center gap-2">
          <span className="text-blue-500 text-xl">&gt;</span>
          <h2 className="text-3xl font-semibold tracking-tight">
            selected projects
          </h2>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold tracking-wide group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <div className="flex gap-4 text-zinc-400">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 mt-2 mb-4 leading-relaxed">
                {project.description || "No description provided."}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 text-xs border border-zinc-700 hover:border-zinc-500 transition"
                  >
                    {techIcons[tech] || (
                      <span className="w-2 h-2 rounded-full bg-zinc-500" />
                    )}
                    <span className="text-zinc-300">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dock */}
        <div className="flex justify-center pt-6">
          <FloatingDock />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
