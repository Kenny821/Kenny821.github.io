import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Lightbulb, Users, Mic, Clock, BrainCircuit, Code, Terminal, Sparkles, Sliders } from 'lucide-react';
import BorderGlow from './BorderGlow';

interface Skill {
  name: string;
  level: string;
  percent: number;
  desc: string;
  category: 'hard' | 'soft';
  icon: React.ComponentType<any>;
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    {
      name: 'PHP (Foundational)',
      level: 'Foundational',
      percent: 60,
      desc: 'Applied to construct secure backend architectures, user registration forms, password hashing validators, and persistent cookie sessions for the SPM Crow Education site.',
      category: 'hard',
      icon: Code
    },
    {
      name: 'HTML, CSS & JavaScript',
      level: 'Beginner-Medium',
      percent: 55,
      desc: 'Developed fluid, responsive modern user interfaces and front-end layouts with the collaborative assistance of AI tooling and systems.',
      category: 'hard',
      icon: Terminal
    },
    {
      name: 'MySQL Database',
      level: 'Intermediate',
      percent: 75,
      desc: 'Competent in database design, relation mapping, structured queries, user indexing, and connecting databases with server logic.',
      category: 'hard',
      icon: Database
    },
    {
      name: 'Full-Stack Integration',
      level: 'Intermediate',
      percent: 70,
      desc: 'Bridging user interfaces with backend API logic seamlessly, tracking query status codes, and managing session state tokens.',
      category: 'hard',
      icon: Sliders
    },
    {
      name: 'Git & GitHub',
      level: 'Intermediate',
      percent: 80,
      desc: 'Maintaining reliable source version environments, handling merges, branching and collaborating across multiple student hackathon sprints.',
      category: 'hard',
      icon: BrainCircuit
    },
    {
      name: 'Public Speaking & MC',
      level: 'Advanced',
      percent: 90,
      desc: 'English and Mandarin. Delivered product pitches as Hackathon presenters, provided high-energy live commentary for Tarcian Cup Esports, and EMCEEd for several school/university events.',
      category: 'soft',
      icon: Mic
    },
    {
      name: 'Team Collaboration & Leadership',
      level: 'Advanced',
      percent: 85,
      desc: 'Proven through secretary and publicity head tenures. Aligning cross-functional goals, delegating roles, and maintaining team synergy.',
      category: 'soft',
      icon: Users
    },
    {
      name: 'Event Organization',
      level: 'Advanced',
      percent: 85,
      desc: 'Successfully executed campus-wide sports tournaments (Tarcian Cup) and academic marketing programs for the Computer Science Society.',
      category: 'soft',
      icon: Sparkles
    },
    {
      name: 'Problem Solving',
      level: 'Advanced',
      percent: 80,
      desc: 'Analytical capacity to isolate root causes from emotional variables, and build stable, logical workarounds.',
      category: 'soft',
      icon: Lightbulb
    },
    {
      name: 'Time Management',
      level: 'Advanced',
      percent: 85,
      desc: 'Balancing active academic schedules with deep extracurricular vice-secretary portfolios and part-time jobs without compromising output grades.',
      category: 'soft',
      icon: Clock
    }
  ];

  return (
    <section id="skill" className="py-24 bg-[#0c0c0c] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/10 w-fit">
            05 // SPECIALIZATION
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight leading-tight">
            Core Skill Map
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-lg font-sans">
            A balanced overview of technical skill sets paired with deep interpersonal, public speaking, and leadership competencies.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mt-4" />
        </div>

        {/* Layout split: Left are hard, Right are soft */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* HARD SKILLS */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f27d26]" />
              Hard Skills (Technical Frameworks)
            </h3>
            
            <div className="space-y-4 pt-2">
              {skills.filter(s => s.category === 'hard').map((skill, i) => {
                const Icon = skill.icon;
                const isSelected = selectedSkill?.name === skill.name;
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedSkill(isSelected ? null : skill)}
                    className={`p-4 bg-[#111112] border rounded-xl cursor-pointer transition-all duration-300 select-none
                      ${isSelected ? 'border-[#f27d26] bg-[#111112]/90 shadow-[0_0_15px_rgba(242,125,38,0.1)]' : 'border-white/5 hover:border-white/15'}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#f27d26]" />
                        <span className="text-sm font-mono text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">{skill.level}</span>
                    </div>

                    {/* Progress slider bar */}
                    <div className="w-full h-1 bg-zinc-950 rounded overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#f27d26] to-[#ffb076] rounded" 
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                    
                    <AnimatePresence>
                      {isSelected && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-xs text-zinc-400 mt-3 font-sans leading-relaxed border-t border-white/5 pt-2"
                        >
                          {skill.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffb076]" />
              Soft Skills (Leadership & Communication)
            </h3>
            
            <div className="space-y-4 pt-2">
              {skills.filter(s => s.category === 'soft').map((skill, i) => {
                const Icon = skill.icon;
                const isSelected = selectedSkill?.name === skill.name;
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedSkill(isSelected ? null : skill)}
                    className={`p-4 bg-[#111112] border rounded-xl cursor-pointer transition-all duration-300 select-none
                      ${isSelected ? 'border-[#f27d26] bg-[#111112]/90 shadow-[0_0_15px_rgba(242,125,38,0.1)]' : 'border-white/5 hover:border-white/15'}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#ffb076]" />
                        <span className="text-sm font-mono text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">{skill.level}</span>
                    </div>

                    {/* Progress slider bar */}
                    <div className="w-full h-1 bg-zinc-950 rounded overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#ffb076] to-[#f27d26] rounded animate-pulse-slow" 
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                    
                    <AnimatePresence>
                      {isSelected && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-xs text-zinc-400 mt-3 font-sans leading-relaxed border-t border-white/5 pt-2"
                        >
                          {skill.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
