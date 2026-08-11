"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
          Selected Research Projects<span className="text-[#188b89]">.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.55, delay: index * 0.1 }} className={`${project.videoUrl ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-8 md:items-center" : ""} bg-white/80 dark:bg-[#0a0a0a] border border-[#d9e2ec] dark:border-zinc-800 rounded-3xl p-8 shadow-sm hover:border-[#188b89]/50 hover:shadow-xl transition-all`}>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#188b89] mb-4">{project.subtitle}</p>
                <h3 className="text-2xl font-bold text-[#163963] dark:text-gray-100 mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="text-xs font-medium bg-[#eef8f7] dark:bg-zinc-900 border border-[#cce0e6] dark:border-zinc-800 text-[#285b6d] dark:text-gray-300 px-3 py-1.5 rounded-full">{tag}</span>)}</div>
              </div>
              {project.videoUrl && (
                <div className="mt-8 md:mt-0 overflow-hidden rounded-2xl border border-[#cbdbe5] bg-[#163963] shadow-lg">
                  <iframe src={project.videoUrl} title="Crash analysis project video demonstration" className="w-full aspect-video border-0" allow="autoplay; fullscreen" allowFullScreen />
                  <a href={project.videoExternalUrl} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-right text-xs font-bold text-white hover:text-[#8ee0d8] transition-colors">Open in Google Drive ↗</a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
