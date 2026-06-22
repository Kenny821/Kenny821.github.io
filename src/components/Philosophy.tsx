import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Lightbulb, Shield, Eye, Smile, Activity, Heart, ChevronRight, Sparkles } from 'lucide-react';
import BorderGlow from './BorderGlow';

interface Pillar {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  motto: string;
}

export default function Philosophy() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('explore');

  const pillars: Pillar[] = [
    {
      id: 'explore',
      title: 'Exploration',
      motto: 'Step into the Unknown',
      desc: 'I believe growth begins when we step into the unknown. Whether it is a new skill, a different field, or an unfamiliar challenge, I would rather try and learn than remain comfortable and wonder "what if."',
      icon: Compass
    },
    {
      id: 'learning',
      title: 'Continuous Learning',
      motto: 'Build Knowledge Layer by Layer',
      desc: 'Learning is not passive consumption, but active exploration and iteration. I believe true understanding comes from questioning, experimenting, and building knowledge layer by layer rather than simply memorizing information.',
      icon: Lightbulb
    },
    {
      id: 'ref',
      title: 'Responsibility',
      motto: 'Own Outcomes and Action',
      desc: 'Responsibility means taking ownership of my actions, decisions, and outcomes. Instead of blaming circumstances or other people, I focus on what I can improve and what I can do better moving forward.',
      icon: Shield
    },
    {
      id: 'stability',
      title: 'Inner Stability',
      motto: 'Focus on What We Can Control',
      desc: 'Life consists of both controllable and uncontrollable factors. I choose to focus my energy on what I can control rather than becoming consumed by the opinions, judgments, or expectations of others.',
      icon: Eye
    },
    {
      id: 'optimism',
      title: 'Optimism',
      motto: 'Choose Constructive Tracks Forward',
      desc: 'To me, optimism is not ignoring reality or pretending everything is fine. It means acknowledging both the positive and negative aspects of a situation, accepting reality as it is, and choosing a constructive path forward.',
      icon: Smile
    },
    {
      id: 'resilience',
      title: 'Resilience',
      motto: 'Mistakes are Iterations for Growth',
      desc: 'Setbacks, mistakes, and failures are inevitable parts of growth. Every challenge carries a lesson, and every lesson contributes to becoming a stronger and more capable person.',
      icon: Activity
    },
    {
      id: 'adversity',
      title: 'Growth Through Adversity',
      motto: 'Adversity Builds True Character Strength',
      desc: 'Difficult experiences do not define us. What matters is how we respond to them. I believe adversity has the power to shape character, build perspective, and reveal strengths that might otherwise remain undiscovered.',
      icon: Heart
    }
  ];

  const currentPillar = pillars.find(p => p.id === selectedPillarId) || pillars[0];

  return (
    <section id="philosophy" className="py-24 bg-[#0a0a0b] relative border-t border-white/5 overflow-hidden">
      {/* Aesthetic grid and light glows */}
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-[#f27d26]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/10 w-fit">
            11 // PHILOSOPHY
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight leading-tight">
            My Philosophy
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-lg font-sans">
            Principles shaped through personal reflection, continuous self-improvement, and lessons of grit. The solid foundation of how I choose to learn and act.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mt-4" />
        </div>

        {/* Narrative Intro Card */}
        <div className="bg-[#111112] border border-white/5 p-6 md:p-8 rounded-2xl mb-12 text-zinc-300 text-xs md:text-sm font-sans max-w-3xl leading-relaxed">
          "These principles have been shaped through personal reflection, continuous self-improvement, and lessons learned from both success and failure. They serve as the foundation of how I learn, make decisions, and navigate challenges in life."
        </div>

        {/* Interactive layout: 7 selectors on the left, full interactive visualization space on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left selectors (Span 5) */}
          <div className="lg:col-span-5 space-y-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = selectedPillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`w-full p-4 rounded-xl border text-left flex items-center justify-between gap-4 transition-all duration-300 font-mono text-xs cursor-pointer select-none
                    ${isSelected 
                      ? 'border-[#f27d26] bg-[#f27d26]/10 text-white shadow-[0_0_15px_rgba(242,125,38,0.08)]' 
                      : 'border-white/5 bg-[#111112] text-zinc-400 hover:border-white/15'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-1.5 rounded-lg border transition-colors
                      ${isSelected ? 'bg-black/40 border-[#f27d26]/20 text-[#f27d26]' : 'bg-zinc-950 border-white/5 text-zinc-500'}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-semibold">{pillar.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#f27d26]' : 'text-zinc-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right details view (Span 7) */}
          <div className="lg:col-span-7 h-full">
            <BorderGlow
              borderRadius={16}
              className="w-full text-left border border-white/5 h-full min-h-[300px]"
              backgroundColor="#111112"
              colors={['#f27d26', '#111112']}
            >
              <div className="p-8 space-y-6 flex flex-col justify-between h-full min-h-[300px] relative">
                {/* Decorative overlay background icon */}
                <div className="absolute right-6 top-6 opacity-5 pointer-events-none text-[#f27d26]">
                  <currentPillar.icon className="w-32 h-32" />
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex gap-2 items-center text-[10px] font-mono text-[#f27d26] uppercase font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>Selected Principle Matrix</span>
                  </div>

                  <h3 className="text-2xl font-display text-white italic font-bold">
                    {currentPillar.title}
                  </h3>

                  <div className="w-12 h-[1px] bg-zinc-800" />

                  <span className="inline-block text-[10px] font-mono select-none px-2.5 py-1 bg-zinc-950 border border-white/5 rounded text-[#f27d26] font-bold">
                    {currentPillar.motto.toUpperCase()}
                  </span>

                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans pt-4">
                    {currentPillar.desc}
                  </p>
                </div>

                {/* Footer label info */}
                <div className="border-t border-white/5 pt-4 text-[10px] font-mono text-zinc-500 uppercase flex justify-between select-none pb-1 mt-6">
                  <span>Logic Platform // Rule {pillars.indexOf(currentPillar) + 1}</span>
                  <span>Kenny Identity System</span>
                </div>

              </div>
            </BorderGlow>
          </div>

        </div>

        {/* Closing reflection */}
        <div className="mt-16 text-center text-zinc-500 font-sans text-xs md:text-sm italic max-w-xl mx-auto border-t border-white/5 pt-8 select-none">
          "I do not expect everyone to share these beliefs. However, these principles have guided many of my decisions and continue to shape the person I am becoming."
        </div>

      </div>
    </section>
  );
}
