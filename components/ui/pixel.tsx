type PixelProps = {
  className?: string;
};

export default function Pixel({ className = "" }: PixelProps) {
  // Base is a strict 8x8 square (w-2 h-2). No rounding.
  return (
    <div className={`w-2 h-2 bg-white transition-colors duration-300 ${className}`} />
  );
}