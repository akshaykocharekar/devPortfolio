import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const LOCAL_STORAGE_KEY = "hasAppreciated";

const StarAppreciation = () => {
  const [count, setCount] = useState(46); // Initial default
  const [hasAppreciated, setHasAppreciated] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    const appreciated = localStorage.getItem(LOCAL_STORAGE_KEY) === "true";
    setHasAppreciated(appreciated);
    if (appreciated) setCount((prev) => prev + 1);
  }, []);

  const handleToggle = () => {
    if (!hasAppreciated) {
      setCount((prev) => prev + 1);
      setHasAppreciated(true);
      localStorage.setItem(LOCAL_STORAGE_KEY, "true");
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 2000);
    } else {
      setCount((prev) => prev - 1);
      setHasAppreciated(false);
      localStorage.setItem(LOCAL_STORAGE_KEY, "false");
    }
  };

  return (
    <div className="absolute top-5 right-5 z-50 text-white">
      <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 bg-zinc-900/80 rounded-full shadow-sm backdrop-blur-md ">
        <span className="flex items-center gap-2 text-sm font-medium">
          <FaStar className="text-yellow-400" />
          {count} people appreciated this
        </span>

        <button
          onClick={handleToggle}
          className={`transition-transform ${
            hasAppreciated ? "text-yellow-400 scale-110" : "text-zinc-400"
          } hover:text-yellow-300`}
        >
          <FaStar />
        </button>
      </div>

      <AnimatePresence>
        {showMsg && (
          <motion.div
            key="msg"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs mt-2 text-green-400 text-center"
          >
            Thanks for your appreciation!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StarAppreciation;
