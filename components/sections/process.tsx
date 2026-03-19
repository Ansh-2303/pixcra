"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";
import PixelCompiler from "../ui/pixel-compiler";

// Using your exact 4 steps and assigning brand colors
const steps = [
  { 
    title: "Understand", 
    desc: "We analyze your business, goals, and operational bottlenecks.", 
    colorKey: "cyan" as const 
  },
  { 
    title: "Design", 
    desc: "We architect custom strategies, automated workflows, and UI systems.", 
    colorKey: "purple" as const 
  },
  { 
    title: "Build", 
    desc: "We engineer high-performance digital products and AI solutions.", 
    colorKey: "pink" as const 
  },
  { 
    title: "Scale", 
    desc: "We deploy, optimize, and grow your systems for long-term revenue.", 
    colorKey: "orange" as const 
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 border-b border-neutral-900 bg-[#0A0A0A]">
      <Container>
        <div className="max-w-2xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-neutral-700" />
            <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
              Execution Methodology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Our Process
          </h2>
          <p className="mt-6 text-xl text-neutral-400 leading-relaxed">
            A simple, transparent framework. We move from initial analysis to scalable deployment with absolute precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connecting Track Line (Hidden on mobile) */}
          <div className="absolute top-[11px] left-8 right-8 h-[1px] bg-neutral-900 hidden md:block z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative z-10"
            >
              <div className="flex flex-col gap-6">
                
                {/* Step Indicator */}
                <div className="flex items-center justify-between bg-[#0A0A0A] pr-4 w-fit">
                  <div className="text-xs font-mono text-neutral-600 transition-colors duration-300 group-hover:text-white">
                    PHASE 0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="border-l border-neutral-800 pl-6 py-2 group-hover:border-neutral-500 transition-colors duration-300">
                  <h3 className="text-xl font-medium text-white mb-3 flex items-center gap-3">
                    {step.title}
                    {/* The Sequential Pixel Effect */}
                    <PixelCompiler color={step.colorKey} />
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}