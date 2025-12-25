"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative z-10 px-4 pt-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side - Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-lg md:text-xl font-medium text-[#4ea8de]">
              Hello, I&apos;m
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#003087] to-[#4ea8de] bg-clip-text text-transparent">
              Parth Ghogare
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Full Stack Developer | Cloud Enthusiast
            </h3>
            <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
              Tech Enthusiast & Problem Solver
            </h3>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl"
          >
            Passionate about building innovative web applications and solving
            complex problems. Experienced in full-stack development with a focus
            on creating impactful digital solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="/images/parth resume new.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#003087] to-[#4ea8de] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border-2 border-[#003087] dark:border-[#4ea8de] text-[#003087] dark:text-[#4ea8de] font-semibold rounded-full hover:bg-[#003087] hover:text-white dark:hover:bg-[#4ea8de] dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side - Photo */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#003087] to-[#4ea8de] rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#4ea8de] shadow-2xl">
              <Image
                src="/images/me.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-[#4ea8de] rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[#4ea8de] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
