import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Grid3X3, Eye, ArrowDown, Cpu, Sparkles } from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function Hero() {
  const [showGrid, setShowGrid] = useState(true);
  const [interactivityOn, setInteractivityOn] = useState(true);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden hero-gradient">
      
      {/* Dynamic Overlay Grid lines */}
      {showGrid && (
        <div className="absolute inset-0 grid-overlay opacity-[0.45] pointer-events-none transition-opacity duration-500" />
      )}
      
      {/* Background Soft Glow Radial when Interactivity is enabled */}
      {interactivityOn && (
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] radial-glow opacity-90 pointer-events-none transition-all duration-700" />
      )}

      {/* Control overlay on the floating edge */}
      <div className="absolute top-4 right-6 hidden md:flex items-center gap-3 bg-zinc-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 z-20">
        <button
          id="toggle-grid"
          onClick={() => setShowGrid(!showGrid)}
          className={`flex items-center gap-1.5 text-[10px] font-mono cursor-pointer transition-colors ${showGrid ? 'text-[#f27d26]' : 'text-zinc-500'}`}
          title="Toggle Blueprint Grid Lines"
        >
          <Grid3X3 className="w-3 h-3" />
          {showGrid ? 'Grid: ON' : 'Grid: OFF'}
        </button>
        <div className="w-[1px] h-3 bg-white/10" />
        <button
          id="toggle-glow"
          onClick={() => setInteractivityOn(!interactivityOn)}
          className={`flex items-center gap-1.5 text-[10px] font-mono cursor-pointer transition-colors ${interactivityOn ? 'text-[#f27d26]' : 'text-zinc-500'}`}
          title="Toggle Background Glows"
        >
          <Eye className="w-3 h-3" />
          {interactivityOn ? 'Glow: Active' : 'Glow: Muted'}
        </button>
      </div>

      <div className="max-w-[760px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* Main large elegant Name Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-4"
        >
          <span className="text-zinc-500 text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase block">
            CS Student // portfolio
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black text-white tracking-tighter leading-none">
            Loh Kien Ee
            <span className="block font-normal italic text-[#f27d26] text-3xl sm:text-4xl md:text-5xl mt-3 sm:mt-5 tracking-wide select-none">
              (Kenny)
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Titles */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-8"
        >
          {['Computer Science Student', 'AI Prompt Explorer', 'Future Personal Brand Builder'].map((title, i) => (
            <React.Fragment key={title}>
              {i > 0 && <span className="text-zinc-700 font-mono text-xs hidden sm:inline">•</span>}
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-zinc-300 uppercase font-medium bg-zinc-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                {title}
              </span>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Core Leap-of-Faith Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-12 w-full cursor-default"
        >
          <BorderGlow
            borderRadius={12}
            className="w-full text-left relative overflow-hidden group shadow-2xl transition-all duration-300 border border-white/5"
            backgroundColor="#111112"
            colors={['#f27d26', '#ffb076', '#111112']}
          >
            <div className="p-8 md:p-10 relative">
              {/* Subtle inside top border gradient */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#f27d26]/20 to-transparent" />
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-mono text-[#f27d26] flex items-center gap-2 uppercase tracking-widest font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Origin Creed
                </h3>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider">
                  MATRIX // REF-2025
                </span>
              </div>

              <blockquote className="text-lg md:text-xl text-white italic tracking-wide leading-relaxed font-serif max-w-full text-center py-4">
                "I didn't choose Computer Science because I was good at it.<br />
                I chose it because I was willing to explore the unknown."
              </blockquote>

              <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-0.75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">STATUS: Active CS Scholar @ TAR UMT</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                  <Cpu className="w-3.5 h-3.5 text-[#f27d26]/75" />
                  <span>Interactive Engine ready</span>
                </div>
              </div>
            </div>
          </BorderGlow>
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
          onClick={() => {
            document.querySelector('#this-is-me')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] font-mono tracking-widest text-[#f27d26]/80 uppercase font-semibold">
            Explore Identity
          </span>
          <ArrowDown className="w-4 h-4 text-[#f27d26]/80" />
        </motion.div>

      </div>
    </section>
  );
}
