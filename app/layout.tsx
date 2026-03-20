import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import CustomCursor from "../components/ui/cursor";
import SmoothScroll from "../components/ui/smooth-scroll";
// 🔥 Import the Noise texture
import GlobalGrain from "../components/ui/noise";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PixCra | Engineering & Design",
  description: "From concept to commercial success. We architect, automate, and scale digital systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={`
          ${inter.className} 
          bg-[#0A0A0A] 
          text-white 
          antialiased 
          selection:bg-emerald-500 
          selection:text-black
        `}
      >
        {/* 🔥 The Global Textures & Tools */}
        <GlobalGrain />
        <CustomCursor />
        
        <SmoothScroll>
          {children}
        </SmoothScroll>
        
      </body>
    </html>
  );
}