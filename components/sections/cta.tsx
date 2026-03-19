"use client";

import Container from "../ui/container";
import PixelButton from "../ui/pixel-button";

export default function CTASection() {
  return (
    <section className="py-32 bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden border-t border-b border-neutral-900">
      
      {/* Subtle geometric background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {/* Added 'group' here so hovering anywhere in this block triggers the blue accent */}
      <Container className="relative z-10 text-center max-w-3xl flex flex-col items-center group cursor-crosshair">
        
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="w-1.5 h-1.5 bg-neutral-700" />
          <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
            System Ready
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8 flex items-center justify-center gap-4">
          Initiate Build
          {/* 🔥 SINGLE ACCENT: Dormant gray pulse -> Solid Subtle Blue on hover */}
          <span className="w-4 h-8 bg-neutral-800 animate-pulse group-hover:bg-blue-500 group-hover:animate-none transition-colors duration-300" />
        </h2>
        
        <p className="text-xl text-neutral-400 mb-12 max-w-xl mx-auto leading-relaxed">
          Stop relying on manual operations. Let’s engineer the digital infrastructure your business needs to scale autonomously.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          {/* 🔥 BUTTON MATCHES ACCENT: Uses the subtle blue pixel hover */}
          <PixelButton color="blue" className="w-full sm:w-auto text-lg px-8 py-4">
            Book Strategy Call
          </PixelButton>
          
          <a 
            href="https://wa.me/yourphonenumber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-white font-medium border border-neutral-800 hover:border-neutral-500 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Chat on WhatsApp ↗
          </a>
        </div>
      </Container>
    </section>
  );
}