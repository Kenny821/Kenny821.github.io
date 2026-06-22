import React from 'react';
import { motion } from 'motion/react';
import { Dribbble, Gamepad2, Video, Sparkles, Compass, Lightbulb, Play } from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function InterestsHobbies() {
  const hobs = [
    {
      title: 'Active Sports',
      sub: 'RECHARGE & ENERGY',
      desc: 'I enjoy playing badminton, volleyball, dodgeball, squash, swimming, and hiking. For me, sports are a great way to recharge and stay active. I enjoy movement and outdoor activities far more than sitting still for long periods.',
      tags: ['Badminton', 'Volleyball', 'Dodgeball', 'Squash', 'Swimming', 'Hiking'],
      icon: Dribbble,
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Sandbox & Tactical Gaming',
      sub: 'CREATIVE BLUEPRINTS',
      desc: 'I enjoy sandbox games such as Minecraft and Cities: Skylines because they allow me to freely explore structural ideas and build creative projects using my imagination. I also enjoy tactical shooting games like PUBG — the unpredictability and sense of adventure keep every match exciting.',
      tags: ['Minecraft', 'Cities: Skylines', 'PUBG', 'Strategic Planning'],
      icon: Gamepad2,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Video Editing & Silhouette Photography',
      sub: 'VISUAL STORYTELLING',
      desc: 'I like shooting and editing videos, especially short promotional clips for events in a fun and relaxed style. I often experiment with silhouette-style visual storytelling, creative editing techniques, keyframe shifts, and camera pacing.',
      tags: ['Adobe Premiere', 'Silhouette Shots', 'Event Promos', 'Pacing Shift'],
      icon: Video,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="interest-hobbies" className="py-24 bg-[#0a0a0b] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/10 w-fit">
            08 // INTERESTS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight leading-tight">
            Interests & Hobbies
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-lg font-sans">
            How I recharge, explore my imagination, and record dynamic stories when I am away from terminal programs and calculators.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mt-4" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {hobs.map((hob, idx) => {
            const Icon = hob.icon;
            return (
              <BorderGlow
                key={idx}
                borderRadius={12}
                className="w-full text-left border border-white/5 flex flex-col justify-between"
                backgroundColor="#111112"
                colors={['#f27d26', '#111112']}
              >
                <div className="p-5 flex flex-col justify-between h-full relative">
                  
                  <div>
                    {/* Visual Container */}
                    <div className="relative aspect-[16/10] w-full rounded-md overflow-hidden bg-[#0A0A0B] mb-5 border border-white/5">
                      <img 
                        src={hob.image} 
                        alt={hob.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-40 hover:scale-[1.03] hover:opacity-50 transition-all duration-500 ease-out"
                      />
                      <div className="absolute top-3 left-3 p-2 bg-black/85 backdrop-blur-md border border-white/5 rounded-full text-[#f27d26]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-mono tracking-widest text-[#f27d26] uppercase block font-bold">{hob.sub}</span>
                      <h3 className="text-lg font-display text-white font-medium leading-snug">{hob.title}</h3>
                    </div>

                    <p className="text-zinc-400 text-xs mt-3 leading-relaxed font-sans min-h-[120px]">
                      {hob.desc}
                    </p>
                  </div>

                  <div className="border-t border-white/5 mt-5 pt-4 flex gap-1.5 flex-wrap">
                    {hob.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[9px] font-mono text-zinc-500 px-2 py-0.5 bg-zinc-950 border border-white/5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </BorderGlow>
            );
          })}

        </div>

      </div>
    </section>
  );
}
