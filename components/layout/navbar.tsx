"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/container";
import PixelButton from "../ui/pixel-button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="py-5 border-b border-neutral-900 bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-50">
      <Container className="flex items-center justify-between">
        
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="PixCra" 
              className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6" 
            />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white transition-colors duration-300">
            PixCra
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
          <a href="#services" className="group flex items-center gap-2 hover:text-white transition-colors duration-300">
            <span>Services</span>
            <div className="w-2 h-2 flex items-center justify-center">
              <div className="w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </a>
          <a href="#process" className="group flex items-center gap-2 hover:text-white transition-colors duration-300">
            <span>Process</span>
            <div className="w-2 h-2 flex items-center justify-center">
              <div className="w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </a>
          <a href="#work" className="group flex items-center gap-2 hover:text-white transition-colors duration-300">
            <span>Work</span>
            <div className="w-2 h-2 flex items-center justify-center">
              <div className="w-2 h-2 bg-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </a>
        </div>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <div className="hidden md:block">
            <PixelButton color="blue" className="py-2 px-6">
              Get Started
            </PixelButton>
          </div>
          
          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-neutral-400 hover:text-white transition-colors"
          >
            <motion.div 
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
              className="w-6 h-[1.5px] bg-current origin-center transition-transform"
            />
            <motion.div 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="w-6 h-[1.5px] bg-current transition-opacity"
            />
            <motion.div 
              animate={isMobileMenuOpen ? { rotate: -45, y: -8, width: 24 } : { rotate: 0, y: 0, width: 16 }} 
              className="h-[1.5px] bg-current self-end origin-center transition-all"
            />
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-neutral-900 shadow-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              <a onClick={() => setIsMobileMenuOpen(false)} href="#services" className="text-lg font-medium text-neutral-400 hover:text-white flex items-center justify-between">
                Services <div className="w-2 h-2 bg-cyan-400" />
              </a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#process" className="text-lg font-medium text-neutral-400 hover:text-white flex items-center justify-between">
                Process <div className="w-2 h-2 bg-purple-500" />
              </a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#work" className="text-lg font-medium text-neutral-400 hover:text-white flex items-center justify-between">
                Work <div className="w-2 h-2 bg-orange-500" />
              </a>
              <div className="pt-6 border-t border-neutral-900 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <PixelButton color="blue" className="w-full py-4 text-center">
                  Get Started
                </PixelButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}