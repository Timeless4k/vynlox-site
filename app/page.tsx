'use client';

import { Hero } from '@/components/Hero';
import { TrustLogos } from '@/components/TrustLogos';
import { ServicesOverview } from '@/components/ServicesOverview';
import { AuditPitch } from '@/components/AuditPitch';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { useEffect } from 'react';

export default function Home() {
  // Smooth scroll function for navigation
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        if (id) {
          const element = document.querySelector(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    document.addEventListener('click', smoothScroll);
    return () => document.removeEventListener('click', smoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      
      <main className="relative">
        {/* Global background pattern */}
        <div className="fixed inset-0 bg-pattern opacity-5 pointer-events-none z-0" />
        
        {/* Subtle gradient overlay at the top */}
        <div className="absolute top-0 inset-x-0 h-[70vh] bg-gradient-to-b from-purple-950/20 to-transparent pointer-events-none z-0" />
        
        <Hero />
        <TrustLogos />
        <ServicesOverview />
        <HowItWorks />
        <AuditPitch />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      {/* Add a custom style block for global patterns and animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        .animate-pulse {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-pattern {
          background-image: radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </div>
  );
}