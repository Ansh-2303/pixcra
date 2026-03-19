"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";

// Grouping your exact list into logical engineering pillars
const capabilities = [
  {
    category: "Web Architecture",
    items: ["High-performance websites", "SaaS Applications", "Custom Dashboards", "Clean Architecture", "SEO Fundamentals", "Fast Load Times", "Frontend & Backend Integration"],
  },
  {
    category: "App Development",
    items: ["Cross-platform apps", "Android & iOS", "React Native", "Offline Support", "State Management", "Push Notifications", "App Store Deployment"],
  },
  {
    category: "AI & Automation",
    items: ["AI Chatbots & Agents", "LLM Integrations", "Workflow Automation", "Custom AI Pipelines", "Data Enrichment", "API Orchestration", "Python Scripts"],
  },
  {
    category: "UI/UX & Cloud",
    items: ["User Research", "Design Systems", "Conversion-Focused Design", "Serverless Functions", "Database Design", "API Security", "Cloud Infrastructure"],
  },
];

export default function Capabilities() {
  return (
    <section className="py-24 border-b border-neutral-900 bg-[#0A0A0A]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 bg-neutral-700" />
              <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
                Technical Arsenal
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Complete Engineering Capabilities
            </h2>
          </div>
          <p className="text-neutral-500 text-sm font-mono uppercase tracking-widest max-w-xs md:text-right">
            // The precise tech stack we use to build scalable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-neutral-900 bg-[#0F0F0F] hover:bg-[#141414] transition-colors duration-500 group"
            >
              <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                {/* A dormant pixel that lights up white on hover to match our aesthetic rule */}
                <span className="w-1.5 h-1.5 bg-neutral-800 group-hover:bg-white transition-colors duration-300" />
                {stack.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono text-neutral-400 border border-neutral-800 bg-[#0A0A0A] hover:text-white hover:border-neutral-600 transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}