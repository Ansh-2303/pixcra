"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : "-100vh" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

      <div className="relative z-10 flex flex-col items-center">
        
  <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex items-center" 
        >
          {/* 🔥 THE FIX: 
              1. Pushed size to 11rem (Massive) to force the P to match the C.
              2. Increased negative margin (-mr-10) so the text doesn't drift away.
              3. Added -translate-y-2 to physically lift the P so the baselines match.
          */}
 <img 
            src="/logo.png" 
            alt="P" 
            className="w-32 h-32 md:w-[12rem] md:h-[12rem] object-contain md:-mr-12 md:translate-y-[-1px]" 
          />
          <span className="text-6xl md:text-[5.5rem] leading-none font-bold text-white tracking-tighter">
            ixCra
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8 md:mt-10 flex items-center gap-3"
        >
          <span className="w-2 h-2 bg-cyan-400 animate-pulse" />
          <span className="font-mono text-sm text-neutral-500 uppercase tracking-widest">
            Compiling Systems...
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex gap-[2px]"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 1, 1] }}
              transition={{ 
                duration: 2, 
                times: [0, 0.1, 1], 
                delay: 1.2 + (i * 0.2),
                ease: "linear"
              }}
              className="w-6 h-2 bg-white"
            />
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}