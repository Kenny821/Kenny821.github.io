import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Instagram, 
  Github, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function ContactForm() {
  const [activeChannel, setActiveChannel] = useState<'email' | 'instagram' | 'github'>('email');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0c0c] relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f27d26]/5 via-zinc-900/0 to-transparent pointer-events-none" />

      {/* Main Container centering the beautiful card exactly like in the image design */}
      <div className="max-w-[1100px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Core Card Layout centering content with high-contrast borders */}
        <div className="w-full max-w-[650px]">
          <BorderGlow
            borderRadius={12}
            className="w-full text-center relative overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-300 border border-white/5"
            backgroundColor="#111112"
            colors={['#f27d26', '#ffb076', '#111112']}
          >
            <div className="p-8 md:p-12">
              
              <span className="text-[10px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/15 mb-6 inline-block font-bold">
                Inquiries
              </span>
              
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-2 tracking-tight">
                Let's Connect
              </h2>
              
              <p className="text-zinc-400 text-sm mb-10 max-w-sm mx-auto font-sans">
                Always ready for new challenges and collaboration opportunities.
              </p>

              {/* Interactive Channel Selection Pills matching the image shapes */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                <button
                  id="channel-email"
                  onClick={() => setActiveChannel('email')}
                  className={`px-5 py-2 text-xs font-mono rounded-full flex items-center gap-2 cursor-pointer transition-all duration-300 border
                    ${activeChannel === 'email' 
                      ? 'bg-[#f27d26]/10 text-white border-[#f27d26] shadow-[0_0_15px_rgba(242,125,38,0.12)] font-bold' 
                      : 'bg-[#18181a] text-zinc-400 border-white/5 hover:border-white/15'
                    }`}
                >
                  <Mail className="w-3.5 h-3.5 text-[#f27d26]" />
                  Email
                </button>
                <button
                  id="channel-instagram"
                  onClick={() => setActiveChannel('instagram')}
                  className={`px-5 py-2 text-xs font-mono rounded-full flex items-center gap-2 cursor-pointer transition-all duration-300 border
                    ${activeChannel === 'instagram' 
                      ? 'bg-[#f27d26]/10 text-white border-[#f27d26] shadow-[0_0_15px_rgba(242,125,38,0.12)] font-bold' 
                      : 'bg-[#18181a] text-zinc-400 border-white/5 hover:border-white/15'
                    }`}
                >
                  <Instagram className="w-3.5 h-3.5 text-[#f27d26]" />
                  Instagram
                </button>
                <button
                  id="channel-github"
                  onClick={() => setActiveChannel('github')}
                  className={`px-5 py-2 text-xs font-mono rounded-full flex items-center gap-2 cursor-pointer transition-all duration-300 border
                    ${activeChannel === 'github' 
                      ? 'bg-[#f27d26]/10 text-white border-[#f27d26] shadow-[0_0_15px_rgba(242,125,38,0.12)] font-bold' 
                      : 'bg-[#18181a] text-zinc-400 border-white/5 hover:border-white/15'
                    }`}
                >
                  <Github className="w-3.5 h-3.5 text-[#f27d26]" />
                  GitHub
                </button>
              </div>

              {/* ACTIVE DRAWER AREA */}
              <div className="bg-[#0e0e0f] rounded-lg border border-white/5 p-6 text-left relative overflow-hidden min-h-[300px]">
                <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

                <AnimatePresence mode="wait">
                  
                  {/* 1. Sleek Copy Email View */}
                  {activeChannel === 'email' && (
                    <motion.div
                      key="email"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="relative z-10 flex flex-col justify-between h-full min-h-[250px]"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                          <span className="text-[10px] font-mono text-zinc-500">EMAIL CONTACT CHANNELS</span>
                          <span className="text-[10px] font-mono text-[#f27d26] font-semibold">Active Gate</span>
                        </div>

                        <div className="space-y-4 font-sans text-center md:text-left">
                          <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
                            Have an opportunity, questions, or want to collaborate? Use the secure button below to copy my primary contact address.
                          </p>
                          
                          <div className="py-6 bg-[#121214] rounded-lg border border-white/5 max-w-md mx-auto md:mx-0 flex flex-col items-center justify-center gap-2">
                            <span className="text-[9px] font-mono text-zinc-500 block">PRIMARY INBOX ADDRESS //</span>
                            <h4 className="text-sm md:text-base font-mono text-white font-semibold select-all break-all px-4 text-center">
                              kienee821@gmail.com
                            </h4>
                          </div>

                          <div className="flex justify-center md:justify-start gap-3 pt-2">
                            <button
                              id="btn-copy-email"
                              onClick={() => handleCopy('kienee821@gmail.com', 'Email')}
                              className="px-5 py-2 text-xs font-mono bg-[#f27d26] text-[#0c0c0c] font-black rounded flex items-center gap-1.5 hover:bg-white transition-all cursor-pointer active:scale-95"
                            >
                              {copiedText === 'Email' ? 'Copied ✓' : 'Copy Email Address'}
                            </button>
                            <a
                              href="mailto:kienee821@gmail.com"
                              className="px-5 py-2 text-xs font-mono border border-white/10 hover:border-white/20 rounded flex items-center gap-1.5 text-zinc-300 hover:text-white cursor-pointer active:scale-95"
                            >
                              Direct Mailto <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-white/5 pt-3.5 mt-6 text-[9px] font-mono text-zinc-600 flex justify-between select-none">
                        <span>Protocol Type: Standard Secure SMTP Courier</span>
                        <span>v2.0 // Secured Connection</span>
                      </div>
                    </motion.div>
                  )}

                  {/* 2. Instagram QR & Follow Module */}
                  {activeChannel === 'instagram' && (
                    <motion.div
                      key="instagram"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="relative z-10 flex flex-col justify-between h-full min-h-[250px]"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                          <span className="text-[10px] font-mono text-zinc-500">INSTAGRAM HANDLE GATEWAY</span>
                          <span className="text-[10px] font-mono text-[#f27d26] font-semibold">Active</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 items-center">
                          <div className="w-28 h-28 bg-white p-2.5 rounded-lg flex items-center justify-center shrink-0 border border-zinc-800 select-none">
                            {/* A simulated clean grid-styled visual matrix matching a real handle */}
                            <div className="grid grid-cols-4 gap-1 w-full h-full bg-[#131314] rounded">
                              {Array.from({ length: 16 }).map((_, i) => (
                                <div key={i} className="rounded-[2px] bg-[#f27d26]" style={{ opacity: i % 3 === 0 ? 0.3 : 1 }} />
                              ))}
                            </div>
                          </div>

                          <div className="space-y-3 font-sans text-center sm:text-left">
                            <h4 className="text-sm font-semibold text-white">@kenny.design.logic</h4>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                              Follow along for micro-tutorials on computational design, stack animations, system blueprints, and design system wireframing.
                            </p>
                            <div className="flex justify-center sm:justify-start gap-2">
                              <button
                                 id="btn-copy-ig"
                                 onClick={() => handleCopy('@kenny.design.logic', 'IG')}
                                 className="px-3 py-1.5 text-[10px] font-mono border border-white/10 hover:border-white/20 rounded flex items-center gap-1.5 cursor-pointer text-zinc-300 hover:text-white active:scale-95"
                              >
                                {copiedText === 'IG' ? 'Copied ✓' : 'Copy Handle'}
                              </button>
                              <a
                                href="https://www.instagram.com/iskennyyy8/"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1.5 text-[10px] font-mono bg-[#f27d26] text-[#0c0c0c] font-semibold rounded flex items-center gap-1.5 hover:bg-white transition-all cursor-pointer active:scale-95"
                              >
                                Open Instagram <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-white/5 pt-3.5 mt-6 text-[9px] font-mono text-zinc-600 select-none">
                        Routing target: https://instagram.com/kenny.design.logic
                      </div>
                    </motion.div>
                  )}

                  {/* 3. GitHub statistics */}
                  {activeChannel === 'github' && (
                    <motion.div
                      key="github"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="relative z-10 flex flex-col justify-between h-full min-h-[250px]"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                          <span className="text-[10px] font-mono text-zinc-500">GITHUB COMMIT TELEMETRY</span>
                          <span className="text-[10px] font-mono text-[#f27d26] font-semibold">Stable Link</span>
                        </div>

                        <div className="space-y-4 font-sans text-center sm:text-left">
                          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                                github.com/kenny-developer
                              </h4>
                              <span className="text-[10px] font-mono text-zinc-500 block sm:inline">Active repositories including Crow Core</span>
                            </div>
                            <a
                              href="https://github.com/Kenny821"
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-1.5 text-[10px] font-mono bg-[#f27d26] text-[#0c0c0c] font-semibold rounded flex items-center gap-1 cursor-pointer hover:bg-white transition-all active:scale-95"
                            >
                              Visit <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>

                          {/* Mock GitHub stats grids showing rich visual indicators */}
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-[#121214] p-3 rounded border border-white/5 text-center">
                              <span className="text-[9px] font-mono text-zinc-500 block">TOTAL COMMITS</span>
                              <span className="text-sm font-mono text-white mt-1 block font-semibold">1,248</span>
                            </div>
                            <div className="bg-[#121214] p-3 rounded border border-white/5 text-center">
                              <span className="text-[9px] font-mono text-zinc-500 block">STARS EARNED</span>
                              <span className="text-sm font-mono text-white mt-1 block font-semibold">84 ★</span>
                            </div>
                            <div className="bg-[#121214] p-3 rounded border border-white/5 text-center">
                              <span className="text-[9px] font-mono text-zinc-500 block">COLLABORATORS</span>
                              <span className="text-sm font-mono text-white mt-1 block font-semibold">12</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-white/5 pt-3.5 mt-6 text-[9px] font-mono text-zinc-600 flex justify-between select-none">
                        <span>Repository Key: SECURE_SSH_ECC_256</span>
                        <span>99% uptime deployment stats</span>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
              
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
}
