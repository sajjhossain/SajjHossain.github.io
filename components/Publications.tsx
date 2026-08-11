"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-[#f4f8fb]/80 dark:bg-blue-900/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
          Selected Publications<span className="text-[#188b89]">.</span>
        </motion.h2>
        <div className="space-y-5">
          {resumeData.publications.map((publication, index) => (
            <motion.a key={publication.title} href={publication.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ x: 6 }} className="grid grid-cols-[42px_1fr_24px] gap-4 p-6 md:p-8 bg-white dark:bg-[#0a0a0a] border border-[#d9e2ec] dark:border-zinc-800 rounded-2xl shadow-sm hover:border-[#188b89]/50 hover:shadow-lg transition-colors">
              <span className="font-mono text-[#d99b32] font-bold">0{index + 1}</span>
              <div><div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-[#188b89] mb-3"><span>{publication.year}</span><span>·</span><span>{publication.venue}</span></div><h3 className="text-lg md:text-xl font-bold text-[#163963] dark:text-gray-100 leading-snug">{publication.title}</h3><p className="text-sm text-gray-500 dark:text-gray-400 mt-3">{publication.authors}</p></div>
              <span className="text-[#2878b8] text-xl">↗</span>
            </motion.a>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 flex flex-wrap gap-4">
          <a href={resumeData.contact.researchGate} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#163963] text-white font-bold text-sm hover:bg-[#102b49] transition-colors">View all publications on ResearchGate ↗</a>
        </motion.div>

        <motion.article id="under-review" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-[#163963] to-[#188b89] text-white shadow-xl">
          <span className="inline-flex px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-widest">Under review</span>
          <h3 className="text-2xl font-bold mt-5 leading-snug">{resumeData.underReview.title}</h3>
          <p className="mt-4 text-blue-50">{resumeData.underReview.venue}</p>
        </motion.article>
      </div>
    </section>
  );
}
