"use client";

import React from "react";

type Props = {
  color?: "cyan" | "purple" | "orange" | "pink" | "blue" | "green";
};

const colorMap = {
  cyan: "bg-cyan-400",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  pink: "bg-pink-500",
  blue: "bg-blue-500",
  green: "bg-green-400",
};

export default function PixelCascade({ color = "cyan" }: Props) {
  return (
    <>
      <style>{`
        @keyframes cascadeDown {
          0% { transform: translateY(-30px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(350px); opacity: 0; }
        }
        /* Create 3 different speeds for a 3D depth effect */
        .animate-cascade-fast { animation: cascadeDown 1.2s linear infinite; }
        .animate-cascade-normal { animation: cascadeDown 1.8s linear infinite; }
        .animate-cascade-slow { animation: cascadeDown 2.4s linear infinite; }
        
        /* Stagger the start times */
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.7s; }
        .delay-3 { animation-delay: 1.1s; }
        .delay-4 { animation-delay: 1.5s; }
      `}</style>

      {/* z-0 ensures this falls BEHIND the text container in the service card */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        
        {/* Interior pixel 1: Faint, slow, long line */}
        <div className={`absolute left-[15%] top-0 w-[1px] h-6 ${colorMap[color]} animate-cascade-slow delay-1 opacity-30`} />
        
        {/* Interior pixel 2: Bright, fast, tiny square */}
        <div className={`absolute left-[35%] top-0 w-1.5 h-1.5 ${colorMap[color]} animate-cascade-fast delay-3 opacity-80`} />
        
        {/* Interior pixel 3: Medium line right down the middle */}
        <div className={`absolute left-[55%] top-0 w-[2px] h-3 ${colorMap[color]} animate-cascade-normal opacity-50`} />
        
        {/* Interior pixel 4: Tiny dot, slow */}
        <div className={`absolute left-[75%] top-0 w-1 h-1 ${colorMap[color]} animate-cascade-slow delay-2 opacity-60`} />
        
        {/* Interior pixel 5: Fast, long line near the right */}
        <div className={`absolute left-[88%] top-0 w-[1px] h-8 ${colorMap[color]} animate-cascade-fast delay-4 opacity-40`} />
        
        {/* Edge pixel: Keep one sharp pixel on the far right edge to define the border */}
        <div className={`absolute right-0 top-0 w-[2px] h-4 ${colorMap[color]} animate-cascade-normal delay-1 opacity-90`} />
        
      </div>
    </>
  );
}