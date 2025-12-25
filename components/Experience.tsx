"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";
import { HiBriefcase } from "react-icons/hi";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#003087] to-[#4ea8de] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My professional journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#003087] via-[#4ea8de] to-[#003087]" />

          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#003087] to-[#4ea8de] flex items-center justify-center shadow-lg">
                  <HiBriefcase className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`ml-28 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      {exp.title}
                    </h3>
                  </div>
                  <h4 className="text-lg font-semibold text-[#003087] dark:text-[#4ea8de] mb-2">
                    {exp.organization}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
