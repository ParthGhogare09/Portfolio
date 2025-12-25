"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { HiMoon, HiSun } from "react-icons/hi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-[#003087] dark:bg-[#4ea8de] text-white shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <HiMoon className="w-5 h-5" />
        ) : (
          <HiSun className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
}
