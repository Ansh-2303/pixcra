"use client";

import Container from "../ui/container";

const footerLinks = {
  services: ['Growth & Ads', 'Web Architecture', 'AI Automation', 'UI/UX Design'],
  company: ['About Us', 'Case Studies', 'Process', 'Contact'],
  social: ['Twitter (X)', 'LinkedIn', 'GitHub'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a href="/" className="flex items-center gap-3 group w-fit mb-6">
              {/* Monochromatic logo rendering for the footer */}
              <img 
                src="/logo.png" 
                alt="PixCra" 
                className="w-8 h-8 object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" 
              />
              <span className="text-2xl font-bold tracking-tight text-white">PixCra</span>
            </a>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
              AI-powered growth and automation agency. We replace manual bottlenecks with high-performance digital systems.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white font-medium mb-6 text-sm tracking-wide">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300">
                    <span className="w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-6 text-sm tracking-wide">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300">
                    <span className="w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-6 text-sm tracking-wide">Connect</h4>
            <ul className="space-y-4">
              {footerLinks.social.map((link) => (
                <li key={link}>
                  <a href="#" className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300">
                    <span className="w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-600">
          <p>© {new Date().getFullYear()} PixCra. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Systems Operational
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}