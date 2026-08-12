"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Research", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] ${
        scrolled
          ? "bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-200/50 dark:border-zinc-800/80 py-3"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between relative z-50">
        <button
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl font-bold tracking-tight relative z-50 cursor-pointer"
        >
          {resumeData.name.split(" ")[1]}<span className="text-[#188b89]">.</span>
        </button>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
  CV available upon request
</span>
          <ThemeToggle />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3 relative z-50">
          <ThemeToggle />
          <button
            className="flex flex-col gap-[5px] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-gray-900 dark:bg-gray-100 transition-transform origin-center"
            ></motion.div>
            <motion.div
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-gray-900 dark:bg-gray-100 transition-opacity"
            ></motion.div>
            <motion.div
              animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-gray-900 dark:bg-gray-100 transition-transform origin-center"
            ></motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white/98 dark:bg-[#0a0a0a]/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden h-screen w-screen -z-10"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <span className="mt-4 text-lg font-medium text-gray-600 dark:text-gray-400">
  CV available upon request
</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
