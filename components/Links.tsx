"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function Links() {
  const profiles = [
    { name: "LinkedIn", url: resumeData.contact.linkedin.startsWith('http') ? resumeData.contact.linkedin : `https://${resumeData.contact.linkedin}` },
    { name: "GitHub", url: resumeData.contact.github.startsWith('http') ? resumeData.contact.github : `https://${resumeData.contact.github}` },
    { name: "Google Scholar", url: resumeData.contact.googleScholar.startsWith('http') ? resumeData.contact.googleScholar : `https://${resumeData.contact.googleScholar}` },
    { name: "ResearchGate", url: resumeData.contact.researchGate.startsWith('http') ? resumeData.contact.researchGate : `https://${resumeData.contact.researchGate}` },
  ];

  return (
    <section id="links" className="py-24 bg-blue-500/5 dark:bg-blue-900/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-center"
        >
          Professional Profiles<span className="text-[#188b89]">.</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((profile, i) => (
            <motion.a
              key={i}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="px-8 py-5 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500/50 flex items-center gap-3 transition-colors"
            >
              <span className="font-semibold text-gray-800 dark:text-gray-200">{profile.name}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
