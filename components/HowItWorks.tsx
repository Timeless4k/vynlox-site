'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const steps = [
  'Book Free Strategy Call',
  'Get Offered the $500 Audit',
  'Receive a Custom Proposal',
  'We Build It (You Relax)',
  'Optimize with Monthly Retainer'
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function HowItWorks() {
  return (
    <section className="py-12 md:py-24 bg-zinc-50 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-zinc-900 font-display"
        >
          Here&apos;s How It Works
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-4 md:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={step} variants={item} className="relative">
              <Card className="p-6 text-center bg-white hover:shadow-lg transition-all duration-200 hover:scale-105">
                <div className="text-2xl font-bold text-zinc-400 mb-2">
                  {index + 1}
                </div>
                <p className="font-medium text-zinc-700">{step}</p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="h-6 w-6 text-zinc-400" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 