"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="interests" className="py-24 relative bg-[#f4f8fb]/70 dark:bg-zinc-900/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
          Research Interests<span className="text-[#188b89]">.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.researchInterests.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="p-7 bg-white/80 dark:bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#d9e2ec] dark:border-zinc-800 rounded-2xl hover:border-[#188b89]/50 hover:shadow-md transition-all group">
              <span className="text-xs font-mono font-bold text-[#d99b32]">0{index + 1}</span>
              <h3 className="text-xl font-bold text-[#163963] dark:text-gray-100 mt-5 mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
