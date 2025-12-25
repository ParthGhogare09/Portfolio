"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-[#003087] to-[#4ea8de] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              PG
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.id}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  onSetActive={(id) => setActiveSection(id as string)}
                >
                  <motion.button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? "bg-[#003087] text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.button>
                </ScrollLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-16 right-0 bottom-0 w-64 bg-white dark:bg-[#0a0a0a] shadow-2xl z-50 md:hidden"
      >
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.id}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              onSetActive={(id) => setActiveSection(id as string)}
            >
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-[#003087] text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.button>
            </ScrollLink>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
