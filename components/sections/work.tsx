"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";
import PixelFocus from "../ui/pixel-focus";

const projects = [
  {
    title: "Elite Gaming Equipment",
    category: "Web Architecture",
    metric: "E-Commerce",
    desc: "Engineered a high-performance storefront with custom UI components and optimized load times for a seamless buying experience.",
    image: "/gaming-site.jpg", // Drop your image in the public folder
    colorKey: "blue" as const,
    gridStyle: "md:col-span-2 lg:col-span-8", // Massive feature card
  },
  {
    title: "AllyGo EdTech",
    category: "Social Media & Growth",
    metric: "Lead Generation",
    desc: "Designed comprehensive marketing materials, website content, and growth funnels to scale user acquisition.",
    image: "/allygo.jpg", // Drop your image in the public folder
    colorKey: "pink" as const,
    gridStyle: "md:col-span-1 lg:col-span-4", // Tall side card
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-32 border-b border-neutral-900 bg-[#0A0A0A]">
      <Container>
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-neutral-700" />
            <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
              Proof of Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white flex justify-between items-end">
            Recent Deployments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col border border-neutral-900 bg-[#0A0A0A] overflow-hidden ${project.gridStyle}`}
            >
              {/* The Hover Brackets */}
              <PixelFocus color={project.colorKey} />

              {/* The Image Wrapper (Overflow Hidden for the Zoom effect) */}
              <div className="relative h-72 md:h-96 w-full bg-[#111] overflow-hidden border-b border-neutral-900">
                {/* When you add your images to the public folder, this will display them.
                  The group-hover:scale-105 gives it that premium agency slow-zoom.
                */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100"
                />
              </div>

              {/* Content Block */}
              <div className="p-8 relative z-10 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-white bg-neutral-900 px-3 py-1">
                      {project.metric}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
                    {project.desc}
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