'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Improved animations with better timing
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-gradient-to-b from-zinc-950 to-zinc-900 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse animation-delay-4000" />
        
        {/* Adding subtle dot pattern for depth */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1rem 1rem, rgba(255, 255, 255, 0.1) 0.25rem, transparent 0.25rem)`,
          backgroundSize: '2rem 2rem'
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              Built in Sydney, Australia • Serving Globally
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white font-display tracking-tight leading-tight"
            {...fadeIn}
          >
            Scale Your Business with <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Smarter AI Systems</span> — Built for Service-Based Brands
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We help service businesses save time, close more leads, and simplify operations with personalised, easy-to-use AI tools — no developers or technical know-how needed.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-8 py-6 h-auto rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40 text-base font-medium"
            >
              Book Your Free AI Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm mt-3 sm:mt-0 text-zinc-400 sm:max-w-xs">
              Qualify for a complimentary $500 AI Audit and custom growth roadmap
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}