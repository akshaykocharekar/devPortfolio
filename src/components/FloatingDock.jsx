import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaPen } from "react-icons/fa";

const navItems = [
  { to: "/", icon: <FaUser />, id: "profile" },
  { to: "/projects", icon: <FaCode />, id: "projects" },
  { to: "/skills", icon: <FaPen />, id: "skills" },
];

export const FloatingDock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative mt-18 flex justify-center"
    >
      <div className="px-5 py-2 bg-zinc-900 border border-zinc-700 rounded-full shadow-xl flex items-center backdrop-blur-md">
        {navItems.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `text-xl px-3 py-2 transition-colors duration-200 ${
                  isActive ? "text-blue-500" : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {item.icon}
            </NavLink>

            {/* Divider except after last item */}
            {index < navItems.length - 1 && (
              <div className="h-6 w-px bg-zinc-700 mx-1" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
