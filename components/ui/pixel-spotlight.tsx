"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PixelSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;

      // MATH FIX: Determine if the mouse is actually inside the Hero section bounds
      const isInside = 
        rawX >= 0 && 
        rawX <= rect.width && 
        rawY >= 0 && 
        rawY <= rect.height;

      setIsHovered(isInside);

      // Snap to the 32px grid
      const gridSize = 32; 
      const snappedX = Math.round(rawX / gridSize) * gridSize;
      const snappedY = Math.round(rawY / gridSize) * gridSize;

      setPosition({ x: snappedX, y: snappedY });
    };

    // FIX: Listen to the entire window so text doesn't block the tracking
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]"
    >
      {/* 1. The Base Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* 2. The Interactive Light */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        style={{
          WebkitMaskImage: `radial-gradient(circle 120px at ${position.x}px ${position.y}px, black 20%, transparent 100%)`,
          maskImage: `radial-gradient(circle 120px at ${position.x}px ${position.y}px, black 20%, transparent 100%)`,
        }}
      >
        {/* Logo Colors */}
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#EAB308_0%,#EF4444_15%,#EC4899_30%,#A855F7_50%,#3B82F6_70%,#06B6D4_85%,#22C55E_100%)] opacity-30" />
        
        {/* The Chopper Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A0A0A_1px,transparent_1px),linear-gradient(to_bottom,#0A0A0A_1px,transparent_1px)] bg-[size:32px_32px]" />
      </motion.div>
    </div>
  );
}