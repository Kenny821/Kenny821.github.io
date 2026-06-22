import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ThisIsMe from './components/ThisIsMe';
import Experience from './components/Experience';
import Work from './components/Work';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import InterestsHobbies from './components/InterestsHobbies';
import AboutMeDetails from './components/AboutMeDetails';
import ContactForm from './components/ContactForm';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

export default function App() {
  const [activeSectionIndex, setActiveSectionIndex] = React.useState<number>(0);

  // 1. Scroll Position Persistence on page refresh
  React.useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      const y = parseInt(savedPosition, 10);
      const timer1 = setTimeout(() => {
        window.scrollTo({ top: y });
      }, 50);
      const timer2 = setTimeout(() => {
        window.scrollTo({ top: y });
      }, 200);
      const timer3 = setTimeout(() => {
        window.scrollTo({ top: y });
      }, 500);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, []);

  React.useEffect(() => {
    const handleScrollSave = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };
    window.addEventListener('scroll', handleScrollSave, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollSave);
    };
  }, []);

  // 2. Navigation ScrollSpy in real-time matching all 11 sections
  React.useEffect(() => {
    const sectionIds = [
      'hero',
      'this-is-me',
      'experience',
      'project',
      'skill',
      'achievement',
      'education',
      'interest-hobbies',
      'about-me',
      'contact',
      'philosophy'
    ];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let currentActiveIndex = -1;
      
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActiveIndex = i;
            break;
          }
        }
      }
      
      if (window.scrollY < 200) {
        currentActiveIndex = 0;
      }
      
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        currentActiveIndex = sectionIds.length - 1;
      }
      
      if (currentActiveIndex !== -1) {
        setActiveSectionIndex(currentActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  const triggerHireMeFocus = () => {
    // Smooth scroll down to the contact area
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Select the email tab automatically and focus the copy email button
    setTimeout(() => {
      // Trigger the click of email channel tab
      const emailChannelTab = document.getElementById('channel-email');
      if (emailChannelTab) {
        emailChannelTab.click();
      }

      // Focus on the copy email button
      const copyBtn = document.getElementById('btn-copy-email');
      if (copyBtn) {
        copyBtn.focus();
      }
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-[#0c0c0c] text-[#E0E0E6] overflow-x-hidden selection:bg-[#f27d26]/30 selection:text-white">
      {/* Dynamic trigger list header */}
      <Header onHireMeClick={triggerHireMeFocus} activeIndex={activeSectionIndex} />

      {/* Main Core View Layout */}
      <main className="relative">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. This Is Me */}
        <ThisIsMe />

        {/* 3. Experience */}
        <Experience />

        {/* 4. Project (Work details matching Crow Education) */}
        <Work />

        {/* 5. Skill Map */}
        <Skills />

        {/* 6. Achievement Grid */}
        <Achievements />

        {/* 7. Education Background */}
        <Education />

        {/* 8. Interest & hobbies */}
        <InterestsHobbies />

        {/* 9. About Me details chronology */}
        <AboutMeDetails />

        {/* 10. Contact Section */}
        <ContactForm />

        {/* 11. My Philosophy */}
        <Philosophy />

      </main>

      {/* Footer copyright and social navigation rail */}
      <Footer />
    </div>
  );
}
