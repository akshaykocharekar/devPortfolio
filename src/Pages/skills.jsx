import React from "react";
import { motion } from "framer-motion";
import { FloatingDock } from "../components/FloatingDock";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", description: "Component-driven UI with hooks." },
      { name: "Tailwind CSS", description: "Utility-first styling." },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", description: "Event-driven backend systems." },
      { name: "Express.js", description: "REST APIs & server logic." },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", description: "NoSQL document database." },
      { name: "SQL", description: "Relational systems." },
    ],
  },
  {
    category: "AI",
    items: [
      { name: "AI-driven Dev", description: "Accelerated workflows with AI." },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-black text-zinc-300 px-6 md:px-16 py-16">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Skills
        </h2>
        <p className="text-sm text-zinc-500 mt-2">
          Technologies I use to build modern, scalable products.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col gap-14 max-w-4xl">
        {skills.map((section, i) => (
          <div key={i} className="flex gap-10">
            {/* Category */}
            <div className="w-28 shrink-0">
              <p className="text-xs text-zinc-600 uppercase tracking-widest">
                {section.category}
              </p>
            </div>

            {/* Skills */}
            <div className="flex-1 flex flex-col gap-4">
              {section.items.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-start justify-between rounded-xl px-4 py-3 hover:bg-zinc-900/60 transition-all duration-300"
                >
                  <div>
                    <h4 className="text-sm font-medium text-zinc-100">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      {skill.description}
                    </p>
                  </div>

                  <span className="text-zinc-700 group-hover:text-zinc-300 transition text-sm">
                    ↗
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <FloatingDock />
    </div>
  );
};

export default Skills;
