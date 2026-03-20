"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";

// 1. The Web Theme (Browser Window UI)
const WebTheme = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity duration-700">
    <div className="absolute top-0 left-0 w-full h-8 border-b border-neutral-800/50 bg-neutral-900/20 flex items-center px-4 gap-1.5">
      <div className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-red-500/50 transition-colors" />
      <div className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-yellow-500/50 transition-colors" />
      <div className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-green-500/50 transition-colors" />
    </div>
    <div className="absolute inset-0 mt-8 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
  </div>
);

// 2. The App Theme (Mobile Device Wireframe)
const AppTheme = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 group-hover:opacity-100 transition-opacity duration-700">
    <div className="absolute -right-8 -bottom-12 w-48 h-96 border border-neutral-800 rounded-[2.5rem] bg-neutral-900/10 rotate-12 group-hover:border-purple-500/30 group-hover:-translate-y-4 transition-all duration-700 ease-out flex justify-center">
      {/* The Notch */}
      <div className="w-16 h-4 bg-neutral-800 rounded-b-xl group-hover:bg-purple-900/50 transition-colors duration-700" />
    </div>
  </div>
);

// 3. The AI Theme (Terminal Data Stream)
const AITheme = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 group-hover:opacity-40 transition-opacity duration-700">
    <div className="absolute left-6 top-1/2 -translate-y-1/2 font-mono text-xs text-emerald-500/30 group-hover:text-emerald-400 flex flex-col gap-2 transition-colors duration-700">
      <span>{">"} sys.init(AI_CORE)</span>
      <span>{">"} loading_weights... [OK]</span>
      <span>{">"} neural_net.mount()</span>
      <span className="animate-pulse">{">"} awaiting_input_</span>
    </div>
    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
  </div>
);

// 4. The UI/UX Theme (Design Canvas Grid & Crosshairs)
const DesignTheme = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity duration-700">
    {/* Design Crosshairs */}
    <div className="absolute top-1/4 right-1/4 w-4 h-4 group-hover:scale-125 transition-transform duration-700">
      <div className="absolute top-1/2 -left-2 w-8 h-[1px] bg-orange-500/30" />
      <div className="absolute left-1/2 -top-2 w-[1px] h-8 bg-orange-500/30" />
    </div>
    {/* Wireframe overlapping boxes */}
    <div className="absolute -right-4 -bottom-4 w-32 h-32 border border-neutral-800 group-hover:border-orange-500/20 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-700" />
    <div className="absolute right-4 bottom-4 w-32 h-32 border border-neutral-800 bg-neutral-900/20 group-hover:border-orange-500/30 transition-colors duration-700" />
  </div>
);

const capabilities = [
  {
    title: "Web Architecture",
    theme: <WebTheme />,
    colorClass: "group-hover:text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5",
    skills: ["High-performance websites", "SaaS Applications", "Custom Dashboards", "Clean Architecture", "SEO Fundamentals", "Fast Load Times", "Frontend & Backend Integration"]
  },
  {
    title: "App Development",
    theme: <AppTheme />,
    colorClass: "group-hover:text-purple-400 group-hover:border-purple-500/30 group-hover:bg-purple-500/5",
    skills: ["Cross-platform apps", "Android & iOS", "React Native", "Offline Support", "State Management", "Push Notifications", "App Store Deployment"]
  },
  {
    title: "AI & Automation",
    theme: <AITheme />,
    colorClass: "group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5",
    skills: ["AI Chatbots & Agents", "LLM Integrations", "Workflow Automation", "Custom AI Pipelines", "Data Enrichment", "API Orchestration", "Python Scripts"]
  },
  {
    title: "UI/UX & Cloud",
    theme: <DesignTheme />,
    colorClass: "group-hover:text-orange-400 group-hover:border-orange-500/30 group-hover:bg-orange-500/5",
    skills: ["User Research", "Design Systems", "Conversion-Focused Design", "Serverless Functions", "Database Design", "API Security", "Cloud Infrastructure"]
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 border-b border-neutral-900 bg-[#0A0A0A] relative z-10">
      <Container>
        <div className="mb-20 relative z-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-neutral-700" />
            <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
              Core Competencies
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-20">
          {capabilities.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // 🔥 Overhauled Card Container
              className="group relative bg-[#0D0D0D] border border-neutral-800/60 p-8 md:p-10 rounded-lg overflow-hidden transition-colors duration-500 hover:border-neutral-700"
            >
              {/* Inject the Custom Structural Theme here */}
              {category.theme}

              {/* Card Content (Elevated above the theme with z-10) */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-500">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`
                        px-4 py-2 text-sm font-mono text-neutral-400 
                        bg-[#111] border border-neutral-800 rounded backdrop-blur-md
                        transition-all duration-300 cursor-default
                        ${category.colorClass}
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}