import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Heart, Award, Sparkles, CheckCircle } from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function Education() {
  const strongestSubjects = [
    { name: 'Calculus and Algebra', code: 'CS-MTH101' },
    { name: 'Probability and Statistics', code: 'CS-MTH102' },
    { name: 'Discrete Mathematics', code: 'CS-MTH103' },
    { name: 'Database Development and Applications', code: 'CS-DB201' }
  ];

  const activities = [
    {
      role: 'Vice Secretary & Live Commentator',
      group: 'Tarcian Cup Esports',
      desc: 'Directed executive proposals, structured committee compliance rosters, and streamed live commentaries for the university’s signature esports competition.'
    },
    {
      role: 'Publicity Committee Head / Core Strategist',
      group: 'Computer Science Society',
      desc: 'Supervised student enrollment runs, wrote and issued creative copywriting briefs, and maintained main server updates on official Discord/Instagram channels.'
    }
  ];

  return (
    <section id="education" className="py-24 bg-[#0c0c0c] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/10 w-fit">
            07 // ACADEMICS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight leading-tight">
            Education Background
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-lg font-sans">
            Diploma program focused on computational theory, statistics, and relational database systems, backed by rich sports organization activities.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mt-4" />
        </div>

        {/* Layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Institution Card (Left Span 5) */}
          <div className="lg:col-span-5">
            <BorderGlow
              borderRadius={12}
              className="w-full text-left border border-white/5 h-full flex flex-col justify-between"
              backgroundColor="#111112"
              colors={['#f27d26', '#111112']}
            >
              <div className="p-6 md:p-8 space-y-6 flex flex-col justify-between h-full">
                
                <div className="space-y-4">
                  <div className="p-3 bg-zinc-950 border border-white/5 rounded-full w-fit">
                    <GraduationCap className="w-8 h-8 text-[#f27d26]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-display text-white font-semibold leading-tight">
                      TAR UMT
                    </h3>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">
                      Tunku Abdul Rahman University of Management and Technology
                    </p>
                  </div>

                  <div className="w-8 h-[1px] bg-zinc-800" />

                  <div className="space-y-2">
                    <h4 className="text-[#f27d26] text-xs font-mono uppercase tracking-wider font-bold">Diploma in Computer Science</h4>
                    <span className="inline-block text-[10px] font-mono select-none px-2.5 py-1 bg-zinc-950 border border-white/5 rounded text-zinc-400">
                      2025 – 2027 (Expected Grad: June 2027)
                    </span>
                  </div>
                </div>

                <div className="bg-zinc-950/80 border border-white/5 rounded-xl p-4 mt-6">
                  <div className="flex gap-2 items-center text-[10px] font-mono text-zinc-500 uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-[#f27d26]" />
                    <span>Campus Location</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-semibold mt-1">Penang Branch Campus, Malaysia</p>
                </div>

              </div>
            </BorderGlow>
          </div>

          {/* Subjects and Extracurricular activities (Right Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Subject grid */}
            <div className="bg-[#111112] border border-white/5 p-6 md:p-8 rounded-xl space-y-4">
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2 font-bold select-none">
                <BookOpen className="w-4 h-4 text-[#f27d26]" /> Strongest Subjects
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {strongestSubjects.map((sub, i) => (
                  <div key={i} className="p-3 bg-zinc-950/50 border border-white/5 rounded-lg flex items-center justify-between gap-3 text-xs">
                    <span className="text-white font-semibold font-display">{sub.name}</span>
                    <span className="text-[8px] font-mono text-[#f27d26] shrink-0 bg-[#f27d26]/5 py-0.5 px-2 rounded border border-[#f27d26]/10 uppercase select-none">{sub.code}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurriculars */}
            <div className="bg-[#111112] border border-white/5 p-6 md:p-8 rounded-xl space-y-6 flex-1 flex flex-col justify-center">
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2 font-bold select-none">
                <Heart className="w-4 h-4 text-[#f27d26]" /> Extracurricular Activities
              </h3>

              <div className="space-y-4 pt-2">
                {activities.map((act, i) => (
                  <div key={i} className="space-y-1.5 border-l border-zinc-800 pl-4 relative">
                    {/* Ringlet badge */}
                    <span className="absolute -left-1 top-1.5 w-2 h-2 rounded-full bg-[#f27d26]" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">{act.group}</span>
                    <h4 className="text-xs text-white font-bold leading-tight uppercase tracking-wider">{act.role}</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">{act.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
