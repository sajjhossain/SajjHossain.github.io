"use client";

import { motion } from "framer-motion";

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden hidden md:block">
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
      />
      
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      />
      
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[40%] w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
      />
    </div>
  );
}
