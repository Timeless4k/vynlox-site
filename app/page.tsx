import React from 'react';
import Hero from '@/components/Hero';
import EmailStrip from '@/components/EmailStrip';
import SystemProof from '@/components/SystemProof';
import HowItWorks from '@/components/HowItWorks';
import VisionTiles from '@/components/VisionTiles';
import FounderStory from '@/components/FounderStory';
import MetricsStrip from '@/components/MetricsStrip';
import FinalCTA from '@/components/FinalCTA';
import NewsletterSignup from '@/components/NewsletterSignup';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation for Solo Founders | AI Agent Solutions',
  description: 'Transform your business with AI automation that works. Vynlox helps founders save 20+ hours/week using proven AI solutions. Free workshop + strategy audit available.',
  openGraph: {
    title: 'AI Automation for Solo Founders | Save 20+ Hours/Week',
    description: 'Transform your business with AI automation that actually works. Join founders who saved 20+ hours/week with our proven AI solutions.',
  },
  twitter: {
    title: 'AI Automation That Actually Works for Solo Founders',
    description: 'Save 20+ hours/week with proven AI automation. Join successful founders.',
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <EmailStrip />
      <SystemProof />
      <HowItWorks />
      <VisionTiles />
      <NewsletterSignup />
      <FounderStory />
      <MetricsStrip />
      <FinalCTA />
    </main>
  );
}