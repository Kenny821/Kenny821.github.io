import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  RotateCw, 
  Settings, 
  ExternalLink, 
  Terminal, 
  Database, 
  Activity, 
  Layers, 
  Code2, 
  ChevronRight,
  MonitorCheck,
  Award,
  Globe,
  GitBranch,
  BookOpen,
  HelpCircle,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import BorderGlow from './BorderGlow';
import TiltedCard from './TiltedCard';

export default function Work() {
  const [selectedSubModule, setSelectedSubModule] = useState<'flow' | 'api' | 'quiz'>('flow');
  const [logs, setLogs] = useState<string[]>([
    'SYSTEM: [LAMP_STACK] Engine initialized.',
    'SYSTEM: [MySQL] Database pool established on port 3306.',
    'SYSTEM: PHP service initialized.'
  ]);

  return (
    <section id="project" className="py-24 bg-[#0a0a0b] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/10 w-fit">
            04 // PROJECT
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight leading-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-lg font-sans">
            Innovative platforms built from first principles. Highlighting functional full-stack system layout and interactive details.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mt-4" />
        </div>

        {/* Crow Education Main Bento-style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual project display & details (width 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <BorderGlow
              borderRadius={12}
              className="w-full text-left relative overflow-hidden group shadow-2xl border border-white/5 h-full flex flex-col justify-between"
              backgroundColor="#111112"
              colors={['#f27d26', '#ffb076', '#111112']}
            >
              <div className="p-6 md:p-8 flex flex-col justify-between h-full relative">
                
                {/* Ribbon Tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-2.5 py-0.5 rounded border border-[#f27d26]/20 font-bold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#f27d26]" /> Bronze Medal Project
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">NEXTUP HACKATHON 2025</span>
                  </div>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono"
                  >
                    GitHub <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Cover Image rendering TiltedCard */}
                <div className="relative aspect-[16/9] w-full rounded lg:rounded-md overflow-hidden mb-6 border border-white/5 bg-[#0e0e0f]">
                  <TiltedCard
                    imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                    altText="Crow Education Frontpage Preview with database telemetry overlay"
                    captionText="Crow Education Stack representation // PHP MySQL backend"
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    scaleOnHover={1.03}
                    rotateAmplitude={8}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left pointer-events-none rounded-[15px]">
                        <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-400">Back-End Architecture Core</span>
                        <h4 className="text-sm font-semibold text-white">SPM Student Repository Integration</h4>
                      </div>
                    }
                  />
                </div>

                {/* Content info */}
                <div>
                  <h3 className="text-2xl font-display font-medium text-white group-hover:text-[#f27d26] transition-colors leading-tight">
                    Crow Education
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm mt-3 font-sans leading-relaxed">
                    A free and open-source educational platform designed to help Malaysian SPM students access high-quality learning resources and reduce educational inequality. The platform features a smart question bank, interactive quizzes, and a gamified learning experience to engage students effectively.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-[#f27d26] uppercase">My Role</span>
                      <p className="text-xs text-zinc-200 font-medium">Back-end Lead Developer</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-[#f27d26] uppercase">Core Focus</span>
                      <p className="text-xs text-zinc-200 font-medium">Front-to-Back Data-flow & MySQL integration</p>
                    </div>
                  </div>
                </div>

                {/* Bottom detail row */}
                <div className="border-t border-white/5 mt-6 pt-4 flex gap-1.5 flex-wrap">
                  {['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'LAMP (XAMPP)', 'VS Code'].map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[9px] font-mono text-zinc-400 px-2 py-0.5 bg-zinc-950 border border-white/5 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </BorderGlow>
          </div>

          {/* Right Column: Dynamic Interactive backend telemetry & demo (width 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <BorderGlow
              borderRadius={12}
              className="w-full text-left relative overflow-hidden group shadow-2xl border border-white/5 h-full flex flex-col justify-between"
              backgroundColor="#0c0c0d"
              colors={['#ffb076', '#f27d26', '#111112']}
            >
              <div className="p-6 md:p-8 flex flex-col justify-between h-full relative">
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-mono text-white flex items-center gap-1.5 font-bold uppercase tracking-wider">
                      <Terminal className="w-4 h-4 text-[#f27d26]" /> Project Telemetry
                    </h4>
                    <span className="text-[9px] font-mono text-zinc-500">// SIMULATED LAMP SYSTEM</span>
                  </div>

                  <p className="text-zinc-400 text-xs font-sans leading-relaxed mb-6">
                    As Lead Back-end Dev, I engineered robust SQL-backed workflows for a scalable education platform. Explore the system simulation tabs below to inspect how back-end processes and telemetry operate.
                  </p>

                  {/* Sub simulator tabs */}
                  <div className="flex gap-1.5 p-1 bg-zinc-950 border border-white/5 rounded-md mb-6 font-mono text-xs">
                    {(['flow', 'api', 'quiz'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedSubModule(tab)}
                        className={`flex-1 py-1 text-center rounded text-[10px] tracking-wider uppercase cursor-pointer transition-all
                          ${selectedSubModule === tab 
                            ? 'bg-[#f27d26]/10 text-[#f27d26] border border-[#f27d26]/20' 
                            : 'text-zinc-500 border border-transparent'
                          }`}
                      >
                        {tab === 'flow' && 'Session Flow'}
                        {tab === 'api' && 'Core functions'}
                        {tab === 'quiz' && 'Framework Stack'}
                      </button>
                    ))}
                  </div>

                  {/* Sandbox rendering */}
                  <div className="bg-black border border-white/5 rounded p-4 relative overflow-hidden min-h-[220px] flex flex-col justify-between">
                    
                    <AnimatePresence mode="wait">
                      
                      {selectedSubModule === 'flow' && (
                        <motion.div
                          key="flow"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="space-y-4 flex flex-col justify-between h-full text-xs"
                        >
                          <div>
                            <span className="text-[9px] font-mono text-[#f27d26] uppercase font-bold">SQL Workflow Overview</span>
                            <div className="mt-2 space-y-2 text-[11px] font-mono text-zinc-400">
                              <div className="bg-zinc-950 p-2 rounded border border-white/5">
                                <strong className="text-white">Data validation</strong> and query orchestration for backend services.
                              </div>
                              <div className="bg-zinc-950 p-2 rounded border border-white/5">
                                <strong className="text-white">Resource allocation</strong> across PHP and MySQL components.
                              </div>
                              <div className="bg-zinc-950 p-2 rounded border border-white/5">
                                <strong className="text-white">Request flow</strong> continues through the platform telemetry stack.
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedSubModule === 'api' && (
                        <motion.div
                          key="api"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="space-y-3 font-sans text-xs"
                        >
                          <span className="text-[9px] font-mono text-[#f27d26] uppercase font-bold">Main Platform Contributions</span>
                          <div className="space-y-1.5 mt-2">
                            {[
                              { title: 'Smart Library', desc: 'Notes and resources indexed and retrieved by MySQL query tags.' },
                              { title: 'Interactive Quizzes', desc: 'Gamified scoring models computed in real-time.' },
                              { title: 'Teacher Portal', desc: 'Secure panel for administrators to upload structured SPM material.' },
                              { title: 'Analytics Dashboard', desc: 'Tracking study hours and progress points metrics.' }
                            ].map((func, i) => (
                              <div key={i} className="flex gap-2 items-start text-[11px]">
                                <span className="text-[#f27d26] shrink-0 font-mono">▸</span>
                                <div>
                                  <strong className="text-white">{func.title}</strong>: <span className="text-zinc-400">{func.desc}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {selectedSubModule === 'quiz' && (
                        <motion.div
                          key="quiz"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="space-y-3 font-mono text-xs"
                        >
                          <span className="text-[9px] text-[#f27d26] uppercase font-bold">LAMP Environment Details</span>
                          <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-[10px]">
                            <div className="bg-zinc-950 p-2 rounded border border-white/5 text-zinc-400">
                              <span className="text-zinc-500 block text-[8px]">WEB SERVER</span>
                              <span className="text-white">Apache 2.4</span>
                            </div>
                            <div className="bg-zinc-950 p-2 rounded border border-white/5 text-zinc-400">
                              <span className="text-zinc-500 block text-[8px]">ENGINE INT</span>
                              <span className="text-white">PHP 8.2</span>
                            </div>
                            <div className="bg-zinc-950 p-2 rounded border border-white/5 text-zinc-400">
                              <span className="text-zinc-500 block text-[8px]">DB INSTANCE</span>
                              <span className="text-white">MySQL Community</span>
                            </div>
                            <div className="bg-zinc-950 p-2 rounded border border-white/5 text-zinc-400">
                              <span className="text-zinc-500 block text-[8px]">VER CONTROL</span>
                              <span className="text-white">Git / GitHub Team</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>

                  </div>
                </div>

                {/* Raw logs output */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-1 text-[9px] font-mono text-zinc-500 uppercase">
                    <span>Live Event Logs</span>
                    <span className="animate-pulse text-[#f27d26]">● Telemetry Active</span>
                  </div>
                  <div className="bg-black/80 font-mono text-[9px] p-2 rounded text-zinc-500 border border-white/5 h-16 overflow-y-auto leading-relaxed select-none">
                    {logs.map((log, i) => (
                      <div key={i} className="truncate">{log}</div>
                    ))}
                  </div>
                </div>

              </div>
            </BorderGlow>
          </div>

        </div>

      </div>
    </section>
  );
}
