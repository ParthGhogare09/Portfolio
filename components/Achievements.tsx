"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { achievements } from "@/lib/data";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const displayAchievements = useMemo(
    () =>
      Array.from({ length: 15 }, (_, index) => {
        const base = achievements[index % achievements.length];
        return { ...base, _key: `${base.id}-${index}` };
      }),
    []
  );

  return (
    <section
      id="achievements"
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
              Achievements & Awards
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Recognition and accomplishments (15 awards)
          </p>
        </motion.div>

        {/* Horizontal auto-scrolling row of 15 award boxes */}
        <div className="overflow-hidden py-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              {[...displayAchievements, ...displayAchievements].map((achievement, index) => (
                <motion.div
                  key={`${achievement._key}-${index}`}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group min-w-[220px] sm:min-w-[240px]"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 relative">
                    {/* Trophy Icon */}
                    <div className="absolute top-3 right-3 z-10">
                      <div className="p-2 bg-gradient-to-br from-[#003087] to-[#4ea8de] rounded-full shadow-lg">
                        <FaTrophy className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-40 bg-gradient-to-br from-[#003087]/10 to-[#4ea8de]/10 overflow-hidden">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-gradient-to-r from-[#003087] to-[#4ea8de] text-white rounded-full text-[10px] font-semibold">
                          {achievement.rank}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {achievement.year}
                        </span>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl ring-2 ring-[#4ea8de] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
