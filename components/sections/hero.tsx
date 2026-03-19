"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";
import PixelButton from "../ui/pixel-button";
import TextSweep from "../ui/text-sweep";
import PixelSpotlight from "../ui/pixel-spotlight";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center border-b border-neutral-900">
      
      {/* The Interactive Background Component */}
      <PixelSpotlight />

      <Container className="relative z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Premium custom easing curve
          className="max-w-4xl"
        >
          {/* Subtle label above headline */}
          <div className="mb-6 flex items-center gap-3">
             <div className="w-2 h-2 bg-neutral-700" />
             <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
                System Initialized
             </span>
          </div>

   <h1 className="group text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.1] tracking-tight text-white pointer-events-auto cursor-default">
            We Build. <br />
            <span className="text-neutral-500 inline-flex items-center gap-4 transition-colors duration-500 group-hover:text-white">
   <TextSweep text="We Automate." />
            </span><br />
            We Scale.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed font-light pointer-events-auto">
            AI-powered growth and automation agency. We replace manual bottlenecks with high-performance digital systems.
          </p>

          <div className="mt-12 flex items-center gap-6 pointer-events-auto">
            {/* Using the color="pink" to match the logo vibe */}
            <PixelButton color="pink">
              Deploy Systems
            </PixelButton>
            
            <a 
              href="#services" 
              className="group flex items-center gap-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
            >
              View Architecture
              {/* Custom arrow that slides slightly on hover */}
              <span className="block transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}