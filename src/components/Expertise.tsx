import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  BrainCircuit, 
  Box, 
  MessageSquare, 
  Terminal, 
  Trophy, 
  Github, 
  CheckCircle, 
  RotateCw,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Skill, Achievement } from '../types';
import BorderGlow from './BorderGlow';

export default function Expertise() {
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>('spatial');
  
  // Custom Skill List matching image perfectly
  const skills: Skill[] = [
    {
      id: 'arithmetic',
      name: 'Arithmetic',
      description: 'Ultra-fast numerical computation, logical estimation, and algorithmic scalability calculations.',
      interactiveType: 'arithmetic',
      iconName: 'Calculator'
    },
    {
      id: 'reasoning',
      name: 'Reasoning',
      description: 'First-principles reasoning and deductive problem-solving applied to complex system boundaries.',
      interactiveType: 'reasoning',
      iconName: 'BrainCircuit'
    },
    {
      id: 'spatial',
      name: 'Spatial Awareness',
      description: 'Cognitive projection of 3D matrix coordinates and rendering transformations in space.',
      interactiveType: 'spatial',
      iconName: 'Box'
    },
    {
      id: 'communication',
      name: 'Communication & Public Speaking',
      description: 'Taming technical complexity into high-impact, articulate, human-centric narratives.',
      interactiveType: 'communication',
      iconName: 'MessageSquare'
    },
    {
      id: 'prompting',
      name: 'AI Prompting',
      description: 'Constructing robust, structurally walled context environments for large language models.',
      interactiveType: 'prompting',
      iconName: 'Terminal'
    }
  ];

  const achievements: Achievement[] = [
    {
      id: 'hackathon',
      title: '2025 NextUp Hackathon Bronze Medalist',
      badge: 'Bronze Medalist',
      description: 'Competed against top-tier tech talent, designing and delivering an elegant distributed server-side architecture in under 36 hours.'
    },
    {
      id: 'crow',
      title: 'GitHub Project: Crow Education Contributor (Back-end)',
      badge: 'Back-end Contributor',
      description: 'Contributed vital microservice optimizations, query caching layer, and stable telemetry reporting pipelines for a major open-source educational suite.'
    }
  ];

  return (
    <section id="expertise" className="py-20 border-t border-white/5 relative">
      {/* Aesthetic glowing background */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-[#f27d26]/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-96 h-96 rounded-full bg-[#f27d26]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/10">
            Expertise & Background
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight">
            Areas of Expertise & Milestones
          </h2>
          <p className="text-[#A1A1AA] text-sm md:text-base mt-2 max-w-xl mx-auto font-sans">
            A balanced overview of core mental capabilities, engineering instincts, and community-proven milestones.
          </p>
        </div>

        {/* 2 Column Layout exactly as depicted in the original mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CARD: Core Skills (Span 7) */}
          <div className="lg:col-span-7 h-full">
            <BorderGlow
              borderRadius={12}
              className="w-full h-full text-left relative overflow-hidden group shadow-2xl transition-all duration-300 border border-white/5"
              backgroundColor="#111112"
              colors={['#f27d26', '#ffb076', '#111112']}
            >
              <div className="p-6 md:p-8 flex flex-col justify-between h-full relative">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#f27d26]" />
                      Core Skills
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">Interactive Suite</span>
                  </div>

                  {/* Skills Grid matching styling with responsive custom shapes */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {skills.map((skill) => {
                      const isSelected = selectedSkillId === skill.id;
                      return (
                        <button
                          id={`skill-${skill.id}`}
                          key={skill.id}
                          onClick={() => setSelectedSkillId(skill.id)}
                          className={`px-4 py-2 text-xs font-mono text-left rounded-md transition-all duration-300 border cursor-pointer hover:scale-[1.02] flex items-center gap-2
                            ${isSelected 
                              ? 'bg-[#f27d26]/10 text-white border-[#f27d26] shadow-[0_0_15px_rgba(242,125,38,0.15)]' 
                              : 'bg-[#18181a] text-zinc-400 border-white/10 hover:border-white/20'
                            }`}
                        >
                          {skill.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Interactive Sandbox Container based on selected skill */}
                <div className="border border-white/5 bg-[#0e0e0f] rounded-lg p-5 min-h-[290px] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
                  
                  <AnimatePresence mode="wait">
                    {selectedSkillId === 'arithmetic' && (
                      <motion.div
                        key="arithmetic"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="relative z-10 flex flex-col h-full justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-[#f27d26]">
                            <Calculator className="w-5 h-5 text-[#f27d26]" />
                            <span className="text-sm font-mono font-medium">Core Mental Compiler</span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-2 font-sans">
                            Demonstrating computational estimation speed. Kenny's code pipelines rely on hyper-fast mental checks of memory complexities.
                          </p>
                        </div>
                        <ArithmeticSandbox />
                      </motion.div>
                    )}

                    {selectedSkillId === 'reasoning' && (
                      <motion.div
                        key="reasoning"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="relative z-10 flex flex-col h-full justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-[#f27d26]">
                            <BrainCircuit className="w-5 h-5 text-[#f27d26]" />
                            <span className="text-sm font-mono font-medium">Logical Deductive Engine</span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-2 font-sans">
                            Examine dynamic inferences. Toggle premise variables to see their logical synthesis update in real-time.
                          </p>
                        </div>
                        <ReasoningSandbox />
                      </motion.div>
                    )}

                    {selectedSkillId === 'spatial' && (
                      <motion.div
                        key="spatial"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="relative z-10 flex flex-col h-full justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-[#f27d26]">
                            <Box className="w-5 h-5 text-[#f27d26]" />
                            <span className="text-sm font-mono font-medium">3D Stereoscopic Matrix</span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-2 font-sans">
                            Rotate the spatial box to test stereoscopic visual projection depth. Essential for UI mapping and graphic optimization.
                          </p>
                        </div>
                        <SpatialSandbox />
                      </motion.div>
                    )}

                    {selectedSkillId === 'communication' && (
                      <motion.div
                        key="communication"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="relative z-10 flex flex-col h-full justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-[#f27d26]">
                            <MessageSquare className="w-5 h-5 text-[#f27d26]" />
                            <span className="text-sm font-mono font-medium">High-Impact Presenter Telemetry</span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-2 font-sans">
                            Simulating technical public speaking delivery metrics. Watch Kenny break down microservices into high-resonance human terms.
                          </p>
                        </div>
                        <CommunicationSandbox />
                      </motion.div>
                    )}

                    {selectedSkillId === 'prompting' && (
                      <motion.div
                        key="prompting"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="relative z-10 flex flex-col h-full justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-[#f27d26]">
                            <Terminal className="w-5 h-5 text-[#f27d26]" />
                            <span className="text-sm font-mono font-medium font-bold">Walled-Context Prompt Constructor</span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-2 font-sans">
                            Select a task to generate Kenny's gold-standard structured markdown prompts with strict XML tag enclosures.
                          </p>
                        </div>
                        <PromptSandbox />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* RIGHT CARD: Achievements (Span 5) */}
          <div className="lg:col-span-5 h-full">
            <BorderGlow
              borderRadius={12}
              className="w-full h-full text-left relative overflow-hidden group shadow-2xl transition-all duration-300 border border-white/5"
              backgroundColor="#111112"
              colors={['#f27d26', '#ffb076', '#111112']}
            >
              <div className="p-6 md:p-8 flex flex-col justify-between h-full relative">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-[#f27d26]" />
                      Achievements
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">Milestones</span>
                  </div>

                  <div className="space-y-8">
                    {achievements.map((ach) => (
                      <div key={ach.id} className="relative pl-5 border-l border-zinc-800 hover:border-[#f27d26] transition-colors group">
                        {/* Bullet marker */}
                        <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-[#f27d26] transition-all" />
                        
                        <h4 className="text-sm font-display font-medium text-white group-hover:text-[#f27d26] transition-colors leading-snug">
                           {ach.title}
                        </h4>
                        <span className="inline-block mt-1 text-[10px] font-mono uppercase tracking-widest text-[#f27d26]/80 bg-[#f27d26]/5 border border-[#f27d26]/10 px-2 py-0.5 rounded-sm">
                          {ach.badge}
                        </span>
                        <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
                          {ach.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Callout Footer within Achievements Card */}
                <div className="mt-12 pt-6 border-t border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f27d26]/5 border border-[#f27d26]/10 flex items-center justify-center">
                    <Github className="w-4 h-4 text-[#f27d26]" />
                  </div>
                  <div className="text-left font-mono">
                    <p className="text-[11px] text-zinc-300">verified open source contributions</p>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[10px] text-[#f27d26] hover:underline flex items-center gap-1 mt-0.5"
                    >
                      view on github <ArrowRight className="w-3 h-3" />
                    </a>
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

/* ==========================================================================
   MINI SANDBOXES (COMPILING INTERACTIVE GAMEPLAY / SHOWCASES)
   ========================================================================== */

// 1. Arithmetic Mini-game
function ArithmeticSandbox() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState<'+' | '*' | '-'>('+');
  const [choices, setChoices] = useState<number[]>([]);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [streak, setStreak] = useState(0);
  const [status, setStatus] = useState<'idle' | 'success' | 'failed'>('idle');

  const generateQuestion = () => {
    const ops: ('+' | '*' | '-')[] = ['+', '-', '*'];
    const selectedOp = ops[Math.floor(Math.random() * ops.length)];
    let n1 = 0;
    let n2 = 0;

    if (selectedOp === '+') {
      n1 = Math.floor(Math.random() * 80) + 10;
      n2 = Math.floor(Math.random() * 80) + 10;
    } else if (selectedOp === '-') {
      n1 = Math.floor(Math.random() * 90) + 10;
      n2 = Math.floor(Math.random() * n1); // Avoid negatives for simplicity
    } else {
      n1 = Math.floor(Math.random() * 12) + 2;
      n2 = Math.floor(Math.random() * 15) + 2;
    }

    setNum1(n1);
    setNum2(n2);
    setOperator(selectedOp);
    setSelectedAns(null);
    setStatus('idle');

    // Calculate answer
    const ans = selectedOp === '+' ? n1 + n2 : selectedOp === '-' ? n1 - n2 : n1 * n2;
    
    // Create wrong answers
    const wrongs = new Set<number>();
    while (wrongs.size < 3) {
      const diff = (Math.floor(Math.random() * 5) + 1) * (Math.random() > 0.5 ? 1 : -1);
      const wrong = ans + diff;
      if (wrong !== ans && wrong >= 0) wrongs.add(wrong);
    }

    const allChoices = Array.from(wrongs);
    allChoices.push(ans);
    // Shuffle
    allChoices.sort(() => Math.random() - 0.5);
    setChoices(allChoices);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleAnswer = (choice: number) => {
    setSelectedAns(choice);
    const correctAns = operator === '+' ? num1 + num2 : operator === '-' ? num1 - num2 : num1 * num2;
    if (choice === correctAns) {
      setStatus('success');
      setStreak(streak + 1);
    } else {
      setStatus('failed');
      setStreak(0);
    }
  };

  return (
    <div className="mt-2 bg-[#121214] p-3 rounded border border-white/5">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-mono text-zinc-500">SPEED ESTIMATION GRID</span>
        <span className="text-[10px] font-mono text-[#f27d26] bg-[#f27d26]/10 px-2 py-0.5 rounded font-bold">
          Streak: {streak} 🔥
        </span>
      </div>

      <div className="text-center py-2 mb-3 bg-[#080809] border border-white/5 rounded">
        <span className="text-xl font-mono text-white tracking-wide">
          {num1} {operator === '*' ? '×' : operator} {num2} = ?
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {choices.map((choice, i) => {
          const correctAns = operator === '+' ? num1 + num2 : operator === '-' ? num1 - num2 : num1 * num2;
          const isSelected = selectedAns === choice;
          let btnClass = "border border-white/5 bg-[#17171a] hover:bg-[#1f1f23] text-white";
          if (isSelected) {
            btnClass = choice === correctAns 
              ? "bg-emerald-950/40 border-emerald-500 text-emerald-300"
              : "bg-rose-950/40 border-rose-500 text-[#ffb4ab]";
          } else if (status !== 'idle' && choice === correctAns) {
            btnClass = "bg-emerald-950/40 border-emerald-500 text-emerald-300";
          }

          return (
            <button
              id={`choice-${i}`}
              key={choice}
              disabled={status !== 'idle'}
              onClick={() => handleAnswer(choice)}
              className={`py-2 text-xs font-mono rounded transition-all capitalize cursor-pointer ${btnClass}`}
            >
              {choice}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-[10px] font-mono">
          {status === 'success' && <span className="text-emerald-400">✓ Optimization compiler verified. Correct!</span>}
          {status === 'failed' && <span className="text-rose-400">✗ Error: Recalibrate mental cache.</span>}
          {status === 'idle' && <span className="text-zinc-500">Pick the correct computation.</span>}
        </div>
        {status !== 'idle' && (
          <button
            id="next-arithmetic"
            onClick={generateQuestion}
            className="text-[10px] font-mono text-[#f27d26] hover:underline flex items-center gap-1 cursor-pointer font-bold"
          >
            Compute Next <RotateCw className="w-3 h-3 animate-spin duration-1000" />
          </button>
        )}
      </div>
    </div>
  );
}

// 2. Reasoning Sandbox
function ReasoningSandbox() {
  const [p1, setP1] = useState(true);
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(true);

  // Logical rules: 
  // R1: If A (p1) AND B (p2) -> C is True
  // R2: If NOT B (p2) AND C (p3) -> D is True
  // R3: Final inference (E) = D OR (A AND C)
  const cVal = p1 && p2;
  const dVal = !p2 && p3;
  const eVal = dVal || (p1 && cVal);

  return (
    <div className="mt-2 bg-[#121214] p-3 rounded border border-white/5 font-mono">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] text-zinc-500">LISP-STYLE REASONING TREE</span>
        <span className="text-[10px] text-[#f27d26] font-semibold">Satisfiable</span>
      </div>

      {/* Premises Selector */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="flex flex-col items-center p-1.5 bg-[#080809] border border-white/5 rounded text-[11px]">
          <span className="text-zinc-500 text-[9px] mb-1">Premise A</span>
          <button
            id="toggle-p1"
            onClick={() => setP1(!p1)}
            className={`px-2 py-0.5 rounded text-[10px] font-mono cursor-pointer transition-colors ${p1 ? 'bg-indigo-950/30 text-indigo-300 border border-indigo-500/20' : 'bg-zinc-900 text-zinc-600 border border-transparent'}`}
          >
            {p1 ? 'TRUE' : 'FALSE'}
          </button>
        </div>
        <div className="flex flex-col items-center p-1.5 bg-[#080809] border border-white/5 rounded text-[11px]">
          <span className="text-zinc-500 text-[9px] mb-1">Premise B</span>
          <button
            id="toggle-p2"
            onClick={() => setP2(!p2)}
            className={`px-2 py-0.5 rounded text-[10px] font-mono cursor-pointer transition-colors ${p2 ? 'bg-indigo-950/30 text-indigo-300 border border-indigo-500/20' : 'bg-zinc-900 text-zinc-600 border border-transparent'}`}
          >
            {p2 ? 'TRUE' : 'FALSE'}
          </button>
        </div>
        <div className="flex flex-col items-center p-1.5 bg-[#080809] border border-white/5 rounded text-[11px]">
          <span className="text-zinc-500 text-[9px] mb-1">Premise C</span>
          <button
            id="toggle-p3"
            onClick={() => setP3(!p3)}
            className={`px-2 py-0.5 rounded text-[10px] font-mono cursor-pointer transition-colors ${p3 ? 'bg-indigo-950/30 text-indigo-300 border border-indigo-500/20' : 'bg-zinc-900 text-zinc-600 border border-transparent'}`}
          >
            {p3 ? 'TRUE' : 'FALSE'}
          </button>
        </div>
      </div>

      {/* Inference Rules Live Output */}
      <div className="space-y-1.5 text-[11px] bg-[#080809] p-2.5 rounded border border-white/5">
        <div className="flex justify-between">
          <span className="text-zinc-500">Rule 1 (A ∧ B → X):</span>
          <span className={cVal ? 'text-emerald-400' : 'text-zinc-600'}>{cVal ? 'MATCHED' : 'VOID'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Rule 2 (¬B ∧ C → Y):</span>
          <span className={dVal ? 'text-emerald-400' : 'text-zinc-600'}>{dVal ? 'MATCHED' : 'VOID'}</span>
        </div>
        <div className="flex justify-between border-t border-white/5 pt-1.5 mt-1.5 font-bold">
          <span className="text-[#f27d26]">Synthesised Output (Y ∨ (A ∧ X)):</span>
          <span className={eVal ? 'text-[#f27d26]' : 'text-zinc-500 shadow-pulse'}>
            {eVal ? 'VAL_VALIDATED' : 'VOID_STATE'}
          </span>
        </div>
      </div>
    </div>
  );
}

// 3. Spatial Sandbox
function SpatialSandbox() {
  const [rotateX, setRotateX] = useState(25);
  const [rotateY, setRotateY] = useState(-35);
  const [rotateZ, setRotateZ] = useState(0);

  const resetRotation = () => {
    setRotateX(25);
    setRotateY(-35);
    setRotateZ(0);
  };

  return (
    <div className="mt-1 bg-[#121214] p-3 rounded border border-white/5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-mono text-zinc-500 font-bold">STEREOSCOPIC ROTATOR</span>
        <button 
          id="reset-cube"
          onClick={resetRotation} 
          className="text-[9px] font-mono text-[#f27d26] hover:underline cursor-pointer font-bold"
        >
          Reset View
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 py-1">
        {/* Graphic Area */}
        <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center relative perspective-[400px] border border-white/5 bg-[#080809] rounded">
          <div 
            className="w-12 h-12 relative transform-style-3d transition-transform duration-100"
            style={{ 
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)` 
            }}
          >
            {/* Front */}
            <div className="absolute inset-0 border border-cyan-500 bg-cyan-500/10 transform translate-z-[24px] flex items-center justify-center text-[8px] font-mono text-cyan-400">
              F
            </div>
            {/* Back */}
            <div className="absolute inset-0 border border-violet-500 bg-violet-500/10 transform rotate-y-180 translate-z-[24px] flex items-center justify-center text-[8px] font-mono text-violet-400">
              B
            </div>
            {/* Top */}
            <div className="absolute inset-0 border border-[#f27d26] bg-[#f27d26]/10 transform rotate-x-90 translate-z-[24px] flex items-center justify-center text-[8px] font-mono text-[#f27d26] font-bold">
              T
            </div>
            {/* Bottom */}
            <div className="absolute inset-0 border border-zinc-500 bg-zinc-500/15 transform rotate-x-270 translate-z-[24px] flex items-center justify-center text-[8px] font-mono text-zinc-400">
              U
            </div>
            {/* Left */}
            <div className="absolute inset-0 border border-indigo-500 bg-indigo-500/10 transform rotate-y-270 translate-z-[24px] flex items-center justify-center text-[8px] font-mono text-indigo-400">
              L
            </div>
            {/* Right */}
            <div className="absolute inset-0 border border-emerald-500 bg-emerald-500/10 transform rotate-y-90 translate-z-[24px] flex items-center justify-center text-[8px] font-mono text-emerald-400 font-bold">
              R
            </div>
          </div>
        </div>

        {/* Input sliders */}
        <div className="flex-1 w-full space-y-2.5 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-zinc-500 w-12 text-left">Pitch X:</span>
            <input 
              id="spatial-x"
              type="range" 
              min="-180" 
              max="180" 
              value={rotateX} 
              onChange={(e) => setRotateX(Number(e.target.value))}
              className="flex-1 h-1 bg-zinc-800 rounded-lg appearance-none cursor-ew-resize accent-[#f27d26]"
            />
            <span className="text-[9px] text-zinc-400 w-6 text-right">{rotateX}°</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-zinc-500 w-12 text-left">Yaw Y:</span>
            <input 
              id="spatial-y"
              type="range" 
              min="-180" 
              max="180" 
              value={rotateY} 
              onChange={(e) => setRotateY(Number(e.target.value))}
              className="flex-1 h-1 bg-zinc-800 rounded-lg appearance-none cursor-ew-resize accent-[#f27d26]"
            />
            <span className="text-[9px] text-zinc-400 w-6 text-right">{rotateY}°</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-zinc-500 w-12 text-left">Roll Z:</span>
            <input 
              id="spatial-z"
              type="range" 
              min="-180" 
              max="180" 
              value={rotateZ} 
              onChange={(e) => setRotateZ(Number(e.target.value))}
              className="flex-1 h-1 bg-zinc-800 rounded-lg appearance-none cursor-ew-resize accent-[#f27d26]"
            />
            <span className="text-[9px] text-zinc-400 w-6 text-right">{rotateZ}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Communication Sandbox
function CommunicationSandbox() {
  const [logIndex, setLogIndex] = useState(0);
  const speakLogs = [
    "[INFO] Initialized public address sequence.",
    "[TOPIC] System latency decoupling via localized state caching.",
    "[HUMAN_RESONANCE] Framing microservices as small, highly specialized teams that talk to each other...",
    "[DELIVERY] Resonance index: 94%. Audience engagement stabilized.",
    "[SUCCESS] Pitch finalized. Q&A module online."
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % speakLogs.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mt-2 bg-[#121214] p-3 rounded border border-white/5 font-mono text-[11px]">
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-[9px] text-zinc-500">SPEAKER TELEMETRY STREAM</span>
        <span className="text-[9px] text-[#f27d26] animate-pulse font-semibold">● BROADCASTING</span>
      </div>

      <div className="bg-[#080809] p-3 rounded border border-white/5 h-28 flex flex-col justify-between overflow-hidden relative">
        <div className="space-y-1 text-[10px]">
          {speakLogs.slice(0, logIndex + 1).map((log, index) => {
            let colorClass = 'text-zinc-500';
            if (log.startsWith('[TOPIC]')) colorClass = 'text-violet-300';
            if (log.startsWith('[HUMAN_RESONANCE]')) colorClass = 'text-emerald-300';
            if (log.startsWith('[SUCCESS]')) colorClass = 'text-amber-400 font-bold';

            return (
              <div key={index} className={`flex gap-1.5 ${colorClass}`}>
                <span>&gt;</span>
                <span className="leading-relaxed">{log}</span>
              </div>
            );
          })}
        </div>
        
        <div className="border-t border-white/5 pt-1.5 flex justify-between items-center text-[9px] text-zinc-600">
          <span>Target clarity: High (1.0)</span>
          <span>Baudrate: 115200bps</span>
        </div>
      </div>
    </div>
  );
}

// 5. Prompt Sandbox
function PromptSandbox() {
  const [selectedTask, setSelectedTask] = useState<'refactoring' | 'explanations' | 'api'>('refactoring');
  const [copied, setCopied] = useState(false);

  const promptingTemplates = {
    refactoring: `### Instructions: Core Code Refactor
You are a compiler optimization engine. Your goal is to maximize cache locality and eliminate unused references in the input code segment.

<code_to_refactor>
{{PROMPT_SOURCE}}
</code_to_refactor>

### Strict Output Constraint:
Return strictly optimized code wrapped within a Markdown block of type typescript, alongside a single-sentence benchmark comparison of time/space complexity changes. Do not output conversational apologies.`,
    
    explanations: `### Persona Guide: First-Principles Scientist
You explain incredibly complex technological abstractions to non-expert enterprise investors. You must avoid using secondary technology names as descriptions, instead breaking down the physical logic in the simplest possible terms.

<abstraction_subject>
{{SUBJECT_Blueprint}}
</abstraction_subject>

Format your output with a single Markdown table presenting core trade-offs, followed by a reassuring concluding sentence.`,
    
    api: `### Schema Generator
Generate standard, secure relational database configurations supporting Firebase authentication payloads.

<schema_specification>
{{SCHEMA_PAYLOAD_OBJECT}}
</schema_specification>

Write structured CREATE TABLE commands obeying third normal form design rules. Wrap output in SQL tags.`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(promptingTemplates[selectedTask]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-2 bg-[#121214] p-3 rounded border border-white/5">
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-[10px] font-mono text-zinc-500 font-bold font-bold">TEMPLATE SELECTOR</span>
        <button
          id="copy-prompt"
          onClick={handleCopy}
          className="text-[9px] font-mono text-[#f27d26] hover:underline flex items-center gap-1 cursor-pointer font-bold"
        >
          {copied ? 'Copied ✓' : 'Copy Template 📋'}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {(['refactoring', 'explanations', 'api'] as const).map((task) => (
          <button
            id={`prompt-task-${task}`}
            key={task}
            onClick={() => setSelectedTask(task)}
            className={`py-1 px-1.5 text-[9px] font-mono rounded cursor-pointer transition-colors text-center border capitalize
              ${selectedTask === task 
                ? 'bg-[#f27d26]/10 text-white border-[#f27d26]/30' 
                : 'bg-zinc-900 border-white/5 text-zinc-400 hover:bg-zinc-800'
              }`}
          >
            {task === 'explanations' ? 'Scientific Expl.' : task}
          </button>
        ))}
      </div>

      <div className="bg-[#080809] p-2 rounded border border-white/5 h-24 overflow-y-auto">
        <pre className="text-[9px] font-mono text-zinc-400 whitespace-pre-wrap leading-tight text-left">
          {promptingTemplates[selectedTask]}
        </pre>
      </div>
    </div>
  );
}
