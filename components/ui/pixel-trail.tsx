"use client";

import { useState, useCallback } from "react";

type Trail = {
  x: number;
  y: number;
  id: number;
};

export default function PixelTrail() {
  const [trail, setTrail] = useState<Trail[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Snap to an 8px grid for that mathematical "pixel" feel
    const snap = 8; 
    const x = Math.floor((e.clientX - rect.left) / snap) * snap;
    const y = Math.floor((e.clientY - rect.top) / snap) * snap;

    const newPoint = { x, y, id: Date.now() };

    setTrail((prev) => [...prev.slice(-5), newPoint]); // Keep trail short (5 blocks)

    setTimeout(() => {
      setTrail((prev) => prev.slice(1));
    }, 300); // Fast, snappy fade
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 z-0 overflow-hidden"
    >
      {trail.map((p) => (
        <div
          key={p.id}
          className="absolute w-2 h-2 bg-neutral-800 transition-opacity duration-300"
          style={{
            left: p.x,
            top: p.y,
            // NO GLOW. Strict squares.
          }}
        />
      ))}
    </div>
  );
}