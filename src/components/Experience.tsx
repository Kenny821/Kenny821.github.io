import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, ShieldAlert, Award, Calendar, ChevronRight, Briefcase, UserCheck, Wrench, Utensils } from 'lucide-react';
import BorderGlow from './BorderGlow';

interface ExpItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'leadership' | 'part-time';
  description: string;
  bullets: string[];
  icon: React.ComponentType<any>;
}

export default function Experience() {
  const experiences: ExpItem[] = [
    {
      id: 'esports',
      role: 'Vice Secretary – Tarcian Cup Esports',
      organization: 'Tunku Abdul Rahman University of Management and Technology (TAR UMT)',
      period: 'January 2026 – June 2026',
      type: 'leadership',
      description: 'Served as the Vice Secretary of Tarcian Cup, the university’s flagship esports tournament. Worked directly alongside executive officers to steer both pre-event planning and post-event documentation, certifying smooth coordination for large-scale student esports tournaments on campus.',
      bullets: [
        'Prepared all pre-event legal documents, proposals, budget plans, and venue usage applications.',
        'Collected and organized background data, contact schedules, and profiles of all critical committee members.',
        'Managed post-event compliance documentation, compiling inclusive participant and committee track sheets.',
        'Authored campus news reports (Berita) and structured data inputs for students to claim university activity points.'
      ],
      icon: Trophy
    },
    {
      id: 'css',
      role: 'Publicity Committee Member – Computer Science Society',
      organization: 'Tunku Abdul Rahman University of Management and Technology (TAR UMT)',
      period: 'June 2026 – June 2027',
      type: 'leadership',
      description: 'Served as a core strategist within the publicity team, aiming to promote interest in the Computer Science Society and scale social engagement for prospective students through creative multi-channel outreach campaigns.',
      bullets: [
        'Designed high-fidelity promotional posters and composed creative, engaging copywriting for events.',
        'Led student recruitment campaigns to enroll helper roles, committee members, and competition teams.',
        'Fully managed the society’s official Instagram account and official student Discord server.',
        'Promoted general visibility for multiple academic programs, game nights, and code workshops.'
      ],
      icon: Award
    },
    {
      id: 'factory',
      role: 'Furniture Assembly and Installation Technician',
      organization: 'Furniture Factory (Part-time)',
      period: 'Age 17 (2024)',
      type: 'part-time',
      description: 'Acquired strong physical engineering discipline, customer relations, and procedural execution by building and transporting bespoke furniture sets under fast turnaround cycles.',
      bullets: [
        'Assembled complex, heavy flat-pack and custom wood furniture pieces within the primary factory unit.',
        'Delivered, transported, and completely installed heavy furniture sets safely in customer homes.',
        'Ensured flawless aesthetic finishing, verified customer satisfaction on-site, and resolved setup adjustments.'
      ],
      icon: Wrench
    },
    {
      id: 'waiter1',
      role: 'Restaurant Waiter',
      organization: 'F&B Restaurant Outlet (Part-time)',
      period: 'Age 17 (2024)',
      type: 'part-time',
      description: 'Cultivated rapid interpersonal skills, high adaptability, and coordination in a highly active and stressful workspace environments.',
      bullets: [
        'Delivered highly responsive, polite, and welcoming experiences for broad customers.',
        'Optimized custom table arrangements and structured food orders with zero communication margins.'
      ],
      icon: Utensils
    },
    {
      id: 'waiter2',
      role: 'Restaurant Waiter',
      organization: 'Local Eatery (Part-time)',
      period: 'Age 15 (2022)',
      type: 'part-time',
      description: 'Gained valuable, early practical work experience, demonstrating self-determination and developing basic workspace communication early on.',
      bullets: [
        'Built fundamental team working attributes and prompt listening skills in serving tables.',
        'Resolved sudden customer issues, building early poise and direct problem-solving agility.'
      ],
      icon: Utensils
    }
  ];

  const [activeTab, setActiveTab] = useState<'all' | 'leadership' | 'part-time'>('all');

  const filteredExps = activeTab === 'all' 
    ? experiences 
    : experiences.filter(e => e.type === activeTab);

  return (
    <section id="experience" className="py-24 bg-[#0c0c0c] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/10">
              03 // EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight leading-tight">
              Professional Journey
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-lg font-sans">
              From organizing large-scale esports events to practicing hands-on customer solutions, every experience builds versatility.
            </p>
          </div>

          {/* Filtering Categories */}
          <div className="flex gap-1.5 bg-[#121213] p-1 rounded-lg border border-white/5 font-mono">
            {([
              { id: 'all', label: 'ALL RANGES' },
              { id: 'leadership', label: 'LEADERSHIP' },
              { id: 'part-time', label: 'PART-TIME' }
            ] as const).map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-3 py-1 text-[10px] uppercase tracking-wider rounded cursor-pointer transition-all duration-300
                  ${activeTab === t.id 
                    ? 'bg-[#f27d26] text-[#0c0c0c] font-bold' 
                    : 'text-zinc-500 hover:text-white'
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-12 pl-6 md:pl-12 space-y-12">
          
          {filteredExps.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Floating Timeline Bullet with Icon */}
                <span className="absolute -left-[35px] md:-left-[59px] top-0 w-8 h-8 rounded-full bg-[#121213] border border-white/10 group-hover:border-[#f27d26] transition-all duration-350 flex items-center justify-center text-zinc-500 group-hover:text-[#f27d26] shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10">
                  <Icon className="w-4 h-4" />
                </span>

                <BorderGlow
                  borderRadius={12}
                  className="w-full text-left relative overflow-hidden transition-all duration-300 border border-white/5"
                  backgroundColor="#111112"
                  colors={['#f27d26', '#111112']}
                >
                  <div className="p-6 md:p-8">
                    
                    {/* Header items */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#f27d26] tracking-wider block font-bold mb-1">
                          {exp.type === 'leadership' ? 'University Leadership' : 'Work Practice'}
                        </span>
                        <h3 className="text-lg md:text-xl font-display font-medium text-white group-hover:text-[#f27d26] transition-colors leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-zinc-400 text-xs mt-1 font-sans">
                          {exp.organization}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[10px] md:text-xs bg-zinc-950 px-2.5 py-1 rounded border border-white/5 h-fit w-fit">
                        <Calendar className="w-3.5 h-3.5 text-[#f27d26]" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Context description */}
                    <p className="text-zinc-300 text-xs md:text-sm font-sans leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Key contributions */}
                    <div className="space-y-3">
                      <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Key Focus & Contributions:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-1">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2 text-xs text-zinc-400 font-sans leading-relaxed items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f27d26]/80 mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </BorderGlow>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
