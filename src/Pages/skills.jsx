import React from "react";
import { motion } from "framer-motion";
import { FloatingDock } from "../components/FloatingDock";

const skillsList = [
  { name: "MongoDB", description: "" },
  { name: "React", description: "" },
  { name: "Node.js", description: "" },
  { name: "Express", description: "" },
  { name: "Tailwind CSS", description: "" },
  { name: "ChatGPT", description: "" },
];

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-black text-white px-6 py-6"
    >
      <h2 className="text-white text-2xl font-bold mb-6">
        <span className="text-blue-500 mr-1">&gt;</span>my skills
      </h2>

      <div className="flex flex-col gap-4">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className="rounded-lg border border-zinc-700 bg-zinc-900/50 p-2"
            style={{
              backgroundImage:
                "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          >
            <div className="text-lg font-semibold mb-1">{skill.name}</div>
            <p className="text-sm text-zinc-400">{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Floating Dock */}
      <FloatingDock />
    </motion.div>
  );
};

export default Skills;
