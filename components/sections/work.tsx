"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/container";
import Magnetic from "../ui/magnetic";  

// Added detailed preview data like 'techStack' and 'liveUrl'
const projects = [
{
    id: "01",
    title: "AllyGo",
    category: "EdTech Infrastructure",
    description: "A scalable educational technology platform architected to deliver high-performance learning modules and streamline student-mentor interactions.",
    color: "group-hover:text-cyan-400",
    modalColor: "text-cyan-400",
    bgAccent: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    liveUrl: "https://allygo.in/" // 🔥 Your real link is right here
  },
  {
    id: "02",
    title: "Elite Gaming",
    category: "E-Commerce Architecture",
    description: "High-conversion storefront featuring custom JSX hero sections and optimized CSS rendering for premium gaming hardware.",
    color: "group-hover:text-purple-500",
    modalColor: "text-purple-500",
    bgAccent: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    techStack: ["React", "Shopify Hydrogen", "Tailwind", "Framer Motion"],
    liveUrl: "#"
  },
  {
    id: "03",
    title: "Career Strategy Dashboard",
    category: "Web Application",
    description: "A comprehensive career coaching portal featuring a built-in Resume Studio, Interview Coach logic, and live analytics.",
    color: "group-hover:text-orange-500",
    modalColor: "text-orange-500",
    bgAccent: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#"
  }
];

export default function WorkSection() {
  // State to track which project is currently open in the preview modal
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="work" className="py-32 border-b border-neutral-900 bg-[#0A0A0A] relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-neutral-700" />
              <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
                System Outputs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Deployed Architectures
            </h2>
          </div>
          <p className="text-neutral-500 text-sm font-mono uppercase tracking-widest max-w-xs md:text-right">
            // Hover over modules to decrypt visuals. Click to initialize preview.
          </p>
        </div>

        {/* The Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative flex flex-col cursor-pointer ${project.bgAccent} transition-all duration-700`}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#111] border border-neutral-900 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out grayscale-[100%] blur-[2px] opacity-40 group-hover:grayscale-0 group-hover:blur-0 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none transition-opacity duration-500 group-hover:opacity-20" />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-neutral-800 px-3 py-1 font-mono text-xs text-neutral-500 transition-colors duration-500 group-hover:border-neutral-600 group-hover:text-white z-10">
                  SYS_ID: {project.id}
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                    {project.category}
                  </span>
                  <span className={`font-mono text-sm opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 ${project.color}`}>
                    [ PREVIEW ]
                  </span>
                </div>
                <h3 className={`text-2xl font-semibold text-white mb-3 transition-colors duration-500 ${project.color}`}>
                  {project.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm transition-colors duration-500 group-hover:text-neutral-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* 🔥 THE PREVIEW MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Clicking the blurry background closes the modal
            onClick={() => setSelectedProject(null)} 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-alias"
          >
            {/* The Modal Content Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              // Prevent clicks inside the box from closing the modal
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-5xl bg-[#0A0A0A] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl cursor-auto flex flex-col md:flex-row"
            >
              
              {/* Left Side: Large Preview Image */}
              <div className="w-full md:w-3/5 h-[300px] md:h-[500px] relative bg-black">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                {/* Tech Overlay lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              </div>

              {/* Right Side: Project Details */}
              <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                    SYS_ID: {selectedProject.id}
                  </span>
                  {/* Close Button */}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-neutral-500 hover:text-white transition-colors font-mono text-sm"
                  >
                    [ X ]
                  </button>
                </div>

                <h3 className={`text-3xl font-semibold text-white mb-2 ${selectedProject.modalColor}`}>
                  {selectedProject.title}
                </h3>
                <h4 className="text-neutral-400 font-mono text-sm mb-6 pb-6 border-b border-neutral-800">
                  {selectedProject.category}
                </h4>

                <p className="text-neutral-300 leading-relaxed mb-8 flex-1">
                  {selectedProject.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="mb-8">
                  <span className="block text-xs font-mono text-neutral-500 mb-3 uppercase">Core Technologies</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="bg-neutral-900 border border-neutral-800 px-3 py-1 text-xs font-mono text-neutral-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Launch Button */}
           {/* Launch Button wrapped in Magnetic physics */}
<Magnetic>
  <a 
    href={selectedProject.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full block text-center bg-white text-black font-semibold py-4 px-8 rounded hover:bg-neutral-200 transition-colors"
  >
    Initialize Live System
  </a>
</Magnetic>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}