"use client";

import BackgroundAnimation from "@/components/BackgroundAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
