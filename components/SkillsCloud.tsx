"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function SkillsCloud() {
  const allSkills = [
    ...resumeData.skills.languages,
    ...resumeData.skills.frameworks,
    ...resumeData.skills.machineLearning,
    ...resumeData.skills.dataScience,
    ...resumeData.skills.other,
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Technical Arsenal<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {resumeData.skillsDescription}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:px-12">
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: Math.random() * 0.4, // Add a slightly random stagger for a 'cloud' pop-in feel rather than purely sequential
              }}
              whileHover={{ 
                y: -6, 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="px-6 py-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-full shadow-sm hover:shadow-md cursor-default hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
