"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/50 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 p-12 md:p-16 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Get In Touch<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 font-medium">
            I welcome conversations about PhD opportunities and collaborations in reliable AI, NLP, transportation safety, and healthcare.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 outline-none text-white font-medium text-lg rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              Email Me
            </a>
            <a
              href={`mailto:${resumeData.contact.personalEmail}`}
              className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 text-gray-900 dark:text-gray-100"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              Personal Email
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer / Copyright */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-sm text-gray-400 dark:text-gray-600 font-mono">
          &copy; {new Date().getFullYear()} {resumeData.name}. Built with Next.js, mapped with Framer Motion.
        </p>
      </div>
    </section>
  );
}
