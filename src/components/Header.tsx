import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, CornerDownLeft, Sparkles, Navigation } from 'lucide-react';

interface HeaderProps {
  onHireMeClick: () => void;
  activeIndex?: number;
}

export default function Header({ onHireMeClick, activeIndex }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { number: '01', name: 'Hero Section', href: '#hero', desc: 'The starting creed & leap of faith' },
    { number: '02', name: 'This Is Me', href: '#this-is-me', desc: 'Summary of path and focus' },
    { number: '03', name: 'Experience', href: '#experience', desc: 'Esports, Society and tech technician' },
    { number: '04', name: 'Project', href: '#project', desc: 'Crow Education hackathon system' },
    { number: '05', name: 'Skill', href: '#skill', desc: 'Hard PHP/SQL tools & public speaking' },
    { number: '06', name: 'Achievement', href: '#achievement', desc: 'Scholarship and prefect awards' },
    { number: '07', name: 'Education Background', href: '#education', desc: 'TAR UMT computational course' },
    { number: '08', name: 'Interest & hobbies', href: '#interest-hobbies', desc: 'Gaming, active sports, photography' },
    { number: '09', name: 'About Me', href: '#about-me', desc: 'Full development & personal journey' },
    { number: '10', name: 'Contact', href: '#contact', desc: 'Let’s communicate and synchronize' },
    { number: '11', name: 'My Philosophy', href: '#philosophy', desc: '7 guiding principles of life' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    
    // Slight delay to allow overlay to slide out nicely
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 350);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full bg-[#0c0c0c]/85 backdrop-blur-[20px] border-b border-white/[0.06] select-none">
        {/* Subtle top indicator glow */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#f27d26]/20 to-transparent" />
        
        <div className="max-w-[1100px] mx-auto h-16 px-6 flex items-center justify-between">
          
          {/* Brand Logo - KENNY // MATRIX */}
          <div className="flex items-center gap-2">
            <a 
              href="#hero" 
              onClick={(e) => handleScroll(e, '#hero')}
              className="font-display font-medium text-base sm:text-lg tracking-widest text-[#ffffff] hover:text-[#f27d26] transition-colors uppercase font-black"
            >
              KENNY <span className="font-light text-zinc-500">_FOLIO</span>
            </a>
            <span className="text-[8px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-[#f27d26] uppercase tracking-widest font-bold">
              v2.0 // Active
            </span>
          </div>

          {/* Right edge: Hire Me Button & the Three Lines Hamburger Menu */}
          <div className="flex items-center gap-4">
            
            <button
              id="header-hire-me"
              onClick={onHireMeClick}
              className="px-4 py-1.5 text-[10px] font-mono rounded-full bg-[#f27d26]/10 hover:bg-[#f27d26] text-[#f27d26] hover:text-black transition-all duration-300 cursor-pointer border border-[#f27d26]/20 hover:border-[#f27d26] hidden sm:inline-block active:scale-95"
            >
              Contact Me
            </button>

            {/* Hidden navigation bar is represented by the Sleek Hamburger Menu */}
            <button
              id="global-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-zinc-900/85 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg border border-white/5 transition-all cursor-pointer flex items-center gap-2 text-xs font-mono"
              title="Open Navigation Radar"
            >
              <Menu className="w-4 h-4 text-[#f27d26]" />
              <span className="hidden sm:inline-block uppercase tracking-wider text-[10px] font-bold">Menu</span>
            </button>

          </div>
        </div>
      </header>

      {/* FULL-SCREEN NAVIGATION OVERLAY PANEL */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Dark background backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Slide-in drawer container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 240 }}
              className="absolute top-0 right-0 w-full md:max-w-md h-full bg-[#0d0d0e] border-l border-white/10 flex flex-col justify-between p-6 sm:p-8 z-10 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 select-none">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#f27d26]" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">Navigation Radar</span>
                </div>
                <button
                  id="close-menu-toggle"
                  onClick={() => setMenuOpen(false)}
                  className="px-2.5 py-1 text-[10px] font-mono rounded bg-zinc-900 hover:bg-zinc-800 text-[#f27d26] border border-white/5 hover:border-white/10 transition-colors cursor-pointer uppercase select-none"
                >
                  Close ✕
                </button>
              </div>

              {/* Scrollable list of 11 elements in order */}
              <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {sections.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className={`block p-3 rounded-lg border text-left group transition-all duration-300
                        ${isActive 
                          ? 'bg-[#f27d26]/10 border-[#f27d26] shadow-[0_0_15px_rgba(242,125,38,0.05)]' 
                          : 'bg-zinc-950/40 border-white/5 hover:border-white/15'
                        }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Number locator */}
                        <span className={`text-[10px] font-mono tracking-wider font-bold mt-1 block
                          ${isActive ? 'text-[#f27d26]' : 'text-zinc-600 group-hover:text-[#f27d26]'}`}>
                          {item.number}
                        </span>

                        <div className="space-y-0.5">
                          <h3 className={`text-sm font-display font-medium leading-snug group-hover:text-[#f27d26] transition-colors
                            ${isActive ? 'text-[#f27d26]' : 'text-white'}`}>
                            {item.name}
                          </h3>
                          <p className="text-[10px] text-zinc-500 font-mono group-hover:text-zinc-400 transition-colors">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Drawer footer */}
              <div className="border-t border-white/5 pt-4 mt-4 text-center space-y-3 select-none">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => onHireMeClick(), 400);
                  }}
                  className="w-full py-2.5 text-center text-[10px] uppercase tracking-wider font-mono rounded-full bg-[#f27d26] text-black font-extrabold hover:bg-white transition-all cursor-pointer"
                >
                  Contact Loh Kien Ee
                </button>
                <div className="text-[9px] font-mono text-zinc-500 uppercase flex justify-between">
                  <span>© 2026 Kenny Loh</span>
                  <span>Integrated Stack</span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
