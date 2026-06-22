import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Compass, Zap } from 'lucide-react';
import BorderGlow from './BorderGlow';
import TiltedCard from './TiltedCard';

export default function ThisIsMe() {
  return (
    <section id="this-is-me" className="py-24 bg-[#0a0a0b] relative border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#f27d26]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-[#ffb076]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/10 w-fit">
            02 // IDENTITY
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight leading-tight">
            This Is Me
          </h2>
          <div className="w-12 h-[1px] bg-zinc-800 mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Creative Interactive Tilted Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[380px] aspect-[4/5] rounded-xl overflow-hidden border border-white/10 p-2 bg-[#121213]">
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=80"
                altText="Kenny - Loh Kien Ee Avatar representation"
                captionText="Loh Kien Ee (Kenny) // CS Explorer"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={12}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0e0e0f]/90 via-[#0e0e0f]/40 to-transparent p-5 rounded-b-[15px] pointer-events-none text-left">
                    <span className="text-[9px] font-mono uppercase text-[#f27d26] font-bold">STATIONED IN</span>
                    <h3 className="text-sm font-display text-white font-medium">Penang, Malaysia</h3>
                  </div>
                }
              />
            </div>
          </div>

          {/* Description details */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-light text-zinc-100 leading-snug">
                Hi, I'm <span className="text-[#f27d26] font-semibold">Kenny</span>, a Computer Science student who turns curiosity into forward momentum.
              </h3>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                I enjoy exploring new ideas, challenging myself through unfamiliar experiences, and turning curiosity into action. My current interests focus on <strong className="text-[#f27d26] font-medium">AI Prompt Engineering</strong>, and <strong className="text-white font-medium">Human-AI Interaction</strong>.
              </p>

              <div className="border-l-2 border-[#f27d26] pl-4 py-1 bg-white/[0.01]">
                <p className="text-zinc-400 italic text-xs md:text-sm leading-relaxed">
                  "Starting with no background in technology, I chose Computer Science as a leap into the unknown and have since embraced continuous learning through projects, competitions, and self-exploration."
                </p>
              </div>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                I believe growth comes from understanding things deeply, questioning assumptions, and staying open to new possibilities. My goal is to help people work alongside AI more effectively and make the most of the opportunities created by the AI era.
              </p>

              {/* Stats/Badges Bento Grid snippets */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <BorderGlow
                  borderRadius={8}
                  className="w-full border border-white/5"
                  backgroundColor="#121213"
                  colors={['#f27d26', '#121213']}
                >
                  <div className="p-4 flex gap-3 items-start">
                    <Compass className="w-5 h-5 text-[#f27d26] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">LEAP CORE</h4>
                      <p className="text-white text-xs mt-1">Embracing Unfamiliar Frontiers</p>
                    </div>
                  </div>
                </BorderGlow>

                <BorderGlow
                  borderRadius={8}
                  className="w-full border border-white/5"
                  backgroundColor="#121213"
                  colors={['#f27d26', '#121213']}
                >
                  <div className="p-4 flex gap-3 items-start">
                    <Zap className="w-5 h-5 text-[#f27d26] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">MISSION</h4>
                      <p className="text-white text-xs mt-1">Human-AI Collaboration Synergy</p>
                    </div>
                  </div>
                </BorderGlow>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
