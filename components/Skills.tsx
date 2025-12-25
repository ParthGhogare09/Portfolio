"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import type { IconType } from "react-icons";
import { skills } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

interface SkillCardProps {
  name: string;
  icon: string;
}

const iconsMap = { ...(SiIcons as Record<string, IconType>), ...(FaIcons as Record<string, IconType>) };

function SkillCard({ name, icon }: SkillCardProps) {
  const IconComponent = iconsMap[icon];

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer border border-gray-100 dark:border-gray-700"
    >
      {IconComponent && (
        <IconComponent className="w-12 h-12 text-[#003087] dark:text-[#4ea8de]" />
      )}
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#003087] to-[#4ea8de] bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies I work with
          </p>
        </motion.div>

        {/* Programming Languages */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
          >
            Programming Languages
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {skills.programming.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>

        {/* Web Technologies */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
          >
            Web Technologies
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {skills.webTech.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>

        {/* Tools */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
          >
            Tools & Platforms
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {skills.tools.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>

        {/* Cloud & DevOps */}
        {skills.cloud && skills.cloud.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
            >
              Cloud & DevOps
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
            >
              {skills.cloud.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
