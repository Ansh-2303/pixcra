"use client";

import { useEffect, useState } from "react";

type Props = { text: string; };
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export default function TextDecode({ text }: Props) {
  const [display, setDisplay] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) { setDisplay(text); return; }
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(text.split("").map((char, index) => {
        if (char === " ") return " ";
        if (index < Math.floor(iteration)) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      iteration += 1 / 3;
      if (iteration >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [isHovered, text]);

  return (
    <span onMouseEnter={() => setIsHovered(true)} className="inline-block cursor-crosshair">
      {display}
    </span>
  );
}