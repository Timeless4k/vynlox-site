'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center px-6 lg:px-8 gap-10 text-center z-10">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-4">
          AI for Service Businesses
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display mb-4 leading-tight">
          Save <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">10+ Hours</span> Per Week
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">With AI Automation</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-xl mx-auto mb-8 leading-relaxed">
          We help service businesses automate customer support, follow-ups, and admin tasks — so you can focus on growing your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 w-full max-w-xl">
          <a
            href="#pricing"
            className="group flex-1 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          >
            Book Your Free Strategy Call
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="group flex-1 inline-flex items-center justify-center px-8 py-4 rounded-xl border border-indigo-500/20 text-white text-lg font-semibold hover:bg-indigo-500/10 transition-all duration-300"
          >
            See How It Works
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="mt-8 text-zinc-400 text-sm flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Trusted by 70+ businesses
        </div>
      </div>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>
    </section>
  );
}