'use client';

import { Hero } from '@/components/Hero';
import { TrustLogos } from '@/components/TrustLogos';
import { ServicesOverview } from '@/components/ServicesOverview';
import { WebinarPromo } from '@/components/WebinarPromo';
import { WebinarSection } from '@/components/WebinarSection';
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
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      <Navbar />
      
      <main className="relative">
        {/* Global background pattern */}
        <div className="fixed inset-0 bg-pattern opacity-10 pointer-events-none z-0" />
        
        {/* Gradient overlays */}
        <div className="absolute top-0 inset-x-0 h-[70vh] bg-gradient-to-b from-purple-950/30 via-indigo-950/20 to-transparent pointer-events-none z-0" />
        <div className="absolute bottom-0 inset-x-0 h-[70vh] bg-gradient-to-t from-purple-950/30 via-indigo-950/20 to-transparent pointer-events-none z-0" />
        
        {/* Animated gradient orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-4000" />
        </div>
        
        <Hero />
        <WebinarPromo />
        <TrustLogos />
        <ServicesOverview />
        <WebinarSection />
        <HowItWorks />
        <AuditPitch />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      {/* Add a custom style block for global patterns and animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
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
          background-image: 
            radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
          background-position: 0 0, 12px 12px;
        }
      `}</style>
    </div>
  );
}