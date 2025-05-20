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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <TrustLogos />
        <ServicesOverview />
        <AuditPitch />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
