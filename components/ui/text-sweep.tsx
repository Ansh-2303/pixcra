"use client";

type Props = {
  text: string;
};

export default function TextSweep({ text }: Props) {
  return (
    <span className="relative inline-block overflow-hidden group cursor-crosshair">
      {/* Base text (Gray) */}
      <span className="text-neutral-500">{text}</span>

      {/* The Sweep Light (White) - Hidden by default, sweeps across on hover */}
      <span 
        className="absolute top-0 left-0 whitespace-nowrap text-white w-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:w-full"
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
}