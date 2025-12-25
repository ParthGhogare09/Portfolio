"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HiX, HiExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  screenshots: string[];
  github: string;
  live: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project || project.screenshots.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [project?.screenshots.length]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <HiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Image Gallery */}
          <div className="relative h-64 md:h-96 bg-gray-100 dark:bg-gray-900">
            <Image
              src={project.screenshots[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              fill
              className="object-contain"
            />

            {/* Image Navigation */}
            {project.screenshots.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {project.screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImage === index
                        ? "bg-[#4ea8de] w-8"
                        : "bg-gray-400 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#003087] to-[#4ea8de] bg-clip-text text-transparent">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#003087]/10 dark:bg-[#4ea8de]/10 text-[#003087] dark:text-[#4ea8de] rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiGithub className="w-5 h-5" />
                GitHub
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#003087] to-[#4ea8de] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiExternalLink className="w-5 h-5" />
                Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
