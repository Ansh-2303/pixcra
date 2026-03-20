"use client";

// 🔥 Using the brand new, officially supported package
import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5 }}>
      {/* We cast to any to bypass overly-strict React 19 type checking */}
      {children as any}
    </ReactLenis>
  );
}