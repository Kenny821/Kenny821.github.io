import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  const scrolltoTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080809] border-t border-white/5 py-12">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <span className="font-display font-medium text-sm tracking-widest text-[#E0E0E6]">
              KENNY_FOLIO
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#f27d26]" />
          </div>

          {/* Copyright description */}
          <div className="text-zinc-500 text-xs text-center font-sans">
            © 2026 KENNY Portfolio. All rights reserved.
          </div>

          {/* Nav Links exactly matching image layout */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a 
              href="https://www.instagram.com/iskennyyy8/" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-sans text-zinc-500 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://www.github.com/iskennyyy8" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-sans text-zinc-500 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:kienee821@gmail.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-sans text-zinc-500 hover:text-white transition-colors"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/kien-ee-loh-3701513a7" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-sans text-zinc-500 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

        </div>

        {/* Diagnostic Metadata Rail / Visual Bottom Line */}
        <div className="mt-10 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-[10px] font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-zinc-600" />
            <span>PORT_3000 // LOC_CONTAINER // ENV_PRODUCTIVE // TRACE_OK</span>
          </div>
          
          <button
            id="back-to-top"
            onClick={scrolltoTop}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            BACK TO TOP <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
