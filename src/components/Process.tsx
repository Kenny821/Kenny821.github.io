import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Layers, 
  Cpu, 
  Zap, 
  Dot, 
  Workflow,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ProcessStep } from '../types';

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps: ProcessStep[] = [
    {
      phase: 'Phase 01',
      title: 'Discovery & First-Principles Reasoning',
      description: 'Stripping away pre-packaged concepts to isolate the true constraints of the problem.',
      subtext: 'I engage with stakeholders to extract structural inputs, rather than accepting surface-level design assumptions.',
      iconName: 'Compass',
      details: [
        'Defining algebraic bounds and memory bottlenecks.',
        'Analyzing runtime targets and browser CPU limits.',
        'Structuring comprehensive architectural maps.'
      ]
    },
    {
      phase: 'Phase 02',
      title: 'Architectural Blueprint & Modeling',
      description: 'Mapping relational database hierarchies and designing client-server contracts.',
      subtext: 'Solid design starts with a rigorous blueprint. I write zero code until the data-flow diagrams represent a stable state machine.',
      iconName: 'Layers',
      details: [
        'Crafting detailed relational schema models.',
        'Defining strict API contract definitions.',
        'Validating network latency pathways and caching protocols.'
      ]
    },
    {
      phase: 'Phase 03',
      title: 'Agile High-Precision Development',
      description: 'Writing type-safe, modular, and structurally secure TypeScript modules.',
      subtext: 'Code is written for human clarity and computer utility. Modules are separated early, with full static lint safety built into the CLI.',
      iconName: 'Cpu',
      details: [
        'Declaring rigorous typescript type contracts.',
        'Isolating complex state changes inside robust custom hooks.',
        'Implementing clean, fluid layout transitions in motion.'
      ]
    },
    {
      phase: 'Phase 04',
      title: 'Runtime Profiling & Optimization',
      description: 'Eliminating unnecessary renders and trimming bundle sizes to bare assets.',
      subtext: 'A feature is not finished when it works—it is finished when it executes with maximum efficiency and minimum footprint.',
      iconName: 'Zap',
      details: [
        'Analyzing rendering flamegraphs for unnecessary re-runs.',
        'Compressing visual vectors and modern layout fonts.',
        'Benchmarking API microservices against simulated high-concurrency loads.'
      ]
    }
  ];

  return (
    <section id="process" className="py-20 border-t border-white/5 bg-[#0c0c0c] relative">
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
      <div className="absolute left-[30%] top-1/3 w-72 h-72 rounded-full bg-[#f27d26]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/10">
            Development Flow
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight">
            How I Build Solutions
          </h2>
          <p className="text-[#A1A1AA] text-sm mt-2 max-w-lg mx-auto font-sans">
            A linear progression of milestones ensuring creative elegance is always supported by clean technical execution.
          </p>
        </div>

        {/* Process Roadmap Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          
          {/* Phase Indicators Column (Span 4) */}
          <div className="lg:col-span-4 space-y-3.5">
            {steps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  id={`process-step-${idx}`}
                  key={step.phase}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center gap-4 cursor-pointer hover:bg-white/[0.01]
                    ${isActive 
                      ? 'bg-[#111112] border-[#f27d26] shadow-[0_0_20px_rgba(242,125,38,0.08)] text-white' 
                      : 'bg-transparent border-white/5 text-zinc-400 hover:border-white/10'
                    }`}
                >
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm transition-colors
                    ${isActive 
                      ? 'bg-[#f27d26] text-[#0c0c0c]' 
                      : 'bg-zinc-900 border border-white/5 text-zinc-500'
                    }`}
                  >
                    {step.phase}
                  </span>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider font-semibold group-hover:text-white transition-colors">
                      {step.title.split(' & ')[0]}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Phase Details Card (Span 8) */}
          <div className="lg:col-span-8 bg-[#111112] border border-[#202022] hover:border-[#f27d26]/20 transition-all duration-300 p-8 rounded-xl min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Step Subtitle */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2.5">
                    {activeStepIndex === 0 && <Compass className="w-5 h-5 text-[#f27d26]" />}
                    {activeStepIndex === 1 && <Layers className="w-5 h-5 text-[#f27d26]" />}
                    {activeStepIndex === 2 && <Cpu className="w-5 h-5 text-[#f27d26]" />}
                    {activeStepIndex === 3 && <Zap className="w-5 h-5 text-[#f27d26]" />}
                    
                    <h3 className="text-xl font-display font-medium text-white">
                      {steps[activeStepIndex].title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">{steps[activeStepIndex].phase}</span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-sans italic">
                  "{steps[activeStepIndex].description}"
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {steps[activeStepIndex].subtext}
                </p>

                {/* Subtasks checklists */}
                <div className="space-y-3 pt-2">
                  <h5 className="text-[11px] font-mono uppercase text-[#f27d26] tracking-widest font-bold">Standard Deliverables //</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {steps[activeStepIndex].details.map((detail, index) => (
                      <div key={index} className="bg-[#0e0e0f] p-3 rounded border border-white/5 flex items-start gap-2">
                        <Dot className="w-4 h-4 text-[#f27d26] shrink-0 mt-0.5" />
                        <span className="text-[10px] font-mono text-zinc-300 flex-1 leading-normal">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="border-t border-white/5 pt-6 mt-8 flex items-center justify-between text-zinc-500 text-[10px] font-mono">
              <span>Standard Execution: Agile sprints</span>
              <span>Tuning: Continuous CI/CD integrations</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
