"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Container from "../ui/container";

const phases = [
  {
    num: "01",
    title: "Discovery & Architecture",
    desc: "We don't guess. We map your entire business logic, identify bottlenecks, and architect a scalable digital blueprint before writing a single line of code.",
    color: "bg-cyan-400"
  },
  {
    num: "02",
    title: "Pixel-Perfect Crafting",
    desc: "Our design engineers translate the blueprint into high-fidelity, conversion-optimized interfaces. Every pixel serves a distinct mathematical and psychological purpose.",
    color: "bg-purple-500"
  },
  {
    num: "03",
    title: "System Automation",
    desc: "We replace manual tasks with intelligent workflows. Integrating APIs, LLMs, and custom scripts to make your infrastructure run autonomously.",
    color: "bg-blue-500"
  },
  {
    num: "04",
    title: "Quality Assurance",
    desc: "Rigorous stress testing. We deploy automated accessibility checks, security audits, and performance Lighthouse scoring to ensure a flawless build.",
    color: "bg-orange-500"
  },
  {
    num: "05",
    title: "Deployment & Scale",
    desc: "Pushing to production with zero downtime. We set up robust observability pipelines so your system scales seamlessly as your user base explodes.",
    color: "bg-green-400"
  }
];

const AUTO_PLAY_INTERVAL = 6000;

// 🔥 NEW: Added 'start' prop so it waits for the scroll
const DecryptedText = ({ text, start }: { text: string; start: boolean }) => {
  const [displayText, setDisplayText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";

  useEffect(() => {
    if (!start) return; // Do nothing until scrolled into view

    let iteration = 0;
    let interval: NodeJS.Timeout;

    setDisplayText("");

    interval = setInterval(() => {
      setDisplayText((current) => {
        return text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return letter === " " ? " " : letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");
      });

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3; 
    }, 20);

    return () => clearInterval(interval);
  }, [text, start]);

  return <>{displayText}</>;
};

export default function Process() {
  const [activePhase, setActivePhase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // 🔥 NEW: The Viewport Sensor
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // Only run if the section is on screen AND the mouse isn't hovering
    if (!isInView || isHovered) return;

    const timer = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, AUTO_PLAY_INTERVAL);
    
    return () => clearInterval(timer);
  }, [activePhase, isHovered, isInView]);

  return (
    <section ref={sectionRef} id="process" className="py-32 border-b border-neutral-900 bg-[#0A0A0A] overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-neutral-700" />
            <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
              Execution Protocol
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            From Concept to Commercial Success
          </h2>
          <p className="text-neutral-400 max-w-xl text-lg">
            Our 5-phase delivery model moves your product from idea to launch with absolute clarity, precision, and predictable execution.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 md:gap-8 mb-16 max-w-4xl mx-auto relative z-10">
          {phases.map((phase, index) => {
            const isActive = activePhase === index;
            
            return (
             <button
  key={phase.num}
  onClick={() => setActivePhase(index)}
  // 🔥 FIX: This prevents the 'fdprocessedid' error from browser extensions
  suppressHydrationWarning
  className="group relative flex flex-col items-center gap-4 flex-1 outline-none [-webkit-tap-highlight-color:transparent]"
>
  <div className="relative flex items-center justify-center">
    <span className={`text-sm md:text-xl font-mono transition-colors duration-500 ${isActive ? 'text-white' : 'text-neutral-600 group-hover:text-neutral-400'}`}>
      {phase.num}
    </span>
    {isActive && (
      <motion.div 
        layoutId="activePixel"
        className={`absolute -right-3 top-1 w-1.5 h-1.5 ${phase.color}`} 
      />
    )}
  </div>

  <div className="w-full h-1.5 bg-neutral-900 relative overflow-hidden">
    {isActive && (
      <motion.div
        // 🔥 FIX: Key ensures the animation resets correctly when phase changes
        key={`bar-${activePhase}`} 
        initial={{ width: "0%" }}
        animate={{ width: isInView ? "100%" : "0%" }}
        transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
        style={{ 
          animationPlayState: isHovered ? 'paused' : 'running',
          // Performance optimization
          willChange: "width" 
        }}
        className={`absolute top-0 left-0 h-full ${phase.color}`}
      />
    )}
    {/* The "chopped pixel" mask overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_4px,#0A0A0A_4px)] bg-[length:6px_100%] z-10" />
  </div>
</button>
            );
          })}
        </div>

        <div 
          className="relative h-[200px] max-w-2xl mx-auto text-center flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h3 className="text-3xl font-semibold text-white mb-4 h-10 font-mono flex items-center justify-center gap-1">
                {/* 🔥 Passes the scroll state to trigger the decryption */}
                <DecryptedText text={phases[activePhase].title} start={isInView} />
                <span className="w-3 h-8 bg-neutral-500 animate-pulse inline-block" />
              </h3>
              <p className="text-neutral-400 leading-relaxed md:text-lg">
                {phases[activePhase].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </Container>
    </section>
  );
}