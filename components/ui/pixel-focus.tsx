"use client";

import React from "react";

type Props = { color?: "cyan" | "purple" | "orange" | "pink" | "blue" | "green"; };
const colorMap = { cyan: "border-cyan-400", purple: "border-purple-500", orange: "border-orange-500", pink: "border-pink-500", blue: "border-blue-500", green: "border-green-400" };

export default function PixelFocus({ color = "cyan" }: Props) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {/* Top Left */}
      <div className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 ${colorMap[color]} transition-all duration-300 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`} />
      {/* Top Right */}
      <div className={`absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 ${colorMap[color]} transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`} />
      {/* Bottom Left */}
      <div className={`absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 ${colorMap[color]} transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`} />
      {/* Bottom Right */}
      <div className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 ${colorMap[color]} transition-all duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`} />
    </div>
  );
}