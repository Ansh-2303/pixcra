"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../ui/container";

type Log = {
  command: string;
  response: string;
};

export default function Contact() {
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [logs, setLogs] = useState<Log[]>([]);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const sequence = [
    { key: "name", prompt: "Enter your identifier [Name]:" },
    { key: "email", prompt: "Enter routing protocol [Email]:" },
    { key: "project", prompt: "Define system parameters [Project Details]:" },
  ];

  // The Boot-up sequence effect
  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setIsBooting(false);
      inputRef.current?.focus();
    }, 1500);
    return () => clearTimeout(bootTimer);
  }, []);

  // Auto-scroll to bottom when new logs are added
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs, step, isTransmitting]);

  const focusInput = () => {
    if (inputRef.current && step < sequence.length && !isBooting) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setLogs((prev) => [
        ...prev,
        { command: sequence[step].prompt, response: inputValue },
      ]);
      setInputValue("");

      if (step < sequence.length - 1) {
        setStep(step + 1);
      } else {
        setStep(step + 1);
        handleTransmit();
      }
    }
  };

  const handleTransmit = () => {
    setIsTransmitting(true);
    // Simulate sending data to a server (You will connect your real API here later)
    setTimeout(() => {
      setIsTransmitting(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 border-b border-neutral-900 bg-[#050505] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Copy */}
          <div className="flex-1 z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span className="text-neutral-400 font-mono text-sm uppercase tracking-widest">
                  Open Secure Channel
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                Ready to compile your vision?
              </h2>
              <p className="text-neutral-400 text-lg mb-8 max-w-md leading-relaxed">
                Skip the generic contact forms. Initialize a secure connection to our engineering team and let's architect your next dominant product.
              </p>
            </motion.div>
          </div>

          {/* Right Side: The Terminal */}
          <div className="flex-1 w-full max-w-xl z-10 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              // The subtle gradient border wrapping the terminal
              className="w-full bg-gradient-to-b from-neutral-800 to-neutral-900 p-[1px] rounded-xl shadow-2xl shadow-emerald-900/5 cursor-text group"
              onClick={focusInput}
            >
              <div className="bg-[#0A0A0A] rounded-xl overflow-hidden relative">
                
                {/* Terminal Header */}
                <div className="bg-[#111] px-4 py-3 border-b border-neutral-800 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                  </div>
                  <span className="ml-4 text-xs font-mono text-neutral-500 select-none">root@pixcra:~</span>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm md:text-base h-[350px] overflow-y-auto overflow-x-hidden flex flex-col relative scrollbar-hide">
                  
                  {isBooting ? (
                    <div className="text-neutral-500 flex flex-col gap-1">
                      <span>Booting PixCra Core v1.0.0...</span>
                      <span className="animate-pulse">Loading modules...</span>
                    </div>
                  ) : (
                    <>
                      <div className="text-neutral-500 mb-6 pb-4 border-b border-neutral-800/50">
                        PixCra Core v1.0.0 (x86_64-pc-linux-gnu)<br/>
                        Establishing secure socket... <span className="text-emerald-500">OK.</span>
                      </div>

                      {/* Printed Logs */}
                      {logs.map((log, i) => (
                        <div key={i} className="mb-6">
                          <div className="text-emerald-400">guest@pixcra:~$ {log.command}</div>
                          <div className="text-white mt-2 pl-4 border-l-2 border-neutral-800">{log.response}</div>
                        </div>
                      ))}

                      {/* Active Input Line */}
                      {step < sequence.length && (
                        <div className="mb-4">
                          <div className="text-emerald-400">guest@pixcra:~$ {sequence[step].prompt}</div>
                          <div className="flex items-center mt-2 pl-4 border-l-2 border-emerald-500/30">
                            <span className="text-emerald-500 mr-2">{">"}</span>
                            <span className="text-white break-all">{inputValue}</span>
                            <span className="w-2.5 h-5 bg-white animate-pulse ml-1" />
                          </div>
                        </div>
                      )}

                      {/* Transmitting State */}
                      {step === sequence.length && (
                        <div className="mt-4 mb-4">
                          {isTransmitting ? (
                            <span className="flex items-center gap-3 text-neutral-400">
                              <span className="animate-spin text-emerald-500">/</span> [EXECUTING] Compiling data matrix... 
                            </span>
                          ) : (
                            <div className="text-emerald-400 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded">
                              [SUCCESS] Transmission received. Our engineers will decrypt your parameters and contact you shortly.
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                  
                  {/* Invisible anchor for auto-scrolling */}
                  <div ref={bottomRef} className="h-1 w-full" />
                </div>

                {/* The Invisible Global Input Field */}
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={step >= sequence.length || isBooting}
                  className="opacity-0 absolute inset-0 w-full h-full cursor-text z-20"
                  autoFocus
                />
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}