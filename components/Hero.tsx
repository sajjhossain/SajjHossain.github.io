"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { resumeData } from "@/lib/data";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger effect for child elements
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <section id="about" className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-3xl"
          >
            <motion.p
              variants={itemVariants}
              className="text-blue-500 font-medium tracking-wide mb-4"
            >
              M.S. Computer Science · Prairie View A&amp;M University
            </motion.p>
            
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100 flex flex-wrap gap-x-3"
            >
              {resumeData.name.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40, rotate: 8 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.15,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 dark:text-gray-400 tracking-tight mb-8"
            >
              {resumeData.role}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-12 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {resumeData.summary}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                My Experience
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border border-gray-300 dark:border-gray-700 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 text-gray-900 dark:text-gray-100"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] relative flex-shrink-0"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-floating-subtle z-0 mix-blend-multiply dark:mix-blend-screen hidden md:block" />
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl overflow-hidden z-10 animate-floating bg-gradient-to-br from-[#163963] via-[#2878b8] to-[#188b89]">
              <Image 
                src={resumeData.profileImage} 
                alt={`${resumeData.name} Portrait`}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
