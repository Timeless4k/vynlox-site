'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              AI-Powered Business Automation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-display mb-6 leading-tight"
          >
            Save 10+ Hours Per Week
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              With AI Automation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12"
          >
            We help service businesses automate customer support, follow-ups, and admin tasks — so you can focus on growing your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40"
            >
              Book Your Free Strategy Call
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-xl border border-indigo-500/20 text-white text-lg font-semibold hover:bg-indigo-500/10 transition-all duration-300"
            >
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient orbs */}
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>
      </div>
    </section>
  );
}