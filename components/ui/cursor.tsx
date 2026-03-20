"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // 🔥 useMotionValue bypasses React state for ZERO lag
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for a buttery smooth trailing effect
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("button") || 
        target.closest("a");
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      {/* The mix-blend-difference class makes the cursor invert colors based on what is behind it. 
        It will never block text again.
      */}
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center mix-blend-difference pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        {/* The dynamic targeting ring */}
        <motion.div
          animate={{
            width: isHovering ? 48 : 8,
            height: isHovering ? 48 : 8,
            borderWidth: isHovering ? 2 : 0,
            backgroundColor: isHovering ? "transparent" : "#ffffff",
            borderColor: "#ffffff",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        >
          {/* Inner dot that appears only on hover */}
          <motion.div 
            animate={{ 
              scale: isHovering ? 1 : 0,
              opacity: isHovering ? 1 : 0 
            }}
            className="w-1 h-1 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}