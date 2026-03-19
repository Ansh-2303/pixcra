"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";
import Pixel from "../ui/pixel";
import PixelCascade from "../ui/pixel-cascade"; // Our new engine

// Using your exact 3 core pillars from the blueprint
const services = [
  { 
    title: "Growth", 
    desc: "Revenue-focused engineering. We build Social Media Marketing systems, Performance Ads, and scalable SEO.", 
    colorKey: "cyan" as const,
    hoverText: "group-hover:text-cyan-400"
  },
  { 
    title: "Build", 
    desc: "Digital asset creation. High-performance Web Architecture, modern UI/UX Design, and App Development.", 
    colorKey: "purple" as const,
    hoverText: "group-hover:text-purple-400"
  },
  { 
    title: "Automation", 
    desc: "Replace manual bottlenecks. We deploy AI Chatbots, CRM Workflows, and autonomous Lead Generation Systems.", 
    colorKey: "orange" as const,
    hoverText: "group-hover:text-orange-400"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 border-b border-neutral-900 bg-[#0A0A0A]">
      <Container>
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-neutral-700" />
            <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            The Architecture
          </h2>
          <p className="mt-6 text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Three structured pillars designed to engineer your business growth. We don't just offer services; we build systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group border border-neutral-900 bg-[#0A0A0A] p-8 hover:border-neutral-700 transition-colors duration-500 overflow-hidden h-72 flex flex-col justify-end cursor-crosshair"
            >
              {/* The Data Cascade triggers on hover */}
              <PixelCascade color={service.colorKey} />

              <div className="relative z-10 pointer-events-none">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center justify-between transition-colors duration-300">
                  {service.title}
                  
                  {/* The static corner pixel that lights up on hover */}
                  <Pixel className={`opacity-0 group-hover:opacity-100 bg-${service.colorKey}-400 transition-all duration-300`} />
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}