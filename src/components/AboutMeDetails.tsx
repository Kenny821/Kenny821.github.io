import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Send, ShieldAlert, Cpu, Heart, Play } from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function AboutMeDetails() {
  return (
    <section id="about-me" className="py-24 bg-[#0c0c0c] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[5%] w-[400px] h-[400px] bg-[#f27d26]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[760px] mx-auto px-6 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-center items-center">
          <span className="text-[11px] font-mono tracking-widest text-[#f27d26] uppercase bg-[#f27d26]/10 px-3 py-1 rounded-full border border-[#f27d26]/10 w-fit">
            09 // INSIGHTS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight leading-tight">
            About Me // Chronology
          </h2>
          <div className="w-12 h-[1px] bg-zinc-800 mt-4" />
        </div>

        {/* Narrative layout column representing a beautifully styled article list */}
        <div className="space-y-8 text-zinc-300 text-sm md:text-base leading-relaxed">
          
          <div className="p-6 md:p-8 bg-[#111112] border border-white/5 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f27d26]/5 to-transparent pointer-events-none rounded-tr-2xl" />
            
            <h3 className="text-lg font-display text-white font-semibold flex items-center gap-2 mb-4">
              <Compass className="w-5 h-5 text-[#f27d26]" />
              The Leap into the Unknown
            </h3>
            
            <p className="mb-4">
              Hi, I'm <strong className="text-white">Loh Kien Ee (Kenny)</strong>, a Computer Science student currently studying in Penang, Malaysia.
            </p>
            <p className="mb-4">
              My journey into technology did not begin with a clear dream or a lifelong passion for programming. During my final year of secondary school, while preparing for SPM, I found myself struggling with a question that many students face: <em>What should I do next?</em>
            </p>
            <p>
              At that time, I had no clear direction. I spent countless hours exploring university websites and researching different fields, from Architecture and Economics to many other disciplines. Eventually, I came across Computer Science — a field I had absolutely no prior experience in.
            </p>
            
            <div className="border-[#f27d26] border-l-2 pl-4 py-1.5 italic bg-white/[0.01] mt-6 text-zinc-400 font-serif text-sm">
              "Choosing Computer Science was a leap into the unknown."
            </div>
          </div>

          <div className="p-6 md:p-8 bg-[#111112]/50 border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-display text-white font-semibold flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#ffb076]" />
              Starting Behind the Starting Line
            </h3>

            <p>
              I still remember my first days in university. New concepts, unfamiliar technologies, and endless information felt overwhelming, as if everything was being poured into my mind at once. Compared to many of my peers, I felt like I was starting behind the starting line.
            </p>
            <p>
              However, instead of avoiding challenges, <strong className="text-[#f27d26] font-medium">I chose to embrace them</strong>.
            </p>
            <p>
              Since then, I have continuously pushed myself beyond my comfort zone by participating in competitions, exploring emerging technologies, collaborating with like-minded friends, and learning far beyond the boundaries of the traditional classroom.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-[#111112] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-display text-white font-semibold flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#f27d26]" />
              Reasoning First: Depth Before Speed
            </h3>

            <p>
              Currently, I am deeply interested in <strong className="text-white">AI Prompt Engineering</strong>, <strong className="text-white">Human-AI Interaction</strong>, and <strong className="text-white">UI/UX Design</strong>. I enjoy understanding not only how technology works, but also how people interact with it and how better communication with AI can unlock new possibilities.
            </p>
            <p>
              My approach to learning is simple: <strong className="text-[#f27d26] font-medium">I believe true understanding comes before speed</strong>. Whenever I encounter a completely new topic, I deliberately set aside assumptions and start from the fundamentals. By building knowledge layer by layer, I can develop a deeper understanding rather than relying on memorization alone.
            </p>
            <p>
              I also believe that solving problems requires separating emotions from analysis. Whether in technology, projects, or personal challenges, I prefer to focus on root causes rather than surface-level symptoms.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-[#111112]/50 border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-display text-white font-semibold flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#ffb076]" />
              Achievements of Resolute Grit
            </h3>

            <p>
              One of my proudest achievements is developing my own personal website, which represents not only technical progress but also my willingness to create and share. Beyond technology, I are equally proud of discovering my life direction and overcoming my fear of using English in daily communication.
            </p>
            <p>
              Looking ahead, <strong className="text-white font-semibold">I aspire to become a Prompt Engineer specializing in Human-AI Collaboration</strong>. I believe AI is not something to fear or resist, but a tool that can amplify human potential when used thoughtfully. My goal is to help more people understand how to work alongside AI and thrive in the opportunities created by this new era.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
