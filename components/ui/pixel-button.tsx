"use client";

import { useState } from "react";

type Props = {
  children: React.ReactNode;
  color?: "cyan" | "blue" | "purple" | "pink" | "red" | "orange" | "yellow" | "green";
  className?: string;
};

const colorMap = {
  cyan: "bg-cyan-400",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  red: "bg-red-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-400",
  green: "bg-green-400",
};

export default function PixelButton({ children, color = "cyan", className = "" }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative px-6 py-3 bg-[#0A0A0A] border border-neutral-800 text-white text-sm font-medium transition-all duration-300 hover:border-neutral-500 overflow-hidden group flex items-center justify-center ${className}`}
    >
      {/* The Interaction Reward Pixel - Now using logo colors */}
      <div 
        className={`absolute top-0 right-0 w-2 h-2 transition-all duration-300 ${
          hovered ? colorMap[color] : "bg-transparent"
        }`} 
      />
      
      <span className="relative z-10 tracking-wide">{children}</span>
    </button>
  );
}