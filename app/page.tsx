import React from 'react';
import Hero from '@/components/Hero';
import EmailStrip from '@/components/EmailStrip';
import SystemProof from '@/components/SystemProof';
import HowItWorks from '@/components/HowItWorks';
import VisionTiles from '@/components/VisionTiles';
import FounderStory from '@/components/FounderStory';
import MetricsStrip from '@/components/MetricsStrip';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <EmailStrip />
      <SystemProof />
      <HowItWorks />
      <VisionTiles />
      <FounderStory />
      <MetricsStrip />
      <FinalCTA />
      <Footer />
    </main>
  );
}