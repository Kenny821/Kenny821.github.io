import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Landmark, ShieldCheck, Heart, GraduationCap, CheckCircle } from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function Achievements() {
  const universityAchievements = [
    {
      title: 'Cy Tan Scholarship',
      sub: 'TAR UMT // Full Tuition Sponsorship (2025)',
      desc: 'Recipient of the Cy Tan Scholarship, a prestigious full tuition sponsorship. Awarded based on strong SPM academic excellence and background resilience as a student from a single-parent household.',
      icon: Landmark,
      color: '#f27d26'
    },
    {
      title: 'NextUp Hackathon 2025',
      sub: 'Bronze Medal Winner // Core Back-end Lead',
      desc: 'Formulated back-end API microservices, secure authentication, and database schemas for the public educational platform "Crow Education", winning the Bronze Medal among high-calibre team projects.',
      icon: Trophy,
      color: '#ffb076'
    }
  ];

  const leadershipRoles = [
    { year: '2024', role: 'Secretary, Sports Club (Kelab Olahraga)' },
    { year: '2023–2024', role: 'Department Head, Prefects Board' },
    { year: '2020–2024', role: 'School Prefect (Pengawas Sekolah)' }
  ];

  const schoolAwards = [
    { year: '2024', title: 'Accounting & Finance Quiz 5.0', detail: 'State Level - Participation Award' },
    { year: '2024', title: 'Mentor - Program Guru Muda', detail: 'Excel in Science Instruction Leader' },
    { year: '2024', title: 'Member - United Society Poi Lam (USPL)', detail: 'Honorary Society Member' },
    { year: '2019', title: 'Perak State, Kinta District Event', detail: 'Participation Recognition Award' },
    { year: '2018', title: 'Poi Lam Memory Competition', detail: 'Memory Champion' },
    { year: '2018', title: 'Poi Lam Choral Speaking', detail: 'School Participation Award' },
    { year: '2024', title: 'Sijil Account (Testimonial)', detail: 'High Proficiency Accounting Evaluation' }
  ];

  return (
    <section id="achievement" className="py-24 bg-[#0a0a0b] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/10 w-fit">
            06 // ACHIEVEMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight leading-tight">
            Honors & Leadership
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-lg font-sans">
            A history of academic resilience, leadership capacity, and competitive drive at both secondary school and university tiers.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mt-4" />
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Span 6): University Milestones */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f27d26]" />
              University Level
            </h3>

            <div className="space-y-6">
              {universityAchievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <BorderGlow
                    key={index}
                    borderRadius={12}
                    className="w-full text-left border border-white/5"
                    backgroundColor="#111112"
                    colors={['#f27d26', '#111112']}
                  >
                    <div className="p-6 flex gap-4 items-start">
                      <div className="p-3 bg-zinc-950 border border-white/10 rounded-lg text-[#f27d26] shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-500">{item.sub}</span>
                        <h4 className="text-lg font-display text-white font-semibold leading-snug">{item.title}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">{item.desc}</p>
                      </div>
                    </div>
                  </BorderGlow>
                );
              })}
            </div>
          </div>

          {/* Right Column (Span 6): Secondary School High School Leadership */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Leadership list */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-600" />
                Secondary School Prefectship & Leadership
              </h3>
              
              <div className="bg-[#111112] border border-white/5 p-5 rounded-xl space-y-3 font-sans">
                {leadershipRoles.map((role, idx) => (
                  <div key={idx} className="flex gap-3 text-xs items-center justify-between border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                    <span className="text-zinc-500 font-mono text-[11px] bg-zinc-950 px-2.5 py-0.5 rounded border border-white/5">{role.year}</span>
                    <span className="text-white font-medium text-right font-display">{role.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* School Awards lists */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffb076]" />
                Secondary School Awards & Recognitions
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {schoolAwards.slice(0, 4).map((award, idx) => (
                  <div key={idx} className="p-3.5 bg-[#111112] border border-white/5 rounded-xl flex gap-2.5 items-start">
                    <CheckCircle className="w-4 h-4 text-[#ffb076] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-zinc-500">{award.year}</span>
                      <h4 className="text-xs text-white font-bold leading-tight">{award.title}</h4>
                      <p className="text-[10px] text-[#ffb076] leading-relaxed font-mono">{award.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Collapsible/Fine list for older ones */}
              <div className="bg-[#111112]/50 border border-white/5 rounded-xl p-4 space-y-2.5">
                {schoolAwards.slice(4).map((award, idx) => (
                  <div key={idx} className="flex justify-between items-center text-[11px] font-sans">
                    <div className="flex gap-2 items-center">
                      <div className="w-1 h-3 bg-zinc-800 rounded-full" />
                      <span className="text-zinc-300 font-semibold">{award.title}</span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500">{award.year}</span>
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
