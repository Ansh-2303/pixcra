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

export default function PixelCompiler({ color = "cyan" }: Props) {
  return (
    <div className="flex gap-[2px] items-center">
      {/* Pixel 1 - Fast */}
      <div className={`w-1.5 h-1.5 ${colorMap[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-150`} />
      
      {/* Pixel 2 - Delayed */}
      <div className={`w-1.5 h-1.5 ${colorMap[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-100`} />
      
      {/* Pixel 3 - Most Delayed */}
      <div className={`w-1.5 h-1.5 ${colorMap[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-200`} />
    </div>
  );
}