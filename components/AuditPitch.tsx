'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, FileText, Clock, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AuditPitch() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-300 mb-6">
              Get Started
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-display leading-tight">
              Your Personalized AI Plan
            </h2>
            
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Skip the guesswork. We'll show you exactly how to save time and grow your business with simple automation tools.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-zinc-800/50 p-2 rounded-lg mr-4 mt-1 border border-purple-900/20">
                  <Clock className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Free Strategy Session</h3>
                  <p className="text-zinc-300">A 60-minute chat about your business and how we can help you save time.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-zinc-800/50 p-2 rounded-lg mr-4 mt-1 border border-purple-900/20">
                  <FileText className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Your Custom Plan</h3>
                  <p className="text-zinc-300">Get 3-5 specific ways to automate your work and save time every day.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-zinc-800/50 p-2 rounded-lg mr-4 mt-1 border border-purple-900/20">
                  <FileText className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Simple Instructions</h3>
                  <p className="text-zinc-300">Clear video walkthrough and easy-to-follow guide for your team.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-zinc-800/50 p-2 rounded-lg mr-4 mt-1 border border-purple-900/20">
                  <CreditCard className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Money-Back Guarantee</h3>
                  <p className="text-zinc-300">Your audit fee goes toward your first project — no risk to you.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Pricing card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden border border-purple-900/20">
              <div className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <h3 className="text-2xl font-bold mb-2">AI Business Audit</h3>
                <p className="opacity-90">Your comprehensive automation roadmap</p>
              </div>
              
              <div className="p-8">
                <div className="flex justify-center items-baseline mb-8">
                  <span className="text-4xl font-bold text-white">$499</span>
                  <span className="text-zinc-300 ml-2">AUD</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {[
                    'Personalized 90-minute strategy session',
                    'Custom automation roadmap document',
                    'Video walkthrough of recommendations',
                    'Priority implementation scheduling',
                    'Full audit fee credited to future projects'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 rounded-xl transition-all duration-200 py-6 h-auto font-medium"
                  >
                    Book Your Free Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-center text-zinc-400 mt-2">
                    Only 3 audit spots available each month
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}