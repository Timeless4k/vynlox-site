'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-white to-zinc-50 overflow-hidden">
      {/* Animated background shape */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-zinc-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zinc-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-zinc-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 text-zinc-800">
              Built in Australia. Serving Globally.
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 font-display"
            {...fadeIn}
          >
            Scale Smarter with AI — Without Hiring Developers
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-zinc-600 mb-8 max-w-3xl mx-auto"
            {...fadeIn}
          >
            Vynlox helps service businesses streamline operations, capture more leads, and unlock growth using AI, GPT tools, and automation.
          </motion.p>

          <motion.div 
            {...fadeIn} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-zinc-900 text-white hover:bg-zinc-800 px-8 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Book Your Free AI Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-zinc-500">
              Qualify for a $500 AI Audit that maps your personalized automation plan
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 